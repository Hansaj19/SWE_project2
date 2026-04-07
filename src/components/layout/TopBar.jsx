import { Bell, Search } from 'lucide-react'

function TopBar({ title, subtitle }) {
  return (
    <header className="rounded-[26px] border border-white/70 bg-white/90 px-6 py-5 shadow-[0_12px_28px_rgba(15,23,42,0.07)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Mess Food Portion and Quality Analyzer</p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <label className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 lg:flex">
            <Search size={17} />
            <input
              type="search"
              placeholder="Search meals, reports, users"
              className="w-56 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>
          <button
            type="button"
            className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-400" />
          </button>
          <div className="rounded-2xl bg-[#d4fce5] px-3 py-2 text-sm font-semibold text-emerald-700">Admin Mode</div>
        </div>
      </div>
    </header>
  )
}

export default TopBar
