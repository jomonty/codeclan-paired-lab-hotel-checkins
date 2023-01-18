use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Stirling Archer",
        email: "stirling_archer@icis.com",
        checked_in: false
    },
    {
        name: "Malory Archer",
        email: "malory.archer@icis.com",
        checked_in: true
    },
    {
        name: "Lana Kane",
        email: "lana.kane@icis.com",
        checked_in: false
    },
    {
        name: "Dr Krieger",
        email: "dr_krieger@icis.com",
        checked_in: true
    },
    {
        name: "Cyril Figgis",
        email: "cyril.figgis@icis.com",
        checked_in: false
    },
    {
        name: "Pam Poovey",
        email: "pam.poovey@icis.com",
        checked_in: true
    }
])
