import cl from './profile-card.module.scss';
import Icons from '../icon/icons';

export default function ProfileCard({
    user = {
        name: "default",
        bio: "default",
        filepath: "/uploads/default.jpg",
    },
    editable = false
}) {
    return (
        <div className={cl.container}>
            <header className={cl.header}>
                <svg className={cl.avatar}>
                    <pattern id={"image"} width="100%" height="100%">
                        <image xlinkHref={user.filepath} />
                    </pattern>
                    <rect fill={"url(#image)"} />
                </svg>
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.bio}</p>
                </div>
            </header>
            {
                editable ?
                    <div className={cl.fixed}>
                        <button className={cl.button}>
                            <Icons.Edit />
                        </button>
                    </div> :
                    <></>
            }
        </div>
    )
}