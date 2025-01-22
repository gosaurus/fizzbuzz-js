// Here, we create our main function.
function fizzbuzz(input_number) {
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    function isPrime(number, divisor) {
        // Returns Bool value
        if (number % divisor == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function createArray(array, divisor) {
        if (divisor == 11) {
            array = ["Bong"];
            return array;
        }
        if (divisor == 3){
            array[0] = "Fizz";
        }
        if (divisor == 13) { 
           array[1] = "Fezz";
        }
        if (divisor == 5) {
            array[2] = "Buzz";
        }
        if (divisor == 7) {
            array[3] = "Bang";
        }
        if (divisor == 17) {
            array = reverseArray(array);
        }
        return array;
    }

    // function reorder(array){
    //     let correctOrder = ["Fizz", "Fezz", "Buzz", "Bang"];
    //     let correctOrderMap = correctOrder.map((word, index) => ({index : word}));
    //     }

    function reverseArray(array) {
        return array.reverse();
    }
    
    // main function
    const divisors = [3, 5, 7, 11, 13, 17];
    for (let number = 1; number <= input_number; number++) { 
        let array = [];
        for (divisor of divisors){
            let primeNumber = isPrime(number, divisor); // for each number, call fn isPrime()
            if (primeNumber == true) {
                array = createArray(array, divisor)
            }
        }
        let output = array;
        output == ["Bong"] ? console.log(number, output) : console.log(number, output.join(""));
    }
}
// Now we run the main function...
let input_number = 255;
fizzbuzz(input_number);
