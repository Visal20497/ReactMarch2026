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
const initialState: State = {
  data: [],
  loading: false,
  error: null,
};
const fetchReducer = (state = initialState, action: Action): State => {
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
export default fetchReducer;
