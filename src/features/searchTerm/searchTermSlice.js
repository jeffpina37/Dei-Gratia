const searchTermState = '';
export const searchTermReducer = (state = searchTermState, action) => {
  switch(action.type){
    case 'searchTerm/setSearchTerm': {
      const newTerm = action.payload;
      return newTerm
    }
    case 'searchTerm/clearSearchTerm' : {
      return ''
    }
    default:
      return state
  }
}

export const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

export const clearSearchTerm = (term) => {
  return {
    type: 'searchTerm/clearSearchTerm',
    payload: term
  }
}

export const selectSearchTerm = (state) => state.searchTerm;
