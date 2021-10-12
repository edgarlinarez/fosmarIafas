using FOSMAR.CORE.Extensions;
using log4net.Core;
using log4net.Layout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;

namespace FOSMAR.PER.WEB.Extensions
{
    public class XmlCustomLayout : XmlLayoutBase    
    {
        protected override void FormatXml(XmlWriter writer, LoggingEvent loggingEvent)
        {
            
            writer.WriteStartElement("Error");
            writer.WriteAttributeString("location", loggingEvent.LoggerName);

            //
            writer.WriteStartElement("Date");
            writer.WriteString(loggingEvent.TimeStamp.ToString("dd/MM/yyyy HH:mm tt"));
            writer.WriteEndElement();
            //
            writer.WriteStartElement("Message");
            writer.WriteString(loggingEvent.RenderedMessage);
            writer.WriteEndElement();
            //
            writer.WriteStartElement("Level");
            writer.WriteString(loggingEvent.Level.DisplayName);
            writer.WriteEndElement();
            //
            writer.WriteEndElement();
        }
    }
}
