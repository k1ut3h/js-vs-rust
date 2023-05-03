function nthPrime(n) {
  let primes = [2]; // initialize the list of primes with the first prime number
  let i = 3; // start checking for primes from 3

  while (primes.length < n) { // keep finding primes until we have n of them
    let isPrime = true;

    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) { // if i is divisible by any previous primes, it's not a prime
        isPrime = false;
        break;
      }
    }

    if (isPrime) { // if i is not divisible by any previous primes, it's a prime
      primes.push(i);
    }

    i += 2; // check the next odd number for primality
  }

  return primes[primes.length]; // return the nth prime number
}

let nth = 100000;
let start = performance.now();
let result = nthPrime(nth);
let heading = document.getElementById("heading");
heading.innerHTML = `${nth}th prime number is: ${result}`;
let end = performance.now();
let elapsed = end-start;
let timeTaken = document.getElementById("timeTaken");
timeTaken.innerHTML = `${elapsed} milliseconds`;
