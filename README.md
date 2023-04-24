# NodeJs-Assignment-Verstrade

<h3>// Senior/Mid level</h3>

A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - string S is made only of lowercase letters (a−z).

 <h3>Answer:</h3>

 <h4>Solution:</h4> balancedSubstring.js

 <h4>Run Command:</h4> node balancedSubstring.js  (You can test the code in any javascript online compiler also)

 <h4>Description:</h4>

 <h5>isBalanced</h5>

The isBalanced function takes a string str as input and returns true if the string is balanced and false otherwise. A string is considered balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times.

The function first checks if the length of the string is less than 2 or if there are more than 2 unique characters in the string using a Set. If either of these conditions is true, the string is not balanced and the function returns false.

If the string has exactly two unique characters, the function counts the frequency of each character using the reduce method on an array created from the string. The resulting object has keys that correspond to the characters in the string and values that correspond to the frequency of each character.

Finally, the function compares the frequency of the two characters and returns true if they are equal and false otherwise.

 <h5>getBalancedSubstrings</h5>

The getBalancedSubstrings function takes a string S as input and returns an array of the longest balanced substrings of the input string. A substring is a string that consists of consecutive letters in the input string.

The function iterates over all possible substrings of the input string using two nested loops that generate the start and end indices of each substring. For each substring, the function checks if it is balanced using the isBalanced function. If the substring is balanced and its length is greater than or equal to the maximum length of any previously found balanced substrings, the function updates the result array with the current substring.

If the length of the current substring is greater than the maximum length of any previously found balanced substrings, the result array is cleared and the current substring is added to it.

After all substrings have been checked, the function returns the result array containing the longest balanced substrings of the input string.


 <h3>// Senior level</h3>
 
You're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.
At the end of the solution, all Rings should be sorted on Place B just as it was on Plate A.Examples:
1. Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which corresponds to the movements of each Ring on each Plate.
2. Given N = 3, the function should return ["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
3. Given N = 1, the function should return ["1: A to B"]Write an algorithm that assumes the following conditions:
 - Only one Ring can be moved at a time
 - A larger Ring cannot be placed on top of a smaller Ring. Example, Ring 4 can only be placed on Ring 5+ and not on any of Ring 3-
 - Ring diameter cannot be negative
 
 <h3>Answer:</h3>

 <h4>Solution:</h4> migrateRings.js

 <h4>Run Command:</h4> node migrateRings.js  (You can test the code in any javascript online compiler also)

 <h4>Description:</h4>
 
The migrateRings function is a JavaScript function that takes four parameters: N, A, B, and C.

N represents the number of rings that we need to move from plate A to plate B. The rings are sorted in ascending order on plate A, with the largest ring on the bottom and the smallest ring on top.

The function works by recursively moving the rings from plate A to plate B, using plate C as an auxiliary holder. At each step, the function moves one ring from plate A to plate B, making sure that a larger ring is never placed on top of a smaller ring.

The function returns an array of strings, where each string represents a single step in the process of moving the rings. For example, "1: A to B" means that the first ring was moved from plate A to plate B.

The function also includes a check to ensure that N is a positive integer. If N is less than or equal to zero, the function throws an error with a message saying that N must be a positive integer.
