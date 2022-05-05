using System;

namespace Zad1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.Write("Podaj liczbę naturalną: aby utworzyć tabliczkę:");
            int liczba = int.Parse(Console.ReadLine());
            for (int i = 1; i <= liczba; i++)
            {
                for (int j = 1; j <= liczba; j++)
                {
                    int policz = i * j;
                    Console.Write(string.Format("{0," + liczba + "}", policz));
                    if (j == liczba)
                        Console.Write("\n");
                }
            }

        }
    }
}