import React, { useState } from "react";
import MainCard from "components/MainCard";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import {
  EditOutlined,
  DeleteOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { CameraOutlined } from "../../../node_modules/@mui/icons-material/index";

const categories = [
  {
    name: "Addidas",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 7,
  },
  {
    name: "Nike",
    photo: "https://i.ibb.co/VgFWkLD/3-1.jpg",
    products: 5,
  },
  {
    name: "Jordan",
    photo: "https://i.ibb.co/7CzYsFc/jordan-logo.jpg",
    products: 3,
  },
  {
    name: "New Balance",
    photo: "https://i.ibb.co/WzDy4Fk/new-balance.png",
    products: 10,
  },
  {
    name: "FILA",
    photo: "https://i.ibb.co/GRf6yN7/Fila-Logo.png",
    products: 7,
  },
  {
    name: "Boots",
    photo: "https://i.ibb.co/ynJndMz/puma-logo-black-and-white.png",
    products: 5,
  },
  {
    name: "Sports",
    photo: "https://i.ibb.co/9YR01Jd/champion.jpg",
    products: 3,
  },
  {
    name: "Leather",
    photo: "https://i.ibb.co/qx1tQqq/conversee.jpg",
    products: 10,
  },
];

function BrandPage({ shadow }) {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editBrandName, setEditBrandName] = useState("");
  const [editBrandImage, setEditBrandImage] = useState("");
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newBrandName, setNewBrandName] = useState("");
  const [newBrandImage, setNewBrandImage] = useState("");

  const handleEdit = (Brand) => {
    setSelectedBrand(Brand);
    setEditBrandName(Brand.name);
    setEditBrandImage(Brand.photo);
    setOpenEditDialog(true);
  };

  const handleSaveEdit = () => {
    // Perform edit action
    console.log(
      "Edit Brand:",
      selectedBrand,
      "New name:",
      editBrandName,
      "New image:",
      editBrandImage
    );
    setOpenEditDialog(false);
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDelete = () => {
    // Perform delete action
    console.log("Delete Brand:", selectedBrand);
    setOpenDeleteDialog(false);
  };

  const handleAddBrand = () => {
    setOpenAddDialog(true);
  };

  const handleSaveBrand = () => {
    // Perform add Brand action
    console.log("Add Brand:", newBrandName, newBrandImage);

    // Reset values and close modal
    setNewBrandName("");
    setNewBrandImage("");
    setOpenAddDialog(false);
  };

  return (
    <MainCard border={false} sx={{ boxShadow: shadow }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mt: 1 }}>
            Brand List
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlusOutlined />}
            sx={{ mt: 1 }}
            onClick={handleAddBrand}
          >
            Add Brand
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {categories.map((Brand, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ textAlign: "center" }}
              >
                <MainCard contentSX={{ p: 2.25 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0px",
                    }}
                  >
                    <div></div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginLeft: "10px",
                      }}
                    >
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEdit(Brand)}
                      >
                        <EditOutlined style={{ color: "blue" }} />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          setSelectedBrand(Brand);
                          setOpenDeleteDialog(true);
                        }}
                      >
                        <DeleteOutlined style={{ color: "red" }} />
                      </IconButton>
                    </div>
                  </div>
                  <img
                    src={Brand.photo}
                    alt={Brand.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    {Brand.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ({Brand.products} products)
                  </Typography>
                </MainCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Edit Brand */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>
          Edit Brand
          <IconButton
            aria-label="close"
            onClick={() => setOpenEditDialog(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Brand Name"
            value={editBrandName}
            onChange={(e) => setEditBrandName(e.target.value)}
            fullWidth
            sx={{ mb: 4, mt: 1 }}
          />
          <TextField
            label="Brand Image URL"
            value={editBrandImage}
            onChange={(e) => setEditBrandImage(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Brand */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>
          Delete Brand
          <IconButton
            aria-label="close"
            onClick={() => setOpenDeleteDialog(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete the Brand?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Brand */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}  maxWidth="md">
        <DialogTitle>Add Brand</DialogTitle>
        <DialogContent>
          <TextField
            label="Brand Name"
            value={newBrandName}
            onChange={(e) => setNewBrandName(e.target.value)}
            fullWidth
            sx={{ mb: 2, mt: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              borderRadius: 1,
              padding: 1,
            }}
            fullWidth
          >
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Select Image From Your Computer
            </Typography>
            <input
              accept="image/*"
              id="upload-image"
              type="file"
              onChange={(e) =>
                setNewBrandImage(URL.createObjectURL(e.target.files[0]))
              }
              style={{ display: "none" }}
            />
            <label htmlFor="upload-image">
              <IconButton component="span">
                <CameraOutlined />
              </IconButton>
            </label>
          </Box>
          {newBrandImage && (
            <img
              src={newBrandImage}
              alt="Brand"
              style={{ width: "100%", height: "300px", marginTop: 10 }}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveBrand} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
}

export default BrandPage;
