import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );

    localStorage.setItem(
      "users",
      JSON.stringify([
        ...users,
        { id: uuidv4(), name: values.name, email: values.email },
      ])
    );

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
          Add Info
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
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Submit
          </Button>
        </div>
      </Container>
    </Box>
 
  );
};

export default AddUser;
