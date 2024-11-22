//Task2 
function calculatef(arr=[]){
    // Calculate the sum of array by reduce
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    
  // Return the sum,avarge and Calculate the Average of array by reduce 

    return { sum, avg: sum / arr.length };
}
console.log(calculatef([1, 2, 3, 4, 5]));

// Task3

// Function to remove duplicates from an array
function RemovesDuplicates(Str=[]){
    return [...new Set(Str)];
}
// Array for testing the function
console.log(RemovesDuplicates(["yasmeen","mosa","mosa","Rasheed","yasmeen","Rasheed"]));
