using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Extensions
{
    public static class ViewContextExtension
    {
        public static string IsActiveRoute(this ViewContext context, string url)
        {
            var ruta = context.HttpContext.Request.Path.Value;
            if (ruta == url)
                return "active";
            return "";
        }
        public static string IsActiveRoute(this ViewContext context, IEnumerable<string> urls)
        {
            var ruta = context.HttpContext.Request.Path.Value;
            if (urls != null)
                if (urls.Any(x => x == ruta))
                    return "active";
            return "";
        }
    }
}
