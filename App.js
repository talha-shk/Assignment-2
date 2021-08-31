// Chapter 17-20

// Task 1

var empty = [

        ["","",""],
        ["",""],
        ["","","",""]
]

// Task 2

var matrix = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1],
]

// Task 3

var i;
for(i = 1; i <= 10; i++){
        document.write(i + "<br>");
}

// Task 4 

var tbl = prompt("Enter the number of the table you want:");
var tbl_len = prompt("Enter the table length:");

for(i = 1; i <= tbl_len; i++){
        document.write(tbl + " x " + i + " = " + (tbl*i) + "<br>");
}

// Task 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i = 0; i < 5; i++){
        document.write(fruits[i] + "<br>");
}
document.write("<br><br><br><br>");
for(i = 0; i < 5; i++){
        document.write("The Element at index " + i + " is " + fruits[i] + "<br>");
}

// Task 6a

for(i = 1; i <=15; i++){
        document.write(i + ", ");
}

// Task 6b

for(i = 10; i >=1; i--){
        document.write(i + ", ");
}

// Task 6c

for(i = 0 ; i <= 20; i++){
        if(i%2 == 0){
                document.write(i + ", ");
        }
}

// Task 6d

for(i = 0 ; i <= 20; i++){
        if(i%2 != 0){
                document.write(i + ", ");
        }
}

// Task 6e

for(i = 0 ; i <= 20; i++){
        if(i%2 == 0){
                document.write(i*1000 + ", ");
        }
}

// Task 7

arr=["Cake","Apple pie","Cookie","chips","patties"]
var inp=prompt()
var j=0;
for(var i in  arr )
{
    if(arr[i]==inp || arr[i] == "")
    {
        document.write(arr[i]+" is avaliable at index ",i," in our bakkery")
        j++
    }
} 
if(j==0)
{
    document.write("We are sorry this items is not in our bakkery");
}


// Task 8

var largest = [255, 10, 192, 91, 2, 111, 400, 321];
for(i = 1; i < largest.length; i++){
        if(largest[0] < largest[i]){
                largest[0] = largest[i]
        }
}
document.write("The largest element is " + largest[0]);

// Task 9

var smallest = [255, 10, 192, 91, 2, 111, 400, 321];
for(i = 1; i < smallest.length; i++){
        if(smallest[0] > smallest[i]){
                smallest[0] = smallest[i]
        }
}
document.write("The largest element is " + smallest[0]);

// Task 10

for(i = 1; i <=20; i++){
        var multiple = i*5
        document.write(multiple + ", ");
}

// chapter 21-25

// Task 1
var firstName = prompt("Enter you first name");
var lastName = prompt("Enter you last name");
var fullName = firstName+" "+lastName;
document.write("Hello "+fullName+" ,Welcome");

// Task 2
var phone = prompt("Enter your favourite mobile: ");
var strLenght = phone.length;
document.write("My favourite phone is: "+phone+"<br>"+"String lenght is: "+strLenght);

// Task 3
var text = "Pakistani";
var index = text.indexOf("n");
document.write("String: "+text+"<br>"+"Index of n: "+index);

// Task 4
var text = "Hello World";
var index = text.lastIndexOf("l");
document.write("String: "+text+"<br>"+"Last Index of l: "+index);

// Task 5
var text = "Pakistani";
var index = text.charAt(3);
document.write("String: "+text+"<br>"+"Character at index 3: "+index);

// Task 6
var firstName = prompt("Enter you first name");
var lastName = prompt("Enter you last name");
var fullName = firstName.concat(lastName);
document.write("Hello "+fullName+" ,Welcome");

// Task 7
var string = "Hyderabad";
var replace = string.replace("Hyder", "Islam");
document.write("City: "+string+"<br>"+"After Replacement: "+replace);

// Task 8
var msg = "Ali and Sami are best friends. They play cricket and football together.";
var msg2 = msg.replace("and", "&");
document.write("Message before: "+msg+"<br>"+"Message after: "+msg2);

// Task 9
var str = "472";
var num = parseInt(str);
document.write("Value: "+str+"<br>"+"Type: "+typeof(str)+"<br>"+"Value: "+num+"<br>"+"Type: "+typeof(num));

// Task 10
var str = "peanuts";
var capSTR = str.toUpperCase();
document.write("User Input: "+str+"<br>"+"Upper case: "+capSTR);

// task 11
var str = "javascript";
var titleCase = str.charAt(0).toUpperCase() + str.slice(1);
document.write("User input: "+str+"<br>"+"Title Case: "+titleCase);

