import { ActionType } from "../ActionTypes/enrollment-types"



export const setEnrollment = (enrollment) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: enrollment
    }
}

export const SetOrders = (order) => {
    return {
        type: ActionType.SET_ORDER,
        payload: order
    }
}
