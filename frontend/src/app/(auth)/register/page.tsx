"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import GoogleButton from "@/components/pages/auth/GoogleButton";
import "animate.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MarqueeDemo } from "@/components/pages/auth/Marquee";
import StepperDemo from "@/components/pages/auth/StepperRegister";

export default function RegisterPage() {
  return (
    <section id="loginPage" className="bg-white h-screen w-screen">
      <div className="container mx-auto flex items-center justify-center h-screen px-6">
        <div className="flex min-w-full justify-center items-center">
          <div className="flex flex-col justify-center px-4 py-6 mx-auto max-w-md ">
            <h3 className="text-xl font-semibold mb-2">
              ¡Crea tu cuenta gratis!
            </h3>
            <p className="text-muted-foreground text-justify mb-6 text-sm">
              Registrate y explora nuevas fronteras en la investigación
              científica.
            </p>

            <StepperDemo />

            <li className="flex relative flex-col items-center py-6 w-full">
              <div className="absolute top-[42px] left-122 min-w-full h-px bg-gradient-to-r from-transparent via-gray-600/40 via-10% to-gray-600/5"></div>
            </li>

            <div className="w-full flex justify-center">
              <Link
                className={`${buttonVariants({
                  variant: "ghost",
                })} px-0 text-xs hover:no-underline hover:bg-transparent`}
                href="/login"
              >
                ¿Ya tienes una cuenta?
              </Link>

              <Link
                className={`${buttonVariants({
                  variant: "link",
                })} text-xs`}
                href="/login "
              >
                Iniciar sesión
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block max-w-xl mx-auto">
            <div className="absolute bg-transparent top-[-100px] left-44 z-10">
              <Link href="/" prefetch={false}>
                <Image
                  src="logo.svg"
                  width="0"
                  height="0"
                  alt="Logo de inveztiga"
                  className="lg:w-50 xl:w-52 w-48 mx-auto h-auto"
                />
                <span className="sr-only">Inveztiga</span>
              </Link>
            </div>
            <MarqueeDemo></MarqueeDemo>
          </div>
        </div>
      </div>
    </section>
  );
}
