using System;
using System.Text;

namespace BethanysPieShop
{
    internal class SBuilder
    {
        public static void ExecuteStringBuilder()
        {
            StringBuilder sb = new StringBuilder(); 
            //------------------ Append methods-------------------------
            sb.Append("Hello");
            sb.Append(" ");
            sb.Append("world");
    Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            //-------------------------- AppendLine method----------------
            sb.AppendLine("!");
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            // -------------------------Insert method-----------------------
            sb.Insert(5, "C# ");
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            //---------------------- Remove method------------
            sb.Remove(6, 2); // Removes "C#" 
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            //----------------------- Replace method---------------------------------
            sb.Replace("world", "universe");
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            //-------------- Clear method-------------------------    sb.Clear();
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            // ----------------Length property-----------------------------
            sb.Length = 10; // Set length to 10 characters
Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
            // ----------------Print the final StringBuilder object------------------------
            Console.WriteLine($"Final StringBuilder object: {sb.ToString()}");
        }
    }
}

