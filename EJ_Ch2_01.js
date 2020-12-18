console.log('Eloquent Javascript - Chapter 2: Exercise 1.Looping a Triangle');

//Write a loop that makes seven calls to console.log to output the following triangle:
//#
//##
//###
//####
//#####
//######
//#######
//

var hash = "#"
for (var number = 0; number <= 7; number ++) {
console.log(hash);
	hash = hash + "#"
};
