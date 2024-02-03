import Image from "next/image"

export default function HeaderNav({
    text
}: HeaderProps) {
    return (
        <div id="headerNav" className={`w-full h-auto bg-red-200`}>
            <div>
                <h2>{text}</h2>
            </div>
            <div>
                <Image
                    src="/UserInfo/profilePic.jpg"
                    height={50}
                    width={50}
                    alt="profile picture"
                    className={`rounded-full object-cover`} />
            </div>
        </div>
    )
}