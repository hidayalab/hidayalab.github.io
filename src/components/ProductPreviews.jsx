import { Bell } from 'lucide-react'

/**
 * ProductPreviews — small UI "snippet" mockups shown on each product card.
 * Built in JSX so they stay crisp and adapt to light/dark themes.
 */

const frame = 'relative w-full'

const innerCard =
  'rounded-2xl bg-white dark:bg-ink-800 shadow-[0_14px_36px_-16px_rgba(20,40,30,0.28)]'

export function AmanaPreview() {
  return (
    <div className={frame}>
      <div className={`${innerCard} relative p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">Qard Hasan</span>
          <span className="chip bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300 !text-[10px] !px-2 !py-0.5">
            0% interest
          </span>
        </div>
        <div className="text-3xl font-display font-extrabold text-ink-900 dark:text-white mb-4">
          ৳ 50,000
        </div>
        <div className="h-2 w-full rounded-full bg-ink-100 dark:bg-ink-700 overflow-hidden mb-2">
          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary-500 to-primary-700" />
        </div>
        <div className="flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>Repaid</span>
          <span className="font-semibold text-ink-700 dark:text-ink-200">13 / 20</span>
        </div>
      </div>
    </div>
  )
}

export function ErpPreview() {
  const bars = [40, 58, 46, 86, 54, 70]
  return (
    <div className={frame}>
      <div className={`${innerCard} relative p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">Cash flow</span>
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-300">+18%</span>
        </div>
        <div className="flex items-end gap-2 h-20 mb-4">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-md ${
                i === 3
                  ? 'bg-primary-700 dark:bg-primary-500'
                  : i === 5
                    ? 'bg-gold-400'
                    : 'bg-primary-300/70 dark:bg-primary-500/30'
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-[#efe9da] dark:bg-ink-700/60 p-2.5">
            <div className="text-[10px] text-ink-500 dark:text-ink-400">Stock</div>
            <div className="text-sm font-bold text-ink-900 dark:text-white">1,284</div>
          </div>
          <div className="rounded-lg bg-[#efe9da] dark:bg-ink-700/60 p-2.5">
            <div className="text-[10px] text-ink-500 dark:text-ink-400">Due</div>
            <div className="text-sm font-bold text-ink-900 dark:text-white">৳ 92k</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SchoolPreview() {
  const rows = [
    { name: 'Class 5 · A', value: '38 / 40', pct: 95 },
    { name: 'Class 6 · B', value: '41 / 42', pct: 98 },
    { name: 'Class 7 · A', value: '35 / 39', pct: 90 },
  ]
  return (
    <div className={frame}>
      <div className={`${innerCard} relative p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">Attendance · Today</span>
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-300">94%</span>
        </div>
        <div className="space-y-2.5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center gap-3">
              <span className="text-[11px] text-ink-600 dark:text-ink-300 w-20 flex-shrink-0">
                {r.name}
              </span>
              <div className="h-1.5 flex-1 rounded-full bg-ink-100 dark:bg-ink-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-primary-600"
                  style={{ width: `${r.pct}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold text-ink-700 dark:text-ink-200 w-12 text-right">
                {r.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HifzPreview() {
  return (
    <div className={frame}>
      <div className={`${innerCard} p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">Today&apos;s revision</span>
          <Bell className="h-4 w-4 text-gold-500" />
        </div>
        <div className="rounded-xl bg-gradient-to-br from-primary-800 to-primary-950 p-4 shadow-soft mb-4">
          <p className="font-arabic text-2xl text-gold-200 text-center leading-relaxed mb-2">
            تَبَارَكَ الَّذِي
          </p>
          <span className="text-[11px] text-primary-200/80">Al-Mulk · v1</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-ink-500 dark:text-ink-400">3 to revisit</span>
          <span className="chip bg-primary-700 text-primary-50 !text-[10px] !px-3 !py-1">Remind me</span>
        </div>
      </div>
    </div>
  )
}
