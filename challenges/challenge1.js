/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function() {
    action();
  }, 0);
}
console.log('Step 1');

snooze( function() {
  console.log('Step 2');
  console.log("Async Action completed via callback");
} );

console.log('Step 3');

/* ANSWERS: */

/* 1. The outputs would be
Step 1
Step 3
Step 2

I know this because console.log('step 1') is printed first. 
Then the snooze function is called however, because of the delay, it is not executed until after the delay which means step 3 is printed. 
After the delay, step 2 is printed
*/

/* 2. The output was
Step 1
Step 3
Step 2
*/

/*3. I think the output will stay the same. 
I think this because the delay is still there, it is just set to 0.
The output was 
Step 1
Step 3
Step 2
*/