using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tm2TestAppService.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        // GET: Send
        [HttpPost]
        public ActionResult Map(string Name)
        {
            Models.LoginResult item = new Models.LoginResult();

            string url = "https://adf-functions.azurewebsites.net/api/UpdateName?id=1&name=" + Name;

            using (System.Net.Http.HttpClient client = new System.Net.Http.HttpClient())
            {
                using (System.Net.Http.HttpResponseMessage response = client.GetAsync(url).Result)
                {
                    ViewBag.Message = response.Content.ReadAsStringAsync().Result;
                    //    System.Diagnostics.Debug.WriteLine(responseBody);
                }
            }

            ViewData["PostData"] = Name + "に変更しました。";
            return View();
        }
    }
}