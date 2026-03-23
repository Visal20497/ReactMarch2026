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
import { Add, Edit, Delete, text as setText, ClearAll } from "../TodoSlice";
import type { AppDispatch, RootState } from "../Store";
import { useDispatch, useSelector } from "react-redux";

const TodoWithReduxToolkit = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { todos, edit, text } = useSelector((state: RootState) => state.todo);

  return (
    <Page title="📝 Todo App (Redux Toolkit)" fullWidth>
      <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: "100%" }}>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="Enter todo"
            value={text}
            inputRef={inputRef}
            onChange={(e) => dispatch(setText(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(Add());
              }
            }}
          />

          <Button variant="contained" onClick={() => dispatch(Add())}>
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
                      dispatch(Edit(todo.id));
                      inputRef.current?.focus();
                    }}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    disabled={edit !== null}
                    onClick={() => dispatch(Delete(todo.id))}
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
            onClick={() => dispatch(ClearAll())}
            sx={{ mt: 2 }}
          >
            Clear All
          </Button>
        )}
      </Paper>
    </Page>
  );
};

export default TodoWithReduxToolkit;
