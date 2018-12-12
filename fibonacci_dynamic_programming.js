let start, end;
// the complexity here is 2^n
function fib (n) {
    let result;
    if (n === 1 || n === 2) {
        result = 1;
    } else {
        result = fib(n - 1) + fib(n - 2);
    }
    return result;
}

// by usigin a memoize algorithm the complexity go down to n
function fib_memo (n) {
    const memo = new Array(n + 1);
    return fib_memo_helper(n, memo);
}
function fib_memo_helper (n, memo) {
    let result;
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n === 1 || n === 2) {
        result = 1;
    } else {
        result = fib_memo_helper(n - 1, memo) + fib_memo_helper(n - 2, memo);
    }
    memo[n] = result;
    return result;
}

// using a bottom up algorithm
function fib_bottom_up (n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    const bottom_up = new Array(n + 1);
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i < n + 1; i++) {
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
    }
    return bottom_up[n]
}


console.log(fib_bottom_up(50))

