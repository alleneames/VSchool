var socialTeam = {
    leader: "Victoria",
    usaSupport: true,
    location: "SLC",
    teamMembers: [
        {
            name: "Manny",
            age: 27,
            supportSite: [
                "MX", "CA", "US"
            ]
        },
        {
            name: "Velvet",
            age: 84,
            isTooOld: function() {
                console.log("So little time left!!!");
            },
            supportSite: [
                "CA", "US"
            ]
        },
        {
            name: "Tyler",
            age: 35,
            supportSite: [
                "CA", "US"
            ]
        },
        {
            name: "Conor",
            age: 37,
            livesInEU: function() {
                console.log("Brit all the way!!!")
            },
            supportSite: [
                "CA", "US", "DE", "UK"
            ]
        },
        {
            name: "Trinton",
            age: 29,
            supportSite: [
                "CA", "US", "UK"
            ]
        }
    ]
}

socialTeam.teamMembers[3].livesInEU();
