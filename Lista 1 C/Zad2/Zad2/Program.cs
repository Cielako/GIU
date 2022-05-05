using System;

namespace Zad2
{
    class LiczbaCal
    {
        private int _wartosc;
        private int _liczbaOp;
        private int _pobranie = 0;
        private int _nadanie = 0;
        public LiczbaCal(int o, int v)
        {
            this._liczbaOp = o; // liczba bezpłatnych operacji (pobrania lub nadania)
            this._wartosc = v; // nadanie wartości dla obiektu danej klasy
        }

        public int wartosc
        {
            // niezaleznie od tego czy nadajemy czy pobieramy licznik operacji się zmienia
            // Jeśli nadajemy to automatycznie liczba bezpłatnych pobrań zmniejsza się o 1
            // Jeśli pobieramy to automatycznie liczba bezpłatnych nadań zmniejsza się o 1
            // tak więe liczba pobrań = liczba nadań = liczba operacji
            get
            {
                if (this._pobranie == this._liczbaOp) // a)
                {
                    Console.WriteLine("Próba nieautoryzowanego dostępu");
                    return -1;
                }
                else
                {
                    this._pobranie++; // licznik pobrania wartości
                    return this._wartosc; // wartość zwracana z obiektu np. liczba.wartosc;
                }
            }
            set
            {
              
                if (this._nadanie == this._liczbaOp) // b)
                    Console.WriteLine("Próba nieautoryzowanego dostępu");
                else
                {
                    this._nadanie++; // licznik nadania wartości
                    this._wartosc = value; // wartość przypisanie dla obiektu np. liczba.wartosc = 7;
                }
                   
            }
        }
        public void Ureguluj()
        {
            this._pobranie = 0;
            this._nadanie = 0;
        }
        public void WypiszStan()
        {
            Console.WriteLine("Liczba pobrań:" + this._pobranie + " z " + this._liczbaOp);
            Console.WriteLine("Liczba nadań:" + this._nadanie + " z " + this._liczbaOp);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            LiczbaCal test = new LiczbaCal(3, 2);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            test.WypiszStan();
            test.Ureguluj();
            test.wartosc = 5;
            test.wartosc = 21;
            Console.WriteLine(test.wartosc);
            test.wartosc = 7;
            test.WypiszStan();
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            test.WypiszStan();
            Console.WriteLine(test.wartosc);
        }
    }
}