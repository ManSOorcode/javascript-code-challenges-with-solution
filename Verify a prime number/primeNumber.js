//Verify a prime number?

// solution #1
function findPrimes(limit) {
  let isPrime = [];
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    isPrime[i] = true;
  }

  console.log(isPrime);
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;

        console.log(j);
      }
    }
  }
  return primes;
}

const primes = findPrimes(20);
console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19]

// solution #2
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
