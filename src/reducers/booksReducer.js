const initialState = [
    { id: 1, title: "Lord of the Rings" },
    { id: 2, title: "Angels & Demons" },
    { id: 3, title: "Cast Away" }
]


export const booksReducer = (state = initialState,action)=>{
    switch(action.type){
        // If needed in future to add a book
        // case "ADD_BOOK":
        //     return [...state,action.payload]
        default:
            return state;
    }
}