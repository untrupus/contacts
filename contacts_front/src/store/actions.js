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

import axiosOrder from "../axiosOrder";

const fetchContactsSuccess = data => {
    return {type: FETCH_CONTACTS_SUCCESS, data};
};

const fetchContactsFailure = error => {
    return {type: FETCH_CONTACTS_FAILURE, error};
};

export const fetchContacts = () => {
    return async dispatch => {
        try {
            const response = await axiosOrder.get("/contacts");
            dispatch(fetchContactsSuccess(response.data));
        } catch (e) {
            dispatch(fetchContactsFailure(e));
        }
    };
};

const addContactFailure = error => {
    return {type: ADD_CONTACT_FAILURE, error};
};

export const addContact = data => {
    return async dispatch => {
        try {
            await axiosOrder.post("/contacts", data);
        } catch (e) {
            dispatch(addContactFailure(e));
        }
    };
};

const deleteContactFailure = error => {
    return {type: DELETE_CONTACT_FAILURE, error};
};

export const deleteContact = id => {
    return async dispatch => {
        try {
            await axiosOrder.delete("/contacts/" + id);
        } catch (e) {
            dispatch(deleteContactFailure(e))
        }
    };
};

const editContactFailure = error => {
    return {type: EDIT_CONTACT_FAILURE, error};
};

export const editContact = (id, data) => {
    return async dispatch => {
        try {
            await axiosOrder.put("/contacts/edit/" + id, data);
        } catch (e) {
            dispatch(editContactFailure(e));
        }
    };
};

const fetchSortedContactsSuccess= data => {
    return {type: FETCH_SORTED_CONTACTS_SUCCESS, data};
};

const fetchSortedContactsFailure = error => {
    return {type: FETCH_SORTED_CONTACTS_FAILURE, error};
};

export const fetchSortedContacts = letter => {
    return async dispatch => {
        try {
            const response = await axiosOrder.get("/contacts/" + letter);
            dispatch(fetchSortedContactsSuccess(response.data));
        } catch (e) {
            dispatch(fetchSortedContactsFailure(e));
        }
    };
};

export const searchContactSuccess = data => {
    return {type: SEARCH_CONTACTS_SUCCESS, data};
};

