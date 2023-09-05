type Props = {
  message: string
}

export function ErrorMessage({ message }: Props) {
  return <div className="p-2 font-bold text-red-400">Error: {message}</div>
}
