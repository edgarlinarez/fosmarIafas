#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "beed35de51c6f3429370a861bcd4e9c1b647711c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_Partials__HeaderPartial), @"mvc.1.0.view", @"/Views/Shared/Partials/_HeaderPartial.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.PER.WEB;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.PER.WEB.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.PER.WEB.Helpers;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.PER.WEB.Extensions;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.ENTIDADES;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.CORE.Extensions;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using FOSMAR.CORE;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
using Microsoft.Extensions.Caching.Memory;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"beed35de51c6f3429370a861bcd4e9c1b647711c", @"/Views/Shared/Partials/_HeaderPartial.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_Partials__HeaderPartial : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-controller", "Login", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Logout", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "get", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("logoutForm"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("navbar-right"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@" <!-- header area start -->
<div class=""header-area"">
    <div class=""row align-items-center"">
        <!-- nav and search button -->
        <div class=""col-md-12 col-sm-12 clearfix"">
            <div class=""nav-btn pull-left"">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class=""user-profile pull-right"">
                <h4 class=""user-name dropdown-toggle"" data-toggle=""dropdown"">");
#nullable restore
#line 14 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                                                                        Write(User.GetFullName());

#line default
#line hidden
#nullable disable
            WriteLiteral("<i class=\"fa fa-angle-down\"></i></h4>\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "beed35de51c6f3429370a861bcd4e9c1b647711c7200", async() => {
                WriteLiteral(@"
                    <div class=""dropdown-menu"">
                        <a class=""dropdown-item"" href=""/indice-modulos"">Ir al &iacute;ndice de m&oacute;dulos</a>
                        <a class=""dropdown-item"" href=""/cambiar-contrasena"">Cambiar contrase??a</a>
                        <button type=""submit"" class=""dropdown-item"">Cerrar Sesi&oacute;n</button>
                    </div>
                ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Controller = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Action = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n            </div>\r\n            <div class=\"user-profile pull-right\">\r\n");
#nullable restore
#line 24 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                  
                    var sucursales = System.Text.Json.JsonSerializer.Deserialize<List<SucursalUsuarioInfo>>(User.ObtenerSucursales());
                    var cacheEntry = "";
                    if (!_cache.TryGetValue("ScrslSelec", out cacheEntry))
                    {

                        // Save data in cache.
                        cacheEntry = _cache.Get<string>("ScrslSelec");
                    }   
                

#line default
#line hidden
#nullable disable
#nullable restore
#line 34 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                 if (sucursales != null && sucursales.Count > 1)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <select class=\"form-control form-control-sm select-sucursal-header-1\">\r\n");
#nullable restore
#line 37 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                         foreach (var item in sucursales)
                        {
                            if (item.IDSCRSL == cacheEntry)
                            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "beed35de51c6f3429370a861bcd4e9c1b647711c11133", async() => {
#nullable restore
#line 41 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                                                                  Write(item.NSCRSL);

#line default
#line hidden
#nullable disable
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            BeginWriteTagHelperAttribute();
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __tagHelperExecutionContext.AddHtmlAttribute("selected", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
            BeginWriteTagHelperAttribute();
#nullable restore
#line 41 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                                            WriteLiteral(item.IDSCRSL);

#line default
#line hidden
#nullable disable
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("value", __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
#nullable restore
#line 42 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                            }
                            else
                            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "beed35de51c6f3429370a861bcd4e9c1b647711c13642", async() => {
#nullable restore
#line 45 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                                                         Write(item.NSCRSL);

#line default
#line hidden
#nullable disable
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            BeginWriteTagHelperAttribute();
#nullable restore
#line 45 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                                   WriteLiteral(item.IDSCRSL);

#line default
#line hidden
#nullable disable
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("value", __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
#nullable restore
#line 46 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                            }
                        }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    </select>\r\n");
#nullable restore
#line 49 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_HeaderPartial.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("            </div>\r\n        </div>\r\n        <!-- profile info & task notification -->\r\n");
            WriteLiteral("    </div>\r\n</div>\r\n<!-- header area end -->");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Microsoft.Extensions.Caching.Memory.IMemoryCache _cache { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
