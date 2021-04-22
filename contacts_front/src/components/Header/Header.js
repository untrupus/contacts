import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AddContactForm from "../AddContactForm/AddContactForm";
import LetterSort from "../LetterSort/LetterSort";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1,
        },
    }

}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

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
                    {!matches ? <LetterSort/> : null}
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