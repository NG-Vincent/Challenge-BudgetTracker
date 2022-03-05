// variable to hold db connection
let db;

// connect to IndexedDB database called 'budget_tracker' set to version 1
const request = indexedDB.open("budget_tracker", 1);

// emites when the database version changes
request.onupgradeneeded = function (event) {
   // save a reference to the database
   const db = event.target.result;
   // create an object store (table) called `new_budget`, set it to have an auto incrementing primary key
   db.createObjectStore("new_budget", { autoIncrement: true });
};

// on success
request.onsuccess = function (event) {
   // save reference to db in global variable
   db = event.target.result;

   if (navigator.onLine) {
   }
};

request.onerror = function (event) {
   console.log(event.target.errorCode);
};

// function to execute when no internet connection
function saveRecord(record) {
   // open a new transaction with read and write permissions
   const transaction = db.transaction(["new_budget"], "readwrite");

   // access the object store
   const budgetObjectStore = transaction.objectStore("new_budget");

   // add record
   budgetObjectStore.add(record);
}
