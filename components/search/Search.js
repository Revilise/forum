import cl from './search.module.scss'
import Icons from '../icon/icons'

export default function Search({value, onChange, onSubmit}) {
    return (
        <form onSubmit={e => e.preventDefault()} className={cl.search}>
            <input value={value} onChange={onChange} placeholder={"search everything..."} className={cl.input}/>
            <button onClick={onSubmit} className={cl.search_button}>
                <Icons.Search />
            </button>
        </form>
    )
}