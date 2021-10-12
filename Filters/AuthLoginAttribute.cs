using FOSMAR.CONFIG;
using FOSMAR.CORE.Exceptions;
using FOSMAR.CORE.Extensions;
using FOSMAR.Negocios.General.Seguridad;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using Microsoft.Data.SqlClient;
using System;
using System.Linq;
using System.Net;
using System.Security.Claims;

namespace FOSMAR.PER.WEB.Filters
{
    [AttributeUsage(AttributeTargets.Class)]
    public class AuthLogin : Attribute, IAuthorizationFilter
    {
        private readonly IPerfilObjetoProxy _perfilObjetoProxy;
        private readonly IUsuarioProxy _usuarioProxy;
        public AuthLogin(IPerfilObjetoProxy perfilObjetoProxy,
            IUsuarioProxy usuarioProxy)
        {
            _perfilObjetoProxy = perfilObjetoProxy;
            _usuarioProxy = usuarioProxy;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var codigo = context.HttpContext.User?.Claims?.FirstOrDefault(v => v.Type == ClaimTypes.Name)?.Value ?? "";

            var usuario = (_usuarioProxy.Obtener(codigo)).Result;
            var esIndex = context.HttpContext.Request.RouteValues.Values?.First()?.ToString() == "Index";
            if (usuario != null && !usuario.FBLQUO)
            {
                var menu = (_perfilObjetoProxy.ListarMenu(ConfiguracionProyecto.MODULOS.Persona, context.HttpContext.User.ObtenerPerfiles())).Result;
                var url = $"{context.HttpContext.Request.PathBase.Value}{context.HttpContext.Request.Path.Value}";
                var tieneAccesoRuta = menu.Any(x => x.CHECKEADO && x.URL == url);
                if (!tieneAccesoRuta && esIndex)
                {
                    context.Result = new RedirectToRouteResult(
                                  new RouteValueDictionary
                                  {
                    { "controller", "Home" },
                    { "action", "Index" }
                                  });
                }
            }
            else
            {
                if (esIndex)
                {
                    //Cerrar la sesion del usuario
                    context.Result = new RedirectToRouteResult(
                                     new RouteValueDictionary
                                     {
                    { "controller", "Login" },
                    { "action", "Logout" }
                                     });
                }
            }
        }
    }
}