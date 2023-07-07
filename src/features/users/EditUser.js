import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { editUser } from "./userSlice";
 

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(editUser({ id: params.id, name: values.name, email: values.email }));
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <Box
    sx={{
      backgroundColor: "rgb(25, 118, 210)",
      minHeight: "80vh",
      minWidth:"80vh",
      marginBottom :"50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection:"column"
      
    }}
  >
    <Typography variant="h4" align="center" gutterBottom style={{color:"white", fontFamily: "serif"}}>
     Save your information here!!
      </Typography>
    <Container maxWidth="sm" sx={{ backgroundColor: "white", padding: 4 }}>
          
      <Typography variant="h5" align="center" gutterBottom style={{color:"#524c4c",fontFamily: "serif"}}>
       You can Edit information here
      </Typography>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        fullWidth
        margin="normal"
        placeholder="Enter your name"
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        fullWidth
        margin="normal"
        placeholder="Enter your email"
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <Button variant="contained" color="primary" onClick={handleEditUser}>
          Submit
        </Button>
      </div>
    </Container>
  </Box>
  );
};

export default EditUser;
