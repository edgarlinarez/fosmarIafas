#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Persona\Partials\_GradoPersona.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d6d85a108bba57d56630371b4f972e6f7eaf66cf"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Persona_Partials__GradoPersona), @"mvc.1.0.view", @"/Views/Persona/Partials/_GradoPersona.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d6d85a108bba57d56630371b4f972e6f7eaf66cf", @"/Views/Persona/Partials/_GradoPersona.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Persona_Partials__GradoPersona : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "/Views/Shared/Partials/_AuditoriaPartial2.cshtml", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("FormularioGrado"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral(@"
<div class=""container"">
    <div class=""row justify-content-center"">
        <div class=""col-12 "">
            <button type=""button"" class=""btn btn-primary btn-xs d-none"" data-toggle=""modal"" data-target=""#mdlGrado"" id=""btnNuevoGrado"">
                <i class=""la la-plus mr-1""></i>Nuevo
            </button>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-12"">
            <table id=""tabla_grado"" class=""table table-striped table-bordered""></table>
        </div>
    </div>
</div>

<input type=""hidden"" id=""hfCodPersona"" />
<input type=""hidden"" id=""hfactionGrado"" />
<input type=""hidden"" id=""hfCodGrado"" />

<!-- Modal -->
<div class=""modal fade"" id=""mdlGrado"" data-backdrop=""static"" data-keyboard=""false"" tabindex=""-1"" aria-labelledby=""mdlGrado"" aria-hidden=""true"">
    <div class=""modal-dialog modal-lg"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">Agregar</h5>
            ");
            WriteLiteral("    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d6d85a108bba57d56630371b4f972e6f7eaf66cf6607", async() => {
                WriteLiteral(@"
                    <div class=""col-12"">
                        <div class=""form-group row"">
                            <div class=""col-lg-3"">
                                <label class=""required-form-label"">Tipo de Relaci??n </label>
                                <select id=""cboTRelaccion"" name=""cboTRelaccion"" class=""form-control form-control-sm"" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-3"">
                                <label class=""required-form-label"">Situaci&oacute;n Militar </label>
                                <select id=""cboSMilitar"" name=""cboSMilitar"" class=""form-control form-control-sm"" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-4 input-tiempo-servicio"">
                                <label class=""required-form-label"">Tiempo de Servicio</label>
                           ");
                WriteLiteral(@"     <div class=""input-group input-group-sm"">
                                    <input type=""text"" id=""txtTServicio"" name=""txtTServicio"" class=""form-control"" disabled>
                                </div>
                            </div>
                        </div>
                        <div class=""form-group row inputs-fechas-todas"">
                            <div class=""col-lg-3 input-fecha-ingreso"">
                                <label class=""required-form-label"">Fecha de Ingreso </label>
                                <div class=""input-group"">
                                    <input class=""form-control form-control-sm valid formatoFechas"" id=""txtFIngreso"" name=""txtFIngreso"" type=""text"" aria-invalid=""false"" autocomplete=""off"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text""><i class=""fa fa-calendar""></i></span>
                                    </div>
                               ");
                WriteLiteral(@"     <span id=""mgrd0"" style=""color:red;"" class=""mgrd0""></span>
                                </div>
                            </div>
                            <div class=""col-lg-3 input-fecha-disponibilidad"">
                                <label class=""required-form-label"">Fecha de Disponibilidad </label>
                                <div class=""input-group"">
                                    <input id=""txtFDisponibilidad"" name=""txtFDisponibilidad"" class=""form-control form-control-sm valid formatoFechas"" type=""text"" aria-invalid=""false"" autocomplete=""off"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                    <span id=""mgrd1"" style=""color:red;"" class=""mgrd1""></span>
                                </div>
                            </div>
                            <div class=""col-lg");
                WriteLiteral(@"-3 input-fecha-termino"">
                                <label class=""required-form-label"">Fecha T&eacute;rmino de Disp.</label>
                                <div class=""input-group"">
                                    <input id=""txtFTermino"" name=""txtFTermino"" class=""form-control form-control-sm valid formatoFechas"" type=""text"" aria-invalid=""false"" autocomplete=""off"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                    <span id=""mgrd2"" style=""color:red;"" class=""mgrd2""></span>
                                </div>
                            </div>
                            <div class=""col-lg-3 input-fecha-baja"">
                                <label class=""required-form-label"">Fecha de Baja </label>
                                <div class=""input-group"">
                             ");
                WriteLiteral(@"       <input id=""txtFBaja"" name=""txtFBaja"" class=""form-control form-control-sm valid formatoFechas"" type=""text"" aria-invalid=""false"" autocomplete=""off"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                    <span id=""mgrd3"" style=""color:red;"" class=""mgrd3""></span>
                                </div>
                            </div>
                        </div>
                        <div class=""form-group row row-persona-naval"">
                            <div class=""col-lg-3 input-causal"">
                                <label class=""required-form-label"">Motivo de Baja</label>
                                <select id=""cboCBaja"" name=""cboCBaja"" class=""form-control form-control-sm "" style=""width:100%"">
                                </select>
                            </div>
      ");
                WriteLiteral(@"                      <div class=""col-lg-3 input-afeccion"">
                                <label class=""required-form-label"">Causal de Baja</label>
                                <select id=""cboTAfeccion"" name=""cboTAfeccion"" class=""form-control form-control-sm"" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-4 input-disponibilidad"">
                                <label class=""required-form-label"">Motivo Disponibilidad</label>
                                <select id=""cboMDisponibilidad"" name=""cboMDisponibilidad"" class=""form-control form-control-sm "" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-3 input-grado"">
                                <label class=""required-form-label"">Grado</label>
                                <select id=""cboGrado"" name=""cboGrado"" class=""form-control form-control-sm"" style");
                WriteLiteral(@"=""width:100%""></select>
                            </div>
                            <div class=""col-lg-3 input-especialidad"">
                                <label class=""required-form-label"">Especialidad </label>
                                <select id=""cboEspecialidad"" name=""cboEspecialidad"" class=""form-control form-control-sm"" style=""width:100%"">
                                </select>
                            </div>
                        </div>
                        <div class=""form-group row"">
                            <div class=""col-lg-3"">
                                <label class=""required-form-label"">V??nculo de Persona</label>
                                <select id=""cboTPersonaGrado"" name=""cboTPersonaGrado"" class=""form-control form-control-sm select-grado-tipo-persona"" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-3"">
                                <label class=""r");
                WriteLiteral(@"equired-form-label"">Unidad de Pago</label>
                                <select id=""cboUpago"" name=""cboUpago"" class=""form-control form-control-sm"" style=""width:100%""></select>
                            </div>
                            <div class=""col-lg-3 input-discapacidad"">
                                <label class=""required-form-label"">Tipo de Discapacidad </label>
                                <select id=""cboInterdicto"" name=""cboInterdicto"" class=""form-control form-control-sm "" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-3 input-discapacidad"">
                                <label class=""required-form-label"">Diagn&oacute;stico </label>
                                <select id=""cboDiagnostico"" name=""cboDiagnostico"" class=""form-control form-control-sm text-uppercase alfaNumCharEsp"" style=""width:100%"">
                                </select>
                            </div>
    ");
                WriteLiteral(@"                    </div>
                        <div class=""form-group row"">
                            <div class=""col-lg-3 input-discapacidad"">
                                <label class=""required-form-label"">N&uacute;mero Certificado </label>
                                <div class=""input-group"">
                                    <input id=""txtNCertificado"" name=""txtNCertificado"" class=""form-control form-control-sm valid input-vinculo text-uppercase alfaNumCharEsp"" type=""text"" aria-invalid=""false"">
                                </div>
                            </div>

                            <div class=""col-lg-3 input-discapacidad"">
                                <label class=""required-form-label"">Fecha Certificado </label>
                                <div class=""input-group"">
                                    <input id=""txtFCertificado"" name=""txtFCertificado"" class=""form-control form-control-sm valid input-vinculo formatoFechas"" type=""text"" aria-invalid=""false"">
    ");
                WriteLiteral(@"                                <div class=""input-group-append"">
                                        <span class=""input-group-text""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class=""col-lg-3 input-afiliable"">
                                <label class=""required-form-label"">Afiliable </label>
                                <select id=""cboAfiliable"" name=""cboAfiliable"" class=""form-control form-control-sm "" style=""width:100%"">
                                </select>
                            </div>
                            <div class=""col-lg-3 input-pensionable"">
                                <label class=""required-form-label"">Pensionable </label>
                                <select id=""cboPensionable"" name=""cboPensionable"" class=""form-control form-control-sm"" style=""width:100%"">
                                </select>
               ");
                WriteLiteral("             </div>\r\n                        </div>\r\n                    </div>\r\n                    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "d6d85a108bba57d56630371b4f972e6f7eaf66cf17908", async() => {
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
                WriteLiteral("\r\n                ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
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
                <button id=""btnGrabarGrado"" type=""button"" class=""btn btn-primary btn-xs"">Grabar</button>
            </div>
        </div>
    </div>
</div>

");
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
