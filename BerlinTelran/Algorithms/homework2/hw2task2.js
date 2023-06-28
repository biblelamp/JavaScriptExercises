/**
 * Homework #2. Task #2
 * START
 * READ number n
 * numbers i = 0, j = 0, a = 0
 * FOR i = n/2, i <= n; i++
 *   FOR j = 2, j <= n, j * 2
 *     a = a + n / 2
 * END
 */
// n/2 * log(n) = O(n log n)
function task2(n) {
    let a = 0;
    for (let i = n/2; i <= n; i++) {      // times = n/2
        for (let j = 2; j <= n; j *= 2) { // times = log(n)
            a = a + n / 2;
            console.log(a);
        }
    }
}
// example
task2(5);