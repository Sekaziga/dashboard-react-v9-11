import { createSlice } from '@reduxjs/toolkit';
import mockData from '../data/mockData.json';

const initialState = {
  users: mockData.users,
  selectedUser: mockData.users[0], // Default to first user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.users.find(user => user.id === action.payload);
    },
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
