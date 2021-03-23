const initialState={
    response:{},
    routes:{},
}

export default function (state=initialState,action) {
    switch (action.type) {
        case 'GET_RES':
            return{
                ...state,
                response:action.payload
            }
        case 'GET_ROUTES':
            return {
                ...state,
                routes:action.payload
            }

        default:return state

    }
}
