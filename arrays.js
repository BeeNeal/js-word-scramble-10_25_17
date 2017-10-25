function randomString(words) {
... let i = [Math.floor(Math.random() * words.length)];
... return [i, words[i]];
... }

randomString(["today","I","ate","sandwich"])
[ [ 0 ], 'today' ]

/*
ar  = [1, 2];
[ 1, 2 ]
> [ar[1], ar[0]] = [ar[0], ar[1]]
[ 1, 2 ]
> ar
[ 2, 1 ]
*/

function randomString(words) {
... return Math.floor(Math.random() * words.length);
... }


one = randomString(arr3)
2
> two = randomString(arr3)
4
> [arr3[one], arr3[two]] = [arr3[two], arr3[one]]
[ 'demo', 'a' ]
> arr3
[ 'This', 'is', 'demo', 'great', 'a' ]

//
Map {
  'purple' => 'grape',
  'red' => 'raspberry',
  'pink' => 'watermelon',
  'blue' => 'blueberry',
  'green' => 'avocado' }


for (let k of candy) {
... console.log(`The ${k[1]} is colored ${k[0]}`)
... }
The grape is colored purple
The raspberry is colored red
The watermelon is colored pink
The blueberry is colored blue
The avocado is colored green

//
function candyFlavor(color, candy) {
let flavor = candy.get(color);
if (flavor.length > 0) {
console.log(`${color} is flavored ${flavor}`);
}
else {
    console.log("Sorry, that color doesn't have a flavor.");
    }
}
