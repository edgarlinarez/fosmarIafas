#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Persona\Partials\_BusquedaSusalud.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b6fa024864c7d4c6221f5fb64e0446aa45713f58"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Persona_Partials__BusquedaSusalud), @"mvc.1.0.view", @"/Views/Persona/Partials/_BusquedaSusalud.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b6fa024864c7d4c6221f5fb64e0446aa45713f58", @"/Views/Persona/Partials/_BusquedaSusalud.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Persona_Partials__BusquedaSusalud : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"<div class=""modal fade"" id=""mdlSusalud"" data-backdrop=""static"" data-keyboard=""false"" tabindex=""-1"" aria-labelledby=""mdlSusaludLabel"" aria-hidden=""true"">
    <div class=""modal-dialog modal-lg"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""mdlSusaludLabel"">Busqueda Susalud</h5>
                <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                    <span aria-hidden=""true"">&times;</span>
                </button>
            </div>
            <div class=""modal-body"">
                <div class=""container-fluid"">
                    <div class=""row"">
                        <div class=""col-3 px-1"">
                            <span>Tipo Documento</span>
                            <select id=""cboSSLD-TDocumento"" class=""form-control form-control-sm""></select>
                        </div>
                        <div class=""col-3 px-1"">
                            <span>Nro. Docume");
            WriteLiteral("nto</span>\r\n                            <input type=\"text\" id=\"txtSSLD-NDocumento\" class=\"form-control form-control-sm solonumeros\"");
            BeginWriteAttribute("value", " value=\"", 1155, "\"", 1163, 0);
            EndWriteAttribute();
            WriteLiteral(@" />
                        </div>
                        <div class=""col-6 px-1 pt-3 text-right"">
                            <button type=""button"" id=""btnBuscarSUSALUD"" class=""btn btn-primary btn-xs""><i class=""fa fa-search mr-1""></i> Buscar</button>
                        </div>
                    </div>
                    <div class=""row"">
                        <div class=""col"">
                            <table id=""dtPersonaSusalud"" class=""table table-striped table-bordered""></table>

                        </div>
                    </div>
                </div>
            </div>
            <div class=""modal-footer"">
                <button type=""button"" class=""btn btn-secondary btn-xs"" data-dismiss=""modal"">Cerrar</button>
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