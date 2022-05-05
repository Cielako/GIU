#region USING
using System;
#endregion

namespace p1
{
    class Przekazywanie
    {
        public void Zamien1(int x, int y, bool czy_rowne)
        {
            int z = x;
            x = y;
            y = z;
            czy_rowne = (x == y);
        }
        public void Zamien2(ref int x, ref int y, ref bool czy_rowne)
        {
            int z = x;
            x = y;
            y = z;
            czy_rowne = (x == y);
        }
        public void Zamien3(ref int x, ref int y, out bool czy_rowne)
        {
            int z = x;
            x = y;
            y = z;
            czy_rowne = (x == y);
        }
    }           // end of class Przekazywanie

    class Test
    {
        static void Main()
        {
            int a1, b1, a2, b2, a3, b3;
            bool wynik1, wynik2, wynik3;
            a1 = a2 = a3 = 1;
            b1 = b2 = b3 = 2;
            Przekazywanie p = new Przekazywanie();

            Console.WriteLine("   Na pocz¹tku a = 1, b = 2");
            Console.WriteLine();

            wynik1 = true;
            p.Zamien1(a1, b1, wynik1);
            Console.WriteLine("Po Zamianie 1: a = {0}, b = {1}, wynik porównania = {2}", a1, b1, wynik1);
            Console.WriteLine();

            wynik2 = true;
            p.Zamien2(ref a2, ref b2, ref wynik2);
            Console.WriteLine("Po Zamianie 2: a = {0}, b = {1}, wynik porównania = {2}", a2, b2, wynik2);
            Console.WriteLine();

            p.Zamien3(ref a3, ref b3, out wynik3);
            Console.WriteLine("Po Zamianie 3: a = {0}, b = {1}, wynik porównania = {2}", a3, b3, wynik3);
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
