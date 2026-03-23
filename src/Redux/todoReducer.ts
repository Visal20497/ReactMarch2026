interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
  edit: Todo | null;
  text: string;
}

type Action =
  | { type: "TEXT"; payload: string }
  | { type: "ADD" }
  | { type: "DELETE"; payload: number }
  | { type: "EDIT"; payload: number }
  | { type: "CLEARALL" };

const initialState: State = {
  todos: [],
  edit: null,
  text: "",
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "TEXT":
      return { ...state, text: action.payload };

    case "ADD": {
      if (state.text.trim() === "") return state;

      if (state.edit) {
        const updatedTodos = state.todos.map((item) =>
          item.id === state.edit!.id ? { ...item, text: state.text } : item,
        );

        return { ...state, todos: updatedTodos, text: "", edit: null };
      }

      const newTodo: Todo = {
        id: Math.trunc(Math.random() * 1000),
        text: state.text,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
        text: "",
      };
    }
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case "EDIT": {
      const todoToEdit =
        state.todos.find((item) => item.id === action.payload) || null;

      return {
        ...state,
        edit: todoToEdit,
        text: todoToEdit ? todoToEdit.text : "",
      };
    }

    case "CLEARALL":
      return { ...state, todos: [], text: "", edit: null };

    default:
      return state;
  }
};

export default todoReducer;
