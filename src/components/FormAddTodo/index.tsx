import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { TodoListContext } from "../../contexts/TodoListContext";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";

export function FormAddTodo() {
  const { onAddTodo } = useContext(TodoListContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const reqSuccessToast = () =>
    toast("Sucesso na requição", {
      type: "success",
    });

  const reqFailedToast = () =>
    toast("Falha na requisição", {
      type: "error",
    });

  async function handleAddTodo(e: FormEvent) {
    e.preventDefault();

    if (!value.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onAddTodo(value);

      reqSuccessToast();
      setValue("");
    } catch {
      reqFailedToast();
    } finally {
      setIsSubmitting(false);
    }
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
