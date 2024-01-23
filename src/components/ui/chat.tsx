"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ScrollArea } from "./scroll-area";

import { useChat } from "ai/react";

import { IoSend } from "react-icons/io5";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle className=" flex justify-center ">Maximus</CardTitle>
        <CardDescription className="flex justify-center">Ola meu nome e Maximus to aqui para tirar suas duvidas</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-2 text-slate-600 text-sm mb-4"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/diego3g.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://cdn.discordapp.com/attachments/919389042657861637/1199008485577330739/Leonardo_Diffusion_XL_create_an_avatar_for_an_AI_assistant_1.jpg?ex=65c0faab&is=65ae85ab&hm=b17f7ea4835df9cf6e3d5f37c80868ad18eb92a62f92ec9b9e0594628824d30f&" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "usuario" : "AI"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className=" w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="ola como posso ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit"><IoSend /></Button>
        </form>
      </CardFooter>
    </Card>
  );
}
