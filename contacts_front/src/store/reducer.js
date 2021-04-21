import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_SUCCESS,
    ADD_CONTACT_FAILURE,
    DELETE_CONTACT_FAILURE,
    EDIT_CONTACT_FAILURE,
    FETCH_SORTED_CONTACTS_FAILURE,
    FETCH_SORTED_CONTACTS_SUCCESS,
    SEARCH_CONTACTS_SUCCESS
} from "./actionTypes";

const initialState = {
    contacts: [],
    fetchContactsError: null,
    addContactError: null,
    removeContactError: null,
    editContactFailure: null,
    fetchSortedContactsError: null
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
        case EDIT_CONTACT_FAILURE:
            return {...state, editContactFailure: action.error};
        case FETCH_SORTED_CONTACTS_FAILURE:
            return {...state, fetchSortedContactsError: action.error};
        case FETCH_SORTED_CONTACTS_SUCCESS:
            return {...state, contacts: action.data};
        case SEARCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.data};
        default:
            return state;
    }
};

export default reducer;