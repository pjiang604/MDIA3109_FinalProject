import Image from "next/image"
import { useRouter } from "next/router"

enum HeaderType {
    SBack = "simple-backBtn",
    SMusic = "simple-music",
    FBPlay = "full-backPlay",
    Profile = "profile",
}

export default function HeaderNav({
    text,
    type
}: HeaderProps) {

    const router = useRouter()

    return (
        <div id="headerNav" className={`w-full h-auto `}>
            <div className={`w-full border-b-2 border-gray pb-0.5 flex flex-row justify-between gap-6 items-center`}>
                {
                    type === HeaderType.SBack ||
                        type === HeaderType.SMusic ||
                        type === HeaderType.FBPlay ?
                        <div onClick={() => router.back()}>
                            <Image
                                src="/Navigation/back/back.png"
                                height={30}
                                width={30}
                                alt="back button"
                                className={`object-contain`}
                                priority
                            />
                        </div>
                        :
                        null
                }
                <div className={`flex flex-1`}>
                    {
                        type === HeaderType.Profile ?
                            <h1>{text}</h1>
                            :
                            <h2 className={`${type === "simple-music" ? `text-white text-center w-full` : ``}`}>{text}</h2>
                    }

                </div>
                {
                    type === HeaderType.Profile ?
                        <div>
                            <Image
                                src="/UserInfo/profilePic.jpg"
                                height={35}
                                width={35}
                                alt="profile picture"
                                className={`rounded-full object-cover`} />
                        </div>
                        :
                        <>
                            {
                                type === HeaderType.FBPlay ?
                                    <div className={`flex flex-row items-center gap-2`}>
                                        <Image
                                            src={"/MusicPlayback/shuffle/shuffle_off.png"}
                                            height={20}
                                            width={20}
                                            alt="shuffle"
                                            className={`h-fit`}
                                        />
                                        <Image
                                            src={"/MusicPlayback/play/play.png"}
                                            height={30}
                                            width={30}
                                            alt="shuffle"
                                        />
                                    </div>
                                    :
                                    null
                            }
                        </>
                }
            </div>
        </div>
    )
}