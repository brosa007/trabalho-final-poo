"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_2fr]">
      <div className="bg-muted hidden flex-col items-center justify-center p-10 lg:flex">
        <Image
          src="/logo_inf_finance.png"
          alt="INF Finance Logo"
          width={250}
          height={100}
        />
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="space-y-2 text-left">
            <h1 className="text-3xl font-bold">Bem vindo</h1>
            <p className="text-muted-foreground">
              Aqui você realiza todo seu controle financeiro e mantem sua vida
              de universitário organizada.
            </p>
          </div>

          <div className="grid gap-6">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Input id="email" type="email" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="font-medium">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="************"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full font-semibold">
                Entrar
              </Button>
            </form>
            <div className="mt-2 text-center text-sm">
              <p>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </p>
              <p className="text-muted-foreground mt-2">
                Não possui conta?{" "}
                <Link
                  href="#"
                  className="text-primary font-semibold hover:underline"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
