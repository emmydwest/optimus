"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const isSignUp = mode === "sign-up"
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check data-icon="inline-start" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl">You&apos;re all set</h1>
          <p className="text-muted-foreground">This frontend demo is ready to explore.</p>
        </div>
        <Button asChild className="rounded-full px-6">
          <Link href="/">Back to Ejetar <ArrowRight data-icon="inline-end" /></Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 text-center">
        <Link href="/" className="font-display text-2xl tracking-tight">Ejetar</Link>
        <h1 className="font-display text-4xl tracking-tight">{isSignUp ? "Create your account" : "Welcome back"}</h1>
        <p className="text-muted-foreground">{isSignUp ? "Start building with a little more lift." : "Sign in to continue to your workspace."}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {isSignUp && (
          <label className="flex flex-col gap-2 text-sm font-medium">
            Name
            <div className="relative"><User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input required placeholder="Your name" className="h-12 rounded-2xl pl-11" /></div>
          </label>
        )}
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <div className="relative"><Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input required type="email" placeholder="you@example.com" className="h-12 rounded-2xl pl-11" /></div>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Password
          <div className="relative"><Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input required type="password" minLength={6} placeholder="••••••••" className="h-12 rounded-2xl pl-11" /></div>
        </label>
        <Button type="submit" className="h-12 rounded-full text-base">{isSignUp ? "Create account" : "Sign in"} <ArrowRight data-icon="inline-end" /></Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        {isSignUp ? "Already have an account? " : "New to Ejetar? "}
        <Link className="font-medium text-foreground underline underline-offset-4" href={isSignUp ? "/sign-in" : "/sign-up"}>{isSignUp ? "Sign in" : "Create an account"}</Link>
      </p>
    </div>
  )
}
