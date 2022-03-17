using System;

namespace zadanie2
{
    class Calkowite
    {
        private int wartosc = 0;
        private int operacje = 0;
        private int nadania = 0;
        private int pobrania = 0;

        public Calkowite(int b)  // konstruktor
        {
            operacje = b;
        }
        public int wartosci
        {
            get
            {
                operacje--;
                pobrania++;
                if (operacje < 0)
                {
                    Console.WriteLine("Nieautoryzowana próba dostępu.");
                    return -1;
                }
                else
                    return wartosc;
            }
            set
            {
                operacje--;
                nadania++;
                if (operacje < 0)
                {
                    Console.WriteLine("Nieautoryzowana próba dostępu.");
                }
                else
                    wartosc = value;
            }
        }
        public void Ureguluj()
        {
            pobrania = 0;
            nadania = 0;
        }
        public void WypiszStan()
        {
            Console.WriteLine("Ilość pobrań: " + pobrania);
            Console.WriteLine("Ilość nadań: " + nadania);
        }

        static void Main(string[] args)
        {
            Calkowite liczba = new Calkowite(6);
            Console.WriteLine(liczba.wartosci);
            Console.WriteLine(liczba.wartosci);
            liczba.wartosci = 7;
            Console.WriteLine(liczba.wartosci);
            Console.WriteLine(liczba.wartosci);
            Console.WriteLine(liczba.wartosci);
            liczba.wartosci = 12;
            Console.WriteLine(liczba.wartosci);
            Console.WriteLine(liczba.wartosci);
            liczba.WypiszStan();
            liczba.Ureguluj();
            liczba.WypiszStan();
        }
    }
}
