import {
  formatDate,
  getDayOfWeek,
  isSameDay,
  isYesterday,
} from '@/lib/methods/date'

type DividerProps = {
  text?: string
}

export const Divider = ({ text = '' }: DividerProps) => {
  return (
    <>
      <div className={'flex items-center px-12'}>
        <div className={'w-full h-px bg-slate-800 '} />

        <p className={'text-slate-300 text-sm mt-1 mx-6 min-w-fit'}>{text}</p>

        <div className={'w-full h-px bg-slate-800'} />
      </div>
    </>
  )
}

type DividerAutoProps = {
  date: Date
}
export function DividerAuto({ date }: DividerAutoProps) {
  if (isSameDay(date, new Date())) {
    return <Divider text="Aujourd'hui 🌞" />
  }

  if (isYesterday(date)) {
    return <Divider text="Hier" />
  }

  const dayName = getDayOfWeek(date)
  if (dayName) {
    return <Divider text={dayName} />
  }

  return <Divider text={formatDate(date)} />
}
