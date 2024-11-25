<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Componentes activos
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/1.png")
      .col-lg(data-aos="fade-left")
        .h-100.p-4(style="background-color:#D2FAF7;border-radius:10px;")
          figure.mb-2
            img(src="@/assets/curso/tema2/2.svg" style="max-width:63px;")
          p.mb-0 Los componentes activos son aquellos que tienen la capacidad de activar circuitos, realizar ganancias o controlar el flujo en el sistema. Estos componentes incluyen generadores eléctricos y ciertos semiconductores, que presentan, en su mayoría, un comportamiento no lineal. Esto significa que la relación entre la tensión aplicada y la corriente demandada no sigue una proporción directa, lo cual es fundamental en diversas aplicaciones de la electrónica.
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1 Diodos
    
    p(data-aos="fade-right") Un diodo es un dispositivo diseñado para permitir el flujo de corriente en una dirección específica, bloqueándola en sentido contrario. Esto es posible gracias a su estructura, que involucra la unión de materiales semiconductores en una configuración particular. A continuación, se detalla el funcionamiento básico y las características de los diodos:

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/3.png")
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Unión PN")
            p.mb-0 Fabricado mediante la unión de materiales tipo P y N separados por una barrera o unión.
          .row.col-xl-11.m-auto(titulo="Caída de voltaje (germanio)")
            p.mb-0 Al ser polarizado directamente, el diodo de germanio muestra una caída de voltaje de 0.3 V en sus terminales.
          .row.col-xl-11.m-auto(titulo="Caída de voltaje (silicio)")
            p.mb-0 La caída de voltaje en un diodo de silicio, en polarización directa, es de aproximadamente 0.7 V.
          .row.col-xl-11.m-auto(titulo="Propiedad")
            p.mb-0 Funciona con resistencia nula en polarización directa (de ánodo a cátodo) y con resistencia infinita en sentido opuesto (polarización inversa). Esta propiedad es muy útil en aplicaciones de rectificación de corriente.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Circuitos básicos de rectificación
    
    p(data-aos="fade-left") Los diodos también son fundamentales en la creación de rectificadores, circuitos que convierten la corriente alterna en corriente continua. Existen varios tipos de rectificación, cada uno con sus propias configuraciones y aplicaciones. Las siguientes tablas explican los tipos de rectificación más comunes:

    .cont_2_1.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Rectificación de media onda
              p En este tipo de rectificador, la salida corresponde a un solo semiciclo de la señal de entrada sinusoidal (ya sea positivo o negativo), dependiendo de la orientación del diodo.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/5.svg')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Rectificación de onda completa (con transformador)
              p Este rectificador de onda completa utiliza dos diodos y un transformador con tap central. Cada diodo conduce en un semiciclo, aprovechando toda la señal de entrada. Requiere el transformador para referencia a 0 voltios.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/6.svg')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Rectificación de onda completa (con diodos)
              p Utiliza cuatro diodos en una configuración de puente, permitiendo el uso de ambos semiciclos de la señal de entrada sin necesidad de un tap central. Es más eficiente y se usa en instrumentación y medición.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/7.svg')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Tipos de diodos
    
    p(data-aos="fade-left") Existen varios tipos de diodos, cada uno diseñado para una función específica dentro de los circuitos eléctricos. A continuación, se detallan las características y aplicaciones de los tipos más comunes de diodos:

    .cont_2_2.mt-4.pb-5.pt-4
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4(style="background-color:#E7FCFB;")
          figure.mb-4.text-center
            img.d-inline(src="@/assets/curso/tema2/9.svg" style="max-width:170px;")
          h5.mb-2 Diodo Zener
          p.mb-0 Este tipo de diodo se utiliza en aplicaciones de regulación de voltaje. En polarización directa actúa como un diodo común, pero en polarización inversa el voltaje entre sus terminales se mantiene estable dentro de ciertos límites.
        .tarjeta.color-acento-botones.p-4(style="background-color:#E7FCFB;")
          figure.mb-4.text-center
            img.d-inline(src="@/assets/curso/tema2/10.svg" style="max-width:170px;")
          h5.mb-2 Diodo LED
          p.mb-0 El LED (#[em light emitting diode]) es un diodo que emite luz al ser atravesado por corriente en polarización directa. Se pueden encontrar en varios colores, como rojo, verde, amarillo, ámbar e infrarrojo, dependiendo del material de fabricación.
        .tarjeta.color-acento-botones.p-4(style="background-color:#E7FCFB;")
          figure.mb-4.text-center
            img.d-inline(src="@/assets/curso/tema2/11.svg" style="max-width:170px;")
          h5.mb-2 Fotodiodo
          p.mb-0 Permite o bloquea el paso de corriente en polarización inversa en función de la cantidad de luz que incide sobre él.
        .tarjeta.color-acento-botones.p-4(style="background-color:#E7FCFB;")
          figure.mb-4.text-center
            img.d-inline(src="@/assets/curso/tema2/12.svg" style="max-width:170px;")
          h5.mb-2 Diodo láser
          p.mb-0 Emite luz mediante emisión estimulada, generando un haz enfocado y estrecho. Puede emitir luz visible (roja, verde o azul) o infrarroja, siendo utilizado en comunicaciones y lectores de discos compactos, entre otras aplicaciones.
        .tarjeta.color-acento-botones.p-4(style="background-color:#E7FCFB;")
          figure.mb-4.text-center
            img.d-inline(src="@/assets/curso/tema2/13.svg" style="max-width:170px;")
          h5.mb-2 Diodo Schottky
          p.mb-0 Posee una unión metal-N, lo que reduce la caída de voltaje en polarización directa a entre 0.25 y 0.4 V. Aunque no es ideal para aplicaciones de alta potencia, es útil en circuitos que requieren alta velocidad de conmutación y bajo consumo energético.
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2 Transistores
    
    p(data-aos="fade-right") Los transistores son dispositivos semiconductores que permiten controlar y regular una corriente grande a partir de una señal pequeña. Son ampliamente utilizados en la amplificación de corriente, la conmutación de cargas y como osciladores. La tabla a continuación detalla algunos de los tipos de transistores y sus características principales:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones.p-4(titulo="Transistor bipolar (BJT)" style="background-color:#DDE9F7;")
        h4 Transistor bipolar (BJT)
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Los transistores bipolares, conocidos también como BJT (#[em bipolar junction transistor]), se fabrican en dos configuraciones: NPN y PNP. Están formados por tres capas y tres terminales: emisor, base y colector. La corriente que fluye entre emisor y colector depende de la corriente que se aplica en la base.
          .m-auto.col-lg-5.col-12.col-md-8
            figure
              img(src="@/assets/curso/tema2/14.svg")
      .tarjeta.color-acento-botones.p-4(titulo="Transistor de efecto <br> de campo (FET)" style="background-color:#DDE9F7;")
        h4 Transistor de efecto de campo (FET)
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Los FET (#[em field effect transistor]) tienen tres terminales: drenador (#[em drain]), puerta (#[em gate]) y surtidor (#[em source]). La corriente entre drenador y surtidor depende del voltaje aplicado en la puerta. Existen tipos como JFET, MOSFET y MISFET.
          .m-auto.col-lg-5.col-12.col-md-8
            figure
              img(src="@/assets/curso/tema2/15.svg")
      .tarjeta.color-acento-botones.p-4(titulo="Fototransistor" style="background-color:#DDE9F7;")
        h4 Fototransistor
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Similar a los BJT y FET, pero con la diferencia de que la conducción de corriente depende de la cantidad de luz que incide en el dispositivo, funcionando como un transistor activado por luz. 
          .m-auto.col-lg-5.col-12.col-md-8
            figure
              img(src="@/assets/curso/tema2/16.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Circuitos comunes con transistores
    
    p(data-aos="fade-left") Los transistores pueden configurarse de diversas maneras para cumplir diferentes funciones en los circuitos. Dos de las configuraciones comunes incluyen la conmutación de cargas y la amplificación con emisor común. A continuación, se presentan estas configuraciones y sus características:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#DDE9F7;border-radius:10px;")
          figure.mb-3
            img(src="@/assets/curso/tema2/17.svg" style="max-width:67px;")
          h5 Conmutación de cargas
          p.mb-0 En un circuito con transistor NPN, si la base se conecta a tierra a través de una resistencia (Rb), el transistor trabaja en corte y no fluye corriente entre colector y emisor. Al conectar la base a una fuente de voltaje, se permite el flujo de corriente a través del colector, pasando por la resistencia de colector (Rc), que representa la carga.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#DDE9F7;border-radius:10px;")
          figure.mb-3
            img(src="@/assets/curso/tema2/17.svg" style="max-width:67px;")
          h5 Amplificador con emisor común
          p.mb-0 Una configuración típica de amplificación en la que la señal de entrada pasa a través de un capacitor (C1) que filtra componentes de señal continua. El divisor de voltaje formado por R1 y R2 genera un punto de referencia para estabilizar la señal. La señal amplificada se toma en la resistencia de colector (Rc).
      .col-lg.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/18.svg")
    
    Separador
    
    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3 Amplificadores operacionales
    
    p(data-aos="fade-right") Un amplificador operacional es un dispositivo activo de propósito general que puede proporcionar una tensión de salida en función de una tensión de entrada. Estos amplificadores tienen cinco terminales, dos de los cuales son las entradas (inversora y no inversora), una salida y dos terminales de alimentación (±Vcc). Su nombre proviene de su capacidad para realizar operaciones matemáticas analógicas, como suma, resta, multiplicación, división, integración y derivación.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Configuraciones básicas de amplificadores operacionales
    
    p(data-aos="fade-left") Los amplificadores operacionales se pueden configurar de diferentes maneras para realizar diversas funciones. A continuación, se detallan algunas de estas configuraciones:

    .row.mt-4
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/19.png")
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Amplificador diferencial")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 La salida corresponde a la diferencia entre las dos señales de entrada, que pueden ser amplificadas o atenuadas.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/20.svg" alt="Circuito de rectificación de media onda que incluye un diodo conectado en serie con una fuente de señal de entrada, mostrando la señal de entrada y la señal rectificada en cada extremo. ")
          .row.col-xl-11.m-auto(titulo="Amplificador no inversor")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Amplifica una señal de entrada sin invertir su fase, es decir, la señal de salida mantiene la misma fase que la señal de entrada.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/21.svg" alt="Diagrama de un amplificador diferencial que muestra dos entradas de voltaje, V1 y V2, cada una conectada a resistencias de entrada R1 y R2, respectivamente. La entrada negativa del amplificador operacional está conectada a R1 y R2, mientras que la entrada positiva está conectada a una resistencia R4 conectada a tierra. La salida Vout está conectada a la resistencia de retroalimentación R3, que va desde la salida de vuelta a la entrada negativa del amplificador. ")
          .row.col-xl-11.m-auto(titulo="Amplificador inversor")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 La señal de salida es la señal de entrada amplificada o atenuada con su fase invertida.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/22.svg" alt="Diagrama de un amplificador operacional no inversor donde Vin ingresa a través de la resistencia R3, conectándose a la entrada no inversora del amplificador. La entrada inversora está conectada a una red de resistencias R2 y R1, con R1 conectada a tierra y R2 conectada a la salida Vout.")
          .row.col-xl-11.m-auto(titulo="Amplificador sumador inversor")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Produce una salida que es la suma algebraica invertida de los voltajes de entrada aplicados (V1, V2 y V3).
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/23.svg" alt="Diagrama de un amplificador operacional sumador. Las entradas  pasan por resistencias RG1, RG2, y RG3 respectivamente, conectándose a la entrada inversora del amplificador. La resistencia de realimentación RFRF conecta la salida VOUT a la entrada inversora, mientras que la entrada no inversora está conectada a tierra.")
    
    .row.mt-lg-4
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Amplificador sumador no inversor")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Similar al sumador inversor, pero no invierte la señal.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/24.svg" alt="Diagrama de un amplificador diferencial con dos entradas V1 y V2 a través de resistencias R1 y R2, respectivamente. La salida Vo está conectada a través de resistencias R3 y R4, con corrientes I1,I2, I3 y I4 indicadas. La señal de referencia VEVE se encuentra entre las resistencias de entrada. ")
          .row.col-xl-11.m-auto(titulo="Amplificador integrador")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Realiza una operación de integración sobre la señal de entrada, generando una salida proporcional al área bajo la curva de la onda de entrada.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/25.svg" alt="Diagrama de un circuito integrado por un amplificador operacional configurado como un filtro. La entrada de señal Vin pasa a través de una resistencia RR, conectada a la entrada inversora del amplificador. Un capacitor C conecta la salida Vout a la entrada inversora, mientras que la entrada no inversora está conectada a tierra. ")
          .row.col-xl-11.m-auto(titulo="Amplificador diferenciador")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Realiza una derivación de la señal de entrada e invierte la señal de salida.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/26.svg" alt="Diagrama de un⁅𝑐⁆⁅𝑖⁆⁅𝑟⁆⁅𝑐⁆⁅𝑢⁆⁅𝑖𝑡⁆⁅𝑜⁆⁅ ⁆⁅𝑐⁆on un amplificador operacional configurado como un filtro de paso alto. La señal de entrada V  pasa a través de un capacitor C hacia la entrada inversora del amplificador. Una resistencia R conecta la salida Vout_ a la entrada inversora, mientras que la entrada no inversora está conectada a tierra.")
          .row.col-xl-11.m-auto(titulo="Seguidor de tensión")
            .col-lg-7.mb-4.mb-lg-0
              p La salida es idéntica a la entrada, lo que lo hace ideal para acoplamiento de impedancias en dos circuitos diferentes.
              p.mb-0 Diagrama de un amplificador operacional donde la señal de entrada V_i \) se conecta a la entrada inversora del amplificador. La corriente \( I_1 \) fluye hacia la entrada inversora, mientras que la corriente \( I_2 \) recircula a través de una conexión de retroalimentación negativa desde la salida \( V_o \) hacia la entrada inversora. La corriente \( I_3 \) sale del amplificador desde la salida \( V_o \). La entrada no inversora está conectada a tierra.
            .m-auto.col-lg-5.col-12.col-md-8
              figure
                img(src="@/assets/curso/tema2/27.svg" alt="Diagrama de un amplificador operacional donde la señal de entrada Vi  se conecta a la entrada inversora del amplificador. La corriente I1 fluye hacia la entrada inversora, mientras que la corriente I2 recircula a través de una conexión de retroalimentación negativa desde la salida Vo hacia la entrada inversora. La corriente I3 sale del amplificador desde la salida Vo. La entrada no inversora está conectada a tierra.")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema2/28.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Filtros activos
    
    p(data-aos="fade-left") Los filtros activos utilizan amplificadores operacionales para permitir o bloquear señales en función de su frecuencia. Estos filtros son fundamentales en aplicaciones de procesamiento de señales y se clasifican en función del rango de frecuencias que dejan pasar o bloquean. A continuación, se explican los tipos de filtros activos:

    .cont_2_1.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              h4 Filtro pasa bajo
              p Permite el paso de frecuencias desde 0 Hz hasta una frecuencia de corte (fc), bloqueando las frecuencias superiores. La señal de salida se atenúa progresivamente al acercarse a la frecuencia de corte, bloqueando completamente las frecuencias superiores a fc.
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/29.svg' alt="El circuito muestra un amplificador diferencial con dos entradas, V1 y V2, que se conectan a las resistencias R1 y R2 respectivamente. La señal se amplifica en el amplificador operacional, cuya salida Vout está determinada por la diferencia entre V1 y V2, modulada por las resistencias del circuito. ")
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/30.svg' alt="La imagen muestra una gráfica de una curva descendente. La curva parece representar una caída o disminución gradual, lo cual podría ilustrar un fenómeno de decaimiento o atenuación.")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              h4 Filtro pasa alto
              p Bloquea frecuencias bajas, permitiendo el paso de las altas. La señal de salida alcanza el 100 % de la señal original solo cuando supera la frecuencia de corte para la cual se diseñó el filtro.
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/31.svg' alt="La imagen muestra un amplificador operacional LM324N con entrada Vin que pasa por un condensador C y una resistencia R. La entrada inversora está conectada a tierra con R1, y la realimentación se logra con RF entre la salidaVout y la entrada inversora. ")
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/32.svg' alt="La imagen muestra una curva ascendente. ")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              h4 Filtro pasa banda
              p Deja pasar señales en un rango de frecuencias determinado por un límite inferior (f1) y un límite superior (f2). Las frecuencias fuera de este rango son atenuadas.
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/33.svg' alt="La imagen muestra un diagrama de un circuito eléctrico con varios componentes. A la izquierda está marcado el punto de salida Vo en rojo, seguido de una resistencia y un capacitor en serie. A la derecha se encuentra un amplificador operacional con un símbolo de triángulo, con sus entradas positiva y negativa indicadas. El circuito finaliza en el punto Vs, también resaltado en rojo a la derecha. ")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              h4 Filtro rechaza banda
              p Bloquea señales en un rango específico de frecuencias (f1 a f2), permitiendo el paso de aquellas que estén fuera de este rango.
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/34.svg' alt='La  imagen presenta una gráfica de tipo "curva de campana", que muestra cómo una variable aumenta gradualmente, alcanza un punto máximo y luego disminuye de forma simétrica. ')
            .col-lg.mb-4.mb-lg-0(style="place-self:center;")
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/35.svg' alt='La segunda imagen muestra una gráfica en forma de "curva de valle" , que representa cómo una variable disminuye gradualmente hasta alcanzar un punto mínimo en el centro, antes de volver a aumentar simétricamente.')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/17.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Comparador
    
    .row(data-aos="fade-up" da-aos-duration="700")
      .col-md(style="place-self:center;")
        p.mb-0 Un comparador es un circuito que utiliza un amplificador operacional en lazo abierto y se emplea para comparar una tensión variable con otra tensión fija de referencia. La salida del comparador toma el valor positivo de la fuente de alimentación cuando el voltaje en V+V+V+ es mayor que el voltaje en V−V-V−, y viceversa, dependiendo de la posición de entrada de la señal variable.
      .col-md-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/36.svg")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
