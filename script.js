// Array Methods.........
// to string
// Join....
// pop 
// push 
// shift 
// unshift 
// delete [operator]
// concat() 
// sort ()
// splice (1,2,"a",'b','c')
// slice (1,4)   it creates new array between that numbers 
// reverse () reverse method reversd the original array in new array
// isArray (obj) if obj is array so it returns true otherwise it returns false
// indexOf ('element',0)
// lastIndexOf
// Find 
// filter 
// findIndex
// includes (element,starting point) if include it returns true otherwise false
// enteries    : like (indexes)
// every () :if every element passes through given statement thn it returns true otherwise false
// some ()  :if some element passes through given statement thn it returns true otherwise false
// fill ("element" , start, end ) 
// from ()..








// let arr = ["this","is","array ","for ","push ","Method"];
// console.log(arr.push ("scientific ","Notaition"));
// console.log(arr);

// let arr = ["this","is","array ","for ","unshift ","Method"];
// console.log(arr.unshift ("is this"));
// console.log(arr);

// let fruit = ["Grapes","Orange","Banana","Mangeo"];
// delete fruit[2];
// console.log (fruit);

// let ary1 = [1, 2,3,4,5];
// let ary2 = [53, 54,34, 77];
// let ary3 = [83, 44, 97];
// let newAry = ary1.concat(ary2,ary3);
// console.log (newAry);

// let array = newAry;
// newAry.sort();
// console.log(array);


// let array = ['Apple','Mangoe', 'bnana','peach','orange',"dates",'lychi'];
// array.splice(2,3,"a","b","c");
// console.log (array);

// let array = [ 1,2,3,4,83,77,7,8];
// let num= array.slice(1,6);
// console.log (num);

// isArray
// let ary = ['Apple','Mangoe', 'bnana','peach','orange',"dates",'lychi'];
// let str =  'this is a string not an array';
// console.log (Array.isArray(ary));
// console.log (Array.isArray(str) );


// let elements = ['mobile'," headset",'earphone','earphone','earphone',"Charger","Laptop"];
// console.log(elements.indexOf('earphone',0));
// console.log(elements.indexOf('earphone',5));


// let elements = ['mobile'," headset",'earphone','this','that','this','earphone','earphone',"Charger","Laptop"];
// console.log(elements.indexOf('earphone',0));
// console.log(elements.lastIndexOf('earphone',6));

// let array = [1,3,4,5,66,77,44,45,67,89,54,2,10];
// let found = (array.find((Element)=> Element>10));
// console.log (found);

// let array = [1,3,4,5,9,66,77,44,45,67,89,54,2,10];
// let isLargenumber = ((Element)=> Element>10);
// console.log (array.findIndex(isLargenumber));

// let num = [1,2,3,4,5];
// console.log (num.includes(2,1))


// let days= ['sun','mon','tue','wed','thu','fri','sat'];
// let day = days.entries();
// for(let x of days){
//     console.log(x + "\n")
// };

// let array1 =[1,2,3,77,45,66,75,83];
// let value1 = (currentValue) => currentValue <90;
// console.log(array1.every(value1));
// let value2 = (currentValue) => currentValue <45;
// console.log(array1.every(value2));

// let array1 =[1,2,3,77,45,66,75,83];
// let value1 = (currentValue) => currentValue <45;
// console.log(array1.some(value1));

// let array1 =[1,2,3,77,45,66,75,83];
// let fill = array1.fill(35,5,6);
// console.log(fill);


// let days= ['sun','mon','tue','wed','thu','fri','sat'];
// let copy = days.copyWithin(2,0,2);
// console.log(copy);


// from method   .........
// let a = ['this','is ','from ','method'];
// console.log(Array.from(a));
