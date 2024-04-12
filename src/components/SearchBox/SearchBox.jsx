import css from "./SearchBox.module.css"

export default function ({ value, onFilter }) {
    return (
        <div className={css.searchBoxWrapper}>
            <p>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={value} onChange={e=>onFilter(e.target.value)}></input>
        </div>
    )
}