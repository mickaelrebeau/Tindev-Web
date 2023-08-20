interface TypePrimaryButton {
    text: string,
    type_button: 'button' | 'reset' | 'submit' | undefined
}

export function PrimaryButton({ text, type_button }: TypePrimaryButton) {

    return (
        <button className="text-lg text-zinc-50 dark:text-zinc-950 bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 w-fit px-4 py-2  m-4 rounded-md hover:contrast-75 hover:dark:contrast-150" type={type_button}>{text}</button>
    )
}