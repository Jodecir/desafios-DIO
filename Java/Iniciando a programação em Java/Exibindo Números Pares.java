import java.io.IOException;
import java.util.Scanner; 

public class exibidorPar {
  public static void main(String[] args) throws IOException {
    Scanner ler = new Scanner(System.in);         
    int number = ler.nextInt();
    for (int i = 2 ; i <= number ; i = i + 2) {
        System.out.println(i);
    }
  }
}

//Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.