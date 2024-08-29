import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import { useState } from 'react';

import GoogleIcon from '@/components/icons/GoogleIcon';
import pb from '@/lib/pocketbase';
import { updateDataUser } from '@/lib/updateUser';
import { UpdateDataFormUser } from '@/types/pb';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface GoogleButtonProps {
  classname?: string;
  formDataRegister?: UpdateDataFormUser | undefined;
}

export default function GoogleButton({
  classname,
  formDataRegister,
}: GoogleButtonProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      pb.client.authStore.clear();

      const authData = await pb.client
        .collection('users')
        .authWithOAuth2({ provider: 'google' });

      const { meta, record, token } = authData;
      record.token = token;
      Cookies.set('pb_auth', pb.client.authStore.exportToCookie());

      if (meta?.isNew) {
        try {
          const formData = new FormData();
          const response = await fetch(meta.avatarUrl);

          if (response.ok) {
            const file = await response.blob();
            formData.append('avatar', file);
          }

          formData.append('id', record.id);
          formData.append('name', meta.name);
          await pb.client.collection('users').update(record.id, formData);
        } catch (error) {
          console.error('Error al actualizar el avatar del usuario:', error);
        }

        if (!formDataRegister) {
          route.replace('/completar-registro');
        } else {
          try {
            await updateDataUser(formDataRegister);
          } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
          }
        }
      } else {
        route.replace('/');
        route.refresh();
      }

      localStorage.removeItem('pocketbase_auth');
    } catch (error: any) {
      console.error('Error al autenticar con Boton Google:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      className={`${classname} shadow-sm shadow-gray-200 text-slate-600 hover:text-slate-900 gap-3 hover:bg-gray-50`}
      disabled={loading}
      onClick={handleGoogleLogin}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <GoogleIcon className="w-auto h-5" />
      )}
      Continuar con google
    </Button>
  );
}
