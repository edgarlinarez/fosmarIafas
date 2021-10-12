using FOSMAR.Negocios;
using FOSMAR.PER.WEB.Extensions;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.Negocios.Config;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB
{
    public class Startup
    {
        private readonly IWebHostEnvironment CurrentEnvironment;
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration, IWebHostEnvironment webHostEnvironment)
        {
            Configuration = configuration;
            CurrentEnvironment = webHostEnvironment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            #region REPOSITORY / SERVICE
            services.AddRepository();
            services.AddTransientServices();
            services.AddMemoryCache();
            #endregion

            #region CONFIGURATION
            services.AddSingleton<HttpClient>();
            //services.Configure<EmailConfig>(Configuration.GetSection("Email"));
            //services.Configure<CloudStorageCredentials>(Configuration.GetSection("CloudStorageCredentials"));

            #endregion

            #region Auth
            // Proxies

            services.Configure<ApiUrls>(opts => Configuration.GetSection("ApiUrls").Bind(opts));
            services.AddHttpContextAccessor();

            #endregion

            #region Error handler
            Action<MvcOptions> setupAction = (options) =>
            {
                //options.EnableEndpointRouting
            };
            //if (!CurrentEnvironment.IsDevelopment())
            //{
            setupAction = (options) =>
            {
                options.Filters.Add(new ErrorHandlerAttribute());
            };
            //}
            #endregion
            // Razor Pages & MVC
            services.AddRazorPages(o => o.Conventions.ConfigureFilter(new IgnoreAntiforgeryTokenAttribute()))
                 .AddMvcOptions(setupAction)
                  .AddRazorRuntimeCompilation();
            services.AddControllersWithViews();

            // Add Cookie Authentication
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                    .AddCookie(
                     options =>
                     {
                         options.AccessDeniedPath = "/acceso-denegado";
                         options.LoginPath = "/login";
                         options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
                         options.SlidingExpiration = true;
                     });
                     //.AddCookie(JwtBearerDefaults.AuthenticationScheme,
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.ConfigureApplicationCookie(options =>
            {
                options.LoginPath = "/login";
                options.Cookie.Name = "Cp_AUTH";
                options.AccessDeniedPath = "/acceso-denegado";
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
                options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
                options.SlidingExpiration = true;
            });
            //services.AddRazorPages().AddMvcOptions(setupAction);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                //The default HSTS value is 30 days.You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            //app.UseStatusCodePages(async context =>
            //{
            //    var request = context.HttpContext.Request;
            //    var response = context.HttpContext.Response;

            //    if (response.StatusCode == (int)HttpStatusCode.NotFound)
            //    // you may also check requests path to do this only for specific methods       
            //    // && request.Path.Value.StartsWith("/specificPath")

            //    {
            //        response.Redirect("/no-encontrada");
            //    }
            //});
            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            // global cors policy
            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseEndpoints(endpoints =>
            {

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            app.Run(context =>
            {
                context.Response.StatusCode = 404;
                return Task.FromResult(0);
            });
        }
    }
}
