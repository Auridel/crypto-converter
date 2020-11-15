const initialState = {
    data: [],
    loaded: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PUT_DATA": {
            return {
                ...state,
                loaded: true,
                data: action.payload
            }
        }
        default: return state;
    }
}

export default reducer;