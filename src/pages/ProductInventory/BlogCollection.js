import MainCard from "components/MainCard";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

function InventoryPage({ shadow }) {
  const [page, setPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const productsPerPage = 10;

  const products = [
    {
      id: 1,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 2,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 3,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 4,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 5,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 6,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 7,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 8,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 9,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 10,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 11,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
    {
      id: 12,
      title: "Blog name - today this happen",
      description: "kdhajkdjkahkd kjsadksakjjkasf bfkjsdbfjkbsdjkbfkjs ksnfs",
      date: "7/18/2024",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelectAll = (event) => {
    setSelectAll(event.target.checked);
  };

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = page * productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <MainCard border={false} sx={{ boxShadow: shadow }}>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ mt: 1 }}>
              Blogs Collection
            </Typography>
            <Box
              sx={{
                border: "0.2px solid #F3EFEF",
                borderRadius: "1px",
                marginTop: "10px",
              }}
            >
              <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </TableCell>
                      <TableCell>Id no.</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Added Date</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentProducts.map((product) => (
                      <TableRow
                        key={product.id}
                        sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                      >
                        <TableCell>
                          <Checkbox checked={selectAll} />
                        </TableCell>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.date}</TableCell>
                        <TableCell>
                          <IconButton aria-label="edit">
                            <EditIcon sx={{ color: "green" }} />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <DeleteIcon sx={{ color: "red" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Pagination
                  count={Math.ceil(products.length / productsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MainCard>
    </div>
  );
}

export default InventoryPage;
