#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Beneficio\Partials\_AgregarBeneficio.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b139de1dbedd46d60d3210b46c160df26575a0d2"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Beneficio_Partials__AgregarBeneficio), @"mvc.1.0.view", @"/Views/Beneficio/Partials/_AgregarBeneficio.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b139de1dbedd46d60d3210b46c160df26575a0d2", @"/Views/Beneficio/Partials/_AgregarBeneficio.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Beneficio_Partials__AgregarBeneficio : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "/Views/Shared/Partials/_AuditoriaPartial2.cshtml", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("FormularioBeneficio"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("autocomplete", new global::Microsoft.AspNetCore.Html.HtmlString("off"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-12 px-0\">\r\n            ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b139de1dbedd46d60d3210b46c160df26575a0d25737", async() => {
                WriteLiteral(@"
                <div class=""modal-header mb-3"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">Agregar Beneficio</h5>
                </div>
                <div class=""container"">
                    <div class=""form-row"">
                        <div class=""col form-group"">
                            <span class=""required-form-span""> Código </span>
                            <input id=""txtCodigo"" name=""txtCodigo"" class=""form-control form-control-sm text-uppercase alfanumerico"" type=""text"" maxlength=""45"">
                        </div>
                        <div class=""col form-group"">
                            <span class=""required-form-span""> Descripción </span>
                            <input id=""txtDescripcion"" name=""txtDescripcion"" class=""form-control form-control-sm text-uppercase alfanumerico"" type=""text"" maxlength=""150"">
                        </div>
                        <div class=""col form-group"">
                            <span class=""required-for");
                WriteLiteral(@"m-span""> Abreviatura </span>
                            <input id=""txtAbreviatura"" name=""txtAbreviatura"" class=""form-control form-control-sm text-uppercase alfanumerico"" type=""text"" maxlength=""150"">
                        </div>
                    </div>
                    <div class=""form-row"">
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Tipo Prestación</span>
                            <select id=""cboTPrestacion"" name=""cboTPrestacion"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Detalle Beneficio</span>
                            <select id=""cboDBeneficio"" name=""cboDBeneficio"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                        <div class=""col form-group"">
          ");
                WriteLiteral(@"                  <span class=""required-form-span"">Tipo Cobertura SITEDS</span>
                            <select id=""cboTCSiteds"" name=""cboTCSiteds"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                    </div>
                    <div class=""form-row"">
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Codigo SITEDS</span>
                            <input id=""txtCSiteds"" name=""txtCSiteds"" class=""form-control form-control-sm text-uppercase alfanumerico"" type=""text"" maxlength=""15"">
                        </div>
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Tipo Gasto de Prestación</span>
                            <select id=""cboTGPrestacion"" name=""cboTGPrestacion"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                   ");
                WriteLiteral(@"     <div class=""col form-group"">
                            <span class=""required-form-span"">Codigo Grupo Beneficio</span>
                            <select id=""cboCGBeneficio"" name=""cboCGBeneficio"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                    </div>
                    <div class=""form-row"">
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Obligatoriedad</span>
                            <select id=""cboObligatoriedad"" name=""cboObligatoriedad"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Indicador CG</span>
                            <select id=""cboICG"" name=""cboICG"" class=""form-control form-control-sm"">
                            </select>
                        </div");
                WriteLiteral(@">
                        <div class=""col form-group"">
                            <span class=""required-form-span"">Genero</span>
                            <select id=""cboGenero"" name=""cboGenero"" class=""form-control form-control-sm"">
                            </select>
                        </div>
                    </div>
                    <div class=""form-row"">
                        <div class=""col-4 form-group"">
                            <span class=""required-form-span"">Indicador Internamiento</span>
                            <select id=""cboIInternamiento"" name=""cboIInternamiento"" class=""form-control form-control-sm""></select>
                        </div>
                    </div>
                </div>
                <div class=""col text-right px-1"">
                    <button id=""btnGrabarBeneficio"" type=""button"" class=""btn btn-primary btn-xs"">Grabar</button>
                </div>
                ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "b139de1dbedd46d60d3210b46c160df26575a0d211357", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n            ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n        </div>\r\n    </div>\r\n</div>\r\n<input type=\"hidden\" id=\"hfactionBeneficio\" />\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
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