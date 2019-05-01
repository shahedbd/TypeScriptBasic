class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;

    }

    geetings() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Shahed');
console.log(emp1.employeeName);
console.log(emp1.geetings());



class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);

    }

    delegatework() {
        console.log('Manager delegating tasks');
    }
}

let m1 = new Manager('Mr. Shahed');
m1.delegatework();
m1.geetings();
console.log(m1.employeeName);



