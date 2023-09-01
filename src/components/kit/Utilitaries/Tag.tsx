export function Tag({ content }: { content: string }) {
  return (
    <li className="text-sm md:text-base text-sky-600 border border-sky-600 rounded-full px-3 py-1 dark:text-zinc-200 dark:border-zinc-200 text-center list-none">
      {content}
    </li>
  )
}
