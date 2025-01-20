

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 105; i++)
    {
        let output = "";
        if (i % 3 == 0){
            output += "Fizz";
        }
        if (i % 5 == 0) {
            output += "Buzz";
        }
        if (i % 7 == 0) {
            output += "Bang";
        }
        if (i % 11 == 0) {
            output += "Bong"
        }

        console.log(i, output);
    }
}

// Now we run the main function...
fizzbuzz();
