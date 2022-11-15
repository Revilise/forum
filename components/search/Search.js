import cl from './search.module.scss'
import Icons from '../icon/icons'

export default function Search() {
    return (
        <div className={cl.search}>
            <input placeholder={"search everything..."} className={cl.input}/>
            <button className={cl.search_button}>
                <Icons.Search />
            </button>
        </div>
    )
}