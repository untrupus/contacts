import React from 'react';
import {useDispatch} from "react-redux";
import {deleteContact, fetchContacts} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import Backdrop from "@material-ui/core/Backdrop";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import noImage from "../SingleContact/noImage.png";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    viewContact: {
        width: '50vw',
        padding: '20px',
        textAlign: 'center'
    },
    btnBlock: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btn: {
        width: '30%'
    },
    image: {
        height: '20vh',
        width: 'auto'
    }
}));

const ViewContact = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const removeContact = async id => {
        await dispatch(deleteContact(id));
        await dispatch(fetchContacts());
        props.click();
    };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open}>
                <Paper className={classes.viewContact}>
                    <div>
                        <img src={props.image ? 'http://localhost:8000/uploads/' + props.image : noImage}
                             alt={props.name}
                             className={classes.image}/>
                        <h3>{props.name}</h3>
                        <p><b>Phone:</b> {props.phone}</p>
                        {props.email ? <p><b>Email:</b> {props.email}</p> : null}
                        {props.address ? <p><b>Address:</b> {props.address}</p> : null}
                        {props.website ? <p><b>Website:</b> {props.website}</p> : null}
                    </div>

                    <div className={classes.btnBlock}>
                        <Button variant="contained"
                                color="primary"
                                className={classes.btn}
                            // onClick={formSubmit}
                        >
                            edit contact
                        </Button>
                        <Button variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={() => removeContact(props.id)}
                        >
                            remove contact
                        </Button>
                        <Button variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={props.click}
                        >
                            close
                        </Button>
                    </div>
                </Paper>
            </Backdrop>
        </div>
    );
};

export default ViewContact;