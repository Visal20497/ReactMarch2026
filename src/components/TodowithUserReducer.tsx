import { useReducer, useRef } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Page } from "./ui";

interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
  text: string;
  edit: Todo | null;
}

type Action =
  | { type: "TEXT"; payload: string }
  | { type: "ADD" }
  | { type: "DELETE"; payload: number }
  | { type: "EDIT"; payload: number }
  | { type: "CLEARALL" };

const initialState: State = {
  todos: [],
  text: "",
  edit: null,
};

const reducer = (state: State, action: Action): State => {
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

const TodoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Page title="📝 Todo App (useReducer)" fullWidth>
      <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: '100%' }}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="Enter todo"
            value={state.text}
            inputRef={inputRef}
            onChange={(e) =>
              dispatch({ type: "TEXT", payload: e.target.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch({ type: "ADD" });
              }
            }}
          />

          <Button variant="contained" onClick={() => dispatch({ type: "ADD" })}>
            {state.edit ? "Update" : "Add"}
          </Button>
        </Box>

        <List>
          {state.todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                  <IconButton
                    onClick={() => {
                      dispatch({ type: "EDIT", payload: todo.id });
                      inputRef.current?.focus();
                    }}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    disabled={state.edit !== null}
                    onClick={() =>
                      dispatch({ type: "DELETE", payload: todo.id })
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>

        {state.todos.length > 0 && (
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => dispatch({ type: "CLEARALL" })}
            sx={{ mt: 2 }}
          >
            Clear All
          </Button>
        )}
      </Paper>
    </Page>
  );
};

export default TodoWithReducer;
