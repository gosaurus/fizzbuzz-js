

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 143; i++)
    {
        let output = "";
        let arr = []
        if (i % 3 == 0){
            arr.push("Fizz");
        }
        if (i % 11 == 0) {
            output = "Bong";
        }
        if (i % 13 == 0) { 
           arr.push("Fezz");
        }
        if (i % 5 == 0) {
            arr.push("Buzz");
        }
        if (i % 7 == 0) {
            arr.push("Bang");
        }
        if (output == "Bong") {
            console.log(i, output);
        }
        else {
            output = arr.join("");
            console.log(i, output);
        }
    }
}

// Now we run the main function...
fizzbuzz();
