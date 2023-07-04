import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Typescript Workspace</h1>`;

/**QUESTION 1. Deep Clone DOM elements without any third-party plugins***/
let cloneMyTable = () => {
  //WRITE YOUR LOGIC HERE
};
document.getElementById('copyTable').addEventListener('click', function (e) {
  if (e.target) {
    cloneMyTable();
  }
});
/**QUESTION 2 **/
let people = [
  { firstname: 'john', lastname: 'doe', Age: 19, Income: 20000 },
  { firstname: 'rick', lastname: 'marty', Age: 42, Income: 42000 },
  { firstname: 'james', lastname: 'bond', Age: 33, Income: 5000 },
];

let teen; //Write your logic here
let totalIncome; //Write your logic here

/**QUESTION 2.a Return all users with Age < 20  **/
appDiv.innerHTML += `<h3>2.a) Return all users with Age < 20 </h3>`;
appDiv.innerHTML += `<p>Output: ${JSON.stringify(teen)}</p>`;

/**QUESTION 2.b Get the total income of all the users.   **/
appDiv.innerHTML += `<h3>2.b) Get the total income of all the users. </h3>`;
appDiv.innerHTML += `<p>Output: ${JSON.stringify(totalIncome)}</p>`;

/**QUESTION 3 **/

/***QUESTION 3.a) Extend the ‘baseConfig’ object with new ‘port’ attribute without mutating the ‘baseConfig’ 
 * Example output 
  basicConfig: {host: 'http:google.com'}
  extendedConfig: {host: 'http:google.com', port: 3000}
 */

const basicConfig = { host: 'http:google.com' };
const extendedConfig = {};
appDiv.innerHTML += `<h3>3.a) Extend the ‘baseConfig’ object with new ‘port’ attribute without mutating the ‘baseConfig’</h3>`;
appDiv.innerHTML += `<p>basicConfig: ${JSON.stringify(basicConfig)}</p>`;
appDiv.innerHTML += `<p>basicConfig: ${JSON.stringify(extendedConfig)}</p>`;
/***QUESTION 3.b) Write a function to extend 'basicConfig' dynamically by using a dynamic key and object as a value? 
  * Example output 
  basicConfig: {host: 'http:google.com'}
  extendedDynamicConfig: {"host":"http:google.com","My key":"My Val","My key2":{"id":"Val1"}}
 */
const extendDynamicConfig = (config, key, val) => {
  //WRITE YOUR LOGIC HERE
};
let extendedDynamicConfig = extendDynamicConfig(
  basicConfig,
  'My key',
  'My Val'
);
extendedDynamicConfig = extendDynamicConfig(extendedDynamicConfig, 'My key2', {
  id: 'Val1',
});

appDiv.innerHTML += `<h3>3.b) Write a function to extend 'basicConfig' dynamically by using a dynamic key and object as a value</h3>`;
appDiv.innerHTML += `<p>basicConfig: ${JSON.stringify(basicConfig)}</p>`;
appDiv.innerHTML += `<p>basicConfig: ${JSON.stringify(
  extendedDynamicConfig
)}</p>`;
