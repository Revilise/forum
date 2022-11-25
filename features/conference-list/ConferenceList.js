import cl from './conference-list.module.scss';
import Item from './Item';

export default function ConferenceList({items = []}) {
    return (
        <div className={cl.container}>
            { items.length ? items.map((el, idx) => <Item key={idx} {...el} />) : <></>}
        </div>
    )
}