using System;

namespace FOSMAR.PER.WEB.Models
{
    public class AccessTokenUserInformation
    {
        public string nameid { get; set; }
        public string email { get; set; }
        public string unique_name { get; set; }
        public int exp { get; set; }
        public string family_name { get; set; }
        public string SCRSLES { get; set; }
        public string ScrslSelec { get; set; }
        public string PRFLS { get; set; }
    }
    public class SucursalUsuarioInfo
    {
        public string ID { get; set; }
        public string IDUSRO { get; set; }
        public string IDSCRSL { get; set; }
        public string NSCRSL { get; set; }

        public string UCRCN { get; set; }
        public DateTime? FCRCN { get; set; }
        public string UEDCN { get; set; }
        public DateTime? FEDCN { get; set; }
        public string GDESTDO { get; set; } 
        public DateTime? FESTDO { get; set; }
    }
}
