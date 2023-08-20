interface TypeTertiaryButton {
    text: string,
    type_button: 'button' | 'reset' | 'submit' | undefined
}

export function TertiaryButton({ text, type_button }: TypeTertiaryButton) {

    return (
        <button className="text-lg text-zinc-950 w-fit border border-zinc-950 rounded-md px-3 py-2 m-4 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-50 hover:dark:bg-zinc-50 hover:dark:text-zinc-950" type={type_button}>{text}</button>
    )
}