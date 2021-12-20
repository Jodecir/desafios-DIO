using System; 

class DIO {
    static void Main(string[] args) { 

        int x = int.Parse(Console.ReadLine());
        if (x % 2 == 0) {
          x += 2;
        } else
        {
          x += 1;
        }
        Console.WriteLine(x);
    }
}