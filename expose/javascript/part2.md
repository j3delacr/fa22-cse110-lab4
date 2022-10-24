**question 1:**
console prints the last value of i, which is 3, because i was declared as a function variable using "var".

**question 2:**
console prints 150, or the last value of the variable *discountedPrice* which is 300 * .5.

**question 3:**
console prints 150, or the last value of the variable *finalPrice* which is (*discountedPrice* * 100) / 100 or the value of *discountedPrice* after rounding.

**question 4:**
this function returns the variable discounted which contains [50, 100, 150].

**question 5:**
error
console tries to print *i* but *i* was declared within the for loop using "let" so its scope is only from lines 6-9.

**question 6:**
error
console tries to print *discountedPrice* but *discountedPrice* was declared within the for loop using "let" so its scope is only from lines 7-9.

**question 7:**
console tries to print *finalPrice* and because *finalPrice* was declared at the beggining of the function using "let" it has the same scope as if it were declared with "var" so its scope isthe whole function. console prints 150, or the last value of the variable *finalPrice* which is (*discountedPrice* * 100) / 100 or the value of *discountedPrice* after rounding.

**question 8:**
this function returns the variable *discounted* which contains [50, 100, 150] when called with discountPrices([100, 200, 300], 0.5).

**question 9:**
error
console tries to print *i* but *i* was declared within the for loop using "let" so its scope is only from lines 6-8.

**question 10:**
console prints the variable *length* which was declare at the beggining of the fucntion with "const" as the value 3.t this value doesnt change and so line 12 prints 3.

**question 11:**
this function returns the variable *discounted* which contains [50, 100, 150] when called with discountPrices([100, 200, 300], 0.5). line 7 having const doesnt affect the outcome because this variable is created and destroyed after every iteration.

**question 12:**\
a1. student.name \
b. student['Grad Year']\
c. student.greeting()\
d. student['Favorite Teacher'].name\
e. student.courseLoad[0]\

**question 13:**\
a. 32, 3 is treated as a string so we the *+* concatenates\
b. 1, 3 is treated as a string so but the *-* is not a function for strings so then its treated as an integer.\
c. 3, 3 is treated as a number and adding null does nothing to the number.\
d. 3null, 3 is treated as a string and concatenating null adds null to the end.\
e. 4, true is treated as the number 1 so we add 3.\
f. 0, false is treated as the number 0 and null as the number 0, so adding them is equal to 0.\
g. 3undefined, 3 is treated as a string and we concatenate undefined to it\
h. NaN, neither '3' nor undefined are a number so the answer is NaN(Not-A-Number)\

**question 14:**\
a. true, value of string '2' is greater than 1\
b. false, value of string '2' is not less than the value of '12', because 2 is alphabetically greater than 1.\
c. true, converts type int to string and string to int and both are equal to each other.\
d. false, compares the type of the variable and the content and the types are different.\
e. false, true is converted into 1 and is the compared to the number 2, which is not equal so the answer is false\
f. true, the type are compared and they are both boolean so we then compare the contents, Boolean(2) is equal to true because any number that is not 0 is converted into true. then we check is true === true\

**question 15:**
== compares the content and does type conversion while === compares the variable type as well as the content.

**question 17:**
[2, 4, 6]
we pass the array [1, 2, 3] and the function name doSomething. the modifyArray function will go through every element in the array passed and do calculations on it based on the function so for every item in the array we will multiply that number times 2.

**question 19:**\
1\
4\
3\
2\
