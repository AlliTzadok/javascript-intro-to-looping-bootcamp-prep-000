function forLoop(array){
  for(var i=0; i<25; i++){
    if (i===1){
      array.push("I am 1 strange loop.");}
      else{
        array.push(`I am ${i} strange loops.`);}
  }
  return array;
}

<<<<<<< HEAD
let n = 100;
function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return ("done");
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array){
  array.pop();
  while (array.length > 0 && maybeTrue());
  return array;
=======
function whileLoop(n){
  while (number>0){
    console.log(--n)
  }
  return ("done");
>>>>>>> fe4e70c27d7ab21366596d1a11b5ad4f4bf900a2
}