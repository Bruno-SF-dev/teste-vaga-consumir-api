import { FormEvent, useContext, useState } from "react";
import { TodoListContext } from "../../contexts/TodoListContext";

import styles from "./styles.module.scss";

export function FormAddTodo() {
  const { onAddTodo } = useContext(TodoListContext);
  const [value, setValue] = useState("");

  async function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    await onAddTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={(e) => handleAddTodo(e)} className={styles.container}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Adicionar</button>
    </form>
  );
}
