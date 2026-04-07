import {
  Camera,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  MessageSquareText,
  ShieldCheck,
  UserCog,
  UsersRound,
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'quality', label: 'Quality Check', icon: Camera },
  { id: 'feedback', label: 'Feedback Desk', icon: MessageSquareText },
  { id: 'auth', label: 'Login / Signup', icon: LogIn },
  { id: 'adminProfile', label: 'Admin Profile', icon: UserCog },
  { id: 'staffProfile', label: 'Mess Staff Profile', icon: UsersRound },
  { id: 'studentProfile', label: 'Student Profile', icon: GraduationCap },
  { id: 'compliance', label: 'Compliance', icon: ClipboardCheck },
]

function Sidebar({ activeView, onChangeView }) {
  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-4rem)] w-72 shrink-0 flex-col rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_18px_40px_rgba(13,27,37,0.08)] backdrop-blur xl:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1de36b] text-slate-950 shadow-[0_8px_20px_rgba(29,227,107,0.35)]">
          <ShieldCheck size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">FoodLens</p>
          <h1 className="text-xl font-bold text-slate-900">Desktop Console</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.id === activeView
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChangeView(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                  ? 'bg-slate-900 text-white shadow-[0_10px_20px_rgba(15,23,42,0.25)]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-auto rounded-2xl bg-[linear-gradient(145deg,#0f172a,#14532d)] p-4 text-white">
        <p className="text-xs uppercase tracking-[0.15em] text-emerald-300">System Health</p>
        <p className="mt-2 text-2xl font-bold">98.4%</p>
        <p className="mt-1 text-sm text-slate-200">All quality scanners active</p>
      </div>
    </aside>
  )
}

export default Sidebar
