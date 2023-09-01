import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assertsNotNull<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) {
    throw new Error(`${value} is null`)
  }
}
