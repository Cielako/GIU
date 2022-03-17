using System;
using System.Collections.Generic;

namespace zadanie2
{
    class tablice
    {
        private int[][] array;
        private string[][] array2;
        private int i = 0;
        Random rand = new Random();
        public tablice(int n)
        {
            array = new int[n][];
            i = n;
            //przypisywanie(n);
            ciagLiczb(n);
        }
        public void ciagLiczb(int n)
        {
            int r = 5;
            for (int j = 0; j < n; j++)
            {
                int a0 = 3;
                array[j] = new int[j+1];
                for (int x = 0; x < j+1; x++)
                {
                    array[j][x] = a0 + r;
                    a0 += r;
                }
            }
        }
        /*public void przypisywanie(int n)  // zapełnia tablice tablicami o różnych długościach i różnych wartościach.
        { 
            for(int j=0;j<n;j++)
            {
                int len = rand.Next(1, 10);
                array[j] = new int[len];
                for(int x=0;x<len;x++)
                {
                    array[j][x] = new Random().Next(0,10);
                }
            }
        }*/
        public void wypisywanie()
        {
            Console.WriteLine("Ciag arytmetyczny o pierwszym wyrazie 3 i różnicy 5");
            Console.WriteLine("Każda następna tablica przechowuje o 1 więcej wyrazów ciągu");
            for (int j = 0; j < i; j++)
            {
                for (int x = 0; x < array[j].Length; x++)
                {
                    Console.Write(array[j][x].ToString()+" ");
                }
                Console.WriteLine();
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            tablice tab = new tablice(10);
            tab.wypisywanie();
        }
    }
}
