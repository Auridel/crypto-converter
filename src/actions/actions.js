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

export {
    ASK_DATA,
    PUT_DATA
}