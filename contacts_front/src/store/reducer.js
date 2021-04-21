import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_SUCCESS,
    ADD_CONTACT_FAILURE,
    DELETE_CONTACT_FAILURE

} from "./actionTypes";

const initialState = {
    contacts: [],
    fetchContactsError: null,
    addContactError: null,
    removeContactError: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_FAILURE:
            return {...state, fetchContactsError: action.error};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.data};
        case ADD_CONTACT_FAILURE:
            return {...state, addContactError: action.error};
        case DELETE_CONTACT_FAILURE:
            return {...state, removeContactError: action.error};
        default:
            return state;
    }
};

export default reducer;