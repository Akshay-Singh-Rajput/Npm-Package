function isPrime(number) {
    let Prime = true;
    if (typeof number !== 'number') {
        return 'Not a number.';
    }
    if (number === 1) {
        return ("1 is neither prime nor composite number.");
    }

    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                Prime = false;
                break;
            }
        }
        if (Prime) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return ("The number is not a prime number.");
    }
}

module.exports = isPrime;

//code by Akshay https://github.com/Akshay-Singh-Rajput/Npm-Package