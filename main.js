let name = "Alice";
console.log(name); 

//Primitive Data Types
    const name = "Alice"; // String
    const age = 30; // Number
    const isStudent = false; // Boolean
    const address = null; // Null
    let phoneNumber; // Undefined

    console.log(typeof name); // "string"
    console.log(typeof age); // "number"
    console.log(typeof isStudent); // "boolean"
    console.log(typeof address); /  / "object"
    console.log(typeof phoneNumber); // "undefined"


// Concatenation
    let fullName = name + " Smith";
    console.log(fullName); // "Alice Smith"

// Template Literals
    let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(greeting); // "Hello, my name is Alice and I am 30 years old."

// 1 objects

    const person = {
        name: 'Alice',
        age: 30,
        isStudent: false,
        address: {
            street: '123 Main St',
            city: 'Wonderland'
            telephone: '123-456-7890'
        }
    };

    console.log(person.name); // "Alice"
    console.log(person.address.city); // "Wonderland"   

    //Notation
     // 1. Dot Notaition
     
     person.age = 31;
     console.log(person.age); // 31

        // 2. Bracket Notation
        person['isStudent'] = true;
        console.log(person['isStudent']); // true

        person['name'] = 'James';
        console.log(person['name']); // "James"

        
 // 2 arrays

        let formats = ['bold', 'italic', 'underline'];
        console.log(formats); // ['bold', 'italic', 'underline']

        // Accessing array elements
        console.log(formats[0]); // 'bold'
        console.log(formats[2]); // 'underline' 

        // Modifying array elements
        formats[1] = 'strikethrough';
        console.log(formats); // ['bold', 'strikethrough', 'underline']

        // Array length
        console.log(formats.length); // 3

// functions
    function greet(userName) {
        return `Hello, ${userName}!`;
    }
    
    console.log(greet('Alice')); // "Hello, Alice!"
    console.log(greet('Bob')); // "Hello, Bob!" 

    function name() {
        console.log('Hello' + ' ' + name);  
    }
    name('John'); // "Hello John" 


// Calling the function
    name(); // "Hello Alice"   

// Function parameters and arguments
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // 8
    console.log(add(10, 20)); // 30

// Performing operations inside functions
    function multiply(x, y) {
        return x * y;
    } 
    console.log(multiply(4, 5)); // 20
    console.log(multiply(7, 6)); // 42

// Function with no parameters
    function sayHello() {
        return "Hello, World!";
    }
    console.log(sayHello()); // "Hello, World!"

// Function with default parameters
    function greetUser(userName = "Guest") {
        return `Welcome, ${userName}!`;
    }
    console.log(greetUser()); // "Welcome, Guest!"
    console.log(greetUser("Alice")); // "Welcome, Alice!"

// Calculating value inside function
    function calculateArea(length, width) {
        return length * width;
    }
