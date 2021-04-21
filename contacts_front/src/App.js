import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import SingleContact from "./components/SingleContact/SingleContact";
import {fetchContacts} from "./store/actions";

const useStyles = makeStyles((theme) => ({
    contacts: {}
}));

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const allContacts = contacts.map(contact => {
        return (
            <SingleContact
                key={contact._id}
                name={contact.name}
                phone={contact.phone}
                image={contact.image}
                address={contact.address}
                email={contact.email}
                website={contact.website}
                id={contact._id}
            />
        )
    });

    return (
        <div className="App">
            <Header/>
            <SearchForm/>
            <div className={classes.contacts}>
                {allContacts}
            </div>
        </div>
    );
}

export default App;
