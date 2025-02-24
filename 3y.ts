var welcome = name => 'Hello' + ' ' + name;
var user = {
 name: 'Bob'
};
var result = welcome(user.name);
console.log(result); //Hello Bob
var result = welcome(user);
console.log(result);// ошибка, невозможно преобразовать без параметра