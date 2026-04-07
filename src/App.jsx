import { useMemo, useState } from 'react'
import AuthPanel from './components/auth/AuthPanel'
import DashboardPanel from './components/dashboard/DashboardPanel'
import FeedbackForm from './components/feedback/FeedbackForm'
import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import RoleProfilePanel from './components/profile/RoleProfilePanel'
import UploadAnalysisPanel from './components/upload/UploadAnalysisPanel'
import { profilesByRole } from './data/mockData'

const viewMeta = {
  dashboard: {
    title: 'Operations Dashboard',
    subtitle:
      'Desktop-friendly analytics combining quality trends, portion consistency, and meal history.',
  },
  quality: {
    title: 'Photo Quality Check',
    subtitle:
      'Split-screen workflow for uploading meal images and reviewing AI analysis in one glance.',
  },
  feedback: {
    title: 'Feedback and Rating',
    subtitle:
      'Structured, multi-column form for faster submissions and higher quality comments.',
  },
  compliance: {
    title: 'Compliance Snapshot',
    subtitle:
      'Section reserved for audit policies, approvals, and governance metrics.',
  },
  auth: {
    title: 'Authentication',
    subtitle: 'Desktop login and signup experience inspired by your mobile auth screens.',
  },
  adminProfile: {
    title: 'Admin Profile',
    subtitle: 'Admin identity, access controls, and notification preferences.',
  },
  staffProfile: {
    title: 'Mess Staff Profile',
    subtitle: 'Staff profile details, meal operations metrics, and shift settings.',
  },
  studentProfile: {
    title: 'Student Profile',
    subtitle: 'Student preferences, quality stats, and account profile settings.',
  },
}

const viewOptions = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'quality', label: 'Quality Check' },
  { id: 'feedback', label: 'Feedback Desk' },
  { id: 'auth', label: 'Login / Signup' },
  { id: 'adminProfile', label: 'Admin Profile' },
  { id: 'staffProfile', label: 'Mess Staff Profile' },
  { id: 'studentProfile', label: 'Student Profile' },
  { id: 'compliance', label: 'Compliance' },
]

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  const content = useMemo(() => {
    if (activeView === 'dashboard') return <DashboardPanel />
    if (activeView === 'quality') return <UploadAnalysisPanel />
    if (activeView === 'feedback') return <FeedbackForm />
    if (activeView === 'auth') return <AuthPanel />
    if (activeView === 'adminProfile') return <RoleProfilePanel profile={profilesByRole.admin} />
    if (activeView === 'staffProfile') return <RoleProfilePanel profile={profilesByRole.staff} />
    if (activeView === 'studentProfile') return <RoleProfilePanel profile={profilesByRole.student} />

    return (
      <section className="rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <h3 className="text-2xl font-bold text-slate-900">Compliance Workspace</h3>
        <p className="mt-3 text-slate-500">
          Use this area for action logs, inspection trails, and retention policies.
        </p>
      </section>
    )
  }, [activeView])

  return (
    <div className="min-h-screen bg-[#dfe8f2] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full max-w-[1280px] gap-6">
        <Sidebar activeView={activeView} onChangeView={setActiveView} />

        <main className="min-w-0 flex-1 space-y-5">
          <TopBar
            title={viewMeta[activeView].title}
            subtitle={viewMeta[activeView].subtitle}
          />
          <section className="rounded-2xl border border-white/70 bg-white/80 p-2 shadow-[0_10px_22px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap gap-2">
              {viewOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveView(option.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    option.id === activeView
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>
          {content}
        </main>
      </div>
    </div>
  )
}

export default App
