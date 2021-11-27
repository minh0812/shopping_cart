import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      const items_id = action.payload.product.id;

      for (let index = 0; index < state.cartItems.length; index++) {
        if (items_id === state.cartItems[index].product_id) {
          state.cartItems[index].quantity += action.payload.quantity;
          state.cartItems[index].totalPrice +=
            action.payload.quantity * action.payload.product.price;
          alert("Đã thêm vào giỏ hàng");
          return;
        }
      }

      const pseudoID = new Date().getTime();

      state.cartItems.push({
        id: pseudoID,
        product_id: action.payload.product.id,
        img: action.payload.product.img,
        name: action.payload.product.name,
        quantity: action.payload.quantity,
        price: action.payload.product.price,
        totalPrice: action.payload.quantity * action.payload.product.price,
      });
      alert("Đã thêm vào giỏ hàng");
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload.cartItem.product_id
      );
    },
    addItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.product_id === action.payload.cartItem.product_id) {
          item.quantity += 1;
          item.totalPrice += item.price;
        }
      });
    },
    subItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.product_id === action.payload.cartItem.product_id) {
          item.quantity -= 1;
          item.totalPrice -= item.price;
        }
      });
    }
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const { addItemsToCart } = slice.actions;
export const { removeItem } = slice.actions;
export const { addItem } = slice.actions;
export const { subItem } = slice.actions;

export default slice.reducer;
