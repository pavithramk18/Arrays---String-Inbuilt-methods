console.log("List of Array Inbuilt Methods");

//toString()=>It converts the given array into string format

const array = [1,2,3];
console.log(array.toString());  //1,2,3 

//push()==>it will push the element what we give in the last index

const push = [1,2,3,5,6];
console.log(push.push("image")); //6 ==>denothes the length of the array //includes "image" on the push array
console.log(push);  //[1, 2, 3, 5, 6, 'image']

//pop()==>removes the last element from the given list of array

const pop= ["s",2,7,8,'u',90];
console.log(pop.pop());  //90 //removes the last element from the array i.e 90
console.log(pop);    //['s', 2, 7, 8, 'u']

//shift()==>deletes the first element in the given list of array

const shift = ["a","b","c","d","e"];
console.log(shift.shift());  //a   //removes the first element "a"
console.log(shift);   //['b', 'c', 'd', 'e']

//unshift()==>It will add the given element to the first index of the array

const unshift = ['p','a','v','i','t','h','r','a'];
console.log(unshift.unshift("mk")); //9==>denothes the length of the array //add this mk to the first element of the array 
console.log(unshift);   //['mk', 'p', 'a', 'v', 'i', 't', 'h', 'r', 'a']

//concat==>It will add all the given array into a single array

const a=[1,2,3],b=['p','a','v','i'],c=['t','h','r','a','mk'],d=["B.E"];
var concat = a.concat(b,c,d);
console.log(concat);  //[1, 2, 3, 'p', 'a', 'v', 'i', 't', 'h', 'r', 'a', 'mk', 'B.E']