export const weeklyTrend = [
  { day: 'Mon', quality: 4.2, portion: 82, rating: 4.1 },
  { day: 'Tue', quality: 4.4, portion: 86, rating: 4.3 },
  { day: 'Wed', quality: 4.0, portion: 78, rating: 3.9 },
  { day: 'Thu', quality: 4.6, portion: 90, rating: 4.5 },
  { day: 'Fri', quality: 4.5, portion: 88, rating: 4.4 },
  { day: 'Sat', quality: 4.8, portion: 93, rating: 4.7 },
  { day: 'Sun', quality: 4.7, portion: 91, rating: 4.6 },
]

export const dashboardMetrics = [
  {
    label: 'Average Quality',
    value: '4.6 / 5',
    helper: '+0.4 from last week',
    tone: 'positive',
  },
  {
    label: 'Portion Accuracy',
    value: '92%',
    helper: 'Within target range',
    tone: 'positive',
  },
  {
    label: 'Meals Audited',
    value: '148',
    helper: 'This week',
    tone: 'neutral',
  },
  {
    label: 'Pending Flags',
    value: '6',
    helper: 'Needs review by 6 PM',
    tone: 'warning',
  },
]

export const mealHistory = [
  {
    id: 'M-2401',
    meal: 'Lunch',
    dish: 'Dal Tadka + Jeera Rice',
    quality: 4.7,
    portion: 'Optimal',
    waste: 'Low',
    status: 'Approved',
    date: '07 Apr, 12:40 PM',
  },
  {
    id: 'M-2402',
    meal: 'Breakfast',
    dish: 'Idli + Sambar',
    quality: 4.3,
    portion: 'Slightly Low',
    waste: 'Moderate',
    status: 'Review',
    date: '07 Apr, 08:10 AM',
  },
  {
    id: 'M-2403',
    meal: 'Dinner',
    dish: 'Paneer Curry + Roti',
    quality: 4.8,
    portion: 'Optimal',
    waste: 'Low',
    status: 'Approved',
    date: '06 Apr, 08:05 PM',
  },
  {
    id: 'M-2404',
    meal: 'Lunch',
    dish: 'Veg Pulao + Curd',
    quality: 4.1,
    portion: 'High',
    waste: 'High',
    status: 'Action Required',
    date: '06 Apr, 12:35 PM',
  },
]

export const standoutTags = [
  'Freshness',
  'Taste',
  'Temperature',
  'Hygiene',
  'Presentation',
  'Portion Size',
]

export const analysisSnapshot = {
  qualityScore: 4.5,
  portionScore: 88,
  detectedItems: ['Rice', 'Dal', 'Mixed Veg', 'Salad'],
  flags: ['Protein could be higher', 'Slightly excess rice portion'],
  recommendation: 'Reduce rice by ~12% and add one protein side for better balance.',
}

export const profilesByRole = {
  admin: {
    role: 'Admin Profile',
    name: 'D. Trumph',
    subtitle: 'VIT Mess Admin',
    email: 'admin@foodlens.edu',
    phone: '+91 72815 89107',
    access: 'System settings, user controls, and audit log management',
    stats: [
      { label: 'Reports Reviewed', value: '45' },
      { label: 'Pending Actions', value: '6' },
      { label: 'Alert Response', value: '9 min' },
    ],
    preferences: ['Real-time quality alerts', '2-factor authentication enabled', 'Daily digest at 8:00 AM'],
  },
  staff: {
    role: 'Mess Staff Profile',
    name: 'Rajesh Kumar',
    subtitle: 'North Block Mess - Morning Shift',
    email: 'rajesh.kumar@foodlens.edu',
    phone: '+91 98765 43210',
    access: 'Menu upload, meal capture, and service-level updates',
    stats: [
      { label: 'Menus Uploaded', value: '18' },
      { label: 'Meals Captured', value: '82' },
      { label: 'Avg. Quality', value: '4.6' },
    ],
    preferences: ['Menu reminder notifications', 'Shift summary reports', 'Camera auto-enhancement enabled'],
  },
  student: {
    role: 'Student Profile',
    name: 'Alex Johnson',
    subtitle: 'Computer Science - Class of 2025',
    email: 'alex.j@college.edu',
    phone: '+1 (555) 012-3456',
    access: 'Feedback, meal history, and nutrition insights',
    stats: [
      { label: 'Current Streak', value: '24' },
      { label: 'Quality Score', value: '85%' },
      { label: 'Meals Tracked', value: '18' },
    ],
    preferences: ['Push notifications on', 'Weekly nutrition summary', 'Language: English'],
  },
}
