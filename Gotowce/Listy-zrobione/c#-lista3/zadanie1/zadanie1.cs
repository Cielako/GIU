using System;
using System.Collections.Generic;
namespace zadanie1
{
    class Obserwator
    {
        private string nazwa;
        private double x, y;
        private static int licznik= 0;
        static Random rand = new Random();
        private List<Obserwator> sasiad = new List<Obserwator>();
        public Obserwator()
        {
            nazwa = "Obs " + licznik.ToString();
            licznik++;
            x = rand.NextDouble();
            y = rand.NextDouble();
        }
        public void Subskrybcja(Tworca t)
        {
            t.Nowy_obserwator += new Tworca.nowyObs(Aktualizuj);
            t.Wypisz_obserwatora += new Tworca.wypiszObs(Wypisz_obserwatorow);
        }
        public void Aktualizuj(Obserwator obs)
        {
            if (obs.nazwa != this.nazwa) { // zapobiega wpisaniu siebie samego do jako sasiada
                if (sasiad.Count < 2)
                { // jezeli nie posiada 2  sasiadow to bez sprawdzania odległości dopisuje nowego sasiada
                    sasiad.Add(obs);
                }
                else
                {
                    if (Math.Sqrt(Math.Pow(obs.x - this.x, 2) + Math.Pow(obs.y - this.y, 2)) < Math.Sqrt(Math.Pow(sasiad[1].x - this.x, 2) + Math.Pow(sasiad[1].y - this.y, 2))) {
                        if (Math.Sqrt(Math.Pow(obs.x - this.x, 2) + Math.Pow(obs.y - this.y, 2)) < Math.Sqrt(Math.Pow(sasiad[0].x - this.x, 2) + Math.Pow(sasiad[0].y - this.y, 2))) {
                            sasiad[1] = sasiad[0];
                            sasiad.RemoveAt(0);
                            sasiad.Add(obs);
                        }
                        else {
                            sasiad.RemoveAt(1);
                            sasiad.Add(obs);
                        }
                    }
                    /*for (int i = 0; i < 2; i++) {
                        if (Math.Sqrt(Math.Pow(obs.x - this.x, 2) + Math.Pow(obs.y - this.y, 2)) < Math.Sqrt(Math.Pow(sasiad[i].x - this.x, 2) + Math.Pow(sasiad[i].y - this.y, 2))) {
                            sasiad.RemoveAt(i);
                            sasiad.Add(obs);
                        }
                    }*/
                }
                sasiad.Sort((Obserwator x, Obserwator y) => {  // sortowanie najbliższej odległych obserwatorów dla obserwatora
                    if (Math.Sqrt(Math.Pow(x.x - this.x, 2) + Math.Pow(x.y - this.y, 2)) < Math.Sqrt(Math.Pow(y.x - this.x, 2) + Math.Pow(y.y - this.y, 2)))
                    {
                        return -1; 
                    }
                    else if (Math.Sqrt(Math.Pow(x.x - this.x, 2) + Math.Pow(x.y - this.y, 2)) > Math.Sqrt(Math.Pow(y.x - this.x, 2) + Math.Pow(y.y - this.y, 2)))
                    {
                        return 1;
                    }
                    else
                    {
                        return 0;
                    }
                });
            }
        }
        public void Wypisz_obserwatorow() {
            Console.WriteLine(String.Format("Jestem {0} - lista sąsiadów:", nazwa));
            for(int i = 0; i < sasiad.Count; i++) {
                Console.WriteLine(String.Format( "{0}   x={1:F3}   y={2:F3}   odl={3:F3}", 
                    sasiad[i].nazwa, sasiad[i].x, sasiad[i].y, 
                    Math.Sqrt(Math.Pow(sasiad[i].x - this.x, 2) + Math.Pow(sasiad[i].y - this.y, 2))) );
            }
        }
    }
    class Tworca
    {
        public delegate void nowyObs(Obserwator obs);
        public delegate void wypiszObs();
        public event nowyObs Nowy_obserwator;
        public event wypiszObs Wypisz_obserwatora;

        public void Nowy() {
            Obserwator o = new Obserwator();
            o.Subskrybcja(this); // przypisuje metody do zdarzeń (this-tworca)
            Nowy_obserwator(o); // wywolanie przypisanej metody (Aktualizuje)
        }
        public void Wypisz() {
            Wypisz_obserwatora();  // wywolanie przypisanej metody (Wypisz_obserwatorow)
        }
    }
    class Program
    {
        static void Main(string[] args) {
            Tworca x = new Tworca();
            for (int i = 0; i < 6; i++) {
                Console.WriteLine(String.Format("--------------------krok {0}--------------------\n",i));
                x.Nowy();
                x.Wypisz();
            }
        }
    }
}
