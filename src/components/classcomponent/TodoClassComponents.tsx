import React, { Component } from "react";
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
import { Page } from "../ui";

interface TodoItem {
  text: string | null;
  id: number;
}
interface State {
  todos: TodoItem[];
  input: string;
  edit: number | null;
}

export class TodoWithClassComponents extends Component<
  Record<string, never>,
  State
> {
  inputRef: React.RefObject<HTMLInputElement | null>;
  constructor() {
    super({});
    this.state = {
      todos: [],
      input: "",
      edit: null,
    };
    this.inputRef = React.createRef();
  }

  add_or_Edit_Todo() {
    const { input, todos, edit } = this.state;
    if (input.trim() === "") return;
    if (edit !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === edit ? { ...todo, text: input } : todo,
      );
      this.setState({ todos: updatedTodos, input: "", edit: null });
    } else {
      const newTodo: TodoItem = {
        text: input,
        id: Date.now(),
      };
      this.setState({ todos: [...todos, newTodo], input: "" });
    }
  }
  EditHandler(id: number) {
    const todoToEdit = this.state.todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      this.setState({ input: todoToEdit.text || "", edit: id }, () => {
        if (this.inputRef.current) {
          this.inputRef.current.focus();
        }
      });
    }
  }
  DeleteHandler(id: number) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }
  ClearAllHandler() {
    this.setState({ todos: [], input: "", edit: null });
  }

  render() {
    return (
      <Page title="📝 Todo App (Class Components)" fullWidth>
        <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: "100%" }}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Enter todo"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
              inputRef={this.inputRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") this.add_or_Edit_Todo();
              }}
            />
            <Button
              variant="contained"
              onClick={this.add_or_Edit_Todo.bind(this)}
            >
              {this.state.edit !== null ? "Edit" : "Add"}
            </Button>
          </Box>

          <List>
            {this.state.todos.map((todo, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton
                      onClick={() => {
                        this.EditHandler(todo.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => this.DeleteHandler(todo.id)}
                      disabled={this.state.edit !== null}
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

          {this.state.todos.length > 0 && (
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={this.ClearAllHandler.bind(this)}
              sx={{ mt: 2 }}
            >
              Clear All
            </Button>
          )}
        </Paper>
      </Page>
    );
  }
}

export default TodoWithClassComponents;
