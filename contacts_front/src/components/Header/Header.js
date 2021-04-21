import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AddContactForm from "../AddContactForm/AddContactForm";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <AddContactForm
                open={open}
                click={() => setOpen(!open)}
            />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ImportContactsIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        My Contacts
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => setOpen(!open)}
                    >
                        Add Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;