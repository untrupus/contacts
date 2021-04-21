const express = require('express');
const router = express.Router();
const config = require("../config");
const Contact = require("../models/Contact");

router.get('/', async (req, res) => {
    const result = await Contact.find();
    if (result) {
        res.send(result);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', config.upload.single("image"), async (req, res) => {
    const contactData = req.body;
    if (req.file) {
        contactData.image = req.file.filename;
    }
    const contact = new Contact(contactData);

    try {
        await contact.save();
        res.send(contact);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    const result = await Contact.findByIdAndRemove({_id: req.params.id});
    if (result) {
        res.send("Contact removed");
    } else {
        res.sendStatus(404);
    }
});

router.put('/edit/:id', config.upload.single("image"), async (req, res) => {
    let editedContact = req.body;
    if (req.file) {
        editedContact.image = req.file.filename;
    }

    const result = await Contact.findByIdAndUpdate(req.params.id, editedContact);

    if (result) {
        try {
            res.send('Success');
        } catch (e) {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;