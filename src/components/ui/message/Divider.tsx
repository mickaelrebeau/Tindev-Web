export const Divider = ({date = "Aujourd'hui"}) => {
    return (
        <>
            <div className={"flex items-center px-12"}>
                <div className={"w-full h-px bg-slate-800 "}/>


                <p className={"text-slate-300 text-sm mt-1 mx-6 min-w-fit"}>
                    {date}
                </p>

                <div className={"w-full h-px bg-slate-800"}/>
            </div>
        </>
    );
};