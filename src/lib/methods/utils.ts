import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assertsNotNull<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) {
    throw new Error(`${value} is null`)
  }
}
