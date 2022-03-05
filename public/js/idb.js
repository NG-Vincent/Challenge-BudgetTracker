// variable to hold db connection
let db;

// connect to IndexedDB database called 'budget_tracker' set to version 1
const request = indexedDB.open("budget_tracker", 1);
