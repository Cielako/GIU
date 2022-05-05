using System;

namespace Zad2
{
    class LiczbaCal
    {
        private int _wartosc;
        private int _liczbaOp;
        private int _pobranie;
        private int _nadanie;
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
                this._liczbaOp--;
                this._pobranie++; // licznik pobrania wartości
                if (this._liczbaOp < 0) // a)
                {
                    Console.WriteLine("Próba nieautoryzowanego dostępu");
                    return -1;
                }
                else
                    return this._wartosc; // wartość zwracana z obiektu np. liczba.wartosc;
            }
            set
            {
                this._liczbaOp--;
                this._nadanie++; // licznik nadania wartości
                if (this._liczbaOp < 0) // b)
                    Console.WriteLine("Próba nieautoryzowanego dostępu");
                else
                    this._wartosc = value; // wartość przypisanie dla obiektu np. liczba.wartosc = 7;
            }
        }
        public void Ureguluj(int o)
        {
            this._liczbaOp = o;
            this._pobranie = 0;
            this._nadanie = 0;
        }
        public void WypiszStan()
        {
            Console.WriteLine("Liczba pobrań:" + this._pobranie);
            Console.WriteLine("Liczba nadań:" + this._nadanie);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            LiczbaCal test = new LiczbaCal(4, 2);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            test.WypiszStan();
            test.Ureguluj(3);
            test.wartosc = 5;
            test.wartosc = 21;
            Console.WriteLine(test.wartosc);
            test.wartosc = 7;
            test.WypiszStan();


        }
    }
}