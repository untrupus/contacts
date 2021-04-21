const mongoose = require("mongoose");
const config = require("./config");
const Contact = require("./models/Contact");

mongoose.connect(config.db.url + "/" + config.db.name, {useNewUrlParser: true});

const db = mongoose.connection;

db.once("open", async () => {
    try {
        await db.dropCollection("contacts");
    } catch (e) {
        console.log("Collection were not presented!");
    }

    await Contact.create({
            name: "Anna Conroy",
            phone: "123",
            address: "6886 Molly Camp Suite 564",
            image: "1.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },
    );

    db.close();
});