interface TypeSecondaryButton{
    text: string,
    type_button: 'button' | 'reset' | 'submit' | undefined
}

export function SecondaryButton({ text, type_button }: TypeSecondaryButton) {

    return (
        <button className="text-lg text-sky-600 w-fit px-3 py-2 m-4 rounded-md bg-zinc-50 border border-sky-600 hover:bg-sky-600 hover:text-zinc-50 dark:bg-zinc-950 hover:dark:text-zinc-950" type={type_button}>
            {text}
        </button>
    )
}