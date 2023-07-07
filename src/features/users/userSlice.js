import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const filteredUsers = state.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      return filteredUsers;
    },
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