// Task 12
var num = 35.36;
var str = num.toString();
var str1 = str.replace(".", "");
document.write("Number: "+num+"<br>"+"Result: "+str1);

// Task 13
var username = prompt("Enter your name: ");
var arrays = username.split("");
for (let index = 0; index < arrays.length; index++) {
    if (arrays[index] == '@' || arrays[index] == ',' || arrays[index] == '.' || arrays[index] == '!') {
        document.write("Enter a valid username." +"</br>")
        console.log(index);
        break;
    }
    else{
        document.write(username); 
        break; 
    }  
}


// Task 14

var arr = ["cake","apple pie","cookie","chips","patties"]
var a = prompt("Enter value:");
for(var i = 0;i<arr.length;i++)
{
    if(a==arr[i] || a=="coOkIE" ||a=="COOKIE"|| a=="Cookie")
    {
        alert(a+" is avaible at "+i+" in our bakkery ") 
        break       
    }
    else if(a==arr[i] || a=="cakE" ||a=="CAKE"|| a=="Cake")
    {
        alert(a+" is avaible at "+i+" in our bakkery ") 
        break       
    }
    else if(a==arr[i] || a=="Apple Pie" ||a=="APPLE PIE"|| a=="ApplE pIE")
    {
        alert(a+" is avaible at "+i+" in our bakkery ") 
        break       
    }
    else if(a==arr[i] || a=="chIPS" ||a=="CHIPS"|| a=="Chips")
    {
        alert(a+" is avaible at "+i+" in our bakkery ") 
        break       
    }
    else if(a==arr[i] || a=="pattIES" ||a=="PATTIES"|| a=="Patties")
    {
        alert(a+" is avaible at "+i+" in our bakkery ") 
        break       
    }
    else 
    {
        alert("We are sorry! "+a+" is not in our bakkery")
    }
}


// Task 15

var pass = prompt("Enter you password");
var letterNumber = /^[0-9a-zA-Z]+$/;
var number = [0,1,2,3,4,5,6,7,8,9];
if (!number.includes(parseInt(pass.charAt(0)))) {
    alert("password is valid");
}
else{ 
    alert("Password should not start with number");
}
if(pass.match(letterNumber)){
    alert("OK")
}
else{alert("invalid")}

// Task 16
var str = "University of Karachi";
var strArr = str.split("");
for(i=0;i<strArr.length;i++){
    document.write(strArr[i]+"<br>");
}

// Task 17
var str = "Pakistan";
var lastChar = str.charAt(str.length-1);
document.write("String: "+str+"<br>"+"Last character: "+lastChar);

// Task 18
var text = "The quick brown fox jumps over the lazy dog";
var accur = text.split("the").length;
document.write("Text: "+text+"<br>"+"there are "+accur+" accurences of 'the' ");

// Chapter 26-30

// Task 1
var num = parseFloat(prompt("Enter a number"));
document.write("number: "+num+"<br>"+"Round off: "+Math.round(num)+"<br>"+"Floor: "+Math.floor(num)+"<br>"+"Ceil: "+Math.ceil(num)+"<br>");
        
// Task 2
var num = parseFloat(prompt("Enter a negative number"));
document.write("number: "+num+"<br>"+"Round off: "+Math.round(num)+"<br>"+"Floor: "+Math.floor(num)+"<br>"+"Ceil: "+Math.ceil(num)+"<br>");
    
// Task 3
var num = parseInt(prompt("Enter a number to find its absolute"));
document.write("The absolute value of "+num+" is "+Math.abs(num));

// Task 4
var dice = Math.floor((Math.random() * 6) + 1);
document.write("Random dice value: "+dice);

// Task 5
var toss = Math.floor((Math.random() * 2) + 1);
if (toss === 1){
    document.write(toss+"<br>"+"Random coin value: Tail");
}
else{
    document.write(toss+"<br>"+"Random coin value: Head");
}

// Task 6
var num = Math.floor((Math.random() * 100) + 1);
document.write("Random number between 1 to 100: "+num);

// Task 7

var weight = prompt("Enter: ");
var f = parseFloat(weight)
document.write("The weight of the user is: "+f + " Kilograms");


// Task 8
var guess = parseInt(prompt("Guess the number:"));
var num = Math.floor((Math.random() * 10) + 1);
if (num === guess){
    document.write("Congratulations! you got it");
}
else {
    document.write("Sorry, the number is: "+num+"<br>"+"Try again.");
}