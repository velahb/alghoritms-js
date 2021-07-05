//code here
function Anagram(stringA , stringB)
{
 const aCharMap = buildCharMap(stringA);
 const bCharMap = buildCharMap(stringB);

 if(Object.keys(aCharMap).length != Object.keys(bCharMap).length)
 {

 	return false;
 }
 for(let char in charMap)
 {
   if(aCharMap[char] != bCharMap[char] )
   {

   	return false;
   }

 }
 return true;

}

function buildCharMap(str)
{
  const charMap = {};
  for(let char of str.replace(/[^\W]/g, '').toLowerCase())
  {
   charMap[char] = charMap[char] + 1 || 1

  }
  return charMap;

}
