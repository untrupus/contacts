import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import SingleContact from "./components/SingleContact/SingleContact";
import {fetchContacts} from "./store/actions";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LetterSort from "./components/LetterSort/LetterSort";

const useStyles = makeStyles((theme) => ({
    contacts: {
        textAlign: 'center'
    }
}));

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const lowerCaseContacts = contacts.map((cont, ind) => {
        return { index: ind, value: cont.name.toLowerCase() };
    });

    lowerCaseContacts.sort((a, b) => {
        if (a.value > b.value) {
            return 1; }
        if (a.value < b.value) {
            return -1; }
        return 0;
    });

    const result = lowerCaseContacts.map((el) => {
        return contacts[el.index];
    });


    let allContacts;
    if (contacts.length > 0) {
        allContacts = result.map(contact => {
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
    } else {
        allContacts = (
            <h2>Sorry... Nothing found</h2>
        )
    }

    return (
        <div className="App">
            <Header/>
            {matches ? <LetterSort/> : null}
            <SearchForm/>
            <div className={classes.contacts}>
                {allContacts}
            </div>
        </div>
    );
}

export default App;
