#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\PlanBeneficio\Partials\_ListarVersionPB.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "83efb1397cd20b4d67cf5f4c47b66296094ac03c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PlanBeneficio_Partials__ListarVersionPB), @"mvc.1.0.view", @"/Views/PlanBeneficio/Partials/_ListarVersionPB.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"83efb1397cd20b4d67cf5f4c47b66296094ac03c", @"/Views/PlanBeneficio/Partials/_ListarVersionPB.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_PlanBeneficio_Partials__ListarVersionPB : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "/Views/Shared/Partials/_AuditoriaPartial.cshtml", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frmVersionPB"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("<div");
            BeginWriteAttribute("class", " class=\"", 4, "\"", 12, 0);
            EndWriteAttribute();
            WriteLiteral(@">
    <div class=""form-row"">
        <button type=""button"" id=""btnNuevoVersionPB"" class=""btn btn-primary btn-xs btn-nuevo"" data-toggle=""modal"" data-target=""#mdlVersionPB"">
            <i class=""fa fa-plus font-weight-bold ml-1""></i> Nueva Versi??n
        </button>
    </div>
    <div class=""row"">
        <div class=""col-lg-12"">
            <table id=""tabla_versionPB"" class=""table table-striped table-bordered""></table>
        </div>
    </div>
</div>
<div class=""modal fade"" id=""mdlVersionPB"" data-backdrop=""static"" data-keyboard=""false"" tabindex=""-1"">
    <div class=""modal-dialog"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""titleVersionPB"">Nueva Versi??n</h5>
                <button type=""button"" class=""close"" data-dismiss=""modal"">
                    <span aria-hidden=""true"">&times;</span>
                </button>
            </div>
            <div class=""modal-body"">
                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "83efb1397cd20b4d67cf5f4c47b66296094ac03c6804", async() => {
                WriteLiteral(@"
                    <div class=""container"">
                        <div class=""form-row form-group"">
                            <div class=""col-lg-6"">
                                <span>Nro. de Versi??n</span>
                                <input type=""hidden"" id=""hfNumVersionPB"" />
                                <input type=""text"" id=""txtNVersionPB"" class=""form-control form-control-sm text-right disabled"" readonly=""readonly"" />
                            </div>
                            <div class=""col-lg-6"">
                                <span>Costo Familiar</span>
                                <input type=""number"" id=""txtCostoFamiliar"" name=""txtCostoFamiliar"" class=""form-control form-control-sm text-right pr-1 numeroDecimal"" min=""-1"" max=""9999999"" step=""0.01"" required maxlength=""7"" placeholder=""0.00"" />
                            </div>
                        </div>
                        <div class=""form-row form-group -content-end rngFechasVIGENCIA"">
                      ");
                WriteLiteral(@"      <div class=""col-6"">
                                <span>Fe. Inicio de Vigencia</span>
                                <div class=""input-group input-group-sm"">
                                    <input id=""txtFIniVigencia"" name=""txtFIniVigencia"" class=""form-control dpRngVig formatoFechas"" type=""text"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text px-2""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                    <span id=""msg0"" style=""color:red;"" class=""msg0""></span>
                                </div>
                            </div>
                            <div class=""col-6"">
                                <span>Fe. Fin de Vigencia</span>
                                <div class=""input-group input-group-sm"">
                                    <input id=""txtFFinVigencia"" name=""txtFFinVigencia"" class=""form-control dpRngVig format");
                WriteLiteral(@"oFechas"" type=""text"">
                                    <div class=""input-group-append"">
                                        <span class=""input-group-text px-2""><i class=""fa fa-calendar""></i></span>
                                    </div>
                                    <span id=""msg0"" style=""color:red;"" class=""msg0""></span>
                                </div>
                            </div>
                        </div>
                        <div class=""form-row form-group"">
                            <div class=""col-6"">
                                <span>L??mite Anual</span>
                                <select id=""cboLimiteAnual"" name=""cboLimiteAnual"" class=""form-control form-control-sm""></select>
                            </div>
                            <div class=""col-lg-6"">
                                <span>Monto L??mite</span>
                                <input type=""number"" id=""txtMontoLimite"" name=""txtMontoLimite"" class=""form-control form-control");
                WriteLiteral(@"-sm text-right pr-1 numeroDecimal"" min=""1"" max=""9999999"" step=""0.01"" placeholder=""0.00"" />
                            </div>
                        </div>

                        <div class=""form-row form-group"">
                            <div class=""col-6"">
                                <span>Forma de Reclamo</span>
                                <select id=""cboFormaReclamo"" name=""cboFormaReclamo"" class=""form-control form-control-sm""></select>
                            </div>
                        </div>
                        ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "83efb1397cd20b4d67cf5f4c47b66296094ac03c10922", async() => {
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
                <button id=""btnGrVersionPB"" type=""button"" class=""btn btn-primary btn-xs"">Guardar</button>
            </div>
        </div>
    </div>
</div>
<input type=""hidden"" id=""hfIdversionPB"" />
<input type=""hidden"" id=""hfnumversionPB"" />

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
