const initialState = {
    text: ""
}


export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {

        case "HANDLE_TEXT":
            return {
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}