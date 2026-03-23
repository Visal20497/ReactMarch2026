import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
  edit: Todo | null;
  text: string;
}

const initialState: State = {
  todos: [],
  text: "",
  edit: null,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    text: (state: State, action: { payload: string }) => {
      state.text = action.payload;
    },
    Add: (state) => {
      if (state.text.trim() === "") return;
      if (state.edit) {
        const item = state.todos.find((t) => t.id === state.edit!.id);
        if (item) item.text = state.text;

        state.edit = null;
        state.text = "";
        return;
      }

      state.todos.push({
        id: Math.trunc(Math.random() * 1000),
        text: state.text,
      });

      state.text = "";
    },
    Delete: (state: State, action: { payload: number }) => {
      const updatedTodos = state.todos.filter(
        (item) => item.id !== action.payload,
      );
      return { ...state, todos: updatedTodos };
    },

    Edit: (state: State, action: { payload: number }) => {
      const todoToEdit =
        state.todos.find((item) => item.id === action.payload) || null;

      return {
        ...state,
        edit: todoToEdit,
        text: todoToEdit ? todoToEdit.text : "",
      };
    },
    ClearAll: (state) => {
      return {
        ...state,
        todos: [],
        edit: null,
        text: "",
      };
    },
  },
});

export const { text, Add, Edit, Delete, ClearAll } = TodoSlice.actions;
export default TodoSlice;
