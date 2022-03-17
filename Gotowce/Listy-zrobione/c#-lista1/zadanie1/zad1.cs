using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Podaj liczbe n: ");
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i <= n; i++)
            {
                Console.Write("{0, 5}", i);
            }
            Console.WriteLine("\n");
            for (int i = 1; i <= n; i++)
            {
                Console.Write(String.Format("{0, 5}", i));
                for (int j = 1; j <= n; j++)
                {
                    Console.Write(String.Format("{0, 5}", i * j));      // 0-n znakow, rowna do prawej
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
