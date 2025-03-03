import Link from "next/link"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
             <div className="bg-slate-800 min-h-[200px] w-[500px]">
        <Link href={'/signup'} className="underline">signup </Link>
        <Link href={'/login'} className="underline ml-5">Login </Link>
            {children}
        </div>
        </>
    )
}

export default layout