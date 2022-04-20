MIGRATION_ISSUES_DETAILS["adf20f12-cc6f-4589-9377-05ec8ca2f2a5"] = [
{description: "<p>EAP 7 uses JAX-WS 2.2 style constructors with the <code>javax.xml.ws.WebServiceFeature<\/code> class to build clients that are injected into web service references (i.e. using the <code>@WebServiceRef<\/code> annotation).<br/>This means that user provided service classes injected by the container must implement JAX-WS 2.2 or later.<br/>The class must be changed to add the constructor <a href=\"https://docs.oracle.com/javase/7/docs/api/javax/xml/ws/Service.html#Service&#40;java.net.URL,%20javax.xml.namespace.QName,%20javax.xml.ws.WebServiceFeature...&#41;\" target=\"_blank\"><code>Service(URL wsdlDocumentLocation, QName serviceName, WebServiceFeature... features)<\/code><\/a><\/p>", ruleID: "jax-ws-00000", issueName: "JAX-WS 2.2 Requirements for WebServiceRef",
problemSummaryID: "adf20f12-cc6f-4589-9377-05ec8ca2f2a5", files: [
{l:"<a class='' href='SendSimpleMessageService_java.html?project=21667888'>com.sms.ws.client.colombitrade.pico2.services.ws.simple.SendSimpleMessageService<\/a>", oc:"1"},
{l:"<a class='' href='BroadcastSMSStatusService_java.html?project=21667888'>com.sms.ws.client.colombitrade.pico2.services.ws.broadcast.status.BroadcastSMSStatusService<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html-single/migration_guide/#migrate_jax_ws_2_2_requirements_for_webserviceref", t:"JAX-WS 2.2 Requirements for WebServiceRef"},
]},
];
onProblemSummaryLoaded("adf20f12-cc6f-4589-9377-05ec8ca2f2a5");