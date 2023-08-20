export function FirstTitle({ title }: { title: string }) {

    return (
        <h1 className="text-3xl md:text-5xl lg:text-7xl dark:text-zinc-50">{title}</h1>
    )
}