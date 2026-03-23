import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Page, Loading, ErrorAlert } from "../../components/ui";
import type { RootState } from "../../Redux/RootReducer";
import type { AppDispatch } from "../../Redux/Store";

const FetchWithRedux = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.fetch,
  );

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();

      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err as Error });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Fetched Posts">
      {loading && <Loading message="Fetching posts..." />}
      {error && <ErrorAlert message={error.message} />}

      {data.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            maxHeight: 500,
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                  }}
                >
                  Title
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.slice(0, 10).map((item, index) => (
                <TableRow
                  key={item.id}
                  hover
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: "#f1f7ff",
                    },
                  }}
                >
                  <TableCell sx={{ fontWeight: 500 }}>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Page>
  );
};

export default FetchWithRedux;
