export function Tag({ content, style }: { content: string; style: any }) {
  return (
    <li
      className="text-sm md:text-base text-sky-600 border border-sky-600 rounded-full px-3 py-1 dark:text-zinc-200 dark:border-zinc-200 text-center list-none"
      style={{
        ...style,
      }}>
      {content}
    </li>
  )
}
