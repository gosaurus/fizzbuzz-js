

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 143; i++)
    {
        let output = "";

        if (i % 3 == 0){
            output += "Fizz";
        }
        if (i % 11 == 0) {
            output = "Bong";
        }
        if (i % 13 == 0 || (i % 13 && i % 11)) { //Bong printed before fezz
            output += "Fezz";
        }
        if (i % 5 == 0) {
            output += "Buzz";
        }
        if (i % 7 == 0) {
            output += "Bang";
        }
        // if (i % 17 == 0) {
        //     let splitString = output.match(/[A-Z][a=z]+/g);
        //     }
        console.log(i, output);
    }
}

// Now we run the main function...
fizzbuzz();
