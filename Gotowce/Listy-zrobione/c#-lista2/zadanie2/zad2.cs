using System;
//using System.Collections.Generic;
//using System.Text;

namespace p2_1
{
    public class Grupy
    {
        private new string[][] gr = new string[3][];
        private string _nazwa_przedmiotu;
        public Grupy(string nazwa)
        {
            _nazwa_przedmiotu = nazwa;
        }
        public string nazwaPrzedmiotu
        {
            get { return _nazwa_przedmiotu; }
        }
        public void dodaj_do_grupy(int grupa, string[] imiona)
        {
            gr[grupa] = new string[imiona.Length + 1];
            // nadpisuje cala grupe // albo przypisuje
            for (int i = 0; i < imiona.Length; ++i)
            {
                gr[grupa][i] = imiona[i];
            }
        }
        public void dodaj_do_grupy(int grupa, int id, string imie)
        {
            // podmienia imie w grupie [grupa][index]
            gr[grupa][id] = imie;
        }

        public void Wyswietl()
        {
            for (int i = 0; i < 3; ++i)
            {
                Console.WriteLine("Grupa nr " + i);
                for (int j = 0; j < gr[i].Length; ++j)
                {
                    Console.Write(gr[i][j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Grupy ang = new Grupy("Angielski");
            string[] lista1 = { "Ala", "Magda", "Daria" };
            string[] lista2 = { "Ola", "Max", "Marek", "Kasia" };
            string[] lista3 = { "Ela", "Bob", "Angela", "Piotr" };
            ang.dodaj_do_grupy(0, lista1);
            ang.dodaj_do_grupy(1, lista2);
            ang.dodaj_do_grupy(2, lista3);
            ang.dodaj_do_grupy(1, 2, "Ela");

            ang.Wyswietl();
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
