#pragma checksum "D:\Cepheid\FOSMAR\FOSMAR.WEB.API\FOSMAR.PER.WEB\Views\Shared\Partials\_AuditoriaPartial.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "625423954db80d6e29fe87c9243984ed4b5b375b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_Partials__AuditoriaPartial), @"mvc.1.0.view", @"/Views/Shared/Partials/_AuditoriaPartial.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"625423954db80d6e29fe87c9243984ed4b5b375b", @"/Views/Shared/Partials/_AuditoriaPartial.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ce7e9fa1557f2d506eee3a20fa2dddf319f0f8b8", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_Partials__AuditoriaPartial : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"<input type=""hidden"" name=""ID"" />
<hr />
<div class=""moduleA"">
    <a role=""button"" class=""collapsed text-primary"" data-bs-toggle=""collapse"" data-bs-target="".multi-collapse"" aria-expanded=""false""></a>
    <div class=""collapse multi-collapse"">
        <div class=""form-group d-flex"">
            <div class=""col-lg-6"">
                <label class=""required-form-label"">Estado</label>
");
            WriteLiteral(@"                <select class=""form-control form-control-sm select-estados"" name=""GDESTDO"" placeholder=""Estado"" required></select>
            </div>
            <div class=""col-lg-6"">
                <label class=""required-form-label"">F. Estado</label>
                <input type=""text"" class=""form-control form-control-sm"" name=""cFESTDO"" disabled>
            </div>
        </div>
        <div class=""form-group d-flex"">
            <div class=""col-lg-6"">
                <label class=""required-form-label"">U. Creaci&oacute;n</label>
                <input type=""text"" class=""form-control form-control-sm"" name=""UCRCN"" disabled>
            </div>
            <div class=""col-lg-6"">
                <label class=""required-form-label"">F. Creaci&oacute;n</label>
                <input type=""text"" class=""form-control form-control-sm"" name=""cFCRCN"" disabled>
            </div>
        </div>
        <div class=""form-group d-flex"">
            <div class=""col-lg-6"">
                <label class=""requi");
            WriteLiteral(@"red-form-label"">U. Edici&oacute;n</label>
                <input type=""text"" class=""form-control form-control-sm"" name=""UEDCN"" disabled>
            </div>
            <div class=""col-lg-6"">
                <label class=""required-form-label"">F. Edici&oacute;n</label>
                <input type=""text"" class=""form-control form-control-sm"" name=""cFEDCN"" disabled>
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
