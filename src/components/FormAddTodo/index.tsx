import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { TodoListContext } from "../../contexts/TodoListContext";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

export function FormAddTodo() {
  const { onAddTodo } = useContext(TodoListContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState("");

  async function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    setIsSubmitting(true);

    await onAddTodo(value);

    setValue("");
    setIsSubmitting(false);
  }

  function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
    if (isSubmitting) return;

    setValue(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleAddTodo(e)} className={styles.container}>
      <input value={value} onChange={handleChangeValue} />
      <button disabled={isSubmitting}>
        {isSubmitting ? <Loader small /> : "Adicionar"}
      </button>
    </form>
  );
}
