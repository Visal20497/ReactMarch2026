import { Component } from "react";
import { Page } from "../ui";

import {
  Paper,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Post {
  id?: number;
  title: string;
  body: string;
}

interface State {
  posts: Post[];
  title: string;
  body: string;
  editId: number | null;
}

export default class ApiWithClassComponents extends Component<
  Record<string, never>,
  State
> {
  state: State = {
    posts: [],
    title: "",
    body: "",
    editId: null,
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data.slice(0, 10) });
  };

  addPost = async () => {
    const { title, body } = this.state;
    if (!title.trim()) return;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-type": "application/json" },
    });

    const newPost = await res.json();

    this.setState((prev) => ({
      posts: [newPost, ...prev.posts],
      title: "",
      body: "",
    }));
  };

  updatePost = async () => {
    const { title, body, editId } = this.state;
    if (!editId) return;

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${editId}`,
      {
        method: "PUT",
        body: JSON.stringify({ title, body }),
        headers: { "Content-type": "application/json" },
      },
    );

    const updated = await res.json();

    this.setState((prev) => ({
      posts: prev.posts.map((p) => (p.id === editId ? updated : p)),
      title: "",
      body: "",
      editId: null,
    }));
  };

  deletePost = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    this.setState((prev) => ({
      posts: prev.posts.filter((p) => p.id !== id),
    }));
  };

  editPost = (post: Post) => {
    this.setState({
      title: post.title,
      body: post.body,
      editId: post.id || null,
    });
  };

  render() {
    const { posts, title, body, editId } = this.state;

    return (
      <Page title="🌐 API CRUD (Class + MUI)" fullWidth>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Manage Posts
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />

            <TextField
              fullWidth
              label="Body"
              value={body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />

            <Button
              variant="contained"
              onClick={editId ? this.updatePost : this.addPost}
            >
              {editId ? "Update" : "Add"}
            </Button>
          </Box>

          <List>
            {posts.map((post) => (
              <ListItem
                key={post.id}
                divider
                secondaryAction={
                  <>
                    <IconButton onClick={() => this.editPost(post)}>
                      <EditIcon />
                    </IconButton>

                    <IconButton onClick={() => this.deletePost(post.id!)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText primary={post.title} secondary={post.body} />
              </ListItem>
            ))}
          </List>

          {posts.length === 0 && (
            <Typography align="center" sx={{ mt: 2 }}>
              No posts available
            </Typography>
          )}
        </Paper>
      </Page>
    );
  }
}
