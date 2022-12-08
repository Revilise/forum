import cl from './profile-card.module.scss';
import Icons from '../icon/icons';
import {useState} from "react";
import useUser from "../../lib/hooks/useUser";
import {useRouter} from "next/router";

export default function ProfileCard({
    user = {
        name: "default",
        bio: "default",
        filepath: "/uploads/default.jpg",
    },
    editable = false
}) {
    const router = useRouter();

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const { user: _user, mutateUser } = useUser({redirectTo: "/login"});

    const uploadToClient = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async () => {
        if (image) {
            const body = new FormData();
            body.append("file", image);
            const response = await fetch("/api/file", {
                method: "POST",
                body,
            });

            router.reload(window.location.pathname)
        }
    };

    console.log(_user);
    return (
        <div className={cl.container}>
            <header className={cl.header}>
                <label htmlFor="file" className={cl.label}>
                    <input type="file" id="file" onChange={uploadToClient} className={cl.file}/>
                    <svg className={cl.avatar}>
                        <pattern id={"image"} width="100%" height="100%">
                            <image xlinkHref={user.filepath}/>
                        </pattern>
                        <rect fill={"url(#image)"}/>
                    </svg>
                </label>
                <div>
                    <src src={createObjectURL} />
                    <h3>{user.name}</h3>
                    <p>{user.nickname}</p>
                    <p>{user.bio}</p>
                </div>
            </header>
            {
                editable ?
                    <div className={cl.fixed}>
                        <button className={cl.button} onClick={uploadToServer}>
                            <Icons.Edit/>
                        </button>
                    </div> :
                    <></>
            }
        </div>
    )
}