import DashboardCards from './DashboardCards'
import MealHistoryTable from './MealHistoryTable'
import WeeklyTrendChart from './WeeklyTrendChart'
import { dashboardMetrics, mealHistory, weeklyTrend } from '../../data/mockData'

function DashboardPanel() {
  return (
    <section className="space-y-5">
      <DashboardCards metrics={dashboardMetrics} />
      <WeeklyTrendChart data={weeklyTrend} />
      <MealHistoryTable rows={mealHistory} />
    </section>
  )
}

export default DashboardPanel
