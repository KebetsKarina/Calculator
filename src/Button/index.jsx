import style from "./style.module.css";

export function Button({ onClick, value, name, type }) {
  return (
    <button
      className={style.button}
      onClick={onClick}
      type={type}
      value={value}
    >
      {name}
    </button>
  );
}
