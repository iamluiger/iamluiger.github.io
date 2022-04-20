MIGRATION_ISSUES_DETAILS["366f2caa-9c22-413b-b531-4c055e22b7eb"] = [
{description: "<p>This method lookups an object using a JNDI String. During the migration process, some entity JNDI bindings may change. Ensure that the JNDI Name does not need to change for JBoss EAP.<\/p><p><em>For Example:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;weblogic.jms.ConnectionFactory&quot;);\n<\/code><\/pre><p><em>should become:<\/em><\/p>\n<pre><code class=\"java\">(ConnectionFactory)initialContext.lookup(&quot;/ConnectionFactory&quot;);\n<\/code><\/pre>", ruleID: "environment-dependent-calls-02000", issueName: "Call of JNDI lookup",
problemSummaryID: "366f2caa-9c22-413b-b531-4c055e22b7eb", files: [
{l:"<a class='' href='ConnectionPool_java.html?project=21667888'>com.Dinissan.general.db.ConnectionPool<\/a>", oc:"1"},
{l:"<a class='' href='Context_java.html?project=21667888'>com.Dinissan.inventarios.helper.Context<\/a>", oc:"2"},
{l:"<a class='' href='ConnectionPoolRpt_java.html?project=21667888'>com.Dinissan.general.db.ConnectionPoolRpt<\/a>", oc:"1"},
{l:"<a class='' href='IfxConnectionPoolManager_java.html?project=21667888'>com.informix.jdbcx.IfxConnectionPoolManager<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/development_guide/#chap-Remote_JNDI_Lookup", t:"JBoss EAP 6 - JNDI Reference"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/migration_guide/#sect-JNDI_Changes", t:"JNDI Changes"},
]},
];
onProblemSummaryLoaded("366f2caa-9c22-413b-b531-4c055e22b7eb");