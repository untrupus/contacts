import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {addContact, fetchContacts} from "../../store/actions";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    addContact: {
        width: '50vw',
        padding: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
    },
    btnBlock: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btn: {
        width: '45%'
    },
    field: {
        marginBottom: '10px'
    },
    label: {
        marginBottom: '20px'
    }
}));

const AddContactForm = (props) => {
    const classes = useStyles();
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [contactData, setContactData] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        website: '',
        image: ''
    });

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

    const formSubmit = (e) => {
        if (contactData.name !== '' || contactData.phone !== '') {
            e.preventDefault();
            const formData = new FormData();
            Object.keys(contactData).forEach(key => {
                formData.append(key, contactData[key]);
            });

            dispatch(addContact(formData));
            dispatch(fetchContacts());

            setContactData({
                name: '',
                phone: '',
                address: '',
                email: '',
                website: '',
                image: ''
            });
            props.click();
        }
    };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open}>
                <Paper className={classes.addContact}>
                    <form onSubmit={formSubmit}>
                        <div>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                name="name"
                                value={contactData.name}
                                onChange={inputChangeHandler}
                                className={classes.field}
                            />
                            <TextField
                                required
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
                        <input
                            accept="image/*"
                            style={{display: 'none'}}
                            id="button-file"
                            multiple
                            name='image'
                            ref={inputRef}
                            onChange={fileChangeHandler}
                            type="file"
                        />
                        <label htmlFor="button-file">
                            <Button variant="contained"
                                    component="span"
                                    fullWidth
                                    color="primary"
                                    className={classes.label}
                            >
                                add photo
                            </Button>
                        </label>

                        <div className={classes.btnBlock}>
                            <Button variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.btn}
                                    onClick={formSubmit}
                            >
                                add contact
                            </Button>
                            <Button variant="contained"
                                    color="primary"
                                    className={classes.btn}
                                    onClick={props.click}
                            >
                                cancel
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Backdrop>
        </div>
    );
};

export default AddContactForm;