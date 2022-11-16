const initialState:Object = {
  todo:null
}

export default function TodoReducer(state = initialState, action: any) {
  switch (action.type) {
    case "GET_ALL_TODOS":
      return {
        ...state,
        todo:action.payload
      };
    default:
        return state
  }
}
