#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "da4d82f3a277693edbd8a31ebe36441246d02ac9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"da4d82f3a277693edbd8a31ebe36441246d02ac9", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", "~/css/views/home.css", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/js/views/home/index.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Inicio";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            DefineSection("Styles", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "da4d82f3a277693edbd8a31ebe36441246d02ac95697", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper);
#nullable restore
#line 6 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion = true;

#line default
#line hidden
#nullable disable
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                __Microsoft_AspNetCore_Mvc_TagHelpers_LinkTagHelper.Href = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral(@"<div class=""nGrid home col-lg-8 col-md-8 col-sm-10 col-xs-12"">
    <div class=""ctWelcome"">
        <div class=""box-ctWelcome"">
            <div class=""col-lg-6 lflt ctborder "">
                <div class=""txtWelcome"">Bienvenido(a)</div>
                <div class=""pt2 txtNmUsuario""><label id=""lblNmUsuario"" name=""lblNmUsuario"" class=""required-form-label"" style="" color: #fff;""> ");
#nullable restore
#line 13 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
                                                                                                                                         Write(User.GetFullName());

#line default
#line hidden
#nullable disable
            WriteLiteral("</label> </div>\r\n                <div class=\"pt2 txtNmUsu\"> <label id=\"lblNmUsu\" name=\"lblNmUsu\" class=\"required-form-label\" style=\" color: #fff; \"> ");
#nullable restore
#line 14 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
                                                                                                                               Write(User.GetUserCode());

#line default
#line hidden
#nullable disable
            WriteLiteral(@" </label> </div>
                <div class=""pt2 txtOtros"">
                    <div class=""colmn55 lflt ltxt"">Fecha :</div>
                    <div class=""colmn100 rtxt"">
                        <label id=""lblfecha"" name=""lblfecha"" class=""required-form-label"" style="" color: #fff; "">  </label>
                    </div>
                    <div class=""brk""></div>
                </div>
                <div class=""pt2 txtOtros"">
                    <div class=""colmn55 lflt ltxt"">Hora :</div>
                    <div class=""colmn100 rtxt"">
                        <label id=""lblhora"" name=""lblhora"" class=""required-form-label"" style="" color: #fff; "">  </label>
                    </div>
                    <div class=""brk""></div>
                </div>
            </div>
            <div class=""col-lg-6 lflt"">
                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "da4d82f3a277693edbd8a31ebe36441246d02ac99909", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "src", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 1583, "~/assets/css/themes/", 1583, 20, true);
#nullable restore
#line 31 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
AddHtmlAttributeValue("", 1603, FOSMAR.CONFIG.ConfiguracionProyecto.TEMA, 1603, 41, false);

#line default
#line hidden
#nullable disable
            AddHtmlAttributeValue("", 1644, "/img/logo.png", 1644, 13, true);
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
            </div>
            <div class=""brk"">
            </div>
        </div>
    </div>
</div>

<div class=""modal fade"" id=""initModalSucursales"" data-backdrop=""static"" data-keyboard=""false"" tabindex=""-1"" aria-labelledby=""initModalSucursales"" aria-hidden=""true"">
    <div class=""modal-dialog "">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">Seleccione sucursal</h5>
                <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                    <span aria-hidden=""true"">&times;</span>
                </button>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <div class=""col-lg-12"">
                        <select class=""form-control form-control-sm select-sucursal-header"">
                        </select>
                    </div>
                </div>
            </div>
            <div cl");
            WriteLiteral("ass=\"modal-footer\">\r\n                <button id=\"btn-selc-sucursal\" type=\"button\" class=\"btn btn-primary btn-xs\">Guardar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n\r\n");
#nullable restore
#line 65 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
     if ((bool)ViewBag.MostrarModalSucursales)
    {

#line default
#line hidden
#nullable disable
                WriteLiteral(@"        <script>
            $(""#btn-selc-sucursal"").on(""click"", function () {
                $.ajax({
                    url: `/guardar-sucursal-seleccionada`,
                    type: ""POST"",
                    data: {
                        id: $('#initModalSucursales').find("".select-sucursal-header"").val()
                    }
                })
                    .done(function () {
                        $(""#initModalSucursales"").modal(""hide"");
                        $("".select-sucursal-header-1"").val($('#initModalSucursales').find("".select-sucursal-header"").val());
                    });
            });
            $('#initModalSucursales').modal({ backdrop: 'static', keyboard: false })
            $(""#initModalSucursales"").modal(""show"");
        </script>
");
#nullable restore
#line 84 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
    }

#line default
#line hidden
#nullable disable
                WriteLiteral("    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "da4d82f3a277693edbd8a31ebe36441246d02ac914170", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
#nullable restore
#line 85 "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Home\Index.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
#nullable disable
                __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_2.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\r\n");
            }
            );
        }
        #pragma warning restore 1998
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