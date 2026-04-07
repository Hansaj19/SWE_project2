import { AlertTriangle, CheckCircle2, Dot, TrendingUp } from 'lucide-react'

const toneMap = {
  positive: {
    icon: CheckCircle2,
    pill: 'bg-emerald-100 text-emerald-700',
  },
  warning: {
    icon: AlertTriangle,
    pill: 'bg-amber-100 text-amber-700',
  },
  neutral: {
    icon: Dot,
    pill: 'bg-slate-100 text-slate-600',
  },
}

function DashboardCards({ metrics }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const currentTone = toneMap[metric.tone] ?? toneMap.neutral
        const Icon = currentTone.icon

        return (
          <article
            key={metric.label}
            className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${currentTone.pill}`}>
                <Icon size={14} className="inline" />
              </span>
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-900">{metric.value}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
              <TrendingUp size={15} />
              {metric.helper}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default DashboardCards
