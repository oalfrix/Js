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
    console.log(typeof address);  // "object"
    console.log(typeof phoneNumber); // "undefined"


//Operations with Strings and Numbers
    let a = 10;
    let b = 5;
    let sum = a + b;
    console.log(sum); // 15

    let difference = a - b;
    console.log(difference); // 5

    let product = a * b;
    console.log(product); // 50

    let quotient = a / b;
    console.log(quotient); // 2

    //exponentiation - raised to power
    let power = a ** b;
    console.log(power); // 1000000
 
    // Modulus
    let remainder = a % b;
    console.log(remainder); // 0


    let age = 39;
    age += 1; // age = age + 1 increment by 1
    console.log(age); // 40
    age -= 2; // age = age - 2 decrement by 2
    console.log(age); // 38

    // increment operator
    age++;
    console.log(age); // 39

    // decrement operator
    age--;
    console.log(age); // 38

    // comparison operators
    let a = 10;
    let b = 5;
    
    // Greater than, Less than, Greater than or equal to, Less than or equal to, Equal to, Not equal to
    console.log(a > b); // true
    console.log(a < b); // false
    console.log(a >= b); // true
    console.log(a <= b); // false
    console.log(a == b); // false
    console.log(a !== b); // true

    //stict equality and strict inequality
    console.log(a === b); // false
    console.log(10 !== '10'); // true




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
            phone: '123-456-7890'
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

// logical operators
    let x = 10;
    let y = 5;
    console.log(x > 5 && y < 10); // true
    console.log(x < 5 || y < 10); // true
    console.log(!(x > 5)); // false 
    console.log(!(y < 10)); // false

// Combining logical operators
    console.log((x > 5 && y < 10) || (x < 5));  
    // true because (x > 5 && y < 10) is true

    console.log((x < 5 || y > 10) && (x > 0)); 
    // false because (x < 5 || y > 10) is false 

    // Else If
        let price = 130

        if (price < 10){
        console.log("Cheaper")
        }else if (price < 60){
        console.log("Good Price")
        }else if (price < 120){
        console.log("fine")
        }else{
        console.log("Too high")
        }

    // && - and - both sides must be true
        
        if (age >= 30 && hasTicket){
            console.log("Access Granted")
        }

    // || - or - at least one must be true

        if (isAdmin || isModerator){
            console.log("Grant Acess")
        }
      
    // ! - not - true becomes false
        if (!isLoggedIn){
            console.log("Redirect To sigin")
        }

    // Loop - Repeat code multiple time
    // While Loop - Continue to execute code as long as condtion is met
       let count = 1
       
       while (count < 100){
        console.log(count)
        count = count + 1 
       }

    //For Loop-  