import { site, type Locale } from "@/shared/config/site";

export type LegalDocument = "terms" | "privacy";

interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

interface LegalContent {
  title: string;
  description: string;
  sections: LegalSection[];
}

export const legalPaths: Record<LegalDocument, string> = {
  terms: "/terminos-y-condiciones",
  privacy: "/politica-de-privacidad",
};

export const legalContent: Record<Locale, Record<LegalDocument, LegalContent>> = {
  es: {
    terms: {
      title: "Términos y condiciones",
      description: "Condiciones de uso del sitio de creamostuweb e información sobre la contratación de nuestros servicios digitales.",
      sections: [
        { id: "alcance", title: "Alcance y aceptación", paragraphs: ["Estos términos regulan el uso de creamostuweb.us, operado bajo la marca creamostuweb en Las Vegas, Nevada. Al utilizar el sitio, aceptas estas condiciones de uso. La contratación de servicios requiere aceptar la propuesta o el contrato correspondiente; navegar por el sitio o solicitar una asesoría no crea por sí solo un contrato de servicios."] },
        { id: "servicios", title: "Servicios y propuestas", paragraphs: ["Ofrecemos diseño y desarrollo de páginas web, tiendas en línea, CRM y herramientas digitales para negocios. El alcance, los entregables, las revisiones, los plazos, el soporte y las responsabilidades de cada proyecto se establecen en una propuesta o un contrato por escrito. Ese acuerdo prevalece sobre la información general del sitio para el proyecto contratado."] },
        { id: "precios", title: "Precios, pagos y financiamiento", paragraphs: ["Los precios y las promociones publicados dependen del alcance y de las condiciones indicadas en cada oferta. El importe final, los impuestos aplicables, los anticipos y la periodicidad de los cobros deben constar en la propuesta aceptada. El financiamiento está sujeto a las condiciones y, cuando corresponda, a la aprobación del proveedor que lo ofrezca. Una solicitud no garantiza su aprobación."] },
        { id: "responsabilidades", title: "Información y materiales del cliente", paragraphs: ["Debes proporcionar información correcta y contar con los permisos necesarios sobre los textos, imágenes, marcas y otros materiales que nos entregues. Los plazos pueden depender de la entrega de esos materiales y de tus aprobaciones. Los cambios de alcance deben acordarse por escrito."] },
        { id: "propiedad", title: "Propiedad intelectual", paragraphs: ["Los elementos del sitio, incluidos su diseño, textos, logotipos y código, están protegidos por los derechos que correspondan a creamostuweb o a sus respectivos titulares. Su publicación no autoriza su reproducción, reventa o uso indebido. La titularidad y las licencias de los entregables de un proyecto se determinan en su contrato; las herramientas y los recursos de terceros conservan sus propias licencias."] },
        { id: "uso", title: "Uso permitido del sitio", paragraphs: ["No puedes utilizar el sitio para actividades ilegales, enviar información fraudulenta, distribuir software malicioso, intentar acceder sin autorización a sistemas o interferir con su funcionamiento. Eres responsable de proteger las credenciales de las cuentas que utilices en relación con nuestros servicios."] },
        { id: "terceros", title: "Plataformas y enlaces de terceros", paragraphs: ["El sitio puede enlazar o integrar calendarios, mensajería, herramientas de análisis y otros servicios externos. Esos proveedores tienen sus propias condiciones y políticas de privacidad. Su disponibilidad, sus cambios y sus decisiones no están bajo nuestro control."] },
        { id: "comunicaciones", title: "Consultas y comunicaciones", paragraphs: ["Cuando solicitas información o reservas una cita, podemos responder por los medios que facilites para atender esa solicitud. Cualquier suscripción a mensajes promocionales requiere el consentimiento que corresponda; una consulta no equivale a autorizar todas las campañas. Puedes pedir que dejemos de enviarte comunicaciones promocionales a través de los datos de contacto de esta página."] },
        {
          id: "sms",
          title: "Programa de mensajes SMS de creamostuweb",
          paragraphs: [
            "Con tu consentimiento, creamostuweb puede enviarte SMS sobre consultas, citas y servicios. Las promociones requieren autorización separada. El consentimiento es opcional y no es condición de compra. Facilitar tu teléfono o aceptar estos términos no constituye por sí solo una suscripción.",
            `Para cancelar, responde STOP al SMS recibido. Recibirás una confirmación de baja y después no enviaremos más SMS del programa. Para volver a suscribirte, completa nuevamente el proceso de consentimiento. Para ayuda, responde HELP o escribe a ${site.email.address}; también puedes llamar al ${site.phone.display}.`,
            "La frecuencia de mensajes varía según tus solicitudes y suscripciones. Pueden aplicar tarifas de mensajes y datos, tanto al recibir como al enviar SMS; consulta tu plan con tu operador. Los operadores no son responsables de mensajes retrasados o no entregados.",
            "Consulta la Política de privacidad enlazada al final de esta página para conocer cómo tratamos tu información y consentimiento.",
          ],
        },
        { id: "cancelaciones", title: "Cancelaciones y reembolsos", paragraphs: ["Las condiciones de cancelación, renovación, suspensión y reembolso de los servicios son las establecidas en la propuesta o el contrato que aceptes y en la legislación aplicable. Estos términos no establecen una política general de pagos no reembolsables ni sustituyen las condiciones específicas de cada servicio."] },
        { id: "resultados", title: "Disponibilidad y resultados", paragraphs: ["El sitio puede experimentar interrupciones o contener errores que deban corregirse. Las referencias a resultados comerciales son informativas y no garantizan una cantidad determinada de ventas, clientes, reseñas o posiciones en buscadores. Nada en estos términos excluye responsabilidades o derechos que no puedan limitarse conforme a la legislación aplicable."] },
        { id: "cambios", title: "Cambios y consultas", paragraphs: ["Podemos actualizar estos términos y publicaremos la nueva versión con su fecha de actualización. Los cambios en esta página no modifican por sí solos un contrato de servicios ya aceptado. Si tienes preguntas sobre estas condiciones, comunícate con nosotros antes de contratar."] },
      ],
    },
    privacy: {
      title: "Política de privacidad",
      description: "Información sobre los datos que recibimos, las herramientas que utiliza el sitio y cómo contactarnos sobre tu privacidad.",
      sections: [
        { id: "responsable", title: "Quiénes somos y alcance", paragraphs: ["Esta política describe el tratamiento de información relacionado con creamostuweb.us y las consultas dirigidas a creamostuweb, en Las Vegas, Nevada. No sustituye las políticas de las plataformas externas que elijas utilizar ni los acuerdos sobre datos que puedan formar parte de un servicio contratado."] },
        { id: "datos", title: "Información que recibimos", paragraphs: ["Podemos recibir tu nombre, correo electrónico, teléfono, información del negocio, datos de la cita y el contenido de los mensajes que nos envías por correo, teléfono, WhatsApp o el calendario de reservas. Comparte únicamente la información necesaria para tu consulta y evita enviar contraseñas, datos completos de tarjetas o información sensible por esos medios.", "Al visitar el sitio, nuestros proveedores de alojamiento, análisis y publicidad pueden recibir información técnica como dirección IP, navegador, dispositivo, páginas visitadas, referencias de tráfico e identificadores de cookies o tecnologías similares."] },
        { id: "finalidades", title: "Para qué utilizamos la información", paragraphs: ["Utilizamos la información relacionada con tu solicitud para responder consultas, coordinar citas, preparar propuestas y prestar los servicios que contrates. La información técnica permite operar y proteger el sitio, analizar su uso y medir la efectividad de la publicidad. Las comunicaciones promocionales están sujetas a los permisos que correspondan."] },
        { id: "cookies", title: "Cookies, Google Analytics y Meta Pixel", paragraphs: ["El sitio integra Google Analytics mediante la etiqueta de Google, Google Tag Manager y Meta Pixel. Estas tecnologías pueden utilizar cookies e identificadores para medir visitas, interacciones y resultados publicitarios. Google Tag Manager permite cargar y administrar etiquetas; los datos tratados dependen de las etiquetas configuradas.", "Puedes bloquear o eliminar cookies desde tu navegador y consultar las opciones de privacidad de Google y Meta en los enlaces de esta página. Bloquear cookies no necesariamente impide todas las conexiones con terceros. Esta página informa sobre esas herramientas; no funciona como un panel de consentimiento ni cambia por sí sola su configuración."] },
        { id: "proveedores", title: "Proveedores y divulgación de información", paragraphs: ["Los proveedores que intervienen en el funcionamiento del sitio y la atención de consultas pueden recibir la información necesaria para sus funciones: alojamiento, correo, calendario de reservas, mensajería, análisis y medición publicitaria. El calendario integrado se carga desde api.gstf.us cuando abres la reserva; si lo utilizas, los datos que ingreses se transmiten a ese servicio. Si abres WhatsApp, Google Maps u otro enlace externo, se aplican también las políticas de esa plataforma.", "Las herramientas de Google y Meta pueden recibir información de navegación directamente desde tu dispositivo. Según la legislación y la configuración aplicables, ciertos usos de datos publicitarios pueden considerarse venta o intercambio de información personal. También podemos divulgar información cuando sea necesario para cumplir obligaciones legales o proteger derechos y la seguridad."] },
        {
          id: "sms-privacy",
          title: "Privacidad y consentimiento de SMS",
          paragraphs: [
            "No compartiremos información móvil con terceros ni afiliados para fines de marketing o promoción. Se permite compartir información con subcontratistas que prestan servicios de apoyo, como atención al cliente. Todas las demás categorías de uso excluyen los datos de suscripción y el consentimiento del remitente de mensajes de texto; esa información no se compartirá con terceros. Esta restricción prevalece sobre las descripciones generales de divulgación de esta política.",
            `Responde STOP al SMS recibido para cancelar los mensajes, o HELP para obtener ayuda. La frecuencia varía y pueden aplicar tarifas de mensajes y datos. También puedes contactarnos en ${site.email.address}.`,
          ],
        },
        { id: "conservacion", title: "Conservación y seguridad", paragraphs: ["La conservación de la información depende del motivo de la consulta, de la relación comercial, de las obligaciones legales y de la configuración de cada proveedor. Puedes contactarnos para consultar la conservación de tus datos o solicitar su eliminación. Ningún sistema de transmisión o almacenamiento garantiza una seguridad absoluta."] },
        { id: "derechos", title: "Tus solicitudes y preferencias", paragraphs: ["Puedes escribirnos para solicitar acceso, corrección o eliminación de tu información, o para dejar de recibir comunicaciones promocionales. Según tu lugar de residencia y la legislación que resulte aplicable, puedes tener otros derechos, incluidos los relacionados con ciertos usos publicitarios. Indica el medio con el que nos contactaste y qué deseas solicitar; podemos necesitar verificar tu identidad antes de responder y algunas obligaciones legales pueden limitar la eliminación.", "El sitio no incorpora actualmente un mecanismo propio para responder a señales de Do Not Track ni un panel de exclusión publicitaria. Los controles del navegador y de cada proveedor se administran por separado; también puedes contactarnos con una solicitud de privacidad."] },
        { id: "internacional", title: "Tratamiento fuera de tu ubicación", paragraphs: ["Los servicios de internet que utilizamos pueden tratar información en Estados Unidos y en otros países donde operen sus proveedores. Las normas de protección de datos pueden variar entre esas ubicaciones."] },
        { id: "menores", title: "Menores de edad", paragraphs: ["El sitio y nuestros servicios están dirigidos a negocios y a personas con capacidad para contratarlos, no a menores de 13 años. Si consideras que un menor nos envió información personal, comunícate con nosotros para que podamos revisar el caso."] },
        { id: "actualizaciones", title: "Actualizaciones y contacto", paragraphs: ["Publicaremos los cambios de esta política en esta página con su fecha de actualización. Para consultas sobre privacidad o para ejercer los derechos que te correspondan, utiliza el correo o la dirección que aparecen a continuación."] },
      ],
    },
  },
  en: {
    terms: {
      title: "Terms and conditions",
      description: "Terms for using the creamostuweb website and information about engaging our digital services.",
      sections: [
        { id: "alcance", title: "Scope and acceptance", paragraphs: ["These terms govern the use of creamostuweb.us, operated under the creamostuweb brand in Las Vegas, Nevada. By using the website, you accept these website terms. Purchasing services requires acceptance of the relevant proposal or agreement; browsing the website or requesting a consultation does not by itself create a service agreement."] },
        { id: "servicios", title: "Services and proposals", paragraphs: ["We offer website design and development, online stores, CRM and digital tools for businesses. Each project's scope, deliverables, revisions, timeline, support and responsibilities are set out in a written proposal or agreement. That agreement takes precedence over general website information for the contracted project."] },
        { id: "precios", title: "Pricing, payments and financing", paragraphs: ["Published prices and promotions depend on the scope and conditions stated in each offer. Final charges, applicable taxes, deposits and billing frequency must be specified in the accepted proposal. Financing is subject to the offering provider's terms and, where applicable, approval. Submitting a request does not guarantee approval."] },
        { id: "responsabilidades", title: "Client information and materials", paragraphs: ["You must provide accurate information and hold the necessary permissions for text, images, trademarks and other materials you supply. Timelines may depend on receiving those materials and your approvals. Scope changes must be agreed in writing."] },
        { id: "propiedad", title: "Intellectual property", paragraphs: ["Website elements, including design, text, logos and code, are protected by the rights held by creamostuweb or their respective owners. Publication does not authorize reproduction, resale or misuse. Ownership and licensing of project deliverables are determined by the project agreement; third-party tools and resources remain subject to their own licenses."] },
        { id: "uso", title: "Acceptable use", paragraphs: ["You may not use this website for unlawful activities, submit fraudulent information, distribute malicious software, attempt unauthorized access or interfere with its operation. You are responsible for protecting credentials for accounts you use in connection with our services."] },
        { id: "terceros", title: "Third-party platforms and links", paragraphs: ["The website may link to or integrate calendars, messaging, analytics and other external services. Those providers have their own terms and privacy policies. Their availability, changes and decisions are outside our control."] },
        { id: "comunicaciones", title: "Inquiries and communications", paragraphs: ["When you request information or book an appointment, we may respond through the contact methods you provide to address that request. Subscriptions to promotional messages require the applicable consent; an inquiry does not authorize every marketing campaign. You may ask us to stop promotional communications using the contact details on this page."] },
        {
          id: "sms",
          title: "creamostuweb SMS messaging program",
          paragraphs: [
            "With your consent, creamostuweb may send SMS about inquiries, appointments and services. Promotions require separate permission. Consent is optional and is not a condition of purchase. Providing your phone number or accepting these terms does not by itself subscribe you.",
            `To unsubscribe, reply STOP to a received SMS. You will receive an opt-out confirmation, followed by no further program SMS. To rejoin, complete the consent process again. For support, reply HELP, email ${site.email.address} or call ${site.phone.display}.`,
            "Message frequency varies with your requests and subscriptions. Message and data charges may apply to incoming and outgoing SMS; check your plan with your wireless provider. Carriers are not liable for delayed or undelivered messages.",
            "See the Privacy policy linked at the bottom of this page for information about your data and consent.",
          ],
        },
        { id: "cancelaciones", title: "Cancellations and refunds", paragraphs: ["Service cancellation, renewal, suspension and refund terms are those stated in your accepted proposal or agreement and applicable law. These website terms do not establish a general nonrefundable payment policy or replace service-specific terms."] },
        { id: "resultados", title: "Availability and results", paragraphs: ["The website may experience interruptions or contain errors requiring correction. References to business results are informational and do not guarantee a particular number of sales, leads, reviews or search rankings. Nothing in these terms excludes liabilities or rights that cannot be limited under applicable law."] },
        { id: "cambios", title: "Changes and questions", paragraphs: ["We may update these terms and publish the revised version with its update date. Changes to this page do not by themselves amend an existing service agreement. Contact us with questions about these terms before purchasing services."] },
      ],
    },
    privacy: {
      title: "Privacy policy",
      description: "Learn about the information we receive, the tools this website uses and how to contact us about your privacy.",
      sections: [
        { id: "responsable", title: "Who we are and scope", paragraphs: ["This policy describes information handling related to creamostuweb.us and inquiries addressed to creamostuweb in Las Vegas, Nevada. It does not replace the policies of external platforms you choose to use or data agreements that may form part of a contracted service."] },
        { id: "datos", title: "Information we receive", paragraphs: ["We may receive your name, email address, phone number, business information, appointment details and messages you send through email, phone, WhatsApp or the booking calendar. Share only information needed for your inquiry and avoid sending passwords, full payment card details or sensitive information through those channels.", "When you visit the website, our hosting, analytics and advertising providers may receive technical information such as IP address, browser, device, pages visited, traffic referrals and cookie or similar identifiers."] },
        { id: "finalidades", title: "How we use information", paragraphs: ["We use information related to your request to respond to inquiries, coordinate appointments, prepare proposals and deliver contracted services. Technical information helps operate and protect the website, analyze usage and measure advertising effectiveness. Promotional communications are subject to applicable permissions."] },
        { id: "cookies", title: "Cookies, Google Analytics and Meta Pixel", paragraphs: ["The website integrates Google Analytics through the Google tag, Google Tag Manager and Meta Pixel. These technologies may use cookies and identifiers to measure visits, interactions and advertising results. Google Tag Manager loads and manages tags; the information processed depends on the configured tags.", "You can block or delete cookies in your browser and review Google and Meta privacy controls through the links on this page. Blocking cookies does not necessarily prevent all third-party connections. This page describes these tools; it is not a consent manager and does not itself change their settings."] },
        { id: "proveedores", title: "Providers and information disclosure", paragraphs: ["Providers involved in operating the website and handling inquiries may receive information needed for their roles: hosting, email, booking, messaging, analytics and advertising measurement. The embedded calendar loads from api.gstf.us when you open booking; information you enter is transmitted to that service. If you open WhatsApp, Google Maps or another external link, that platform's policies also apply.", "Google and Meta tools may receive browsing information directly from your device. Depending on applicable law and settings, some advertising data uses may qualify as a sale or sharing of personal information. We may also disclose information as needed to meet legal obligations or protect rights and security."] },
        {
          id: "sms-privacy",
          title: "SMS privacy and consent",
          paragraphs: [
            "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
            "This restriction takes precedence over this policy's general disclosure descriptions.",
            `Reply STOP to a received SMS to unsubscribe, or HELP for support. Message frequency varies and message and data charges may apply. You can also contact ${site.email.address}.`,
          ],
        },
        { id: "conservacion", title: "Retention and security", paragraphs: ["Retention depends on the purpose of your inquiry, the business relationship, legal obligations and each provider's settings. You can contact us to ask about retention of your information or request deletion. No transmission or storage system guarantees absolute security."] },
        { id: "derechos", title: "Your requests and preferences", paragraphs: ["You can write to request access, correction or deletion of your information, or to stop promotional communications. Depending on your residence and applicable law, you may have additional rights, including rights concerning certain advertising uses. Tell us how you contacted us and what you wish to request; we may need to verify your identity before responding, and some legal obligations may limit deletion.", "The website does not currently include its own mechanism for responding to Do Not Track signals or an advertising opt-out panel. Browser and provider controls are managed separately; you can also contact us with a privacy request."] },
        { id: "internacional", title: "Processing outside your location", paragraphs: ["The internet services we use may process information in the United States and other countries where their providers operate. Data protection rules may differ between those locations."] },
        { id: "menores", title: "Children", paragraphs: ["The website and services are intended for businesses and people with the capacity to purchase them, not children under 13. If you believe a child has submitted personal information to us, please contact us so we can review the matter."] },
        { id: "actualizaciones", title: "Updates and contact", paragraphs: ["We will publish policy changes on this page with an updated date. For privacy questions or to exercise applicable rights, use the email or address below."] },
      ],
    },
  },
};
