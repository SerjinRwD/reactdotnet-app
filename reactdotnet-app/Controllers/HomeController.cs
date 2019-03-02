using Microsoft.AspNetCore.Mvc;

namespace ReactDotNetApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
