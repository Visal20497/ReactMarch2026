import { useRef, useState } from "react";
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

interface TodoItem {
  text: string | null;
  id: number;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string | null>("");
  const [edit, setEdit] = useState<TodoItem | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const add_or_Edit_Todo = () => {
    if (input?.trim() === "") return;
    if (edit) {
      const editData = todos?.filter((item) => {
        if (item.id === edit.id) {
          item.text = input;
        }
        return item;
      });
      setTodos(editData);
      setInput("");
      setEdit(null);
    } else {
      const obj = { id: Math.trunc(Math.random() * 1000), text: input };
      setTodos([...todos, obj]);
      setInput("");
    }
  };

  const ClearAllHandler = () => {
    setTodos([]);
    setEdit(null);
    setInput("");
  };

  const DeleteHandler = (id: number) => {
    const filerData = todos.filter((item) => item.id !== id);
    setTodos(filerData);
  };

  const EditHandler = (id: number) => {
    const editData = todos?.find((item) => item.id === id);
    if (!editData) return;
    if (editData?.text) {
      setInput(editData.text);
    }
    setEdit(editData);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Page title="📝 Todo App (useState)" fullWidth>
      <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: '100%' }}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="Enter todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            inputRef={inputRef}
            onKeyPress={(e) => {
              if (e.key === "Enter") add_or_Edit_Todo();
            }}
          />
          <Button variant="contained" onClick={add_or_Edit_Todo}>
            {edit !== null ? "Edit" : "Add"}
          </Button>
        </Box>

        <List>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <>
                  <IconButton
                    onClick={() => {
                      EditHandler(todo.id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => DeleteHandler(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={todo.text} />
            </ListItem>
          ))}
        </List>

        {todos.length > 0 && (
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={ClearAllHandler}
            sx={{ mt: 2 }}
          >
            Clear All
          </Button>
        )}
      </Paper>
    </Page>
  );
};
export default Todo;
