function getStatusClass(status) {
  if (status === 'Approved') return 'bg-emerald-100 text-emerald-700'
  if (status === 'Review') return 'bg-amber-100 text-amber-700'
  return 'bg-rose-100 text-rose-700'
}

function MealHistoryTable({ rows }) {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Meal History</p>
          <h3 className="text-2xl font-bold text-slate-900">Recent Reports</h3>
        </div>
        <button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.12em] text-slate-400">
              <th className="px-3 py-2">Meal</th>
              <th className="px-3 py-2">Dish</th>
              <th className="px-3 py-2">Quality</th>
              <th className="px-3 py-2">Portion</th>
              <th className="px-3 py-2">Waste</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Logged At</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="rounded-2xl bg-slate-50 text-sm text-slate-700">
                <td className="rounded-l-2xl px-3 py-3 font-semibold text-slate-900">{row.meal}</td>
                <td className="px-3 py-3">{row.dish}</td>
                <td className="px-3 py-3 font-semibold text-slate-900">{row.quality}</td>
                <td className="px-3 py-3">{row.portion}</td>
                <td className="px-3 py-3">{row.waste}</td>
                <td className="px-3 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="rounded-r-2xl px-3 py-3">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MealHistoryTable
