using System;

class DIO {
    static void Main(string[] args) { 
        double i, formula, sequencia = 0;
        
        for ( i = 1; i <= 100; i++ )
        {
            formula = 1 / i;
            sequencia += formula;
        }
        var x = Math.Round(sequencia,2);
        Console.WriteLine(x);
    }
}

// Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
// S = 1 + 1/2 + 1/3 + … + 1/100

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// A saída contém um valor correspondente ao valor de S.
// O valor deve ser impresso com dois dígitos após o ponto decimal.