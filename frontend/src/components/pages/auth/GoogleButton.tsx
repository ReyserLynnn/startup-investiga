/* eslint-disable import/no-named-as-default */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";
import GoogleIcon from "@/components/icons/GoogleIcon";

interface GoogleButtonProps {
  classname?: string;
}

export function GoogleButton({ classname }: GoogleButtonProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      pb.client.authStore.clear();
      const authData = await pb.client.collection("users").authWithOAuth2({
        provider: "google",
      });

      const { record, token } = authData;
      record.token = token;
      Cookies.set("pb_auth", pb.client.authStore.exportToCookie());

      const { meta } = authData;
      if (meta?.isNew) {
        const formData = new FormData();

        const response = await fetch(meta.avatarUrl);

        if (response.ok) {
          const file = await response.blob();
          formData.append("avatar", file);
        }

        formData.append("name", meta.name);
        await pb.client
          .collection("users")
          .update(authData.record.id, formData);
      }

      localStorage.removeItem("pocketbase_auth");
      route.replace("/");
      route.refresh();
    } catch (error: any) {
      console.error("Error during authentication:", error.message);
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
      <GoogleIcon className="w-auto h-5" />
      Continuar con google
    </Button>
  );
}

export default GoogleButton;
