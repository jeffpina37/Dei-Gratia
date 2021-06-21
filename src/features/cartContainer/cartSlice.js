export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  
  export const changeItemQuantity = (name, newQuantity) => {
    return {
      type: 'cart/changeItemQuantity',
      payload: {
        name: name,
        newQuantity: newQuantity,
      }
    }
  }
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price, img} = action.payload;
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, quantity, img};

        return { 
          ...cart, 
          [name]: newItem 
        };
      }
      case 'cart/changeItemQuantity': {
        const { name, newQuantity } = action.payload;
        const itemToUpdate = cart[name];
        const updatedItem = {
          ...itemToUpdate,
          quantity: newQuantity
        }
        return {
          ...cart,
          [name]: updatedItem
        };
      }
      default: {
        return cart;
      }
    }
  };

  export const selectCart = state => state.cart;