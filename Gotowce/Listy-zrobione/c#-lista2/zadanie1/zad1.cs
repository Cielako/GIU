using System;
using System.Collections.Generic;

namespace zad1
{
    class Lista
    {
        public List<int> lista = new List<int>();
        // by listy byly rozne private static Random rnd = new Random();
        public Lista(int n)
        {
            var rnd = new Random();
            for (int i = 0; i < n; ++i)
            {
                this.lista.Add(rnd.Next(1, 101));
            }
        }
        public Lista()
        {
            var rnd = new Random();
            for (int i = 0; i < rnd.Next(1, 6); ++i)
            {
                lista.Add(rnd.Next(1, 101));
            }
        }
        public override string ToString()
        {
            return string.Join(" ", lista);
        }
    }
    class Lista1 : Lista, IComparable<Lista1>
    {
        public Lista1(int n) : base(n) { }
        public Lista1() : base() { }
        public int CompareTo(Lista1 other)
        {
            int dl = Math.Min(this.lista.Count, other.lista.Count);
            /*// pobieramy dl krotszej listy
            if (this.lista.Count > other.lista.Count) dl = other.lista.Count;
            else dl = this.lista.Count;*/
            if (this.lista.Count == 0) return -1;
            if (other.lista.Count == 0) return 1;

            // porownywanie elementow
            for (int i = 0; i < dl; i++)
            {
                if (this.lista[i] > other.lista[i])
                {
                    return 1;
                }
                if (this.lista[i] < other.lista[i])
                {
                    return -1;
                }
            }

            // jesli sa takie same elem, a jedna jest dluzsza
            if (this.lista.Count > other.lista.Count) return 1;
            if (this.lista.Count < other.lista.Count) return -1;
            return 0;
        }
    }
    class Lista2 : Lista, IComparable<Lista2>
    {
        public Lista2(int n) : base(n) { }
        public Lista2() : base() { }
        public int CompareTo(Lista2 other)
        {
            // porownywanie dl
            if (this.lista.Count == 0) return -1;
            if (other.lista.Count == 0) return 1;
            if (this.lista.Count > other.lista.Count) return 1;
            if (this.lista.Count < other.lista.Count) return -1;

            // jesli sa takie same to przechodzimy do elem
            for (int i = 0; i < this.lista.Count; i++)
            {
                if (this.lista[i] > other.lista[i])
                {
                    return 1;
                }
                if (this.lista[i] < other.lista[i])
                {
                    return -1;
                }
            }
            return 0;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Lista1> t1 = new List<Lista1>();
            for (int i = 0; i < 8; i++)
            {
                t1.Add(new Lista1());
            }
            t1.Add(new Lista1(0));
            t1.Add(new Lista1(0));
            Console.WriteLine("Przed posortowaniem Lista List1:");
            t1.ForEach(lista => Console.WriteLine(lista));
            Console.WriteLine("\tPo posortowaniu");
            t1.Sort();
            t1.ForEach(lista => Console.WriteLine(lista));
            Console.WriteLine("\n");


            List<Lista2> t2 = new List<Lista2>();
            for (int i = 0; i < 8; i++)
            {
                t2.Add(new Lista2());
            }
            t2.Add(new Lista2(0));
            t2.Add(new Lista2(0));
            Console.WriteLine("Przed posortowaniem Lista List2:");
            t2.ForEach(lista => Console.WriteLine(lista));
            Console.WriteLine("\tPo posortowaniu");
            t2.Sort();
            t2.ForEach(lista => Console.WriteLine(lista));
        }
    }
}
