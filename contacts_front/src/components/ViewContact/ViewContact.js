import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {editContact, deleteContact, fetchContacts} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import Backdrop from "@material-ui/core/Backdrop";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import noImage from "../SingleContact/noImage.png";
import TextField from "@material-ui/core/TextField";

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
    },
    field: {
        marginBottom: '10px'
    },
    label: {
        marginBottom: '20px'
    },
    editBtn: {
        margin: '20px 0',
    },
}));

const ViewContact = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [open, setOpen] = useState(false);
    const [contactData, setContactData] = useState({
        name: props.name,
        phone: props.phone,
        address: props.address,
        email: props.email,
        website: props.website,
        image: ''
    });

    const removeContact = async id => {
        await dispatch(deleteContact(id));
        await dispatch(fetchContacts());
        props.click();
    };

    const closeContactInfo = () => {
        setOpen(false);
        props.click();
    };

    const openEditForm = () => {
        setOpen(!open);
    };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContactData(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setContactData(prevState => ({
            ...prevState, [name]: file
        }));
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(contactData).forEach(key => {
            formData.append(key, contactData[key]);
        });

        await dispatch(editContact(props.id, formData));
        await dispatch(fetchContacts());
        setOpen(false);
        props.click();
    };

    let contactInfo;
    if (!open) {
        contactInfo = (
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
        );
    } else {
        contactInfo = (
            <div>
                <div>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={contactData.name}
                        onChange={inputChangeHandler}
                        className={classes.field}
                    />
                    <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        name="phone"
                        value={contactData.phone}
                        onChange={inputChangeHandler}
                        className={classes.field}
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        name="address"
                        value={contactData.address}
                        onChange={inputChangeHandler}
                        className={classes.field}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={contactData.email}
                        onChange={inputChangeHandler}
                        className={classes.field}
                    />
                    <TextField
                        label="Website"
                        variant="outlined"
                        fullWidth
                        name="website"
                        value={contactData.website}
                        onChange={inputChangeHandler}
                        className={classes.field}
                    />
                </div>
                <TextField
                    accept="image/*"
                    variant="outlined"
                    multiple
                    fullWidth
                    name='image'
                    ref={inputRef}
                    onChange={fileChangeHandler}
                    type="file"
                />

                <Button variant="contained"
                        fullWidth
                        className={classes.editBtn}
                        onClick={formSubmit}
                >
                    edit contact
                </Button>
            </div>
        )
        ;
    }

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open}>
                <Paper className={classes.viewContact}>

                    {contactInfo}

                    <div className={classes.btnBlock}>
                        <Button variant="contained"
                                color="primary"
                                className={classes.btn}
                                onClick={() => openEditForm()}
                        >
                            {!open ? 'edit contact' : 'cancel'}
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
                                onClick={closeContactInfo}
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