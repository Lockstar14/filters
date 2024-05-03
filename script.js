let family = [{name:"Roman",age:25,sex:"male"},{name:"Galina",age:24,sex:"female"},{name:"Vladimir",age:56,sex:'male'},{name:"Yelena",age:57,sex:"female"}]
let under50 = family.filter(person=>person.age<50)
console.log(under50)