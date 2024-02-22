import style from "./style.module.css";

export function Input({ value, onValueChaged, name, type }) {
  return (
    <div className={style.inputText}>
      {name}
      <input
        type={type}
        className={style.input}
        value={value}
        onChange={onValueChaged}
      ></input>
    </div>
  );
}
