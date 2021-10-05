using System; 

class Problem {
  static void Main(string[] args) { 
      double a, b, MEDIA;

      a = Convert.ToDouble(Console.ReadLine());
      b = Convert.ToDouble(Console.ReadLine());
      
      //complete com as variaveis
      MEDIA = ((a  * 3.5) + (b  * 7.5)) / (3.5 + 7.5);

      Console.WriteLine("MEDIA = {0}", MEDIA.ToString("0.00000"));
  }
}