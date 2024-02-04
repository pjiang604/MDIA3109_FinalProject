import Image from "next/image"
import { useRouter } from "next/router"

export default function HeaderNav({
    text,
    type
}: HeaderProps) {

    const router = useRouter()

    return (
        <div id="headerNav" className={`w-full h-auto `}>
            <div className={`w-full border-b-2 border-gray pb-0.5 flex flex-row justify-between gap-6 items-center`}>
                {
                    type === "simple-backBtn" ? //need to add the different types of headers
                        <div onClick={() => router.back()}>
                            <Image
                                src="/Navigation/back/back.png"
                                height={30}
                                width={30}
                                alt="back button"
                                className={`object-contain`}

                            />
                        </div>
                        :
                        null
                }
                <div className={`flex flex-1`}>
                    <h2>{text}</h2>
                </div>
                {
                    type === "profile" ?
                        <div>
                            <Image
                                src="/UserInfo/profilePic.jpg"
                                height={35}
                                width={35}
                                alt="profile picture"
                                className={`rounded-full object-cover`} />
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}