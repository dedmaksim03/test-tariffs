import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DiscountState = {
  active: boolean;
};

const initialState: DiscountState = {
  active: true
};

export const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscountActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { setDiscountActive } = discountSlice.actions;

export default discountSlice.reducer;
