#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Persona\Partials\_DireccionPersona.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "919d61e56805269be487d41d0d22f7f8a10e57b7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Persona_Partials__DireccionPersona), @"mvc.1.0.view", @"/Views/Persona/Partials/_DireccionPersona.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"919d61e56805269be487d41d0d22f7f8a10e57b7", @"/Views/Persona/Partials/_DireccionPersona.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Persona_Partials__DireccionPersona : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "/Views/Shared/Partials/_AuditoriaPartial2.cshtml", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("FormularioDireccion"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral(@"<div class=""container"">
    <div class=""row justify-content-center"">
        <div class=""col-12 "">
            <button type=""button"" class=""btn btn-primary btn-xs"" data-toggle=""modal"" data-target=""#mdlDireccion"" id=""btnNuevoDireccion"">
                <i class=""la la-plus mr-1""></i>Nuevo
            </button>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-12"">
            <table id=""tabla_direccion"" class=""table table-striped table-bordered""></table>
        </div>
    </div>
 </div>
<input type=""hidden"" id=""hfCodPersona"" value=""1"" />
<input type=""hidden"" id=""hfactionDireccion"" />
<input type=""hidden"" id=""hfCodDireccion"" />
<!-- Modal -->
<div class=""modal fade"" id=""mdlDireccion"" data-backdrop=""static"" data-keyboard=""false"" tabindex=""-1"" aria-spanledby=""mdlDireccion"" aria-hidden=""true"">
    <div class=""modal-dialog modal-lg"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalspan"">Ag");
            WriteLiteral(@"regar Direcci??n</h5>
                <button type=""button"" class=""close"" data-dismiss=""modal"" aria-span=""Close"">
                    <span aria-hidden=""true"">&times;</span>
                </button>
            </div>
            <div class=""modal-body"">
                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "919d61e56805269be487d41d0d22f7f8a10e57b77007", async() => {
                WriteLiteral(@"
                    <div class=""col-12"">
                        <div class=""form-group d-flex  justify-content-end mb-1"">
                            <div class=""col-2 text-right"">
                            </div>
                        </div>
                        <div class=""form-group d-flex"">
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Tipo Direcci&oacute;n </span>
                                <select id=""cboTDireccion"" name=""cboTDireccion"" class=""form-control form-control-sm"">
                                </select>
                            </div>
                            <div class=""col-lg-4"">

                            </div>
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Predeterminado</span>
                                <select id=""cboPrincipalDireccion"" name=""cboPrincipalDireccion"" class=""form-control form-control-sm""></s");
                WriteLiteral(@"elect>
                            </div>
                        </div>
                        <div class=""form-group d-flex"">
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Tipo V&iacute;a </span>
                                <select id=""cboTVia"" name=""cboTVia"" class=""form-control form-control-sm"">
                                </select>
                            </div>
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">V&iacute;a </span>
                                <input id=""txtVia"" class=""form-control form-control-sm text-uppercase alfaNumCharEsp"" type=""text"" maxlength=""40"" />
                            </div>
                            <div class=""col-lg-4"">
                                <div class=""row"">
                                    <div class=""col"">
                                        <span class=""required-form-span"">Nro. V&iac");
                WriteLiteral(@"ute;a</span>
                                        <input id=""txtNroVia"" name=""txtNroVia"" class=""form-control form-control-sm solonumeros"" type=""text"" maxlength=""5"" />
                                    </div>
                                    <div class=""col"">
                                        <span class=""required-form-span"">Nro. Interior</span>
                                        <input id=""txtInterior"" class=""form-control form-control-sm text-uppercase alfanumerico"" type=""text"" maxlength=""5"" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=""form-group d-flex"">
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Tipo Zona </span>
                                <select id=""cboTipoZona"" name=""cboTipoZona"" class=""form-control form-control-sm"">
                                </selec");
                WriteLiteral(@"t>
                            </div>
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Zona </span>
                                <input id=""txtNroZona"" name=""Zona"" class=""form-control form-control-sm text-uppercase alfaNumCharEsp input-zona"" maxlength=""40"" type=""text"" disabled>
                            </div>
                        </div>
                        <div class=""form-group d-flex mb-1"">
                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Departamento</span>

                                <select id=""cboDepartamentoDirec"" class=""form-control form-control-sm"" name=""cboDepartamentoDirec""></select>
                            </div>

                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Provincia</span>
                                <select id=""cboProvinciaDirec"" class=""form-control fo");
                WriteLiteral(@"rm-control-sm"" name=""cboProvinciaDirec"">
                                </select>
                            </div>

                            <div class=""col-lg-4"">
                                <span class=""required-form-span"">Distrito</span>
                                <select id=""cboDistritoDirec"" name=""cubgeo"" class=""form-control form-control-sm"">
                                </select>
                            </div>
                        </div>
                        <div class=""form-group d-flex"">
                            <div class=""col-lg-12"">
                                <span class=""required-form-span"">Referencia </span>
                                <textarea id=""txtReferencia"" class=""form-control form-control-sm text-uppercase alfaNumCharEsp numeroCaracteres"" cols=""20"" rows=""3""></textarea>
                                <div class=""text-right""><span id=""caracteres"" class=""valid-text pt-3 caracteres""></span></div>
                            </div>
     ");
                WriteLiteral("                   </div>\r\n                        ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "919d61e56805269be487d41d0d22f7f8a10e57b712776", async() => {
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
                WriteLiteral("\r\n                    </div>\r\n                ");
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
            WriteLiteral(@"
            </div>
            <div class=""modal-footer"">
                <button type=""button"" class=""btn btn-secondary btn-xs"" data-dismiss=""modal"">Cerrar</button>

                <button id=""btnGrabarDireccion"" type=""button"" class=""btn btn-primary btn-xs"">Grabar</button>

            </div>
        </div>
    </div>
</div>");
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
