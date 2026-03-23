import { useEffect, useReducer } from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
import { Page, Loading, ErrorAlert } from "./ui";

interface Post {
  id: number;
  title: string;
}

interface State {
  data: Post[];
  loading: boolean;
  error: Error | null;
}

type Action =
  | { type: "LOADING" }
  | { type: "FETCH_SUCCESS"; payload: Post[] }
  | { type: "FETCH_ERROR"; payload: Error };

const FetchWithUseReducer = () => {
  const initialState: State = {
    data: [],
    loading: false,
    error: null,
  };

  const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true, error: null };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result: Post[] = await data.json();
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error as Error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Fetched Posts">
      {state.loading && <Loading message="Fetching posts..." />}
      {state.error && <ErrorAlert message={state.error.message} />}
      {state.data.length > 0 && (
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Recent Posts
          </Typography>
          <List>
            {state.data.slice(0, 10).map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={item.title}
                  secondary={`Post ID: ${item.id}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Page>
  );
};

export default FetchWithUseReducer;
