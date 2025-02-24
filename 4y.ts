var add = (a, b) => a + b;
var results = add(5, 5); 
console.log(results); //10
var result = add('Hello', 5);
console.log(result);// Hello5
var welcome = name => 'Hello' + ' ' + name;
var user = {
 name: 'Bob'
};
var result = welcome(user.name);
console.log(result); //Hello Bob
var result = welcome(user);
console.log(result);// Hello [object Object] не задан параметр
