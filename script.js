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
var concat = b.concat(c,d,a);
console.log(concat);  //['p', 'a', 'v', 'i', 't', 'h', 'r', 'a', 'mk', 'B.E', 1, 2, 3]


//sort()==>will sort i.e ascending order the given array

const arrays=['u','o','e','n','a'];
console.log(arrays.sort());  //['a', 'e', 'n', 'o', 'u']

//reverse==>it will reverse the given array 

const reverse = [1,2,3,'m','k',"Pavithra"];
const rev = [99,88,77,66];
console.log(rev.reverse());   //[66, 77, 88, 99]
console.log(reverse.reverse());  //['Pavithra', 'k', 'm', 3, 2, 1]

//splice(index,to index,elements to be added)  it will delete the element from to index and add the remaining elements

//Example 1
const splicearray=["a","b","c",2,4,"i"];
console.log(splicearray.splice(2,4,"Pavithra"));   //['c', 2, 4, 'i']   
console.log(splicearray);  // ['a', 'b', 'Pavithra']
console.log(splicearray.splice(1,3,9,3));   ['b', 'Pavithra']
console.log(splicearray);  //['a', 9, 3]

//Example 2

const e= [1,2,3,4,5,6];
console.log(e.splice(1,3,99));  [2, 3, 4]
console.log(e);  //[1, 99, 5, 6]

//slice(start index,end index) it will extract the ddat from start index till eend index and give the elements inbetween in an new array


//Example 1
const slice = [1,2,3,4,5,6,8];
console.log(slice.slice(2,3));  //[3]


//Example 2
const slice1= [1,2,"Pavi",'y','e','i',3,6];
var slicearr= slice1.slice(2,5);
console.log(slicearr);   //['Pavi', 'y', 'e']

//includes()==>it will check whether given element present in the array or not if present returns true else false
const include= [1,2,3,5,'i','o'];
console.log(include.includes(3));   //true
console.log(include.includes('p'));  //false
console.log(include.length);





