let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Logs: [1, 4, 9, 16, 25]



let people = [
  { name: "A", age: 30 },
  { name: "B", age: 25 },
  { name: "C", age: 35 }
];
let names = people.map(person => person.name);
console.log(names); // Logs: ["A", "B", "C"]




let words = ["apple", "banana", "cherry", "date", "elderberry"];
let lengths = words.map(word => word.length);
console.log(lengths); // Logs: [5, 6, 6, 4, 10]



let students = [
  { name: "Jetha", grade: "A" },
  { name: "Popat", grade: "B" },
  { name: "Bhide", grade: "C" }
];
let grades = students.map(student => {
  return {
    name: student.name,
    grade: student.grade === "A" ? "Excellent" :
           student.grade === "B" ? "Good" :
           student.grade === "C" ? "Average" :
           "Poor"
  };
});
console.log(grades); // Logs: [{name: "Jetha", grade: "Excellent"}, {name: "Popat", grade: "Good"}, {name: "Bhide", grade: "Average"}]




// Define an array of objects representing people
let people = [
  { name: "A", age: 30 },
  { name: "B", age: 25 },
  { name: "C", age: 35 }
];

// Define a function to generate the HTML for a single row of the table
function generateRowHtml(person) {
  return `
    <tr>
      <td>${person.name}</td>
      <td>${person.age}</td>
    </tr>
  `;
}

// Map the array of people to an array of HTML rows
let rows = people.map(generateRowHtml);

// Join the rows together into a single HTML string
let tableHtml = `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      ${rows.join("")}
    </tbody>
  </table>
`;

// Insert the table HTML into the DOM
document.getElementById("my-table").innerHTML = tableHtml;


