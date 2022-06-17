/*
You are given an integer array a that contains only digits 0-9. Remove all zeros from the start and end of a.
It is guaranteed that array a has at least two non-zero elements.

Code Limit
Less than 53 characters.

Example
For a = [0, 9, 0, 4],
the output should be [9, 0, 4].

For a = [0, 9, 5, 0, 0, 0, 0, 2, 0, 0],
the output should be [9, 5, 0, 0, 0, 0, 2].

For a = [1, 6, 0, 2],
the output should be [1, 6, 0, 2].
*/

removeZeros=a=>eval(`[${/[^0,].*[^0,]/.exec(a)}]`)