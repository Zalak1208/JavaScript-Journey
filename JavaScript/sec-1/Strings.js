const name = "zalak"; // in js sinle quotes as well as double quotes are used to define strings.
const name1 = new String("zalak"); // this is how we create an object of string
const repocount = 50;

//older syntex
console.log(name,repocount,"repositories");
console.log(name + repocount + "repositories"); // this will concatenate the string and number

// newer syntex
console.log(`hello my name is ${name} and i have ${repocount} repositories`); // this is called string interpolation

console.log(typeof name); //string
console.log(typeof name1); // object

console.log(name); // zalak
console.log(name1); // [String: 'zalak']

//**********************************************************************//
// String methods

1. anchor 
const str = "hello world";
console.log(str.anchor("a")); // <a name="a">hello world</a>

2. at
console.log(str.at(0)); // h
console.log(str.at(-1)); // d
// This method also returns the character at the specified index. However, it allows for negative indexing, where at(-1) refers to the last character of the string, at(-2) refers to the second-to-last character, and so on. If the index is out of bounds (either less than -string.length or greater than or equal to string.length), it returns undefined.

3. charAt
console.log(str.charAt(0)); // h
// This method returns the character at the specified index. If the index is out of bounds (either negative or greater than or equal to the string's length), it returns an empty string.

4. big
console.log(str.big()); // <big>hello world</big>
// This method wraps the string in <big> tags, which is a deprecated HTML tag that makes text appear larger. It's not commonly used in modern web development, as CSS is preferred for styling.

5. blink
console.log(str.blink()); // <blink>hello world</blink>
// This method wraps the string in <blink> tags, which is a deprecated HTML tag that makes text blink. It's not commonly used in modern web development, as CSS is preferred for styling.

6. bold
console.log(str.bold()); // <b>hello world</b>
// This method wraps the string in <b> tags, which makes the text bold. It's equivalent to using CSS font-weight: bold;.

7. charCodeAt
console.log(str.charCodeAt(0)); // 104
// This method returns the Unicode value (character code) of the character at the specified index. For example, the character code for 'h' is 104. If the index is out of bounds, it returns NaN. range of charCode is 0 to 65535.

8. codePointAt
console.log(str.codePointAt(0)); // 104
// returns the full Unicode code point value of the character at the given index. This method can handle characters outside the BMP, returning their complete code point value, which may be greater than 65535.

9. concat
const str1 = "hello";
const str2 = "world";   
console.log(str1.concat(" ", str2)); // hello world

10. endsWith
console.log(str.endsWith("world")); // true
console.log(str.endsWith("world", 11)); // true
console.log(str.endsWith("hello")); // false

11. fixed 
console.log(str.fixed()); // <tt>hello world</tt>
// This method wraps the string in <tt> tags, which is a deprecated HTML tag that represents teletype text. 

12. fontcolor
console.log(str.fontcolor("red")); // <font color="red">hello world</font>
// This method wraps the string in <font> tags with a specified color attribute. The <font> tag is deprecated in HTML5, and CSS is preferred for styling text colors.

13. fontsize
console.log(str.fontsize(5)); // <font size="5">hello world</font>
// This method wraps the string in <font> tags with a specified size attribute. The <font> tag is deprecated in HTML5, and CSS is preferred for styling text sizes.

14 includes
console.log(str.includes("world")); // true
console.log(str.includes("world", 6)); // true 6 is starting index

15. indexOf
console.log(str.indexOf("o")); // 4

16. italics
console.log(str.italics()); // <i>hello world</i>

17. isWellFormed
console.log(str.isWellFormed()); // true
// This method checks if the string is well-formed, meaning it doesn't contain any unpaired surrogate halves. It returns true if the string is well-formed and false otherwise.
//A lone surrogate is either a high surrogate (in the range U+D800 to U+DBFF) or a low surrogate (in the range U+DC00 to U+DFFF).

18. lastIndexOf
console.log(str.lastIndexOf("o")); // 7
// The lastIndexOf() method in JavaScript returns the index of the last occurrence of a specified value in a string or an array. It searches the string or array from the end to the beginning. If the value is not found, it returns -1. 

19. length 
console.log(str.length); // 11
// The length property in JavaScript returns the number of characters in a string. It is a read-only property and does not count the null terminator, as JavaScript strings are not null-terminated.

20. link
console.log(str.link("https://www.example.com")); // <a href="https://www.example.com">hello world</a>
// This method wraps the string in <a> tags, creating a hyperlink. The href attribute specifies the URL to which the link points. It's commonly used for creating clickable links in HTML documents.

21. localeCompare
console.log(str.localeCompare("hello")); // 0
console.log(str.localeCompare("banana")); //  1
console.log(str.localeCompare("wood")); // -1

// console.log(string1.localeCompare(string2))
//1: If string1 is greater than string2.
// -1: If string1 is less than string2.    
// 0: If string1 is equal to string2.

22. match
const regex = /l/g;
console.log(str.match(regex)); // [ 'l', 'l' , 'l' ]
// the regex string is defined as /l/g or /[a-h]/g. this string will match all the characters from a to h.
// regex string will match all the characters in str string and return the array of matched characters.

23. matchAll
const regex1 = /l/g;
console.log(str.matchAll(regex1)); // [ [ 'l', index: 2, input: 'hello world', groups: undefined ], [ 'l', index: 3, input: 'hello world', groups: undefined ] ]




