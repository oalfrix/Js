// Document Object Model (DOM) manipulation

// Adding a text to a doc
document.body.innerHTML = "<h1>Hello World</h1>";

// Adding a text to a doc using createElement
const heading = document.createElement("h1");
heading.textContent = "Hello World";
document.body.appendChild(heading);

// Adding a text to a doc using innerHTML
const div = document.createElement("div");
div.innerHTML = "<p>This is a paragraph.</p>";
document.body.appendChild(div);
