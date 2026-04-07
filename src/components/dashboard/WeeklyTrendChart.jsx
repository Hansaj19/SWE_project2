import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function WeeklyTrendChart({ data }) {
  return (
    <section className="grid gap-4 xl:grid-cols-5">
      <article className="xl:col-span-3 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">Quality Trend</p>
            <h3 className="text-2xl font-bold text-slate-900">Weekly Performance</h3>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Last 7 days</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="lineStroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14d45c" stopOpacity={1} />
                  <stop offset="100%" stopColor="#14d45c" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 6" stroke="#e4e9f1" />
              <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis domain={[3.6, 5]} stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip
                cursor={{ stroke: '#14d45c', strokeWidth: 1 }}
                contentStyle={{ borderRadius: 14, borderColor: '#dcfce7' }}
              />
              <Line
                type="monotone"
                dataKey="quality"
                stroke="url(#lineStroke)"
                strokeWidth={4}
                dot={{ fill: '#14d45c', stroke: '#ffffff', strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="xl:col-span-2 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Portion Consistency</p>
        <h3 className="mb-4 text-2xl font-bold text-slate-900">Serving Accuracy</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="4 6" stroke="#e4e9f1" vertical={false} />
              <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis domain={[60, 100]} stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 14, borderColor: '#dbeafe' }} />
              <Bar dataKey="portion" radius={[10, 10, 4, 4]} fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  )
}

export default WeeklyTrendChart
