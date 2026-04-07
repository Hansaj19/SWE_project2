import { useState } from 'react'
import { Eye, Mail, Lock, UserRound } from 'lucide-react'

function AuthPanel() {
  const [mode, setMode] = useState('login')

  return (
    <section className="grid gap-5 lg:grid-cols-5">
      <article className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] lg:col-span-3">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">Account Access</p>
          <h3 className="text-2xl font-bold text-slate-900">Login / Signup</h3>
          <p className="mt-1 text-sm text-slate-500">Desktop auth section adapted from the mobile flow with side-by-side spacing.</p>
        </div>

        <div className="mb-6 inline-flex rounded-2xl bg-slate-100 p-1.5">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-xl px-5 py-2 text-sm font-semibold ${
              mode === 'login' ? 'bg-emerald-500 text-slate-950' : 'text-slate-600'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`rounded-xl px-5 py-2 text-sm font-semibold ${
              mode === 'signup' ? 'bg-emerald-500 text-slate-950' : 'text-slate-600'
            }`}
          >
            Signup
          </button>
        </div>

        <form className="grid gap-4 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Institutional ID or Email</span>
            <span className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-slate-400">
              <Mail size={16} />
              <input className="w-full bg-transparent text-sm outline-none" placeholder="2024-STUD-089 or name@college.edu" />
            </span>
          </label>

          {mode === 'signup' ? (
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-700">Full Name</span>
              <span className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-slate-400">
                <UserRound size={16} />
                <input className="w-full bg-transparent text-sm outline-none" placeholder="Your full name" />
              </span>
            </label>
          ) : null}

          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
            <span className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-slate-400">
              <Lock size={16} />
              <input type="password" className="w-full bg-transparent text-sm outline-none" placeholder="Enter password" />
              <Eye size={16} />
            </span>
          </label>

          {mode === 'signup' ? (
            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-700">Confirm Password</span>
              <span className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-slate-400">
                <Lock size={16} />
                <input type="password" className="w-full bg-transparent text-sm outline-none" placeholder="Re-enter password" />
                <Eye size={16} />
              </span>
            </label>
          ) : null}

          <button
            type="button"
            className="md:col-span-2 mt-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_24px_rgba(16,185,129,0.35)] hover:bg-emerald-400"
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </article>

      <aside className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Quick Access</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">Role Paths</h3>

        <div className="mt-5 space-y-3 text-sm">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-500">Admin</p>
            <p className="text-slate-700">View system settings, user management, and policy controls.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-500">Mess Staff</p>
            <p className="text-slate-700">Upload menus, capture meals, and monitor portion compliance.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-500">Students</p>
            <p className="text-slate-700">Track meal quality, rate dishes, and review nutrition history.</p>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default AuthPanel
