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
            phone: "12345645675",
            address: "6886 Molly Camp Suite 564",
            image: "1.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Britney Spinka",
            phone: "463456457567",
            address: "6886 Molly Camp Suite 564",
            image: "2.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Jammie Jacobs V",
            phone: "33465567568",
            address: "6886 Molly Camp Suite 564",
            image: "3.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Hans Sawayn",
            phone: "1245456463",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Mrs. Michele Pfeffer",
            phone: "23678765443",
            address: "6886 Molly Camp Suite 564",
            image: "4.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Wade Ward",
            phone: "345577878989",
            address: "6886 Molly Camp Suite 564",
            image: "5.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Al Brekke",
            phone: "345646576788892",
            address: "6886 Molly Camp Suite 564",
            image: "6.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Theresa Hayes",
            phone: "4567689876543",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Jamison Will",
            phone: "234567876543456",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Sonny Macejkovic",
            phone: "456678898",
            address: "6886 Molly Camp Suite 564",
            image: "7.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Rafaela Grimes",
            phone: "1234466768",
            address: "6886 Molly Camp Suite 564",
            image: "8.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Virgil Bayer",
            phone: "12434656889890",
            address: "6886 Molly Camp Suite 564",
            image: "9.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Yazmin Kuphal",
            phone: "234345668980",
            address: "6886 Molly Camp Suite 564",
            image: "10.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Carlotta Nikolaus",
            phone: "567899008765445",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Gus Schiller",
            phone: "234566788990",
            address: "6886 Molly Camp Suite 564",
            image: "11.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Helmer Mitchell",
            phone: "2345678899090",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Kylie Keeling",
            phone: "23445668899090",
            address: "6886 Molly Camp Suite 564",
            image: "12.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Anna Zboncak",
            phone: "12234567876543",
            address: "6886 Molly Camp Suite 564",
            image: "1.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Easter Walsh",
            phone: "987654323456",
            address: "6886 Molly Camp Suite 564",
            image: "4.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Miss Jameson Mertz",
            phone: "6787654567",
            address: "6886 Molly Camp Suite 564",
            image: "6.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Hunter Bashirian",
            phone: "2345688980",
            address: "6886 Molly Camp Suite 564",
            image: "11.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Weldon Corwin",
            phone: "1234567876543",
            address: "6886 Molly Camp Suite 564",
            image: "2.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Arnaldo Funk ",
            phone: "23456765434",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Javon Cummerata",
            phone: "12345676543",
            address: "6886 Molly Camp Suite 564",
            image: "8.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Clint Kautzer",
            phone: "345667788987",
            address: "6886 Molly Camp Suite 564",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Carleton Pfeffer",
            phone: "1234455767878",
            address: "6886 Molly Camp Suite 564",
            image: "10.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Linnea Borer",
            phone: "234567876553423434",
            address: "6886 Molly Camp Suite 564",
            image: "1.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Marcelo Walker",
            phone: "23544576878799",
            address: "6886 Molly Camp Suite 564",
            image: "5.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Helen King",
            phone: "1234567876543",
            address: "6886 Molly Camp Suite 564",
            image: "7.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },{
            name: "Andy McLaughlin",
            phone: "13456688923",
            address: "6886 Molly Camp Suite 564",
            image: "9.jpeg",
            email: "anna@gmail.com",
            website: "quinn.com"
        },
    );

    db.close();
});