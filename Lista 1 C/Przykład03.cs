#region USING
using System;
#endregion

namespace p2
{
    class Klasa_z_wlasciwoscia
    {
        private int _x = 0;
        private int baza = 10;
        public int x
        {
            get
            {
                Console.WriteLine("Odczyt x!");
                return _x;
            }
            /* protected */
            set
            {
                Console.WriteLine("Zapis x!");
                // zapis do x (modulo baza)
                _x = value % baza;
            }
        }
        public void UstawBaze(int b)
        {
            if (b > 0)
                baza = b;
        }
    }           // end of Klasa_z_wlasciwoscia

    class Test
    {
        static void Main()
        {
            int t;
            Klasa_z_wlasciwoscia k = new Klasa_z_wlasciwoscia();
            k.x = 35;
            t = k.x;
            k.x = t * t;
            Console.WriteLine("Baza 10: x={0}\n", k.x);

            k.UstawBaze(3);
            k.x = 35;
            t = k.x;
            k.x = t * t;
            Console.WriteLine("Baza 3: x={0}\n", k.x);
            Console.ReadKey();
        }
    }
}
