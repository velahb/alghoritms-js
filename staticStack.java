
import java.util.Stack;

public class Stack
{
    String arr[];
    int maxSize;
    int borderTop;
     public Stack(int n)
     {
         arr = new String[maxSize];
         borderTop = 0;
     }
     public boolean empty()
     {
         if(borderTop == 0)
         {
             return true;
         }
             return false;
     }
     public void push(String str)
     {
         if(borderTop < maxSize)
         {
         arr[borderTop] = str;
         arr[borderTop]++;
         }
     }
     public String peek()
     {
         if(borderTop > 0)
         {
         return arr[borderTop-1];
         }
         else
         {
             return null;
         }
     }
     public String pop()
     {
         String trash  = null ;
         if(borderTop > 0)
         {
             trash = arr[borderTop-1];
             arr[borderTop-1] = 0 ; 
             borderTop--;
         }
         return trash;
     }



}