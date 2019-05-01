function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("BANGLADESH");
console.log(output);

//Generic Classes
class KeyValuePair<T, U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }

    display(): void {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "R M Shahidul Islam");
kvp1.display();

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CTO", "ABC Kamal");
kvp2.display(); //Output: Key = CEO, Val = Bill
