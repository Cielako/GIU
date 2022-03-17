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

namespace Lista4
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private int _red, _green, _blue;
        private bool _tryb = true;
        private bool _figura = true;
        public MainWindow()
        {
            InitializeComponent();
            red.Text = "0";
            green.Text = "0";
            blue.Text = "0";
        }

        private void red_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (System.Text.RegularExpressions.Regex.IsMatch(red.Text, "^[0-9]+$"))
            {
                if (int.Parse(red.Text) > 255)
                {
                    _red = 255;
                    red.Text = "255";
                }
                else if (int.Parse(red.Text) < 0)
                {
                    _red = 0;
                    red.Text = "0";
                }
                else _red = int.Parse(red.Text);
            }
            fig1.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
            fig2.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
        }

        private void green_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (System.Text.RegularExpressions.Regex.IsMatch(green.Text, "^[0-9]+$"))
            {
                if (int.Parse(green.Text) > 255)
                {
                    _green = 255;
                    green.Text = "255";
                }
                else if (int.Parse(green.Text) < 0)
                {
                    _green = 0;
                    green.Text = "0";
                }
                else _green = int.Parse(green.Text);
            }
            fig1.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
            fig2.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
        }

        private void blue_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (System.Text.RegularExpressions.Regex.IsMatch(blue.Text, "^[0-9]+$"))
            {
                if (int.Parse(blue.Text) > 255)
                {
                    _blue = 255;
                    blue.Text = "255";
                }
                else if (int.Parse(blue.Text) < 0)
                {
                    _blue = 0;
                    blue.Text = "0";
                }
                else _blue = int.Parse(blue.Text);
            }
            fig1.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
            fig2.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
        }

        private void Window_MouseMove(object sender, MouseEventArgs e)
        {
            if (!_tryb)
            {
                _red = ((int)e.GetPosition(this).X) % 255;
                _green = ((int)e.GetPosition(this).Y) % 255;
                fig1.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
                fig2.Fill = new SolidColorBrush(Color.FromRgb((byte)_red, (byte)_green, (byte)_blue));
                val.Content = String.Format("r:{0} g:{1} b:{2}", _red, _green, _blue);
            }
        }

        private void btnTryb_Click(object sender, RoutedEventArgs e)
        {
            _tryb = !_tryb;
        }

        private void btnFigura_Click(object sender, RoutedEventArgs e)
        {
            _figura = !_figura;
            if (_figura)
            {
                Title = "Rysowanie kwadratu";
                fig1.Visibility = Visibility.Visible;
                fig2.Visibility = Visibility.Hidden;
            }
            else
            {
                Title = "Rysowanie koła";
                fig2.Visibility = Visibility.Visible;
                fig1.Visibility = Visibility.Hidden;
            }
        }
    }
}
