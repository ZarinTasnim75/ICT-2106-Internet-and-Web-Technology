var a=10;
var a=12;
document.writeln(a);

//let a=100;
//document.writeln(a); //error dekhabe kintu browser e vul ta dhorte pare na, console e pabo.console e runtime error dekhay.jodi browser e kono error dekhay tobe ta compile time erroe
let b=100;
document.writeln(b);
//let b=12; shows compile time error
let c="Meawrer";
let v=23.566;
document.writeln(typeof(b));
document.writeln(typeof(c));
document.writeln(typeof(v)); // console e string likhte single quotation use korte hobe. kintu vs code e double quotation hobe

//Type casting

//Number to String
let s=b.toString();
document.writeln(s);

// String to number
let x="100";
x=parseInt(x);
document.writeln("</br>"+typeof(x));
let y="100.75";
let z=12.676;
y=parseFloat(y);
document.writeln("</br>"+typeof(y)); // NaN means not a number

document.writeln("</br>"+Number("ASDDDF"));
document.writeln("</br>"+Number("12"));
document.writeln("</br>"+Number("ASDDDF"));

// user input
// let studFirstName=prompt("Enter your first name");
// let studLastName=prompt("Enter your last name");
//document.writeln("</br> <p style='color:red;'>"+ studFirstName+ " " +studLastName+"</p>");

// task 1
let p=prompt("Enter value of p");
let q =prompt("Enter value of q");
p=parseInt(p);
q=parseInt(q);
let r=p+q;
document.writeln("</br> <p style='color:red;'>", p+q, +" ",+ p-q+" "+p*q+" "+p/q);
let u=p-q;
document.writeln("</br> <p style='color:green;'>", u);
document.writeln("</br> <p style='color:green;'>", (5/9)*(p-32));