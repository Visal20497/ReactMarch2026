import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Page, Loading, ErrorAlert } from "../../components/ui";
import type { AppDispatch, RootState } from "../Store";
import { getData } from "../FetchSlice";

const FetchDataWithReduxToolKit = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.fetch,
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Page title="📊 Fetched Posts">
      {loading && <Loading message="Fetching posts..." />}
      {error && <ErrorAlert message={error} />}

      {data.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            maxHeight: 500,
          }}
        >
          <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
            <Typography variant="h6" fontWeight="bold">
              Posts Table
            </Typography>
          </Box>

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
              {data.slice(0, 10).map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
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

export default FetchDataWithReduxToolKit;
