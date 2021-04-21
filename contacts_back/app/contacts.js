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

router.get('/:id', async (req, res) => {
    const result = await Contact.findById(req.params.id);
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

module.exports = router;