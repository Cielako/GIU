using System;

namespace p0
{
    class Program
    {
        static void Main(string[] args)
        {
            int i,s=0;
            Console.WriteLine("Dzień dobry\nPodaj liczbę składników do wysumowania");
            /*Console.WriteLine(i);*/
            i=int.Parse(Console.ReadLine() );
            Console.WriteLine("Dobrze zrozumiałem - liczba to {0}?", i);
            Console.WriteLine("Albo w ten sposób: " + i);
            Console.WriteLine();
            Console.WriteLine("Podawaj kolejno składniki");
            for (  ; i > 0; i--)
            {
                s += int.Parse(Console.ReadLine() );
            }
            Console.WriteLine("Suma = " + s.ToString() );
            Console.ReadKey();
        }
    }
}
