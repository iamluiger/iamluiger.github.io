

** Trabajo en Progreso **

# Microservicios o la segunda oportunidad que nos da Dios de hacer bien SOA



## Microservicios, la palabra de moda

En nuestro mundo cada semana tenemos una palabra de **moda** y definitivamente en los últimos 4 años las palabras de moda pasaron por: DevOps, Transformación Digital, Contenedores, Microservicios entre otras. De las tendencias que anteriormente enumeramos me atrevería a decir que una de las que mas ha generado interés en los equipos de desarrollo es el de microservicios.

Y cuando uno comienza a investigar el por que el  súbito interés por este tema, muchos de mis colegas me manifiestan  que en sus organizaciones grandes iniciativas de SOA vienen fracasando unas tras otras.

En ese orden ideas se ha venido buscando una nueva forma de solventar ese **fallo** de SOA


## ¿Por que SOA fallo?

Antes de atrevernos a decir si SOA fallo o murió como algunos nos dicen veamos de forma muy resumida que es SOA (Service Oriented Architecture)

La Open Group define [SOA](https://www.opengroup.org/soa/source-book/soa/p1.htm) como un *estilo arquitectónico que soporta una orientación a servicios* y bien que quiere decir esto, lo primero y mas importante es que se construye software con la premisa de que expongan servicios (algún mecanismo de comunicación) que son un espejo de las actividades reales de la organización.

Este primer elemento de separar el dominio de negocio de una forma independiente y que fueran desacoplados unos dominios de otros es lo que conocemos como [Domain Driven Desing (DDD)](http://dddcommunity.org/)

El **DDD** nos permite hacer en principio una esquema de diseño orientado al dominio lo que en la practica nos permitiría  construir de forma desacoplada y separada cada componente de software sin que se mezclen unos con otros, solo crear un interfaz, un contrato  y _voilà_. Pero resulta que dentro de este paradigma teníamos elementos que estaban orientados a simplificar la integración con sistemas  como eran los [Enterprise Service Bus (ESB)](https://en.wikipedia.org/wiki/Enterprise_service_bus) y se convirtieron en el gran y único pegamento  de SOA y es asi que lo que hicimos con las manos lo desbaratamos con los pies. 

(solo 1 de cada 5 proyectos SOA tuvieron exito segun [Barton’s group Anne Thomas Manes](https://www.infoq.com/news/2008/07/Only1/))

Si en definitiva muchos proyectos SOA han pasado realmente a convertirse en proyectos ESB monolíticos donde todo lo acoplas allí y generas todos los problemas que querías eliminar y  fue así donde esos proyectos SOA fallaron, pues se convirtieron en proyectos ESB; que de hecho rompieron varios principios de SOA.

Bajo esta premisa podríamos decir que SOA no fallo lo que fallaron fueron esos proyectos de ESB monolíticos y mas aun los principios de SOA están mas vivos que nunca.  

## Mas rápido, mas corto, menos gente

Si bien decimos que SOA no murió, pero si existe una realidad, los proyectos siguieron fracasando en muchos clientes y lo peor es que se esperaba mitigarlo haciendo mas rápidos los ciclos de desarrollo.

Y las empresas descubrieron el poder de lo pequeño o eso pensaron cuando iniciarón la adopción de las practicas ágiles en las organizaciones. Muchas empresas inician Scrum o cualquier otra metodología ágil como un fin en si mismo o buscando que los desarrolladores construyan mucho mas rápido software, pero el problema es que en el mejor de los casos terminan haciendo es código mas rápido pero dejando de lado la verdadera naturaleza del agilisimo en el mundo del software, que es tener mas rápido el producto ejecutándose.

El código fuente tiene un **valor de 0 pesos** (dolares o la moneda de turno) hasta que no entra en ejecución y los usuarios sacan provecho de todo lo que se ha construido el equipo de desarrollo.

![[Agilismos](http://johanachuquino.com/taller-en-gestion-de-proyectos-agiles/)]

## No solo es mas corto, ademas debe ser mas cerca

No solamente entonces debemos hacer el código mas rápido, debemos hacer mas corto los despliegues a producción (o algún otro ambiente definido) y para eso necesitamos que se involucre la gente que puede llevar a producción ese código. Allí aparece el paradigma de DEVOPS donde en esas células ágiles ya no solo deben  participar desarrolladores, ahora deben participar los operadores, seguridad y cuanto miembro se requiera para poder hacer esos despliegues.

Pero es importante entender que no solamente se debe acercar los miembros a estas células, mas bien se deben crear una cultura que permita la autonomía y autoservicios de estas células. No es fácil hemos invertido mucho dinero y tiempo en ITIL y no es que ITIL este mal pero se puede fácilmente convertir en una religión que impida que se pueda modelar procesos mas flexibles de diseño de la entrega de servicios.


---

## Organizado entorno a las capacidades del negocio ##

Ya tenemos equipos mas pequeños listos no solo para hacer mas cortos los tiempos de desarrollos, adicionalmente ahora podemos hacer esos despliegues si tenemos practicas y cultura **DEVOPS** debemos asegurarnos que  el alcance de lo que están construyendo (productos digitales) sea lo suficientemente acotado para que no cree efectos colaterales que pueden quitar autonomía al equipo, si no mas bien lograr la autonomía que estos equipos requieren.

### De donde viene lo micro de los Microservicios


Cuando comenzó a sonar el concepto de microservicios ya hace algún tiempo, existían muchas mentiras sobre que era un microservicio y la mayor parte de las que llegue a escuchar era de donde venia el prefijo micro y decían cosas como que era por el tamaño del código o cosas por el estilo. Ya entrados en estas profundidades debemos entonces entender de donde viene el prefijo micro y aunque se puede aplicar también al despliegue, en este punto lo mas importante es que debe desplegar una micro capacidad  única de negocio muy acotada y definida.

En base a este punto una de las inferencias básicas que debemos tener en cuenta es que microservicios es igual a capacidad de negocio.

## Despliegue Independiente

Ya metidos en lo micro de los microservicios tenemos que tener en cuenta unos de los elementos mas importantes que es desplegarlos en una infraestructura independiente. Esto no es menor si decimos que un microservicios debe ser independiente debemos asegurar una independencia no solamente conceptual, tambien que esta independencia sea tecnica. 

En el despliegue no podemos hacer cosas que tipicamente hacen las empresas como es tener un mismo servidor de aplicaciones en una misma maquina virtual para varios microservicios, todo lo contrario debemos garantizar una total independencia tecnológica (en la medida de lo posible) de cualquier otra plataforma que este en ejecución en la organización.
Esto trae como es entender costos a nivel de recursos (ya no puedo compartir un mismo servidor de aplicaciones con mas de una aplicación) lo que aumenta la huella de infraestructura que debemos tener y precisamente por eso se han vuelto tan populares los contenedores (que no revisaremos en profundidad en este articulo) pues permiten entre otras cosas disminuir esa huela de infraestructura y facilitar el aislamiento de cada microservicio.





<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://luiger-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
