using System;

namespace zadanie1
{
    class Program
    {
        static void Tabliczka(int n)
        {
            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= n; j++)
                {
                    Console.Write(string.Format("{0, " + (n / 2 + 1) + "}", i * j));  // {0, n/2 + 1} wyznacza ile znaków będzie miało wypisanie, czyli dla np. n=5 wypisanie będzie zajmować 3 pola
                }
                Console.WriteLine();
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Wpisz liczbe do której utworzy się talbiczka mnożenia");
            Tabliczka(int.Parse(Console.ReadLine()));
        }
    }
}
