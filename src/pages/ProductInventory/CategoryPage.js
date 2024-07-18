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
    name: "Sneaker",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 7,
  },
  {
    name: "Boots",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 5,
  },
  {
    name: "Sports",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 3,
  },
  {
    name: "Leather",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 10,
  },
  {
    name: "Sneaker",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 7,
  },
  {
    name: "Boots",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 5,
  },
  {
    name: "Sports",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 3,
  },
  {
    name: "Leather",
    photo: "https://i.ibb.co/hRy7xnL/Screenshot-2024-03-07-213156.png",
    products: 10,
  },
];

function Category({ shadow }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategoryImage, setEditCategoryImage] = useState("");
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState("");

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setEditCategoryName(category.name);
    setEditCategoryImage(category.photo);
    setOpenEditDialog(true);
  };

  const handleSaveEdit = () => {
    // Perform edit action
    console.log(
      "Edit category:",
      selectedCategory,
      "New name:",
      editCategoryName,
      "New image:",
      editCategoryImage
    );
    setOpenEditDialog(false);
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDelete = () => {
    // Perform delete action
    console.log("Delete category:", selectedCategory);
    setOpenDeleteDialog(false);
  };

  const handleAddCategory = () => {
    setOpenAddDialog(true);
  };

  const handleSaveCategory = () => {
    // Perform add category action
    console.log("Add category:", newCategoryName, newCategoryImage);

    // Reset values and close modal
    setNewCategoryName("");
    setNewCategoryImage("");
    setOpenAddDialog(false);
  };

  return (
    <MainCard border={false} sx={{ boxShadow: shadow }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{ mt: 1 }}>
            Category List
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlusOutlined />}
            sx={{ mt: 1 }}
            onClick={handleAddCategory}
          >
            Add Category
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {categories.map((category, index) => (
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
                        onClick={() => handleEdit(category)}
                      >
                        <EditOutlined style={{ color: "blue" }} />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          setSelectedCategory(category);
                          setOpenDeleteDialog(true);
                        }}
                      >
                        <DeleteOutlined style={{ color: "red" }} />
                      </IconButton>
                    </div>
                  </div>
                  <img
                    src={category.photo}
                    alt={category.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h5" sx={{ mt: 1 }}>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ({category.products} products)
                  </Typography>
                </MainCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Edit Category */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>
          Edit Category
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
            label="Category Name"
            value={editCategoryName}
            onChange={(e) => setEditCategoryName(e.target.value)}
            fullWidth
            sx={{ mb: 4, mt: 1 }}
          />
          <TextField
            label="Category Image URL"
            value={editCategoryImage}
            onChange={(e) => setEditCategoryImage(e.target.value)}
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

      {/* Delete Category */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>
          Delete Category
          <IconButton
            aria-label="close"
            onClick={() => setOpenDeleteDialog(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete the category?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Category */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}  maxWidth="md">
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <TextField
            label="Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
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
                setNewCategoryImage(URL.createObjectURL(e.target.files[0]))
              }
              style={{ display: "none" }}
            />
            <label htmlFor="upload-image">
              <IconButton component="span">
                <CameraOutlined />
              </IconButton>
            </label>
          </Box>
          {newCategoryImage && (
            <img
              src={newCategoryImage}
              alt="Category"
              style={{ width: "100%", height: "300px", marginTop: 10 }}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveCategory} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
}

export default Category;
