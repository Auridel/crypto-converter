const initialState = {
    data: [],
    loaded: false,
    first: null,
    second: null
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
        case "SET_FIRST": {
            return {
                ...state,
                first: action.payload
            }
        }
        case "SET_SECOND": {
            return {
                ...state,
                second: action.payload
            }
        }
        default: return state;
    }
}

export default reducer;