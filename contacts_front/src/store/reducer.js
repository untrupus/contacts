import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_SUCCESS,

} from "./actionTypes";

const initialState = {
    contacts: [],
    fetchContactsError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_FAILURE:
            return {...state, fetchContactsError: action.error};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.data};
        default:
            return state;
    }
};

export default reducer;