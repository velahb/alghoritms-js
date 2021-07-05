
//hago mayuscula las primeras letras de una frase
function capitalizePhrase(str)
{
  //hago mayuscula la primera letra
  let result = str[0].toUpperCase();
 //recorro frase
  for(let i = 1 ; i< str.length; i++)
  {
    //controlo el espacio de la izquierda para hacer mayuscula
   if(str[i - 1] === ' ')
   {
     result+=str[i].toUpperCase();
   }
   else
   {
     result+=str[i];
   }
 
  }
  
   return console.log(result);
}
