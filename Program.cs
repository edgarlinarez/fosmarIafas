using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FOSMAR.CONFIG;
using log4net;
using log4net.Repository;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace FOSMAR.PER.WEB
{
    public class Program
    {
        private static readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        public static void Main(string[] args)
        {
            var hostBuilder = CreateHostBuilder(args);

            ILoggerRepository repository = LogManager.GetRepository(Assembly.GetCallingAssembly());

            var fileInfo = new FileInfo(@"log4net.config");
            log4net.Config.XmlConfigurator.Configure(repository, fileInfo);

            hostBuilder.Run();
        }

        public static IWebHost CreateHostBuilder(string[] args) =>
              WebHost.CreateDefaultBuilder(args)
                  .ConfigureAppConfiguration((builderContext, config) =>
                  {
                      IWebHostEnvironment env = builderContext.HostingEnvironment;

                      config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                      config.AddJsonFile($"appsettings.{ConfiguracionProyecto.ENTORNO_DESPLIEGUE}.json", optional: true, reloadOnChange: true);
                  })
                  .UseContentRoot(Directory.GetCurrentDirectory())
                  .UseIISIntegration()
                  .UseStartup<Startup>()
                  .ConfigureLogging(builder =>
                  {
                      builder.SetMinimumLevel(LogLevel.Trace);
                      builder.AddLog4Net("log4net.config");
                  })
                  .Build();
    }
}
