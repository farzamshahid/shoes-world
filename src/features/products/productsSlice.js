import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "SNEAKERS",
      category: "Running",
      price: 65.0,
      image: "/img/images 5.png",
    },
    {
      id: 2,
      name: "SNEAKERS",
      category: "Running",
      price: 65.0,
      image: "/img/images 5.png",
    },
    {
      id: 3,
      name: "SNEAKERS",
      category: "Running",
      price: 65.0,
      image: "/img/images 4.png",
    },
    {
      id: 4,
      name: "SNEAKERS",
      category: "Running",
      price: 65.0,
      image: "/img/images 2.png",
    },
    {
      id: 5,
      name: "SNEAKERS",
      category: "Running",
      price: 65.0,
      image: "/img/images 3.png",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
