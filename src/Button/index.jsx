import style from './style.module.css'

export function Button({onClick}) {
    return (
        <button className={style.button} onClick={onClick}>Calculate</button>
    )
}