import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id == action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].productQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, productQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
        },
        removeCartItem(state, action) {
            state.cartItems = state.cartItems.filter((data) => {
                return action.payload.id != data.id;
            })
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
        },
        updateQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id == action.payload.product.id);
            switch (action.payload.type) {
                case 'increment':
                    state.cartItems[itemIndex].productQuantity += 1;
                    break;
                case 'decrement':
                    state.cartItems[itemIndex].productQuantity > 1 ? state.cartItems[itemIndex].productQuantity -= 1 : state.cartItems[itemIndex].productQuantity = 1;
                    break;

            }
        },
        getTotal(state) {
            let {total,quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, productQuantity } = cartItem;
                const itemTotal = price * productQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += productQuantity; 
                return cartTotal; 
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }
    }
})

export const { getTotal, addToCart, removeCartItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;