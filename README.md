# Js

- Variables store data temporarily
- Variables without values are idefined variables
- We use Carmel Notation to write variables
    i.e let phoneNumber;

*Const - Can't be changed or reassigned

# Features of a Variable 
    1. it cannot be a reserved keyword
        e.g if,typeof,return,const,let
    2. They are case-sensitive
    3. Should not start with a number
    4. Cannot contain a space or an hyphen
    5. Default value of variables is undefined

# Data Types
   1.1 Primitive Data Types/Value 
       - data is assigned directly to the variable
       - strings,number,boolean,undefined,null,symbols
    
    * We use typeof to check type of variable
        
        eg  const name = 'tappy';
            console.log(typeof name);

    2.1 Reference Data Types
        - Describes about the variable

        eg 2.1.1 OBJECT
            - used when dealing with multiple related variables
            - Object reteral are presented by curly braces{} which contain KEYS (properties of the object)

             **Changing Object Properties
                1. Dot Notation


                2. Bracket Notation

                    - 

            2.1.2 ARRAYS
            - used to represent alist of items
            - Array Literal are presented by square breckets[]
            - each element as an index that determines its position in an array
            - The first elemnt in an array is indexed from zero and not one.
            - The Length of an array is determined by the no of elements in an array
                eg 
                    let studentNames = ['James', 'Mary', 'Tom']
                    console.log(studentNames[1])
            - The types of objects in an array are dynamic(they can change)
            - Different data type can be stored in an array
            - Square Brackets Represent an Empty Array

# Opertors

    - Modulus calculate remainder of a division operator
    - Exponentioation is the number raised to a power of        something
    
    - Increment Operators eg. age++; increase age by one
    - Decrement Operators eg. age--; decrease age by one 

# Comaprison Operators
    - Greater Than >
    - Less Than <
    - Greater Than 0r equal to >=
    - Less Than or equal to <=
    - Not Equal To !=

    && - and - both sides must be true
    || - or - at least one must be true
    ! - not - flips true to false

# Strict Equality and Strict inequality
    - Strict Equality Checks if both data type and data are the same if not it gives FALSE
    - Strict Inequality checks if both the data type and data are not the same and it gives TRUE and FALSE if they are the same
             

# Concatenation
    This is the combanation of two strings together

 


# Functions
    - Set of statement that perfomce a task or calculate value
    - Declared by function keyword
    - Parenthesis are used to follow syntax
    - Curly Braces is the body of function
    - Parameter is the input for the function
    - Arguement is the Value of the parameter

# Document Object Model
    - Takes our html code and turns it to a tree like sturcture and each element becomes a node in the tree ed use document.body to access the body node