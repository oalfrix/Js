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

        