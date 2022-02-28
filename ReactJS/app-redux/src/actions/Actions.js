export const addEntry = (item) => {
    return {
      type: "ADD_ENTRY",
      payload: item
    };
  };
  
  export const deleteEntry = (id) => {
    return {
      type: "DELETE_ENTRY",
      payload: id
    };
  };