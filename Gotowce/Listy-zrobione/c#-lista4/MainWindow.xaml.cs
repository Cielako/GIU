using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace zadanie1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Czerwony.Text = "0";
            Zielony.Text = "0";
            Niebieski.Text = "0";
        }
        private int r, g, b;
        private bool ksztalt = false;
        private bool tryb = false;
        public void Kwadratura_Click(object sender, EventArgs e) {
            ksztalt = !ksztalt;
            if (ksztalt) {
                obj.RadiusX = 0;
                obj.RadiusY = 0;
            }
            else {
                obj.RadiusX = 50;
                obj.RadiusY = 50;
            }
        }
        public void Aktualizacja()
        {
            if (System.Text.RegularExpressions.Regex.IsMatch(Czerwony.Text, "^[0-9]+$"))
            {    // zabezpieczenie przed np. pustym polem 
                if (int.Parse(Czerwony.Text) > 255) { r = 255; Czerwony.Text = "255"; }   // jesli zostaly wprowadzone zbyt duze wartosci to zmienia kolor R na 255 
                else if (int.Parse(Czerwony.Text) < 0) { r = 0; Czerwony.Text = "0"; }  // jesli zostaly wprowadzone zbyt male wartosci to zmienia kolor R na  0
                else r = int.Parse(Czerwony.Text);
            }
            if (System.Text.RegularExpressions.Regex.IsMatch(Zielony.Text, "^[0-9]+$"))
            {
                if (int.Parse(Zielony.Text) > 255) { g = 255; Zielony.Text = "255"; }
                else if (int.Parse(Zielony.Text) < 0) { g = 0; Zielony.Text = "0"; }
                else g = int.Parse(Zielony.Text);
            }
            if (System.Text.RegularExpressions.Regex.IsMatch(Niebieski.Text, "^[0-9]+$"))
            {
                if (int.Parse(Niebieski.Text) > 255) { b = 255; Niebieski.Text = "255"; }
                else if (int.Parse(Niebieski.Text) < 0) { b = 0; Niebieski.Text = "0"; }
                else b = int.Parse(Niebieski.Text);
            }
            obj.Fill = new SolidColorBrush(Color.FromRgb((byte)r, (byte)g, (byte)b));
            rgb.Content = String.Format("r:{0} g:{1} b:{2}", r, g, b);
        }
        private void Window_MouseMove(object sender, MouseEventArgs e) {  // ta funkcja wykonuje sie zawsze przy ruchu myszy w oknie
            if (tryb) {
                r = ((int)e.GetPosition(this).X) % 255;  // coś nie łapie tej zmiany za dobrze (chyba)
                g = ((int)e.GetPosition(this).Y) % 255;
                obj.Fill = new SolidColorBrush(Color.FromRgb((byte)r, (byte)g, (byte)b));
                rgb.Content = String.Format("r:{0} g:{1} b:{2}", r, g, b);
            }
            else {
                if (System.Text.RegularExpressions.Regex.IsMatch(Czerwony.Text, "^[0-9]+$")) {    // zabezpieczenie przed np. pustym polem 
                    if (int.Parse(Czerwony.Text) > 255) { r = 255; Czerwony.Text = "255"; }   // jesli zostaly wprowadzone zbyt duze wartosci to zmienia kolor R na 255 
                    else if (int.Parse(Czerwony.Text) < 0) { r = 0; Czerwony.Text = "0"; }  // jesli zostaly wprowadzone zbyt male wartosci to zmienia kolor R na  0
                    else r = int.Parse(Czerwony.Text);
                }
                if (System.Text.RegularExpressions.Regex.IsMatch(Zielony.Text, "^[0-9]+$")) {
                    if (int.Parse(Zielony.Text) > 255) { g = 255; Zielony.Text = "255"; }
                    else if (int.Parse(Zielony.Text) < 0) { g = 0; Zielony.Text = "0"; }
                    else g = int.Parse(Zielony.Text);
                }
                if (System.Text.RegularExpressions.Regex.IsMatch(Niebieski.Text, "^[0-9]+$")) {
                    if (int.Parse(Niebieski.Text) > 255) { b = 255; Niebieski.Text = "255"; }
                    else if (int.Parse(Niebieski.Text) < 0) { b = 0; Niebieski.Text = "0"; }
                    else b = int.Parse(Niebieski.Text);
                }
                obj.Fill = new SolidColorBrush(Color.FromRgb((byte)r, (byte)g, (byte)b));
                rgb.Content = String.Format("r:{0} g:{1} b:{2}", r, g, b);
            }
        }
        private void Tryb_Click(object sender, RoutedEventArgs e) {
            tryb = !tryb;
            if (!tryb) Aktualizacja();
        }
        public void Czerwony_TextChanged(object sender, EventArgs e) {
            if (System.Text.RegularExpressions.Regex.IsMatch(Czerwony.Text, "^[0-9]+$")) {   // zabezpieczenie przed np. pustym polem 
                if (int.Parse(Czerwony.Text) > 255) { r = 255; Czerwony.Text = "255"; }
                else if (int.Parse(Czerwony.Text) < 0) { r = 0; Czerwony.Text = "0"; }
                else r = int.Parse(Czerwony.Text);
            }
        }
        public void Zielony_TextChanged(object sender, EventArgs e) {
            if (System.Text.RegularExpressions.Regex.IsMatch(Zielony.Text, "^[0-9]+$")) {
                if (int.Parse(Zielony.Text) > 255) { g = 255; Zielony.Text = "255"; }
                else if (int.Parse(Zielony.Text) < 0) { g = 0; Zielony.Text = "0"; }
                else g = int.Parse(Zielony.Text);
            }
        }
        public void Niebieski_TextChanged(object sender, EventArgs e) {
            if (System.Text.RegularExpressions.Regex.IsMatch(Niebieski.Text, "^[0-9]+$")) {
                if (int.Parse(Niebieski.Text) > 255) { b = 255; Niebieski.Text = "255"; }
                else if (int.Parse(Niebieski.Text) < 0) { b = 0; Niebieski.Text = "0"; }
                else b = int.Parse(Niebieski.Text);
            }
        }
    }
}
