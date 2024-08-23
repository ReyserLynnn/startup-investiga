/* eslint-disable import/no-named-as-default */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import { Home } from 'lucide-react';
import { pb } from '@/lib/pocketbase';

function GoogleButton() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      // Intentamos realizar la autenticación con OAuth2 usando el proveedor de Google
      pb.client.authStore.clear();
      const authData = await pb.client.collection('users').authWithOAuth2({
        provider: 'google',
      });

      const { meta } = authData;

      if (meta?.isNew) {
        const formData = new FormData();

        const response = await fetch(meta.avatarUrl);

        if (response.ok) {
          const file = await response.blob();
          formData.append('avatar', file);
        }

        formData.append('name', meta.name);
        formData.append('avatarUrl', meta.avatarUrl);
        await pb.client.collection('users').update(authData.record.id, formData);
      }
      console.log('Authentication Data:', authData);
    } catch (error: any) {
      console.error('Error during authentication:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="border border-slate-500 text-slate-900 hover:text-slate-900"
      size="lg"
      disabled={loading}
      onClick={handleGoogleLogin}
    >
      <Home className="mr-2 h-6 w-6" />
      Continue with Google
    </Button>
  );
}

export default GoogleButton;
