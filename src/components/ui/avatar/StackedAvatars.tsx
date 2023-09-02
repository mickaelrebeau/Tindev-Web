import { cn } from '@/lib/utils'
import { Avatar } from './Avatar'

type Props = {
  avatars: string[]
  countDisplayed?: number
  link: string
  size?: 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40
  textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '4xl'
  space: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const bgColors = [
  'bg-green-300',
  'bg-red-300',
  'bg-blue-300',
  'bg-yellow-300',
  'bg-purple-300',
]

export function StackedAvatars({
  avatars,
  countDisplayed = 3,
  link,
  size = 10,
  textSize,
  space,
}: Props) {
  let classSize: string, classSpace: string, classText: string

  switch (size) {
    case 10:
      classSize = 'w-10 h-10'
      break
    case 12:
      classSize = 'w-12 h-12'
      break
    case 14:
      classSize = 'w-14 h-14'
      break
    case 16:
      classSize = 'w-16 h-16'
      break
    case 20:
      classSize = 'w-20 h-20'
      break
    case 24:
      classSize = 'w-24 h-24'
      break
    case 28:
      classSize = 'w-28 h-28'
      break
    case 32:
      classSize = 'w-32 h-32'
      break
    case 36:
      classSize = 'w-36 h-36'
      break
    case 40:
      classSize = 'w-40 h-40'
      break
  }

  switch (space) {
    case 'xs':
      classSpace = '-space-x-20'
      break
    case 'sm':
      classSpace = '-space-x-16'
      break
    case 'md':
      classSpace = '-space-x-12'
      break
    case 'lg':
      classSpace = '-space-x-8'
      break
    case 'xl':
      classSpace = '-space-x-4'
      break
  }

  switch (textSize) {
    case 'xs':
      classText = 'text-xs'
      break
    case 'sm':
      classText = 'text-sm'
      break
    case 'lg':
      classText = 'text-lg'
      break
    case 'xl':
      classText = 'text-xl'
      break
    case '2xl':
      classText = 'text-2xl'
      break
    case '4xl':
      classText = 'text-4xl'
      break
    default:
      classText = 'text-base'
  }

  return (
    <div className={cn('flex mb-5', classSpace)}>
      {avatars.slice(0, countDisplayed).map((src, index) => (
        <Avatar
          key={index}
          src={src}
          //? No need later
          className={cn(classSize, bgColors[index % bgColors.length])}
        />
      ))}
      {avatars.length > countDisplayed && (
        <a
          className={cn(
            'flex items-center justify-center w-10 h-10 font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800',
            classSize,
            classText
          )}
          href={link}>
          +{avatars.length - countDisplayed}
        </a>
      )}
    </div>
  )
}
