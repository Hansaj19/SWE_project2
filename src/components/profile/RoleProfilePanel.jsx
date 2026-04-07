import { BadgeCheck, Mail, Phone, Shield, UserRound } from 'lucide-react'

function RoleProfilePanel({ profile }) {
  return (
    <section className="grid gap-5 lg:grid-cols-5">
      <article className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] lg:col-span-3">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
              <UserRound size={28} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">{profile.role}</p>
              <h3 className="text-3xl font-bold text-slate-900">{profile.name}</h3>
              <p className="text-sm text-slate-500">{profile.subtitle}</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Active</span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {profile.stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Contact and Access</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <p className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2"><Mail size={15} /> {profile.email}</p>
            <p className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2"><Phone size={15} /> {profile.phone}</p>
            <p className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 md:col-span-2"><Shield size={15} /> {profile.access}</p>
          </div>
        </div>
      </article>

      <aside className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)] lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Preferences</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">Profile Settings</h3>

        <div className="mt-5 space-y-3 text-sm">
          {profile.preferences.map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-3 text-slate-700">
              <BadgeCheck size={14} className="mr-2 inline text-emerald-600" />
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default RoleProfilePanel
