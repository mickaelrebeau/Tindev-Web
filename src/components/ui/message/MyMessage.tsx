import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ date?: string }>

export const MyMessage = ({ children, date = '01 aout 2023 22:22' }: Props) => {
  return (
    <div className={'w-full flex justify-end '}>
      <div className={'max-w-[45%]'}>
        <p
          className={
            'rounded-br-none text-slate-800 rounded-2xl bg-indigo-300 py-2 px-4 border-2 border-indigo-600'
          }>
          {children}
        </p>
        <p className={'text-end text-slate-300 text-sm mt-1'}>{date}</p>
      </div>
    </div>
  )
}
