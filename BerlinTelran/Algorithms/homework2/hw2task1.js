/**
 * Homework #2. Task #1
 * START
 * READ number n
 * IF n == 1 THEN return
 * FOR i = 1, i <= n, i++
 *   FOR j = 1; j <= n, j++
 *     print "*"
 *     BREAK
 * END
 */
// best O(1) worst O(n)+1 = O(n)
function task1(n) {
    if (n === 1) {
        return;
    }
    for (let i = 1; i <= n; i++) {     // times = n
        for (let j = 1; j <= n; j++) { // times = 1
            console.log("*");
            break;
        }
    }
}
// example
task1(5);