function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const nTermes = 10;
for (let i = 0; i < nTermes; i++) {
    console.log(fibonacci(i));
}
