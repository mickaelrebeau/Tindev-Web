import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{ date?: string }>
export const TheirMessage = ({children, date = "02 aout 2023 22:22"}: Props) => {
    return (
        <>
            <div className={"w-full flex justify-start "}>
                <div className={"max-w-[45%]"}>
                    <p className={"rounded-bl-none text-slate-800 rounded-2xl bg-purple-300 py-2 px-4 border-2 border-purple-600 "}>
                        {children}
                    </p>
                    <p className={"text-start text-slate-300 text-sm mt-1"}>
                        {date}
                    </p>
                </div>
            </div>
        </>
    );
};