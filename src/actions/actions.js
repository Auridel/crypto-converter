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

const SET_FIRST = (cur) => {
    return {
        type: "SET_FIRST",
        payload: cur
    }
}

const SET_SECOND = (cur) => {
    return {
        type: "SET_SECOND",
        payload: cur
    }
}

export {
    ASK_DATA,
    PUT_DATA,
    SET_FIRST,
    SET_SECOND
}