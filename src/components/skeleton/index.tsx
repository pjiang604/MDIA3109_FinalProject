import Link from "next/link"

export default function Skeleton() {
    return (
        <Link href='logIn'>
            <div className={`h-20 bg-black flex justify-center items-center`}>
                <p className={`text-white`}>Log in to play music!</p>
            </div>

        </Link>
    )
}