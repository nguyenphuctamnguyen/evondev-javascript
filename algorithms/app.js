// 1. Big O Notation: độ phức tạp của thuật toán
// O(1): [].push(item): best
// O(n): for: good
// O(n^2): nested loop: ok
// O(logn): for([].push(item)): bad
// O(n!): 6!: terrible
function factorial(n) {
    let num = n;
    for (let index = 0; index < n; index++) {
        num = factorial(n - 1);
    }
    return;
}

// Sort n search
