function myThisFunction() {
    var name = "david";
    var person = {
        name: "john",

        shout: function () {
            console.log("my name is ", this.name);
        },
        shout2: () => {
            console.log("my name is ", name);
        },
    };

    person.shout();  // "john"
    person.shout2(); // "david"
}

myThisFunction();
