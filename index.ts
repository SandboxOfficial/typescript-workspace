// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Typescript Workspace</h1>`;

let people = [
  { firstname: 'john', lastname: 'doe', Age: 19, Income: 20000 },
  { firstname: 'rick', lastname: 'marty', Age: 42, Income: 42000 },
  { firstname: 'james', lastname: 'bond', Age: 33, Income: 5000 },
];

let teen;
let totalIncome;

/**QUESTION 1.a Return all users with Age < 20  **/
appDiv.innerHTML += `<h3>1.a) Return all users with Age < 20 </h3>`;
appDiv.innerHTML += `<p>Output: ${JSON.stringify(teen)}</p>`;

/**QUESTION 1.b Get the total income of all the users.   **/
appDiv.innerHTML += `<h3>1.b) Get the total income of all the users. </h3>`;
appDiv.innerHTML += `<p>Output: ${JSON.stringify(totalIncome)}</p>`;
