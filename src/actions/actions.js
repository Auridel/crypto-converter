const ASK_DATA = () => {
    return {
        type: "ASK_DATA"
    }
}

const PUT_DATA = (data) => {
    return {
        type: "PUT_DATA",
        payload: data
    }
}

const SET_FIRST = (id) => {
    return {
        type: "SET_FIRST",
        payload: id
    }
}

const SET_SECOND = (id) => {
    return {
        type: "SET_SECOND",
        payload: id
    }
}

export {
    ASK_DATA,
    PUT_DATA,
    SET_FIRST,
    SET_SECOND
}