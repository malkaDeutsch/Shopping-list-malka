
const initialState = {
      totalItems: 0,
      products:undefined 
  };
  
  const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
          totalItems: action.payload.length
        };
      default:
        return state;
    }
  };
  
  export default shoppingListReducer;
  