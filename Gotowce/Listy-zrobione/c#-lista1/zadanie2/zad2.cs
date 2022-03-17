using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zad2
{
    class Liczba
    {
        private int _wartosc;
        private int _operacje;
        private int _pobrania;
        private int _nadania;

        public Liczba(int val, int op)
        {
            this._wartosc = val;
            this._operacje = op;
        }

        public int wartosc
        {
            get
            {
                this._pobrania++;
                if (_pobrania <= _operacje) return _wartosc;
                else
                {
                    Console.WriteLine("Nieautoryzowana próba dostępu");
                    return -1;
                }
            }

            set
            {
                this._nadania++;
                if (this._nadania <= this._operacje) this._wartosc = value;
                else
                {
                    Console.WriteLine("Nieautoryzowana próba dostępu");
                }
            }
        }

        public void Ureguluj()
        {
            this._pobrania = 0;
            this._nadania = 0;
        }

        public void WypiszStan()
        {
            Console.WriteLine("Pobrań : " + this._pobrania);
            Console.WriteLine("Nadań : " + this._nadania);
        }
    }
        class Program
    {
        static void Main(string[] args)
        {
            Liczba test = new Liczba(4, 2);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine(test.wartosc);
            Console.WriteLine("Po 5 razach wywolania wartosci: ");
            test.WypiszStan();
            Console.WriteLine("Po regulacji: ");
            test.Ureguluj();
            test.WypiszStan();

            Console.WriteLine("Po nadaniu nowych wartosci [5 potem 21]: ");
            test.wartosc = 5;
            test.wartosc = 21;
            Console.WriteLine(test.wartosc);
            test.wartosc = 7;

            Console.WriteLine("Po nadaniu nowej wartosci (7): ");
            test.WypiszStan();

            Console.ReadKey();
        }
    }
}
