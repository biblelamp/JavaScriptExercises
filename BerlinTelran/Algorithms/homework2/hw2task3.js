/**
 * Homework #2. Task #3
 * START
 * READ number n
 * number a = 0
 * FOR i = 0, i < n, i++
 *   FOR j = n, j > i, j--
 *     a = a + i + j
 * END
 */
// n * n = O(n^2)
function task3(n) {
    let a = 0;
    for (let i = 0; i < n; i++) {     // times = n
        for (let j = n; j > i; j--) { // times = n
            a = a + i + j;
            console.log(a);
        }
    }
}
// example
task3(5)