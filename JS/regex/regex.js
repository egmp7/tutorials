/* 1. test function */

string = "Hello World"
regex = /World/
//console.log(regex.test(string))

/* 2. or */

string = "Hello World"
regex = /World|world/
//console.log(regex.test(string))

/* 3. case sensitive */

string = "Hello World"
regex = /world/i
//console.log(regex.test(string))

/* 4. match function -> return the string */

string = "Hello World"
regex = /World/
//console.log(string.match(regex))

/* 5. repetition with match */

string = "Hello  hello World"
regex = /hello/gi
test = string.match(regex);
//console.log(test)

/* 6. Wildcard period . */

string = "Hellooo  World"
regex = /.ll../
//console.log(string.match(regex))

/* 7. Character Classes */

quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
vowelRegex = /[aeiou]/i; 
result = quoteSample.match(vowelRegex);
//console.log(result);

/* 8. Match Letters of the Alphabet */

quoteSample = "The quick brown fox jumps over the lazy dog.";
alphabetRegex = /[a-z]/gi; 
result = quoteSample.match(alphabetRegex); 
//console.log(result);

/* 9. Match Numbers and Letters of the Alphabet */

quoteSample = "Blueberry 3.141592653s are delicious."; 
myRegex = /[h-s2-6]/gi; 
result = quoteSample.match(myRegex); 
//console.log(result);

/* 10. Match Single Characters Not Specified */

quoteSample = "3 blind mice.";
myRegex = /[^aeiou0-9]/gi; 
result = quoteSample.match(myRegex); 
//console.log(result);

/* 11. Match Characters that Occur One or More Times */

difficultSpelling = "Mississippi";
myRegex = /s+/g; 
result = difficultSpelling.match(myRegex);
//console.log(result);

/* 12. Match Characters that Occur Zero or More Times */

chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
chewieRegex = /Aa*/;
result = chewieQuote.match(chewieRegex);
//console.log(result);

/* 13. Find Characters with Lazy Matching */

text = "<h1>Winter is coming</h1>";
myRegex = /<[a-z0-9]*>/g; 
result = text.match(myRegex);
//console.log(result)

/* 14. Match Beginning String Patterns */

rickyAndCal = "Cal and Ricky both like racing.";
calRegex = /^Cal/; 
result = calRegex.test(rickyAndCal);
//console.log(result)

/* 15. Match Ending String Patterns */

caboose = "The last car on a train is the caboose";
lastRegex = /caboose$/;
result = lastRegex.test(caboose);
//console.log(result);

/* 16. Match All Letters and Numbers w wildcard*/

quoteSample = "The five boxing wizards jump quickly.";
alphabetRegexV2 = /\w/g; 
result = quoteSample.match(alphabetRegexV2);
//console.log(result)

/* 17. Match Everything But Letters and Numbers */

quoteSample = "The five boxing wizards jump quickly.";
nonAlphabetRegex = /\W/g; 
result = quoteSample.match(nonAlphabetRegex);
//console.log(result)

/* 18. Match All Numbers */

movieName = "2001: A Space Odyssey";
numRegex = /\d/g; 
result = movieName.match(numRegex).length;
//console.log(result);

/* 19. Match All Non-Numbers */
movieName = "2001: A Space Odyssey";
noNumRegex = /\D/g; 
result = movieName.match(noNumRegex).length;
//console.log(result);

/* 20. Match Whitespace  class [\r\t\f\n\v] */

sample = "Whitespace is important in separating words";
countWhiteSpace = /\s/g;
result = sample.match(countWhiteSpace);
//console.log(result);

/* 21. Match Non-Whitespace Characters */

sample = "Whitespace is important in separating words";
countNonWhiteSpace = /\S/g;
result = sample.match(countNonWhiteSpace);
//console.log(result);

/* 22. Specify Upper and Lower Number of Matches */

A4 = "aaaah";
A2 = "aah";
multipleA = /a{3,5}h/;
multipleA.test(A4); // returns true
multipleA.test(A2); // returns false

/* 23. Specify Only the Lower Number of Matches (less than)*/

haStr = "Hazzzzah";
haRegex = /Haz{4,}ah/; 
result = haRegex.test(haStr); // returns true

/* 24. Specify Exact Number of Matches */

timStr = "Timmmmber";
timRegex = /Tim{4}ber/; 
result = timRegex.test(timStr); // returns true

/* 25. Check for All or None */

favWord = "favorite";
favRegex = /favou?rite/;
result = favRegex.test(favWord); // returns true

/* 26. Positive and Negative Lookahead */

password = "abc123";
checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); //returns true

/* 27. Check For Mixed Grouping of Characters */

myString = "Eleanor Roosevelt";
myRegex = /(Franklin|Eleanor|Franklin D.) Roosevelt/; 
result = myRegex.test(myString); //returns true

/* 28 Use Capture Groups to Search and Replace */

string = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
//console.log(string)


