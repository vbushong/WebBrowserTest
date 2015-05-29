using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp.WinForms;

namespace WebBrowserTest
{
    public partial class Form1 : Form
    {
        private readonly ChromiumWebBrowser browser;

        public Form1()
        {
            InitializeComponent();

            string dir = AppDomain.CurrentDomain.BaseDirectory;

            browser = new ChromiumWebBrowser(dir + "maps.html")
            {
                Dock = DockStyle.Fill,
            };
            toolStripContainer1.ContentPanel.Controls.Add(browser);
        }
    }
}
