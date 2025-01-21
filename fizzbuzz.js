

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    function isPrime(number){
        let array = []
        if (number % 11 == 0) {
            array = ["Bong"];
            return array;
        }
        if (number % 3 == 0){
            array.push("Fizz");
        }
        if (number % 13 == 0) { 
           array.push("Fezz");
        }
        if (number % 5 == 0) {
            array.push("Buzz");
        }
        if (number % 7 == 0) {
            array.push("Bang");
        }
        if (number % 17 == 0) {
            array = reverseArray(array);
        }
        return array;
    }

    function reverseArray(array) {
        let reversedArray = [...array];
        if (reversedArray.length == 0) {
            reversedArray.push("Xtiple of 17 but empty array");
        }
        else {
            reversedArray = reversedArray.reverse();
        }
        return reversedArray;
    }

    for (let number = 1; number <= 255; number++) { 
        let output = isPrime(number);
        if (output == ["Bong"]) {
            console.log(number, output);
        }
        else {
            output = output.join("");
            console.log(number, output);
        }
    }
}

// Now we run the main function...
fizzbuzz();
