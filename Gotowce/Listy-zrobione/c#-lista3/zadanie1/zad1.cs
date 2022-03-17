using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lista3
{
    class Tworca
    {
        public delegate void Stworz_Nowy(Obserwator ob);
        public delegate void Przedstaw();
        public event Stworz_Nowy Nowy;
        public event Przedstaw Wypisz;
        public Tworca() {}
        public void Stworz()
        {
            Obserwator n = new Obserwator();
            //Nowy?.Invoke(n);
            //Wypisz?.Invoke();
            n.Subscribe(this);
            Nowy(n);
            Wypisz();
        }
    }
    class Obserwator
    {
        static Random rnd = new Random();
        static int count = 0;
        private double _x;
        private double _y;
        private string _name;
        private List<Obserwator> _sasiedzi = new List<Obserwator>(); 

        public Obserwator()
        {
            _name = "Obs " + count;
            _x = rnd.NextDouble();
            _y = rnd.NextDouble();
            ++count;
        }
        
        public void Subscribe( Tworca tworca )
        {
            tworca.Wypisz += new Tworca.Przedstaw( Przedstawsie );
            tworca.Nowy += new Tworca.Stworz_Nowy( Aktualizuj );
        }
        
        public void Przedstawsie()
        {
            Console.WriteLine("Obserwator {0} ", _name);
            //_sasiedzi.ForEach(a => { Console.WriteLine("Sasiad: " + a._name + " x: " + a._x + " y: " + a._y + " r: " + odl(a)); });
            _sasiedzi.ForEach(a => { Console.WriteLine("Sasiad: {0}\t x: {1:F3}\t y: {2:F3}\t r: {3:F3}", a._name, a._x, a._y, odl(a)); });
            Console.WriteLine("##################################\n");
        }
        
        public void Aktualizuj(Obserwator ob)
        {
            if (_sasiedzi.Count < 2 && ob._name != _name) _sasiedzi.Add(ob);
            else if (ob._name != _name)
            {
                double odl1 = odl(_sasiedzi[0]);
                double odl2 = odl(_sasiedzi[1]);
                double odl_nowy = odl(ob);
                if (odl_nowy < odl1)
                {
                    _sasiedzi[1] = _sasiedzi[0];
                    _sasiedzi[0] = ob;
                }
                else if (odl_nowy < odl2) _sasiedzi[1] = ob;
            }
            _sasiedzi.Sort((a, b) => {
                if (odl(a) < odl(b)) return -1;
                else if (odl(a) > odl(b)) return 1;
                else return 0;
            });
        }
        public double odl(Obserwator o)
        {
            double xr = Math.Abs(_x - o._x);
            double yr = Math.Abs(_y - o._y);
            return Math.Sqrt(xr * xr + yr * yr);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Tworca tworca = new Tworca();

            Console.WriteLine("\n\t\tKrok 0\n");
            tworca.Stworz();
            Console.WriteLine("\t\tKrok 1\n");
            tworca.Stworz();
            Console.WriteLine("\t\tKrok 2\n");
            tworca.Stworz();
            Console.WriteLine("\t\tKrok 3\n");
            tworca.Stworz();
            Console.WriteLine("\t\tKrok 4\n");
            tworca.Stworz();

            Console.ReadKey();
        }
    }
}
