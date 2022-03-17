using System;
using System.Collections.Generic;

namespace zadanie1
{
    class Lista
    {
        public List<int> list = new List<int>();
        public static Random rand = new Random();
        public Lista(int n)
        {
            for (int i = 0; i < n; i++)
            {
                list.Add(rand.Next(1, 101));
            }
        }
        public Lista()
        {
            for (int i = 0; i < rand.Next(1, 6); i++)
            {
                list.Add(rand.Next(1, 101));
            }
        }
        public override string ToString()
        {
            string str = "";
            foreach (int ele in list) str += ele.ToString() + " ";
            return str;
        }
    }

    class Lista1 : Lista, IComparable<Lista1>
    {
        public Lista1() : base() { } // za pomoca base() korzystam z bezargumentowego konstruktora
        public Lista1(int n) : base(n) { }
        public int CompareTo(Lista1 other)
        {
            if (this.list.Count > other.list.Count)
            {
                for (int i = 0; i < other.list.Count; i++)
                {
                    if (this.list[i] > other.list[i]) return 1;
                    else if (this.list[i] < other.list[i]) return -1;
                }
                return 1;
            }
            else if (this.list.Count < other.list.Count)
            {
                for (int i = 0; i < this.list.Count; i++)
                {
                    if (this.list[i] > other.list[i]) return 1;
                    else if (this.list[i] < other.list[i]) return -1;
                }
                return 1;
            }
            else
            {
                for (int i = 0; i < other.list.Count; i++)
                {
                    if (this.list[i] > other.list[i]) return 1;
                    else if (this.list[i] < other.list[i]) return -1;
                }
                return 0;
            }
        }
    }
    class Lista2 : Lista, IComparable<Lista2>
    {
        public Lista2() : base() { }
        public Lista2(int n) : base(n) { }
        public int CompareTo(Lista2 other)
        {
            if (this.list.Count > other.list.Count)
            {
                return 1;
            }
            else if (this.list.Count < other.list.Count)
            {
                return -1;
            }
            else
            {
                for (int i = 0; i < other.list.Count; i++)
                {
                    if (this.list[i] > other.list[i]) return 1;
                    else if (this.list[i] < other.list[i]) return -1;
                }
                return 0;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lista o długości podanego argumentu");
            Lista list = new Lista(10);
            Console.WriteLine(list);
            Console.WriteLine("Lista losowej długości (1-5)");
            list = new Lista();
            Console.WriteLine(list);

            Lista1 list1 = new Lista1();
            Lista1 list2 = new Lista1();
            Lista1 list3 = new Lista1();
            Lista1 list4 = new Lista1();

            List<Lista1> tab = new List<Lista1>();
            tab.Add(list1);
            tab.Add(list2);
            tab.Add(list3);
            tab.Add(list4);
            Console.WriteLine();
            Console.WriteLine("Lista1 przed sortowaniem");
            tab.ForEach(lista => Console.WriteLine(lista));
            tab.Sort();
            Console.WriteLine();
            Console.WriteLine("Lista1 po sortowaniu");
            tab.ForEach(lista => Console.WriteLine(lista));

            Lista2 list1b = new Lista2();
            Lista2 list2b = new Lista2();
            Lista2 list3b = new Lista2();
            Lista2 list4b = new Lista2();

            List<Lista2> tab1b = new List<Lista2>();
            tab1b.Add(list1b);
            tab1b.Add(list2b);
            tab1b.Add(list3b);
            tab1b.Add(list4b);

            Console.WriteLine();
            Console.WriteLine("Lista2 przed sortowaniem");
            tab1b.ForEach(lista => Console.WriteLine(lista));
            tab1b.Sort();
            Console.WriteLine();
            Console.WriteLine("Lista2 po sortowaniu");
            tab1b.ForEach(lista => Console.WriteLine(lista));
        }
    }
}
