export function SecondaryTitle({ title }: { title: string }) {
  return (
    <h2
      className="text-2xl md:text-3xl lg:text-4xl
        6xl text-zinc-950 dark:text-zinc-50">
      {title}
    </h2>
  )
}
