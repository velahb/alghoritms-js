
/*Write a function that accepts a string. The function should
 capitalize the firs letter of each word in the string then 
 return the capitalized string.
*/

function upper(str)
{
  const words = [];
  for(let word of str.split(' '))
  {
   words.push(word[0].toUpperCase() + word.slice(1));
  }
  return console.log(words.join(' '));
}

