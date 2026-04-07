import { Listbox, Switch } from '@headlessui/react'
import { Check, ChevronsUpDown, Star } from 'lucide-react'
import { useState } from 'react'
import { standoutTags } from '../../data/mockData'

const meals = ['Breakfast', 'Lunch', 'Dinner']
const portions = ['Too Small', 'Just Right', 'Too Large']

function FeedbackForm() {
  const [selectedMeal, setSelectedMeal] = useState(meals[1])
  const [rating, setRating] = useState(4)
  const [portion, setPortion] = useState(portions[1])
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [pickedTags, setPickedTags] = useState(['Freshness', 'Taste'])

  const toggleTag = (tag) => {
    setPickedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    )
  }

  return (
    <section className="grid gap-5 xl:grid-cols-3">
      <article className="xl:col-span-2 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">Feedback Studio</p>
          <h3 className="text-2xl font-bold text-slate-900">Submit Structured Meal Feedback</h3>
          <p className="mt-1 text-sm text-slate-500">Desktop layout keeps fields visible and reduces form fatigue.</p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Meal Type</label>
              <Listbox value={selectedMeal} onChange={setSelectedMeal}>
                <div className="relative">
                  <Listbox.Button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    {selectedMeal}
                    <ChevronsUpDown size={16} className="absolute right-3 top-3.5 text-slate-400" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-20 mt-2 w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                    {meals.map((meal) => (
                      <Listbox.Option key={meal} value={meal}>
                        {({ selected, active }) => (
                          <div
                            className={`w-full cursor-pointer rounded-xl px-3 py-2 text-sm font-medium ${
                              active ? 'bg-slate-100 text-slate-900' : 'text-slate-700'
                            }`}
                          >
                            {selected ? <Check size={15} className="mr-2 inline text-emerald-600" /> : null}
                            {meal}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Portion Size</label>
              <div className="grid grid-cols-3 gap-2">
                {portions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPortion(item)}
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition md:text-sm ${
                      portion === item
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                        : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Quality Rating</label>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <button key={value} type="button" onClick={() => setRating(value)}>
                  <Star
                    size={24}
                    className={value <= rating ? 'fill-emerald-400 text-emerald-400' : 'text-slate-300'}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-500">{rating}.0 out of 5</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">What stood out?</label>
            <div className="flex flex-wrap gap-2">
              {standoutTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                    pickedTags.includes(tag)
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Additional Comments</label>
            <textarea
              rows={5}
              placeholder="Describe taste, hygiene, or consistency issues in detail..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-emerald-300 transition focus:ring"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3">
              <Switch
                checked={isAnonymous}
                onChange={setIsAnonymous}
                className={`${isAnonymous ? 'bg-emerald-500' : 'bg-slate-300'} relative inline-flex h-7 w-12 items-center rounded-full transition`}
              >
                <span
                  className={`${isAnonymous ? 'translate-x-7' : 'translate-x-1'} inline-block h-5 w-5 transform rounded-full bg-white transition`}
                />
              </Switch>
              <span className="text-sm font-medium text-slate-600">Submit anonymously</span>
            </div>

            <button
              type="submit"
              className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-900 shadow-[0_10px_24px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </article>

      <aside className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Live Summary</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">Session Preview</h3>

        <div className="mt-5 space-y-3 text-sm">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-500">Meal</p>
            <p className="text-base font-bold text-slate-900">{selectedMeal}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-500">Portion Mark</p>
            <p className="text-base font-bold text-slate-900">{portion}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-500">Selected Tags</p>
            <p className="text-base font-bold text-slate-900">{pickedTags.join(', ') || 'None'}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[linear-gradient(145deg,#052e16,#0f172a)] p-4 text-white">
          <p className="text-xs uppercase tracking-[0.12em] text-emerald-300">Insight</p>
          <p className="mt-2 text-sm text-slate-100">
            Teams that submit structured feedback weekly report a 21% drop in repeat food complaints.
          </p>
        </div>
      </aside>
    </section>
  )
}

export default FeedbackForm
