import { createContext, ReactNode } from "react";
import { useTodoList } from "../hooks/useTodoList";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListContextData {
  todoList: Todo[];
  getUserTodo: (userId: string | undefined) => Promise<void>;
  onCheckTodo: (todoId: number, completed: boolean) => Promise<void>;
  onAddTodo: (title: string) => Promise<void>;
}

interface TodoListContextProps {
  children: ReactNode;
}

export const TodoListContext = createContext<TodoListContextData>(
  {} as TodoListContextData,
);

export function TodoListContextProvider({ children }: TodoListContextProps) {
  const { todoList, getUserTodo, onCheckTodo, onAddTodo } = useTodoList();

  return (
    <TodoListContext.Provider
      value={{ todoList, getUserTodo, onCheckTodo, onAddTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
