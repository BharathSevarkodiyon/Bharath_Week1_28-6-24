// 2. Write a program to manipulate arrays (e.g., sort, filter, reduce, map, some, every).

const movies = ["Captain-America", "Ironman", "Real Steal", "Battleship"]


// sort Method in Javascript

console.log(`-----------Sorting----------`);
let sorted_movies = movies.sort().join(", "); // the sort method is used to sort the array in ascending order.
console.log(`The sorted movies in array are ${sorted_movies}`); // it will affect the original array, if we didn't store in a new variable.
console.log(`----------------------------`);


// Filter Method in Javascript

console.log(`-----------Filter-----------`);
let largerMovieName = movies.filter(checkMovieLength) // Filter is used to apply condition on the array to filter the data's
function checkMovieLength(movie){
    return movie.length == 10;  // here I am comparing the length of the data to find the movie title length equals to 10
}
console.log(`${largerMovieName.join(" , ")} has the largest movie title in the array`);
console.log(`----------------------------`);


// Reduce Method in Javascript

console.log(`-----------Reduce-----------`);
let reduseMovie = movies.reduce(getReduce, "Mortal Engine")  // it is used to combine everything into a single array and if we want to add any data in the front of the array. We can make use of 2nd argument inside the reduce()
function getReduce(firstData, lastData){
    return firstData + ", " + lastData; // Here we are concatinating all the data's in the array and returning where the function is called.
}
console.log(reduseMovie);
console.log(`----------------------------`);


// Map Method in Javascript

console.log(`-----------Map--------------`);
movies.map((value, index)=>{  // it is used to loop throught all the elements present in the array.
    ++index;
    let notation;
    if(index===1){notation="st"}else{notation="nd"}
    console.log(`The ${index}${notation}  Movie is ${value}`);
})
console.log(`----------------------------`);


// Some Method in Javascript

console.log(`-----------Some-------------`);
let largerLength = movies.some((movie)=>(movie.length >= 14))  // Here I am checking all the elements in the array, wheather the movie length is equal or more than 10. One movie has a larger movie title length in the array.
console.log(largerLength?`${largerLength}, one or more movie has a larger movie title length in the array`:`${largerLength}, unfortunately no movie has a larger movie title length in the array`);
console.log(`----------------------------`);


// Every Method in Javascript

console.log(`-----------Every------------`);
let commonLength = movies.every((movie)=>(movie.length>=10))  // Here I am checking all the elements in the array, wheather the movie length is equal or more than 10. Unfortunately one movie has a movie length less than 10.
console.log(commonLength?`${commonLength}, all the movies in the array has a common movie title length`:`${commonLength}, unfortunately one or more movie title length is less than common length in the array`);  // if any one condition fails, every() will return false.
console.log(`----------------------------`);