var arr =
$input = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

//input variable, list of arrays 
function MapValuesToHighest( arr ) { 
  return arr.map(function( valueArr ) {  //using ".map" creates a new array with the results of a separate called function
   return Math.max( ...valueArr ); // using "Math.max" allows me to receive the max vaule of each array
});
} //function that returns highest value of arrays 

console.log(MapValuesToHighest($input)); // 7, 90, 2

//console log displaying the highest vaule of each of array

var input = [ 0, 2, 4, 6 ];

function YeetMyArrXD( arr ) {
  return arr.concat( [ ...arr ].reverse().slice(1) );
}
//duped the output and reversed and cut the first value to optain the result
console.log( YeetMyArrXD( input ) );