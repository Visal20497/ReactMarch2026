import React, { Component } from "react";
import { Page } from "../ui";
import { connect } from "react-redux";
import type { AppDispatch } from "../../Redux/Store";
import {
  Paper,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { RootState } from "../../Redux/RootReducer";

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Array<{ id: number; text: string }>;
  text: string;
  edit: Todo | null;
}

interface MapStateProps {
  todo: TodoState;
}

interface MapDispatchProps {
  dispatch: AppDispatch;
}

interface Props extends MapStateProps, MapDispatchProps {}

export class TodoWithReactClassComponents extends Component<Readonly<Props>> {
  inputRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    const { todo, dispatch } = this.props;
    const { todos, text, edit } = todo;
    return (
      <Page title="📝 Todo App (Class Component with Redux)" fullWidth>
        <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: "100%" }}>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Enter todo"
              value={text}
              inputRef={this.inputRef}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "TEXT", payload: e.target.value })
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  dispatch({ type: "ADD" });
                }
              }}
            />

            <Button
              variant="contained"
              onClick={() => dispatch({ type: "ADD" })}
            >
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
                        this.inputRef.current?.focus();
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
  }
}

const mapStateToProps = (item: RootState) => ({
  todo: item.todo,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({ dispatch });

const ConnectedTodoWithReactClassComponents = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoWithReactClassComponents);

export default ConnectedTodoWithReactClassComponents;
