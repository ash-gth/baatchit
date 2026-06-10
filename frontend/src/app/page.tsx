"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1117] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#05B084]/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#015A84]/10 blur-[150px]" />

      </div>

      {/* Brand */}
      <div className="relative z-10 px-8 py-8">

        <Link
          href="/"
          className="inline-flex items-center gap-3"
        >

          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#05B084] to-[#015A84] flex items-center justify-center">

            <MessageCircle size={20} />

          </div>

          <span className="font-bold text-xl">
            Baatchit
          </span>

        </Link>

      </div>

      <section className="relative z-10 flex min-h-[calc(100vh-90px)] items-center justify-center px-6">

        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="hidden lg:block">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#BADFCD] text-sm mb-8">
              Real-Time Communication Platform
            </span>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              Conversations

              <span className="block bg-gradient-to-r from-[#05B084] to-[#015A84] bg-clip-text text-transparent">
                Reimagined
              </span>

            </h1>

            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Connect instantly with friends, teams, and communities through a premium real-time messaging experience.
            </p>

            {/* Chat Preview */}
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">

              <div className="flex items-center gap-3 border-b border-white/10 pb-5">

                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#05B084] to-[#015A84]" />

                <div>

                  <h3 className="font-semibold">
                    Rahul Sharma
                  </h3>

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-[#05B084]" />

                    <span className="text-sm text-[#05B084]">
                      Online
                    </span>

                  </div>

                </div>

              </div>

              <div className="space-y-4 py-6">

                <div className="max-w-[75%] rounded-2xl bg-white/10 px-4 py-3">
                  Hey! How's Baatchit going?
                </div>

                <div className="ml-auto max-w-[75%] rounded-2xl bg-gradient-to-r from-[#05B084] to-[#018F9A] px-4 py-3">
                  Building the first version 🚀
                </div>

                <div className="max-w-[75%] rounded-2xl bg-white/10 px-4 py-3">
                  Looks amazing already!
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-full max-w-md">

              <div className="rounded-[32px] border border-white/10 bg-[#18212D]/80 backdrop-blur-3xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

                <div className="flex justify-center mb-8">

                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#05B084] to-[#015A84] flex items-center justify-center shadow-[0_0_40px_rgba(5,176,132,0.3)]">

                    <MessageCircle size={30} />

                  </div>

                </div>

                <div className="text-center mb-8">

                  <h2 className="text-3xl font-bold mb-2">
                    Welcome Back
                  </h2>

                  <p className="text-gray-400">
                    Sign in to continue your conversations
                  </p>

                </div>

                <form className="space-y-5">

                  <div>

                    <label className="block text-sm mb-2 text-gray-300">
                      Email
                    </label>

                    <div className="relative">

                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-[#111827] pl-12 pr-4 py-3 outline-none focus:border-[#05B084] focus:ring-4 focus:ring-[#05B084]/20"
                      />

                    </div>

                  </div>

                  <div>

                    <label className="block text-sm mb-2 text-gray-300">
                      Password
                    </label>

                    <div className="relative">

                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-white/10 bg-[#111827] pl-12 pr-12 py-3 outline-none focus:border-[#05B084] focus:ring-4 focus:ring-[#05B084]/20"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>

                    </div>

                  </div>

                  <div className="flex items-center justify-between text-sm">

                    <label className="flex items-center gap-2 text-gray-400">

                      <input
                        type="checkbox"
                        className="accent-[#05B084]"
                      />

                      Remember me

                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-[#05B084]"
                    >
                      Forgot Password?
                    </Link>

                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl py-3 bg-gradient-to-r from-[#05B084] to-[#018F9A] font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_40px_rgba(5,176,132,0.25)]"
                  >

                    Sign In

                    <ArrowRight size={18} />

                  </button>

                </form>

                <div className="my-8 flex items-center gap-4">

                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-gray-500 text-sm">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-white/10" />

                </div>

                <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 hover:bg-white/10 transition">
                  Continue with Google
                </button>

                <p className="text-center text-gray-400 mt-8">

                  Don't have an account?{" "}

                  <Link
                    href="/register"
                    className="text-[#05B084] font-medium"
                  >
                    Sign Up
                  </Link>

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}