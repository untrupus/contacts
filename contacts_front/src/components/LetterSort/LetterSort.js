import React from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {fetchContacts, fetchSortedContacts} from "../../store/actions";

const useStyles = makeStyles((theme) => ({
    letter: {
        textTransform: 'uppercase',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: "underline"
        }
    },
    letters: {
        display: 'flex',
        flexGrow: 1,
        padding: '0 10%',
        justifyContent: 'space-around'
    }
}));


const LetterSort = () => {
    const classes = useStyles();
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const dispatch = useDispatch();

    const sortContacts = letter => {
        dispatch(fetchSortedContacts(letter));
    };

    const allContacts = () => {
        dispatch(fetchContacts());
    };

    const buttons = letters.map(letter => {
        return (
            <h4
                key={letter}
                className={classes.letter}
                onClick={() => sortContacts(letter)}
            >
                {letter}
            </h4>
        )
    });

    return (
        <div className={classes.letters}>
            <h4
                className={classes.letter}
                onClick={() => allContacts()}
            >ALL</h4>
            {buttons}
        </div>
    );
};

export default LetterSort;