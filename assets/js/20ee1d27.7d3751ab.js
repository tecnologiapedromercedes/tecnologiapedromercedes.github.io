"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[725],{4812:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"arduino-basico/practica-1","title":"Pr\xe1ctica taller: Arduino digital y anal\xf3gico","description":"Salida digital: parpadeo de un led (Blink)","source":"@site/docs/arduino-basico/practica-1.md","sourceDirName":"arduino-basico","slug":"/arduino-basico/practica-1","permalink":"/docs/arduino-basico/practica-1","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/arduino-basico/practica-1.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Arduino - Digital","permalink":"/docs/category/arduino---digital"}}');var l=n(4848),r=n(8453);const d={sidebar_position:1},s="Pr\xe1ctica taller: Arduino digital y anal\xf3gico",o={},t=[{value:"Salida digital: parpadeo de un led (Blink)",id:"salida-digital-parpadeo-de-un-led-blink",level:2},{value:"Entrada digital: Encender unled con un pulsador",id:"entrada-digital-encender-unled-con-un-pulsador",level:2},{value:"Entrada anal\xf3gica: Sensor de luz con LDR",id:"entrada-anal\xf3gica-sensor-de-luz-con-ldr",level:2},{value:"Salida anal\xf3gica: Potenci\xf3metro",id:"salida-anal\xf3gica-potenci\xf3metro",level:2},{value:"Recursos",id:"recursos",level:2},{value:"Entrega",id:"entrega",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"pr\xe1ctica-taller-arduino-digital-y-anal\xf3gico",children:"Pr\xe1ctica taller: Arduino digital y anal\xf3gico"})}),"\n",(0,l.jsx)(a.h2,{id:"salida-digital-parpadeo-de-un-led-blink",children:"Salida digital: parpadeo de un led (Blink)"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Realizar el montaje de la figura. Rled = 220 ohm."}),"\n",(0,l.jsx)(a.li,{children:"Dibujar en el cuaderno el esquema el\xe9ctrico."}),"\n",(0,l.jsx)(a.li,{children:"Cargar en la placa arduino un programa que haga parpader el led cada dos ."}),"\n",(0,l.jsx)(a.li,{children:"Modificar el programa anterior para que el led parpadee cada medio segundo."}),"\n",(0,l.jsx)(a.li,{children:"Modificar el programa de forma que el led env\xede un S.O.S de forma cont\xednua."}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Salida digital",src:n(662).A+"",width:"1278",height:"495"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-cpp",metastring:'title="blink.ino"',children:"void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}\n \n"})}),"\n",(0,l.jsx)(a.h2,{id:"entrada-digital-encender-unled-con-un-pulsador",children:"Entrada digital: Encender unled con un pulsador"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Realizar el montaje de la figura. Rled = 220 ohm y Rpulsador = 10 kOhm."}),"\n",(0,l.jsx)(a.li,{children:"Dibujar en el cuaderno el esquema el\xe9ctrico."}),"\n",(0,l.jsx)(a.li,{children:"Cargar en la placa arduino un programa como el facilitado que haga que se encienda el led al apretar el pulsador y que se apague al soltarlo."}),"\n",(0,l.jsx)(a.li,{children:"Modificar el programa anterior introduciendo variables para determinar los pines de entrada y salida."}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"Para ello, basta con poner al inicio del programa (antes de void setup()) la definici\xf3n de la variable:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{children:"int LedPin = 13;\n"})}),"\n",(0,l.jsxs)(a.p,{children:["Despu\xe9s, en lugar de poner ",(0,l.jsx)(a.strong,{children:"13"})," se pondr\xeda ",(0,l.jsx)(a.strong,{children:"LedPin"}),". Esto ahorra tiempo cuando tenemos que hacer cambios de pines."]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Entrada digital",src:n(417).A+"",width:"1278",height:"495"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-cpp",metastring:'title="pulsador.ino"',children:"void setup() {\n  pinMode(3, INPUT);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (digitalRead(3) == HIGH){\n    digitalWrite(13, HIGH);\n  }\n  else {\n  digitalWrite(13, LOW);\n  }\n}\n \n"})}),"\n",(0,l.jsx)(a.h2,{id:"entrada-anal\xf3gica-sensor-de-luz-con-ldr",children:"Entrada anal\xf3gica: Sensor de luz con LDR"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsx)(a.li,{children:"Realizar el montaje de la figura. RLDR = 10 k\u03a9."}),"\n",(0,l.jsx)(a.li,{children:"Dibujar en el cuaderno el correspondiente esquema el\xe9ctrico."}),"\n",(0,l.jsx)(a.li,{children:"Cargar en la placa arduino el programa indicado (listado de programa 3.1)"}),"\n",(0,l.jsx)(a.li,{children:"Comprueba si, efectivamente, el led se enciende al oscurecer la LDR."}),"\n",(0,l.jsx)(a.li,{children:"Abre el monitor serie y observa los valores que se muestran en pantalla."}),"\n",(0,l.jsx)(a.li,{children:"Graba con el programa SimpleScreenRecorder la pantalla del monitor serie en la que se vea\nc\xf3mo cambian los valores en ambiente claro y oscuro."}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Entrada anal\xf3gica Sensor luz",src:n(4421).A+"",width:"1278",height:"495"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-cpp",metastring:'title="ldr.ino"',children:"void setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  int ldrValue = analogRead(A0);\n  Serial.println(ldrValue);\n  if(ldrValue < 200){\n    digitalWrite(13, LOW);\n  }\n  else{\n    digitalWrite(13, HIGH);\n  }\n}\n \n"})}),"\n",(0,l.jsx)(a.h2,{id:"salida-anal\xf3gica-potenci\xf3metro",children:"Salida anal\xf3gica: Potenci\xf3metro"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsx)(a.li,{children:"Realiza el montaje de la figura."}),"\n",(0,l.jsx)(a.li,{children:"Dibuja en el cuaderno su esquema el\xe9ctrico."}),"\n",(0,l.jsx)(a.li,{children:"Cargar en la placa arduino el programa indicado."}),"\n",(0,l.jsx)(a.li,{children:"Observa c\xf3mo es la iluminaci\xf3n del led seg\xfan giras el cursor del potenci\xf3metro."}),"\n",(0,l.jsxs)(a.li,{children:["Abre el monitor serie y haz una grabaci\xf3n en la que se vea lo del punto 4 y los valores del monitor serie.\n",(0,l.jsx)(a.img,{alt:"salida anal\xf3gica con potenci\xf3metro",src:n(6460).A+"",width:"1278",height:"495"})]}),"\n"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-cpp",metastring:'title="potenciometro.ino"',children:'// Entradas anal\xf3gicas: 0-1023\n// Salidas anal\xf3gicas: 0-255\nint LedLight = 0;\nvoid setup() {\n  pinMode(3, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  int potValue = analogRead(A3);\n  LedLight = map(potValue,0,1023,0,255);\n  analogWrite(3,LedLight);\n  Serial.print("potValue = ");\n  Serial.print(potValue);\n  Serial.print(" LedLight = ");\n  Serial.println(LedLight);\n  delay(10);\n}\n \n'})}),"\n",(0,l.jsx)(a.h2,{id:"recursos",children:"Recursos"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Conceptos b\xe1sicos: ",(0,l.jsx)(a.a,{href:"http://cifp1cuenca.ddns.net:81/Tecnologia/Robotica4/ArduinoBloque2v8/index.html",children:"http://cifp1cuenca.ddns.net:81/Tecnologia/Robotica4/ArduinoBloque2v8/index.html"}),"."]}),"\n",(0,l.jsx)(a.li,{children:"Para dibujar el esquema, puedes utilizar los siguientes s\xedmbolos"}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"S\xedmbolos_esquem\xe1tico",src:n(845).A+"",width:"317",height:"240"})}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["C\xf3mo funciona el tel\xe9grafo\n",(0,l.jsx)(a.a,{href:"https://interactives.ck12.org/simulations/physics/telegraph/app/index.html?screen=sandbox",children:"https://interactives.ck12.org/simulations/physics/telegraph/app/index.html?screen=sandbox"})]}),"\n",(0,l.jsxs)(a.li,{children:["C\xf3mo simular el env\xedo de un SOS en c\xf3digo Morse:\n",(0,l.jsx)(a.a,{href:"https://morsecoder.org/morse-code-reader",children:"https://morsecoder.org/morse-code-reader"}),"  Input: ",(0,l.jsx)(a.strong,{children:"SOS"}),"  Output: ",(0,l.jsx)(a.strong,{children:"...---..."})]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(2467).A+"",children:"SOS.mp3"})}),"\n",(0,l.jsx)(a.h2,{id:"entrega",children:"Entrega"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Entrega individual en una carpeta comprimida en la actividad correspondiente del aula virtual:"}),"\n",(0,l.jsx)(a.li,{children:"Fotos y v\xeddeos de la instalaci\xf3n en el taller. Ser\xe1n comunes en el grupo del taller, pero cada uno entrega su propio informe."}),"\n",(0,l.jsxs)(a.li,{children:["Documento elaborado de forma ",(0,l.jsx)(a.strong,{children:"ndividual"})," en ",(0,l.jsx)(a.strong,{children:"PDF"})," con los c\xf3digos de los programas empleados y fotograf\xedas que ilustren las pr\xe1cticas."]}),"\n",(0,l.jsxs)(a.li,{children:["Incluir tambi\xe9n capturas de pantalla de las pr\xe1cticas hechas en ",(0,l.jsx)(a.strong,{children:"Tinkercad"})," y el esquem\xe1tico de la instalaci\xf3n."]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},2467:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/files/sos-557afcf366d79dae7a41a69198e9135b.mp3"},662:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/Salida_digital-133cc5ac28fa588238532b92edacda2b.png"},4421:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/entrada_analogica_sensor_luz-0cfcf7b83a25d251fb45ad582393561a.png"},417:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/pulsador-5a83b1329b126a986207f819e04ec76c.png"},6460:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/salida_analogica_potenciometro-3e66dd37bd8194b5b7654e7f79ae2356.png"},845:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/simbolos_esquem\xe1tico-ba209c92ccb578b293c07d1ba8f4ca5e.svg"},8453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>s});var i=n(6540);const l={},r=i.createContext(l);function d(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);