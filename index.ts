

// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


const makeSandwich = (...items: string[]): void => {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
      console.log(`- ${item}`);
    });
    console.log("Sandwich is ready!\n");
  };
  
  // Call the function with different numbers of arguments
  makeSandwich("Chicken", "Chedder cheese", "leaf", "ketchup");
  makeSandwich("Beef", "Butter", "Spices");
  makeSandwich("Olives", "Fish");
  