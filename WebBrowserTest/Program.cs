using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp;

namespace WebBrowserTest
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            CefSettings settings = new CefSettings();
            settings.CefCommandLineArgs.Add("allow-file-access-from-files", "1");
            Cef.Initialize(settings);

            var browser = new Form1();
            Application.Run(browser);
        }
    }
}
