import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import noImage from "./noImage.png";

const useStyles = makeStyles((theme) => ({
    contact: {
        width: '50%',
        padding: '20px',
        margin: '20px auto',
        display: 'flex',
        alignItems: 'center'
    },
    large: {
        marginRight: '30px',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    name: {
        margin: '0'
    },
    contactInfo: {
        flexGrow: 1
    }
}));

const SingleContact = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.contact}>
            <Avatar alt={props.name}
                    src={props.image ? 'http://localhost:8000/uploads/' + props.image : noImage}
                    className={classes.large}/>

            <div className={classes.contactInfo}>
                <h2 className={classes.name}>{props.name}</h2>
                <p>Phone: {props.phone}</p>
            </div>

            <Button
                variant="contained"
                color="primary"
            >
                View contact
            </Button>

        </Paper>
    );
};

export default SingleContact;