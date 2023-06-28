/**
 * Homework #2. Task #4
 * START
 * READ number n
 * numbers a = 0, i = n
 * WHILE i > 0
 *   a = a + i
 *   i = i / 2
 * END
 */
// n/2^n = O(log n)
function task4(n) {
    let a = 0, i = n;
    while (i > 0) { // times = n/2^n
        a = i + 1;
        i = Math.floor(i / 2);
        console.log(a, i);
    }
}
// example
task4(9)