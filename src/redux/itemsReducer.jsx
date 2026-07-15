const initialData = {
    items: []
}

const itemReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'LOAD_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default itemReducer