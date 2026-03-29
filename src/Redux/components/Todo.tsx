import { useRef } from "react";
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
import { Page } from "../../components/ui";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../RootReducer";
import type { AppDispatch } from "../Store";

const TodoWithRedux = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, edit, text } = useSelector((item: RootState) => item.todo);
  const dispatch = useDispatch<AppDispatch>();
  console.log(todos, edit, text,'todo with redux');
  return (
    <Page title="📝 Todo App (todo with redux)" fullWidth>
      <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: "100%" }}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="Enter todo"
            value={text}
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
            {edit ? "Update" : "Add"}
          </Button>
        </Box>

        <List>
          {todos.map((todo: { id: number; text: string }) => (
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
                    disabled={edit !== null}
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

        {todos.length > 0 && (
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

export default TodoWithRedux;
