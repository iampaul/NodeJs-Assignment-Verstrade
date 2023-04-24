# NodeJs-Assignment-Verstrade

<h3>// Senior/Mid level</h3>

A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - string S is made only of lowercase letters (a−z).

 <h3>Answer:</h3>

 <h4>Solution:</h4> balancedSubstring.js

 <h4>Run Command:</h4> Node balancedSubstring.js  (You can test the code in any javascript online compiler also)

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
