import { API_BASE_URL } from "@/api";
import { Todo } from "@/types/todo";

export async function getAllTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}
