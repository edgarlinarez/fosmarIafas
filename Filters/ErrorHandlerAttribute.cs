using FOSMAR.CORE.Exceptions;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Data.SqlClient;
using System.Net;

namespace FOSMAR.PER.WEB.Filters
{
    public class ErrorHandlerAttribute : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            ILog log = LogManager.GetLogger(filterContext.ActionDescriptor.DisplayName);
            //log ---   
            log.Error(filterContext.Exception.Message);
            if (filterContext.HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest")
            {
                filterContext.ExceptionHandled = true;
                filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                if (filterContext.Exception.GetType() == typeof(XMLHttpRequestException))
                {
                    filterContext.Result = new JsonResult(filterContext.Exception.Message);
                }
                else
                {
                    filterContext.Result = new JsonResult("Hubo un problema en el servidor.");
                }
            }
            else
            {
                base.OnException(filterContext);
            }
        }
    }
}