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
      <div className={'flex items-center px-[clamp(0.5rem,_2.5vw,_2rem)]'}>
        <div className={'h-px w-full bg-slate-800 '} />

        <p className={'mx-6 mt-1 min-w-fit text-sm text-slate-300'}>{text}</p>

        <div className={'h-px w-full bg-slate-800'} />
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
