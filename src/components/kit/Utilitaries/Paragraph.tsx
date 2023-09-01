export function Paragraph({ content }: { content: string }) {
  return (
    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 text-justify my-3">
      {content}
    </p>
  )
}
