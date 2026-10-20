import { AuthForm } from "@/components/auth/auth-form"

export default function SignUpPage() {
  return <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12"><div className="w-full max-w-md rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-2xl shadow-primary/5 backdrop-blur sm:p-10"><AuthForm mode="sign-up" /></div></main>
}
