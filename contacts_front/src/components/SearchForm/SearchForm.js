import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {fetchContacts, searchContactSuccess} from "../../store/actions";

const useStyles = makeStyles((theme) => ({
    searchForm: {
        width: '50%',
        padding: '20px 0',
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            flexWrap: 'wrap',
            margin: '0 auto',
            padding: '10px 0'
        },
    },
    field: {
        width: "75%",
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    btn: {
        marginLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0',
            width: '45%'
        },
    },
    btnBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    }
}));

const SearchForm = () => {
    const classes = useStyles();
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const [search, setSearch] = useState({
        name: ''
    });

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearch(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const allContacts = () => {
        dispatch(fetchContacts());
        setSearch({name: ''});
    };

    const startSearch = () => {
        if (search.name !== '') {
            const contact = contacts.filter(contact => contact.name === search.name);
            dispatch(searchContactSuccess(contact));
        }
    };

    return (
        <div className={classes.searchForm}>
            <TextField
                label="Enter name"
                variant="outlined"
                name="name"
                value={search.name}
                onChange={inputChangeHandler}
                className={classes.field}
            />
            <div className={classes.btnBlock}>
                <Button variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={startSearch}
                >
                    Search
                </Button>
                <Button variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={() => allContacts()}
                >
                    clear
                </Button>
            </div>
        </div>
    );
};

export default SearchForm;