using System;
using System.Text.RegularExpressions;

class Validador {
    public static void Main (string[] args) {
        int stopped = 0;

        do {
            string password = Console.ReadLine();
            if (string.IsNullOrEmpty(password)) break;

            int upperCaseTest = password.Length - Regex.Replace(password, "[A-Z]", "").Length;
            int lowerCaseTest = password.Length - Regex.Replace(password, "[a-z]", "").Length;
            int specialCharTest = Regex.Replace(password, "[a-zA-Z0-9]", "").Length;
            int numberTest = password.Length - Regex.Replace(password, "[0-9]", "").Length;
            int lenghtTest = Math.Min(10, password.Length) * 6;
        
            if (password.ToString() != upperCaseTest.ToString() &&
                password.ToString() != lowerCaseTest.ToString() && 
                password.ToString() == specialCharTest.ToString() &&  
                numberTest.ToString() && lenghtTest.ToString()) {
                Console.WriteLine("Senha valida.");
                stopped = 1;
                        
            } else {
                Console.WriteLine("Senha invalida.");
            }
        } while (stopped != 1);
    }
}