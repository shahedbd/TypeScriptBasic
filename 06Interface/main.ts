interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'R M Shahidul Islam',
    // lastName: 'Shahed'
}

fullName(p);

