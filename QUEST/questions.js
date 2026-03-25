const questionsDatabase = [
  {
    "id": 1,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Cuál es la fórmula principal de la ley de Ohm?",
    "options": [
      "V = I * R",
      "P = V * I",
      "R = P / I",
      "I = P * R"
    ],
    "correct": 0,
    "explanation": "La ley de Ohm establece que el voltaje es el producto de la corriente por la resistencia.",
    "source": "https://es.wikipedia.org/wiki/Ley_de_Ohm"
  },
  {
    "id": 2,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Qué representa la magnitud V en la ley de Ohm?",
    "options": [
      "La corriente eléctrica",
      "La potencia eléctrica",
      "La resistencia eléctrica",
      "La diferencia de potencial o voltaje"
    ],
    "correct": 3,
    "explanation": "La V representa el voltaje, que es la diferencia de potencial eléctrico entre dos puntos.",
    "source": "https://es.wikipedia.org/wiki/Voltaje"
  },
  {
    "id": 3,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Cuál es la unidad de medida de la resistencia eléctrica?",
    "options": [
      "Voltio (V)",
      "Amperio (A)",
      "Ohmio (Ω)",
      "Vatio (W)"
    ],
    "correct": 2,
    "explanation": "La resistencia eléctrica se mide en ohmios (Ω).",
    "source": "https://es.wikipedia.org/wiki/Resistencia_el%C3%A9ctrica"
  },
  {
    "id": 4,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Qué ocurre con la corriente si aumenta el voltaje y la resistencia permanece constante?",
    "options": [
      "La corriente disminuye",
      "La corriente aumenta",
      "La corriente se anula",
      "La corriente permanece constante"
    ],
    "correct": 1,
    "explanation": "Según la ley de Ohm, si el voltaje aumenta y la resistencia es constante, la corriente aumenta.",
    "source": "https://es.wikipedia.org/wiki/Ley_de_Ohm"
  },
  {
    "id": 5,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Cuál es la unidad de medida de la corriente eléctrica?",
    "options": [
      "Voltio (V)",
      "Ohmio (Ω)",
      "Amperio (A)",
      "Vatio (W)"
    ],
    "correct": 2,
    "explanation": "La corriente eléctrica se mide en amperios (A).",
    "source": "https://es.wikipedia.org/wiki/Corriente_el%C3%A9ctrica"
  },
  {
    "id": 6,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Qué magnitud representa la potencia eléctrica?",
    "options": [
      "La energía consumida por unidad de tiempo",
      "La resistencia al paso de la corriente",
      "La cantidad de electrones",
      "La diferencia de potencial"
    ],
    "correct": 0,
    "explanation": "La potencia eléctrica indica la cantidad de energía consumida o generada por unidad de tiempo.",
    "source": "https://es.wikipedia.org/wiki/Potencia_el%C3%A9ctrica"
  },
  {
    "id": 7,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Cuál es la fórmula correcta de la potencia eléctrica?",
    "options": [
      "P = V * I",
      "P = R / I",
      "P = V / R",
      "P = I / R"
    ],
    "correct": 0,
    "explanation": "La potencia eléctrica se calcula multiplicando el voltaje por la corriente.",
    "source": "https://es.wikipedia.org/wiki/Potencia_el%C3%A9ctrica"
  },
  {
    "id": 8,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Qué sucede con la resistencia total en un circuito en serie?",
    "options": [
      "Se mantiene constante",
      "Se divide",
      "Se suma",
      "Se anula"
    ],
    "correct": 2,
    "explanation": "En un circuito en serie, las resistencias se suman.",
    "source": "https://es.wikipedia.org/wiki/Circuito_en_serie"
  },
  {
    "id": 9,
    "category": "UF0863 - Electricidad básica aplicada al hardware",
    "question": "¿Qué característica define a un circuito en paralelo?",
    "options": [
      "Un solo camino para la corriente",
      "Múltiples caminos para la corriente",
      "Mayor resistencia total",
      "Menor voltaje total"
    ],
    "correct": 1,
    "explanation": "En los circuitos en paralelo la corriente puede circular por varios caminos.",
    "source": "https://es.wikipedia.org/wiki/Circuito_en_paralelo"
  },
  {
    "id": 10,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Cuál de los siguientes componentes es pasivo?",
    "options": [
      "Transistor",
      "Amplificador operacional",
      "Condensador",
      "Microcontrolador"
    ],
    "correct": 2,
    "explanation": "Los condensadores son componentes pasivos, ya que no amplifican ni generan energía.",
    "source": "https://es.wikipedia.org/wiki/Componente_electr%C3%B3nico"
  },
  {
    "id": 11,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Cuál es la función principal de una resistencia en un circuito?",
    "options": [
      "Almacenar energía",
      "Limitar la corriente",
      "Amplificar señales",
      "Rectificar corriente"
    ],
    "correct": 1,
    "explanation": "Las resistencias se utilizan principalmente para limitar la corriente eléctrica.",
    "source": "https://es.wikipedia.org/wiki/Resistor"
  },
  {
    "id": 12,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Qué componente se utiliza para almacenar energía en un campo eléctrico?",
    "options": [
      "Inductor",
      "Resistencia",
      "Condensador",
      "Diodo"
    ],
    "correct": 2,
    "explanation": "Los condensadores almacenan energía en un campo eléctrico.",
    "source": "https://es.wikipedia.org/wiki/Condensador"
  },
  {
    "id": 13,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Qué componente permite el paso de corriente en un solo sentido?",
    "options": [
      "Transistor",
      "Condensador",
      "Diodo",
      "Inductor"
    ],
    "correct": 2,
    "explanation": "El diodo permite el paso de corriente en un único sentido.",
    "source": "https://es.wikipedia.org/wiki/Diodo"
  },
  {
    "id": 14,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Qué componente se utiliza habitualmente para amplificar señales?",
    "options": [
      "Resistencia",
      "Diodo",
      "Transistor",
      "Fusible"
    ],
    "correct": 2,
    "explanation": "Los transistores se utilizan para amplificar o conmutar señales eléctricas.",
    "source": "https://es.wikipedia.org/wiki/Transistor"
  },
  {
    "id": 15,
    "category": "UF0863 - Componentes electrónicos básicos",
    "question": "¿Qué componente se utiliza para proteger un circuito frente a sobrecorrientes?",
    "options": [
      "Condensador",
      "Resistencia",
      "Fusible",
      "Transistor"
    ],
    "correct": 2,
    "explanation": "El fusible se funde cuando la corriente supera un valor seguro, protegiendo el circuito.",
    "source": "https://es.wikipedia.org/wiki/Fusible"
  },
  {
    "id": 16,
    "category": "UF0863 - Fuentes de alimentación",
    "question": "¿Cuál es la función principal de una fuente de alimentación en un equipo microinformático?",
    "options": [
      "Almacenar energía eléctrica",
      "Convertir corriente alterna en corriente continua",
      "Regular la temperatura del sistema",
      "Amplificar señales eléctricas"
    ],
    "correct": 1,
    "explanation": "La fuente de alimentación convierte la corriente alterna de la red en corriente continua utilizable por los componentes del equipo.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 17,
    "category": "UF0863 - Fuentes de alimentación",
    "question": "¿Qué fase del proceso realiza la rectificación en una fuente de alimentación?",
    "options": [
      "Convierte corriente continua en alterna",
      "Convierte corriente alterna en continua",
      "Estabiliza la tensión de salida",
      "Reduce la interferencia electromagnética"
    ],
    "correct": 1,
    "explanation": "La rectificación transforma la corriente alterna en corriente continua.",
    "source": "https://es.wikipedia.org/wiki/Rectificador"
  },
  {
    "id": 18,
    "category": "UF0863 - Fuentes de alimentación",
    "question": "¿Qué tipo de fuente de alimentación es más eficiente energéticamente?",
    "options": [
      "Lineal",
      "Conmutada",
      "Ambas tienen la misma eficiencia",
      "Depende únicamente del transformador"
    ],
    "correct": 1,
    "explanation": "Las fuentes conmutadas presentan una mayor eficiencia energética que las lineales.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación_conmutada"
  },
  {
    "id": 19,
    "category": "UF0863 - Fuentes de alimentación",
    "question": "¿Qué significa la sigla PFC en una fuente de alimentación?",
    "options": [
      "Power Frequency Control",
      "Power Factor Correction",
      "Power Filter Circuit",
      "Power Flow Controller"
    ],
    "correct": 1,
    "explanation": "PFC significa corrección del factor de potencia, que mejora la eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Factor_de_potencia"
  },
  {
    "id": 20,
    "category": "UF0863 - Fuentes de alimentación",
    "question": "¿Cuál es el valor ideal del factor de potencia?",
    "options": [
      "0",
      "0.5",
      "1",
      "100"
    ],
    "correct": 2,
    "explanation": "Un factor de potencia de 1 indica un aprovechamiento óptimo de la energía.",
    "source": "https://es.wikipedia.org/wiki/Factor_de_potencia"
  },
  {
    "id": 21,
    "category": "UF0863 - VRM y placas base",
    "question": "¿Qué significa la sigla VRM en una placa base?",
    "options": [
      "Voltage Relay Module",
      "Variable Resistance Module",
      "Voltage Regulation Module",
      "Virtual Resource Manager"
    ],
    "correct": 2,
    "explanation": "VRM significa módulo de regulación de voltaje.",
    "source": "https://es.wikipedia.org/wiki/Módulo_regulador_de_tensión"
  },
  {
    "id": 22,
    "category": "UF0863 - VRM y placas base",
    "question": "¿Cuál es la función principal de los VRM en una placa base?",
    "options": [
      "Aumentar la velocidad del procesador",
      "Regular y estabilizar el voltaje del procesador",
      "Gestionar la memoria RAM",
      "Controlar los ventiladores"
    ],
    "correct": 1,
    "explanation": "Los VRM suministran al procesador el voltaje correcto y estable.",
    "source": "https://es.wikipedia.org/wiki/Módulo_regulador_de_tensión"
  },
  {
    "id": 23,
    "category": "UF0863 - VRM y placas base",
    "question": "¿Qué componente del VRM se encarga de regular el flujo de corriente?",
    "options": [
      "MOSFET",
      "Condensador",
      "Conector",
      "Diodo LED"
    ],
    "correct": 0,
    "explanation": "Los MOSFET regulan y controlan el paso de corriente en los VRM.",
    "source": "https://es.wikipedia.org/wiki/MOSFET"
  },
  {
    "id": 24,
    "category": "UF0863 - VRM y placas base",
    "question": "¿Por qué es importante una buena regulación del voltaje en el procesador?",
    "options": [
      "Para mejorar la conectividad de red",
      "Para evitar daños y fallos del procesador",
      "Para aumentar el tamaño de la placa base",
      "Para reducir la capacidad de la memoria RAM"
    ],
    "correct": 1,
    "explanation": "Un voltaje incorrecto puede provocar inestabilidad o daños permanentes en el procesador.",
    "source": "https://es.wikipedia.org/wiki/Módulo_regulador_de_tensión"
  },
  {
    "id": 25,
    "category": "UF0863 - Cargadores de portátiles",
    "question": "¿Qué tipo de corriente suministra normalmente un cargador de portátil?",
    "options": [
      "Corriente alterna",
      "Corriente continua",
      "Corriente trifásica",
      "Corriente pulsante"
    ],
    "correct": 1,
    "explanation": "El cargador convierte la corriente alterna de la red en corriente continua.",
    "source": "https://es.wikipedia.org/wiki/Adaptador_de_corriente_alterna"
  },
  {
    "id": 26,
    "category": "UF0863 - Cargadores de portátiles",
    "question": "¿Cuál es el voltaje de salida más habitual en cargadores de portátiles?",
    "options": [
      "5 V",
      "9 V",
      "12 V",
      "19 V"
    ],
    "correct": 3,
    "explanation": "La mayoría de los portátiles utilizan cargadores con una salida aproximada de 19 V.",
    "source": "https://es.wikipedia.org/wiki/Adaptador_de_corriente_alterna"
  },
  {
    "id": 27,
    "category": "UF0863 - Cargadores de portátiles",
    "question": "¿Qué parámetro se mide en vatios (W) en un cargador?",
    "options": [
      "Voltaje",
      "Corriente",
      "Potencia",
      "Resistencia"
    ],
    "correct": 2,
    "explanation": "La potencia eléctrica se mide en vatios.",
    "source": "https://es.wikipedia.org/wiki/Vatio"
  },
  {
    "id": 28,
    "category": "UF0863 - Pilas y baterías",
    "question": "¿Qué tipo de batería se utiliza habitualmente en portátiles modernos?",
    "options": [
      "Plomo-ácido",
      "Níquel-cadmio",
      "Ion de litio",
      "Alcalina"
    ],
    "correct": 2,
    "explanation": "Las baterías de ion de litio ofrecen alta densidad energética y bajo peso.",
    "source": "https://es.wikipedia.org/wiki/Bater%C3%ADa_de_ion_de_litio"
  },
  {
    "id": 29,
    "category": "UF0863 - Pilas y baterías",
    "question": "¿Qué sucede al conectar baterías en serie?",
    "options": [
      "Se suma el voltaje",
      "Se suma la capacidad",
      "Se reduce el voltaje",
      "Se mantiene constante el voltaje"
    ],
    "correct": 0,
    "explanation": "En una conexión en serie, el voltaje total es la suma de los voltajes individuales.",
    "source": "https://es.wikipedia.org/wiki/Bater%C3%ADa_el%C3%A9ctrica"
  },
  {
    "id": 30,
    "category": "UF0863 - Pilas y baterías",
    "question": "¿Qué precaución es correcta al desechar pilas y baterías usadas?",
    "options": [
      "Tirarlas a la basura doméstica",
      "Enterrarlas",
      "Llevarlas a un punto de reciclaje autorizado",
      "Quemarlas"
    ],
    "correct": 2,
    "explanation": "Las pilas y baterías deben reciclarse en puntos autorizados para evitar daños ambientales.",
    "source": "https://es.wikipedia.org/wiki/Reciclaje_de_pilas"
  },
  {
    "id": 31,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Cuál es el componente principal que almacena los datos en un disco duro HDD?",
    "options": [
      "Memoria flash",
      "Platos magnéticos",
      "Memoria RAM",
      "Controladora USB"
    ],
    "correct": 1,
    "explanation": "Los discos duros HDD almacenan los datos en platos recubiertos de material magnético.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 32,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué tecnología utiliza un disco duro HDD para almacenar información?",
    "options": [
      "Óptica",
      "Flash",
      "Magnética",
      "Electrostática"
    ],
    "correct": 2,
    "explanation": "Los HDD utilizan tecnología magnética para almacenar datos.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 33,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Cuál es la principal función de la memoria caché en un disco duro?",
    "options": [
      "Almacenar datos permanentemente",
      "Mejorar la velocidad de acceso a los datos",
      "Proteger los datos frente a fallos eléctricos",
      "Controlar la temperatura del disco"
    ],
    "correct": 1,
    "explanation": "La memoria caché mejora el rendimiento del disco acelerando el acceso a los datos más utilizados.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 34,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué componente mueve los cabezales de lectura y escritura en un HDD?",
    "options": [
      "Controladora",
      "Motor del plato",
      "Actuador",
      "Memoria caché"
    ],
    "correct": 2,
    "explanation": "El actuador posiciona los cabezales para acceder a las distintas zonas del disco.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 35,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Cuál es el factor de forma más habitual en discos duros de sobremesa?",
    "options": [
      "2.5 pulgadas",
      "3.5 pulgadas",
      "1.8 pulgadas",
      "5.25 pulgadas"
    ],
    "correct": 1,
    "explanation": "Los discos duros de sobremesa utilizan habitualmente el formato de 3.5 pulgadas.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 36,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué tipo de unidad de almacenamiento no tiene partes móviles?",
    "options": [
      "HDD",
      "SSHD",
      "SSD",
      "Disco óptico"
    ],
    "correct": 2,
    "explanation": "Los SSD utilizan memoria flash y no tienen componentes mecánicos.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
  },
  {
    "id": 37,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué ventaja principal tiene un SSD frente a un HDD?",
    "options": [
      "Mayor capacidad a menor precio",
      "Mayor velocidad de acceso a los datos",
      "Mayor tamaño físico",
      "Mayor consumo energético"
    ],
    "correct": 1,
    "explanation": "Los SSD ofrecen tiempos de acceso mucho más rápidos que los HDD.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
  },
  {
    "id": 38,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué tipo de memoria utilizan los SSD para almacenar datos?",
    "options": [
      "DRAM",
      "SRAM",
      "Memoria flash NAND",
      "Memoria magnética"
    ],
    "correct": 2,
    "explanation": "Los SSD utilizan memoria flash NAND para el almacenamiento de datos.",
    "source": "https://es.wikipedia.org/wiki/Memoria_flash"
  },
  {
    "id": 39,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué significa la sigla SSD?",
    "options": [
      "Solid State Disk",
      "Super Speed Drive",
      "Secure Storage Device",
      "Solid Storage Data"
    ],
    "correct": 0,
    "explanation": "SSD significa Solid State Disk o unidad de estado sólido.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
  },
  {
    "id": 40,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué interfaz es común en discos duros y SSD tradicionales?",
    "options": [
      "PCIe",
      "USB",
      "SATA",
      "FireWire"
    ],
    "correct": 2,
    "explanation": "SATA es una de las interfaces más utilizadas para HDD y SSD.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 41,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué significa la sigla NVMe?",
    "options": [
      "New Virtual Memory",
      "Non-Volatile Memory Express",
      "Next Version Memory",
      "Network Virtual Memory"
    ],
    "correct": 1,
    "explanation": "NVMe es un protocolo diseñado para aprovechar la alta velocidad de las memorias no volátiles.",
    "source": "https://es.wikipedia.org/wiki/NVM_Express"
  },
  {
    "id": 42,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué tipo de conexión utilizan los SSD NVMe?",
    "options": [
      "SATA",
      "USB",
      "PCI Express",
      "IDE"
    ],
    "correct": 2,
    "explanation": "Los SSD NVMe se conectan a través del bus PCI Express.",
    "source": "https://es.wikipedia.org/wiki/NVM_Express"
  },
  {
    "id": 43,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué ventaja ofrecen los SSD NVMe frente a los SSD SATA?",
    "options": [
      "Menor consumo eléctrico",
      "Mayor compatibilidad",
      "Mayor velocidad de transferencia",
      "Mayor durabilidad mecánica"
    ],
    "correct": 2,
    "explanation": "NVMe ofrece mayores velocidades gracias a su conexión directa al bus PCIe.",
    "source": "https://es.wikipedia.org/wiki/NVM_Express"
  },
  {
    "id": 44,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Qué tecnología se utiliza para prolongar la vida útil de un SSD?",
    "options": [
      "Cifrado de datos",
      "Nivelación de desgaste",
      "Fragmentación de archivos",
      "Compresión de datos"
    ],
    "correct": 1,
    "explanation": "La nivelación de desgaste reparte las escrituras entre todas las celdas de memoria.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
  },
  {
    "id": 45,
    "category": "UF0864 - Almacenamiento y averías lógicas",
    "question": "¿Cuál es un síntoma típico de un fallo lógico en un sistema de almacenamiento?",
    "options": [
      "Ruido mecánico fuerte",
      "El sistema no arranca por errores de sistema de archivos",
      "Olor a quemado",
      "Daños físicos visibles"
    ],
    "correct": 1,
    "explanation": "Los fallos lógicos suelen estar relacionados con errores de sistema de archivos o software.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 46,
    "category": "UF0863 - Herramientas de medición",
    "question": "¿Qué instrumento se utiliza para medir voltaje, corriente y resistencia?",
    "options": [
      "Osciloscopio",
      "Multímetro",
      "Generador de señales",
      "Fuente de laboratorio"
    ],
    "correct": 1,
    "explanation": "El multímetro permite medir voltaje, corriente y resistencia eléctrica.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 47,
    "category": "UF0863 - Herramientas de medición",
    "question": "¿Qué magnitud se mide al colocar el multímetro en modo continuidad?",
    "options": [
      "Voltaje",
      "Resistencia",
      "Paso de corriente entre dos puntos",
      "Potencia"
    ],
    "correct": 2,
    "explanation": "El modo continuidad indica si existe conexión eléctrica entre dos puntos.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 48,
    "category": "UF0863 - Herramientas de medición",
    "question": "¿Qué sucede si se mide resistencia en un circuito energizado?",
    "options": [
      "La medida será más precisa",
      "No ocurre nada",
      "Se puede dañar el multímetro",
      "Aumenta la resistencia"
    ],
    "correct": 2,
    "explanation": "Medir resistencia con el circuito alimentado puede dañar el instrumento.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 49,
    "category": "UF0863 - Herramientas de medición",
    "question": "¿Qué tipo de multímetro es más habitual en tareas de mantenimiento informático?",
    "options": [
      "Analógico",
      "Digital",
      "Electromecánico",
      "De laboratorio"
    ],
    "correct": 1,
    "explanation": "El multímetro digital es el más utilizado por su precisión y facilidad de lectura.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 50,
    "category": "UF0863 - Soldadura electrónica",
    "question": "¿Qué herramienta se utiliza para soldar componentes electrónicos?",
    "options": [
      "Pistola de calor",
      "Soldador eléctrico",
      "Taladro",
      "Destornillador"
    ],
    "correct": 1,
    "explanation": "El soldador eléctrico se utiliza para unir componentes mediante estaño.",
    "source": "https://es.wikipedia.org/wiki/Soldador"
  },
  {
    "id": 51,
    "category": "UF0863 - Soldadura electrónica",
    "question": "¿Qué material se utiliza habitualmente para realizar soldaduras electrónicas?",
    "options": [
      "Cobre",
      "Plomo puro",
      "Estaño",
      "Aluminio"
    ],
    "correct": 2,
    "explanation": "El estaño es el material más utilizado en soldadura electrónica.",
    "source": "https://es.wikipedia.org/wiki/Soldadura"
  },
  {
    "id": 52,
    "category": "UF0863 - Soldadura electrónica",
    "question": "¿Cuál es una buena práctica al soldar componentes electrónicos?",
    "options": [
      "Aplicar calor prolongado",
      "Utilizar soldador sucio",
      "Calentar el punto el menor tiempo posible",
      "Mover el componente durante la soldadura"
    ],
    "correct": 2,
    "explanation": "Aplicar calor solo el tiempo necesario evita dañar los componentes.",
    "source": "https://es.wikipedia.org/wiki/Soldadura"
  },
  {
    "id": 53,
    "category": "UF0863 - Soldadura electrónica",
    "question": "¿Qué herramienta se utiliza para retirar soldadura de un componente?",
    "options": [
      "Flux",
      "Malla desoldadora",
      "Alicate",
      "Destornillador"
    ],
    "correct": 1,
    "explanation": "La malla desoldadora absorbe el estaño fundido.",
    "source": "https://es.wikipedia.org/wiki/Soldadura"
  },
  {
    "id": 54,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué documento proporciona instrucciones detalladas para la reparación de un equipo?",
    "options": [
      "Factura",
      "Manual de usuario",
      "Manual de servicio técnico",
      "Garantía"
    ],
    "correct": 2,
    "explanation": "El manual de servicio técnico incluye esquemas y procedimientos de reparación.",
    "source": "https://es.wikipedia.org/wiki/Manual_de_usuario"
  },
  {
    "id": 55,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué información suele incluir un esquema eléctrico?",
    "options": [
      "Precio de los componentes",
      "Ubicación de tiendas",
      "Conexiones y símbolos de componentes",
      "Datos personales del usuario"
    ],
    "correct": 2,
    "explanation": "Los esquemas eléctricos muestran las conexiones y símbolos normalizados.",
    "source": "https://es.wikipedia.org/wiki/Esquema_el%C3%A9ctrico"
  },
  {
    "id": 56,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué técnica consiste en sustituir un componente sospechoso por uno funcional?",
    "options": [
      "Medición indirecta",
      "Comparación",
      "Sustitución cruzada",
      "Simulación"
    ],
    "correct": 2,
    "explanation": "La sustitución cruzada permite confirmar si un componente es el causante del fallo.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 57,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué herramienta permite observar señales eléctricas en función del tiempo?",
    "options": [
      "Multímetro",
      "Osciloscopio",
      "Pinza amperimétrica",
      "Fuente ATX"
    ],
    "correct": 1,
    "explanation": "El osciloscopio permite visualizar señales eléctricas variables en el tiempo.",
    "source": "https://es.wikipedia.org/wiki/Osciloscopio"
  },
  {
    "id": 58,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué precaución básica debe tomarse antes de manipular componentes electrónicos?",
    "options": [
      "Aumentar el voltaje",
      "Desconectar la alimentación",
      "Calentar los componentes",
      "Forzar los conectores"
    ],
    "correct": 1,
    "explanation": "Desconectar la alimentación evita riesgos eléctricos y daños al equipo.",
    "source": "https://es.wikipedia.org/wiki/Riesgo_eléctrico"
  },
  {
    "id": 59,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué riesgo se reduce utilizando pulseras antiestáticas?",
    "options": [
      "Descarga eléctrica",
      "Descarga electrostática",
      "Cortocircuito",
      "Sobrecalentamiento"
    ],
    "correct": 1,
    "explanation": "Las pulseras antiestáticas evitan descargas electrostáticas dañinas.",
    "source": "https://es.wikipedia.org/wiki/Descarga_electrost%C3%A1tica"
  },
  {
    "id": 60,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué se debe hacer tras identificar una avería lógica?",
    "options": [
      "Sustituir siempre el hardware",
      "Reinstalar o reparar el software afectado",
      "Desechar el equipo",
      "Aumentar la potencia de la fuente"
    ],
    "correct": 1,
    "explanation": "Las averías lógicas suelen solucionarse mediante reparación o reinstalación de software.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 61,
    "category": "UF0865 - Tipos de impresoras",
    "question": "¿Qué tipo de impresora utiliza cartuchos de tinta líquida?",
    "options": [
      "Láser",
      "Matriz de puntos",
      "Inyección de tinta",
      "Térmica"
    ],
    "correct": 2,
    "explanation": "Las impresoras de inyección de tinta utilizan cartuchos con tinta líquida.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 62,
    "category": "UF0865 - Tipos de impresoras",
    "question": "¿Qué tipo de impresora utiliza tóner en lugar de tinta líquida?",
    "options": [
      "Inyección de tinta",
      "Láser",
      "Térmica",
      "Plotter"
    ],
    "correct": 1,
    "explanation": "Las impresoras láser utilizan tóner en polvo.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 63,
    "category": "UF0865 - Tipos de impresoras",
    "question": "¿Qué tipo de impresora se caracteriza por imprimir carácter a carácter mediante impacto?",
    "options": [
      "Láser",
      "Inyección de tinta",
      "Matriz de puntos",
      "Térmica"
    ],
    "correct": 2,
    "explanation": "Las impresoras matriciales funcionan por impacto de agujas.",
    "source": "https://es.wikipedia.org/wiki/Impresora_matricial"
  },
  {
    "id": 64,
    "category": "UF0865 - Tipos de impresoras",
    "question": "¿Qué tipo de impresora es común en tickets y recibos?",
    "options": [
      "Láser",
      "Inyección de tinta",
      "Térmica",
      "Plotter"
    ],
    "correct": 2,
    "explanation": "Las impresoras térmicas se utilizan en tickets y recibos.",
    "source": "https://es.wikipedia.org/wiki/Impresora_t%C3%A9rmica"
  },
  {
    "id": 65,
    "category": "UF0865 - Funcionamiento de impresoras láser",
    "question": "¿Qué componente carga eléctricamente el tambor en una impresora láser?",
    "options": [
      "Fusor",
      "Láser",
      "Rodillo de carga",
      "Tóner"
    ],
    "correct": 2,
    "explanation": "El rodillo de carga aplica una carga eléctrica uniforme al tambor.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 66,
    "category": "UF0865 - Funcionamiento de impresoras láser",
    "question": "¿Qué componente fija el tóner al papel mediante calor?",
    "options": [
      "Tambor",
      "Láser",
      "Fusor",
      "Rodillo de arrastre"
    ],
    "correct": 2,
    "explanation": "El fusor aplica calor y presión para fijar el tóner al papel.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 67,
    "category": "UF0865 - Funcionamiento de impresoras de inyección",
    "question": "¿Cómo se expulsa la tinta en una impresora de inyección térmica?",
    "options": [
      "Por presión mecánica",
      "Por vibración",
      "Mediante calor",
      "Por gravedad"
    ],
    "correct": 2,
    "explanation": "Las impresoras de inyección térmica expulsan la tinta mediante calentamiento.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 68,
    "category": "UF0865 - Consumibles",
    "question": "¿Cuál es el principal consumible de una impresora láser?",
    "options": [
      "Cartucho de tinta",
      "Tóner",
      "Cabezal",
      "Cinta"
    ],
    "correct": 1,
    "explanation": "Las impresoras láser utilizan tóner como consumible principal.",
    "source": "https://es.wikipedia.org/wiki/T%C3%B3ner"
  },
  {
    "id": 69,
    "category": "UF0865 - Consumibles",
    "question": "¿Qué componente suele incluirse en muchos cartuchos de tóner?",
    "options": [
      "Fusor",
      "Tambor",
      "Ventilador",
      "Fuente de alimentación"
    ],
    "correct": 1,
    "explanation": "Muchos cartuchos de tóner incorporan el tambor fotosensible.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 70,
    "category": "UF0865 - Averías comunes",
    "question": "¿Qué avería es habitual cuando la impresora láser imprime manchas repetidas?",
    "options": [
      "Fallo de red",
      "Tambor dañado",
      "Driver incorrecto",
      "Cable defectuoso"
    ],
    "correct": 1,
    "explanation": "Un tambor en mal estado produce manchas repetidas en la impresión.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 71,
    "category": "UF0865 - Averías comunes",
    "question": "¿Qué causa habitual provoca atascos de papel?",
    "options": [
      "Drivers actualizados",
      "Rodillos de arrastre desgastados",
      "Exceso de memoria",
      "Firmware nuevo"
    ],
    "correct": 1,
    "explanation": "Los rodillos desgastados no arrastran correctamente el papel.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 72,
    "category": "UF0865 - Averías comunes",
    "question": "¿Qué mantenimiento preventivo ayuda a evitar averías en impresoras?",
    "options": [
      "Apagarla siempre en caliente",
      "Limpieza periódica",
      "Usar papel húmedo",
      "Sobrecargar la bandeja"
    ],
    "correct": 1,
    "explanation": "La limpieza periódica reduce atascos y defectos de impresión.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 73,
    "category": "UF0865 - Averías comunes",
    "question": "¿Qué problema puede causar el uso de consumibles no compatibles?",
    "options": [
      "Mejor calidad",
      "Menor consumo",
      "Daños en la impresora",
      "Mayor velocidad"
    ],
    "correct": 2,
    "explanation": "Consumibles no compatibles pueden provocar averías y mala calidad.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 74,
    "category": "UF0865 - Averías comunes",
    "question": "¿Qué se debe comprobar primero ante una impresora que no imprime?",
    "options": [
      "El color del papel",
      "La conexión y el estado del dispositivo",
      "El número de páginas",
      "El idioma del sistema"
    ],
    "correct": 1,
    "explanation": "Las comprobaciones básicas incluyen conexión, encendido y estado.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 75,
    "category": "UF0865 - Seguridad y medio ambiente",
    "question": "¿Qué debe hacerse con los cartuchos de tinta o tóner usados?",
    "options": [
      "Tirarlos a la basura",
      "Quemarlos",
      "Reciclarlos en puntos autorizados",
      "Enterrarlos"
    ],
    "correct": 2,
    "explanation": "Los cartuchos deben reciclarse para reducir el impacto ambiental.",
    "source": "https://es.wikipedia.org/wiki/Reciclaje"
  },
  {
    "id": 76,
    "category": "UF0863 - Microcontroladores",
    "question": "¿Qué es un microcontrolador?",
    "options": [
      "Un procesador sin memoria",
      "Un circuito integrado con CPU, memoria y periféricos",
      "Una placa base completa",
      "Un sistema operativo embebido"
    ],
    "correct": 1,
    "explanation": "Un microcontrolador integra CPU, memoria y periféricos en un solo chip.",
    "source": "https://es.wikipedia.org/wiki/Microcontrolador"
  },
  {
    "id": 77,
    "category": "UF0863 - Microcontroladores",
    "question": "¿Qué diferencia principal existe entre un microcontrolador y un microprocesador?",
    "options": [
      "El microcontrolador no ejecuta programas",
      "El microprocesador integra periféricos",
      "El microcontrolador integra memoria y periféricos",
      "El microprocesador es más pequeño"
    ],
    "correct": 2,
    "explanation": "El microcontrolador incluye memoria y periféricos en el mismo chip.",
    "source": "https://es.wikipedia.org/wiki/Microcontrolador"
  },
  {
    "id": 78,
    "category": "UF0863 - Arduino",
    "question": "¿Qué tipo de placa es Arduino Uno?",
    "options": [
      "Un ordenador de placa única",
      "Un microcontrolador programable",
      "Un PLC industrial",
      "Un sistema operativo embebido"
    ],
    "correct": 1,
    "explanation": "Arduino Uno es una placa basada en un microcontrolador.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 79,
    "category": "UF0863 - Arduino",
    "question": "¿Qué microcontrolador utiliza Arduino Uno?",
    "options": [
      "ESP32",
      "ATmega328P",
      "ARM Cortex-A53",
      "PIC16F84"
    ],
    "correct": 1,
    "explanation": "Arduino Uno está basado en el microcontrolador ATmega328P.",
    "source": "https://es.wikipedia.org/wiki/Arduino_Uno"
  },
  {
    "id": 80,
    "category": "UF0863 - Arduino",
    "question": "¿Qué lenguaje se utiliza principalmente para programar Arduino?",
    "options": [
      "Python",
      "Java",
      "C/C++",
      "Assembler puro"
    ],
    "correct": 2,
    "explanation": "Arduino se programa principalmente en C/C++ simplificado.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 81,
    "category": "UF0863 - GPIO",
    "question": "¿Qué significa GPIO?",
    "options": [
      "General Peripheral Input Output",
      "Global Pin Input Output",
      "General Purpose Input Output",
      "Graphic Port Input Output"
    ],
    "correct": 2,
    "explanation": "GPIO significa General Purpose Input Output.",
    "source": "https://es.wikipedia.org/wiki/GPIO"
  },
  {
    "id": 82,
    "category": "UF0863 - GPIO",
    "question": "¿Qué función cumple un pin configurado como entrada?",
    "options": [
      "Enviar señales",
      "Recibir señales",
      "Almacenar datos",
      "Regular voltaje"
    ],
    "correct": 1,
    "explanation": "Un pin de entrada recibe señales externas.",
    "source": "https://es.wikipedia.org/wiki/GPIO"
  },
  {
    "id": 83,
    "category": "UF0863 - GPIO",
    "question": "¿Qué ocurre si un pin GPIO se configura como salida?",
    "options": [
      "Solo puede leer valores",
      "Puede enviar señales eléctricas",
      "Se deshabilita",
      "Solo funciona como analógico"
    ],
    "correct": 1,
    "explanation": "Un pin configurado como salida puede enviar señales.",
    "source": "https://es.wikipedia.org/wiki/GPIO"
  },
  {
    "id": 84,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué es Raspberry Pi?",
    "options": [
      "Un microcontrolador",
      "Un ordenador de placa única",
      "Un sistema operativo",
      "Un sensor"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi es un ordenador de placa única.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 85,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué sistema operativo se utiliza habitualmente en Raspberry Pi?",
    "options": [
      "Windows Server",
      "macOS",
      "Raspberry Pi OS",
      "MS-DOS"
    ],
    "correct": 2,
    "explanation": "Raspberry Pi OS es el sistema operativo más habitual.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi_OS"
  },
  {
    "id": 86,
    "category": "UF0863 - Sensores",
    "question": "¿Qué tipo de sensor mide la temperatura?",
    "options": [
      "LDR",
      "Termistor",
      "Acelerómetro",
      "Sensor Hall"
    ],
    "correct": 1,
    "explanation": "El termistor varía su resistencia según la temperatura.",
    "source": "https://es.wikipedia.org/wiki/Termistor"
  },
  {
    "id": 87,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor se utiliza para detectar luz?",
    "options": [
      "Sensor PIR",
      "Termopar",
      "LDR",
      "Ultrasónico"
    ],
    "correct": 2,
    "explanation": "La LDR cambia su resistencia según la luz.",
    "source": "https://es.wikipedia.org/wiki/Fotorresistor"
  },
  {
    "id": 88,
    "category": "UF0863 - Sensores",
    "question": "¿Qué tipo de sensor se usa para detectar movimiento humano?",
    "options": [
      "Sensor PIR",
      "LDR",
      "Termistor",
      "Sensor de presión"
    ],
    "correct": 0,
    "explanation": "El sensor PIR detecta cambios en radiación infrarroja.",
    "source": "https://es.wikipedia.org/wiki/Sensor_infrarrojo_pasivo"
  },
  {
    "id": 89,
    "category": "UF0863 - Actuadores",
    "question": "¿Cuál de los siguientes es un actuador?",
    "options": [
      "Sensor de temperatura",
      "LED",
      "Termistor",
      "LDR"
    ],
    "correct": 1,
    "explanation": "Un LED actúa produciendo luz como respuesta a una señal.",
    "source": "https://es.wikipedia.org/wiki/Actuador"
  },
  {
    "id": 90,
    "category": "UF0863 - IoT",
    "question": "¿Qué significa IoT?",
    "options": [
      "Internet of Transmissions",
      "Internet of Things",
      "Integrated Online Technology",
      "Input Output Technology"
    ],
    "correct": 1,
    "explanation": "IoT significa Internet of Things o Internet de las cosas.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas"
  },
  {
    "id": 91,
    "category": "UF0863 - IoT",
    "question": "¿Qué característica define un dispositivo IoT?",
    "options": [
      "No tiene sensores",
      "No se conecta a la red",
      "Puede recopilar y transmitir datos",
      "Funciona solo offline"
    ],
    "correct": 2,
    "explanation": "Los dispositivos IoT recopilan y transmiten datos a través de redes.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas"
  },
  {
    "id": 92,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un Arduino no enciende. ¿Cuál es el primer paso lógico del diagnóstico?",
    "options": [
      "Reprogramar el microcontrolador",
      "Sustituir la placa",
      "Comprobar la alimentación",
      "Cambiar los sensores"
    ],
    "correct": 2,
    "explanation": "El primer paso del protocolo es comprobar la alimentación.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 93,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una Raspberry Pi no arranca. ¿Qué se debe comprobar primero?",
    "options": [
      "El sistema operativo",
      "La tarjeta microSD",
      "La conexión HDMI",
      "La red Wi-Fi"
    ],
    "correct": 1,
    "explanation": "La Raspberry Pi depende de la microSD para arrancar.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 94,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor no devuelve valores. ¿Cuál es el segundo paso tras verificar alimentación?",
    "options": [
      "Cambiar el microcontrolador",
      "Verificar conexiones y cableado",
      "Reinstalar el sistema operativo",
      "Aumentar el voltaje"
    ],
    "correct": 1,
    "explanation": "Tras la alimentación, se revisan conexiones.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 95,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un LED no se enciende en un circuito con Arduino. ¿Qué debe comprobarse?",
    "options": [
      "El sistema operativo",
      "La polaridad del LED",
      "La red Wi-Fi",
      "El tipo de cable USB"
    ],
    "correct": 1,
    "explanation": "Los LED son componentes polarizados.",
    "source": "https://es.wikipedia.org/wiki/Diodo_emisor_de_luz"
  },
  {
    "id": 96,
    "category": "UF0863 - Comunicaciones",
    "question": "¿Qué tipo de comunicación utiliza solo dos líneas de datos?",
    "options": [
      "SPI",
      "UART",
      "I2C",
      "USB"
    ],
    "correct": 2,
    "explanation": "I2C utiliza dos líneas: SDA y SCL.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 97,
    "category": "UF0863 - Comunicaciones",
    "question": "¿Qué líneas utiliza el bus I2C?",
    "options": [
      "TX y RX",
      "MOSI y MISO",
      "SDA y SCL",
      "D+ y D-"
    ],
    "correct": 2,
    "explanation": "I2C utiliza las líneas SDA (datos) y SCL (reloj).",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 98,
    "category": "UF0863 - Comunicaciones",
    "question": "¿Qué protocolo de comunicación es full-duplex?",
    "options": [
      "I2C",
      "SPI",
      "OneWire",
      "PWM"
    ],
    "correct": 1,
    "explanation": "SPI permite comunicación simultánea en ambos sentidos.",
    "source": "https://es.wikipedia.org/wiki/Serial_Peripheral_Interface"
  },
  {
    "id": 99,
    "category": "UF0863 - Comunicaciones",
    "question": "¿Qué protocolo utiliza líneas TX y RX?",
    "options": [
      "SPI",
      "I2C",
      "UART",
      "I2S"
    ],
    "correct": 2,
    "explanation": "UART utiliza líneas de transmisión y recepción.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 100,
    "category": "UF0863 - Comunicaciones",
    "question": "¿Qué velocidad se mide en baudios?",
    "options": [
      "Velocidad de procesamiento",
      "Velocidad de transmisión",
      "Velocidad de reloj",
      "Velocidad de acceso a memoria"
    ],
    "correct": 1,
    "explanation": "Los baudios miden la velocidad de transmisión.",
    "source": "https://es.wikipedia.org/wiki/Baudio"
  },
  {
    "id": 101,
    "category": "UF0863 - ESP8266 / ESP32",
    "question": "¿Qué característica principal diferencia al ESP8266?",
    "options": [
      "Carece de conectividad",
      "Incluye Wi-Fi integrado",
      "Funciona solo por cable",
      "No puede programarse"
    ],
    "correct": 1,
    "explanation": "El ESP8266 incluye conectividad Wi-Fi integrada.",
    "source": "https://es.wikipedia.org/wiki/ESP8266"
  },
  {
    "id": 102,
    "category": "UF0863 - ESP8266 / ESP32",
    "question": "¿Qué mejora principal introduce el ESP32 respecto al ESP8266?",
    "options": [
      "Menor consumo únicamente",
      "Bluetooth integrado",
      "Menos pines GPIO",
      "Menor capacidad de procesamiento"
    ],
    "correct": 1,
    "explanation": "El ESP32 incluye Bluetooth además de Wi-Fi.",
    "source": "https://es.wikipedia.org/wiki/ESP32"
  },
  {
    "id": 103,
    "category": "UF0863 - ESP8266 / ESP32",
    "question": "¿Qué tipo de dispositivo es el ESP32?",
    "options": [
      "Un microprocesador",
      "Un microcontrolador",
      "Un ordenador SBC",
      "Un PLC"
    ],
    "correct": 1,
    "explanation": "El ESP32 es un microcontrolador con conectividad integrada.",
    "source": "https://es.wikipedia.org/wiki/ESP32"
  },
  {
    "id": 104,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor se utiliza para medir distancia mediante ultrasonidos?",
    "options": [
      "PIR",
      "HC-SR04",
      "LDR",
      "DS18B20"
    ],
    "correct": 1,
    "explanation": "El HC-SR04 mide distancia mediante ultrasonidos.",
    "source": "https://es.wikipedia.org/wiki/Sensor_ultras%C3%B3nico"
  },
  {
    "id": 105,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor digital se usa comúnmente para medir temperatura con Arduino?",
    "options": [
      "LM35",
      "DS18B20",
      "LDR",
      "MQ-2"
    ],
    "correct": 1,
    "explanation": "El DS18B20 es un sensor digital de temperatura.",
    "source": "https://es.wikipedia.org/wiki/Termistor"
  },
  {
    "id": 106,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador permite controlar la posición angular?",
    "options": [
      "Motor DC",
      "Relé",
      "Servo motor",
      "Zumbador"
    ],
    "correct": 2,
    "explanation": "El servo motor permite control preciso de posición.",
    "source": "https://es.wikipedia.org/wiki/Servomotor"
  },
  {
    "id": 107,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué dispositivo se utiliza para conmutar cargas de alta potencia desde un microcontrolador?",
    "options": [
      "LED",
      "Relé",
      "LDR",
      "Condensador"
    ],
    "correct": 1,
    "explanation": "El relé permite controlar cargas de mayor potencia.",
    "source": "https://es.wikipedia.org/wiki/Relé"
  },
  {
    "id": 108,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un módulo I2C no responde. ¿Qué se debe comprobar primero?",
    "options": [
      "El sistema operativo",
      "Las resistencias pull-up",
      "El color del cable",
      "La carcasa"
    ],
    "correct": 1,
    "explanation": "I2C requiere resistencias pull-up para funcionar correctamente.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 109,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un ESP32 no se conecta al Wi-Fi. ¿Qué comprobación es prioritaria?",
    "options": [
      "La memoria flash",
      "Las credenciales de red",
      "El número de GPIO",
      "El tipo de sensor"
    ],
    "correct": 1,
    "explanation": "Las credenciales incorrectas impiden la conexión Wi-Fi.",
    "source": "https://es.wikipedia.org/wiki/ESP32"
  },
  {
    "id": 110,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor ultrasónico da lecturas erráticas. ¿Qué paso lógico sigue tras comprobar alimentación?",
    "options": [
      "Cambiar la placa",
      "Verificar tiempos y código",
      "Actualizar firmware",
      "Aumentar voltaje"
    ],
    "correct": 1,
    "explanation": "Los tiempos de medición afectan directamente a la lectura.",
    "source": "https://es.wikipedia.org/wiki/Sensor_ultras%C3%B3nico"
  },
  {
    "id": 111,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un relé no conmuta al activar un GPIO. ¿Qué se debe verificar?",
    "options": [
      "Que el pin esté configurado como salida",
      "Que el sistema tenga Internet",
      "Que el LED funcione",
      "Que el fusor esté caliente"
    ],
    "correct": 0,
    "explanation": "El GPIO debe configurarse como salida para activar el relé.",
    "source": "https://es.wikipedia.org/wiki/GPIO"
  },
  {
    "id": 112,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un puerto serie no muestra datos. ¿Qué parámetro es crítico comprobar?",
    "options": [
      "La velocidad en baudios",
      "El tipo de sensor",
      "El voltaje de la fuente",
      "El sistema de archivos"
    ],
    "correct": 0,
    "explanation": "La velocidad en baudios debe coincidir en ambos extremos.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 113,
    "category": "UF0863 - Protocolos IoT",
    "question": "¿Qué tipo de arquitectura utiliza el protocolo MQTT?",
    "options": [
      "Cliente-servidor directo",
      "Peer to peer",
      "Publicador-suscriptor",
      "Maestro-esclavo"
    ],
    "correct": 2,
    "explanation": "MQTT utiliza un modelo publicador-suscriptor con un broker.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 114,
    "category": "UF0863 - Protocolos IoT",
    "question": "¿Qué componente central gestiona los mensajes en MQTT?",
    "options": [
      "Gateway",
      "Broker",
      "Cliente",
      "Servidor DNS"
    ],
    "correct": 1,
    "explanation": "El broker es el encargado de gestionar los mensajes MQTT.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 115,
    "category": "UF0863 - Protocolos IoT",
    "question": "¿Qué protocolo IoT se basa en HTTP?",
    "options": [
      "CoAP",
      "MQTT",
      "AMQP",
      "HTTP REST"
    ],
    "correct": 3,
    "explanation": "HTTP REST utiliza el protocolo HTTP para comunicación.",
    "source": "https://es.wikipedia.org/wiki/Transferencia_de_estado_representacional"
  },
  {
    "id": 116,
    "category": "UF0863 - Protocolos IoT",
    "question": "¿Qué ventaja principal ofrece MQTT frente a HTTP?",
    "options": [
      "Mayor consumo de ancho de banda",
      "Menor consumo de recursos",
      "Mayor complejidad",
      "Uso exclusivo en PCs"
    ],
    "correct": 1,
    "explanation": "MQTT está diseñado para entornos con recursos limitados.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 117,
    "category": "UF0863 - Protocolos IoT",
    "question": "¿Qué protocolo está diseñado específicamente para dispositivos con recursos limitados?",
    "options": [
      "FTP",
      "SMTP",
      "CoAP",
      "SNMP"
    ],
    "correct": 2,
    "explanation": "CoAP está diseñado para dispositivos IoT con pocos recursos.",
    "source": "https://es.wikipedia.org/wiki/CoAP"
  },
  {
    "id": 118,
    "category": "UF0863 - Cloud e IoT",
    "question": "¿Qué función cumple un servicio cloud en IoT?",
    "options": [
      "Aumentar el consumo eléctrico",
      "Almacenar y procesar datos",
      "Reemplazar sensores",
      "Controlar el hardware local"
    ],
    "correct": 1,
    "explanation": "El cloud permite almacenar y procesar datos IoT.",
    "source": "https://es.wikipedia.org/wiki/Computaci%C3%B3n_en_la_nube"
  },
  {
    "id": 119,
    "category": "UF0863 - Cloud e IoT",
    "question": "¿Qué modelo cloud ofrece recursos bajo demanda a través de Internet?",
    "options": [
      "LAN",
      "IaaS",
      "BIOS",
      "RTOS"
    ],
    "correct": 1,
    "explanation": "IaaS proporciona infraestructura bajo demanda.",
    "source": "https://es.wikipedia.org/wiki/Infraestructura_como_servicio"
  },
  {
    "id": 120,
    "category": "UF0863 - Cloud e IoT",
    "question": "¿Qué ventaja ofrece el uso de APIs en sistemas IoT?",
    "options": [
      "Eliminan la red",
      "Permiten integración entre sistemas",
      "Reducen sensores",
      "Aumentan el consumo"
    ],
    "correct": 1,
    "explanation": "Las APIs permiten la comunicación entre aplicaciones.",
    "source": "https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones"
  },
  {
    "id": 121,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué medida mejora la seguridad de un dispositivo IoT?",
    "options": [
      "Usar contraseñas por defecto",
      "Desactivar cifrado",
      "Actualizar firmware",
      "Abrir todos los puertos"
    ],
    "correct": 2,
    "explanation": "Actualizar el firmware corrige vulnerabilidades.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 122,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué técnica protege los datos transmitidos?",
    "options": [
      "Compresión",
      "Cifrado",
      "Fragmentación",
      "Multiplexación"
    ],
    "correct": 1,
    "explanation": "El cifrado protege la confidencialidad de los datos.",
    "source": "https://es.wikipedia.org/wiki/Cifrado"
  },
  {
    "id": 123,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué protocolo añade seguridad a HTTP?",
    "options": [
      "FTP",
      "TLS",
      "SSH",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "TLS cifra las comunicaciones HTTP (HTTPS).",
    "source": "https://es.wikipedia.org/wiki/Transport_Layer_Security"
  },
  {
    "id": 124,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo MQTT no recibe mensajes. ¿Qué se debe comprobar primero?",
    "options": [
      "El color del cable",
      "La conexión con el broker",
      "El tipo de sensor",
      "La carcasa"
    ],
    "correct": 1,
    "explanation": "Sin conexión al broker no hay intercambio de mensajes.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 125,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo IoT envía datos pero no aparecen en la nube. ¿Qué revisar?",
    "options": [
      "La fuente de alimentación",
      "La API o endpoint",
      "El tamaño del dispositivo",
      "El LED de estado"
    ],
    "correct": 1,
    "explanation": "Un endpoint incorrecto impide recibir los datos.",
    "source": "https://es.wikipedia.org/wiki/Interfaz_de_programaci%C3%B3n_de_aplicaciones"
  },
  {
    "id": 126,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un ESP32 se reinicia constantemente. ¿Qué causa es más probable?",
    "options": [
      "Exceso de corriente",
      "Alimentación insuficiente",
      "Código demasiado corto",
      "Sensor defectuoso"
    ],
    "correct": 1,
    "explanation": "Una alimentación insuficiente provoca reinicios.",
    "source": "https://es.wikipedia.org/wiki/ESP32"
  },
  {
    "id": 127,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo IoT no se actualiza remotamente. ¿Qué elemento es clave?",
    "options": [
      "Bootloader",
      "Sensor",
      "GPIO",
      "LED"
    ],
    "correct": 0,
    "explanation": "El bootloader gestiona actualizaciones remotas.",
    "source": "https://es.wikipedia.org/wiki/Bootloader"
  },
  {
    "id": 128,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una comunicación HTTPS falla en IoT. ¿Qué se debe comprobar?",
    "options": [
      "Certificados TLS",
      "El color del PCB",
      "El tamaño del sensor",
      "El tipo de LED"
    ],
    "correct": 0,
    "explanation": "Los certificados TLS son esenciales para HTTPS.",
    "source": "https://es.wikipedia.org/wiki/Transport_Layer_Security"
  },
  {
    "id": 129,
    "category": "UF0863 - Sistemas embebidos",
    "question": "¿Qué es un sistema embebido?",
    "options": [
      "Un sistema de propósito general",
      "Un sistema informático dedicado a una función específica",
      "Un ordenador personal",
      "Un servidor en la nube"
    ],
    "correct": 1,
    "explanation": "Un sistema embebido está diseñado para una función concreta.",
    "source": "https://es.wikipedia.org/wiki/Sistema_embebido"
  },
  {
    "id": 130,
    "category": "UF0863 - Sistemas embebidos",
    "question": "¿Qué característica es común en los sistemas embebidos?",
    "options": [
      "Gran consumo energético",
      "Función específica",
      "Uso exclusivo de teclado y ratón",
      "Pantalla obligatoria"
    ],
    "correct": 1,
    "explanation": "Los sistemas embebidos realizan tareas específicas.",
    "source": "https://es.wikipedia.org/wiki/Sistema_embebido"
  },
  {
    "id": 131,
    "category": "UF0863 - RTOS",
    "question": "¿Qué significa RTOS?",
    "options": [
      "Real Time Operating System",
      "Remote Technical Operating System",
      "Rapid Task Operating System",
      "Reduced Time Operating System"
    ],
    "correct": 0,
    "explanation": "RTOS significa sistema operativo en tiempo real.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo_en_tiempo_real"
  },
  {
    "id": 132,
    "category": "UF0863 - RTOS",
    "question": "¿Cuál es la principal característica de un RTOS?",
    "options": [
      "Interfaz gráfica avanzada",
      "Cumplimiento de tiempos deterministas",
      "Alto consumo de memoria",
      "Multimedia avanzada"
    ],
    "correct": 1,
    "explanation": "Un RTOS garantiza tiempos de respuesta deterministas.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo_en_tiempo_real"
  },
  {
    "id": 133,
    "category": "UF0863 - RTOS",
    "question": "¿Qué elemento gestiona la ejecución de tareas en un RTOS?",
    "options": [
      "Compilador",
      "Planificador",
      "BIOS",
      "Cargador"
    ],
    "correct": 1,
    "explanation": "El planificador asigna tiempo de CPU a las tareas.",
    "source": "https://es.wikipedia.org/wiki/Planificación_(informática)"
  },
  {
    "id": 134,
    "category": "UF0863 - Gestión de energía",
    "question": "¿Qué modo reduce el consumo energético de un microcontrolador?",
    "options": [
      "Modo overclock",
      "Modo reposo",
      "Modo turbo",
      "Modo depuración"
    ],
    "correct": 1,
    "explanation": "El modo reposo reduce el consumo cuando no hay actividad.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_energ%C3%ADa"
  },
  {
    "id": 135,
    "category": "UF0863 - Gestión de energía",
    "question": "¿Qué componente protege un sistema ante caídas de tensión?",
    "options": [
      "Watchdog",
      "Regulador de voltaje",
      "Sensor PIR",
      "GPIO"
    ],
    "correct": 1,
    "explanation": "El regulador mantiene estable la tensión.",
    "source": "https://es.wikipedia.org/wiki/Regulador_de_tensi%C3%B3n"
  },
  {
    "id": 136,
    "category": "UF0863 - Watchdog",
    "question": "¿Cuál es la función principal de un watchdog?",
    "options": [
      "Medir temperatura",
      "Reiniciar el sistema ante bloqueos",
      "Controlar sensores",
      "Reducir consumo"
    ],
    "correct": 1,
    "explanation": "El watchdog reinicia el sistema si detecta bloqueos.",
    "source": "https://es.wikipedia.org/wiki/Watchdog"
  },
  {
    "id": 137,
    "category": "UF0863 - Watchdog",
    "question": "¿Qué ocurre si el watchdog no se reinicia a tiempo?",
    "options": [
      "El sistema se apaga",
      "El sistema se reinicia",
      "Se borra la memoria",
      "Se bloquea permanentemente"
    ],
    "correct": 1,
    "explanation": "El watchdog provoca un reinicio automático.",
    "source": "https://es.wikipedia.org/wiki/Watchdog"
  },
  {
    "id": 138,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sistema embebido se bloquea tras horas de uso. ¿Qué mecanismo ayuda a evitarlo?",
    "options": [
      "GPIO",
      "Watchdog",
      "Sensor",
      "Bootloader"
    ],
    "correct": 1,
    "explanation": "El watchdog reinicia el sistema si se bloquea.",
    "source": "https://es.wikipedia.org/wiki/Watchdog"
  },
  {
    "id": 139,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sistema con RTOS pierde eventos críticos. ¿Qué debe revisarse?",
    "options": [
      "La prioridad de tareas",
      "El tamaño del LED",
      "El tipo de sensor",
      "El cable USB"
    ],
    "correct": 0,
    "explanation": "Las prioridades determinan qué tarea se ejecuta primero.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo_en_tiempo_real"
  },
  {
    "id": 140,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo IoT consume demasiada batería. ¿Qué medida es adecuada?",
    "options": [
      "Aumentar frecuencia",
      "Usar modos de bajo consumo",
      "Añadir sensores",
      "Eliminar reguladores"
    ],
    "correct": 1,
    "explanation": "Los modos de bajo consumo reducen el gasto energético.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_energ%C3%ADa"
  },
  {
    "id": 141,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un microcontrolador se reinicia al activar un actuador. ¿Qué comprobar primero?",
    "options": [
      "Código fuente",
      "Fuente de alimentación",
      "Tipo de sensor",
      "Sistema operativo"
    ],
    "correct": 1,
    "explanation": "Los actuadores pueden provocar caídas de tensión.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 142,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sistema con RTOS no cumple tiempos. ¿Qué causa es probable?",
    "options": [
      "Sobrecarga de tareas",
      "Cable incorrecto",
      "Sensor mal orientado",
      "Falta de LEDs"
    ],
    "correct": 0,
    "explanation": "Demasiadas tareas afectan el determinismo.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo_en_tiempo_real"
  },
  {
    "id": 143,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Qué valor representa el nivel lógico alto en electrónica digital?",
    "options": [
      "0 lógico",
      "1 lógico",
      "Valor analógico",
      "Valor flotante"
    ],
    "correct": 1,
    "explanation": "El nivel lógico alto se representa como 1.",
    "source": "https://es.wikipedia.org/wiki/Electr%C3%B3nica_digital"
  },
  {
    "id": 144,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Cuántos valores utiliza el sistema binario?",
    "options": [
      "1",
      "2",
      "8",
      "10"
    ],
    "correct": 1,
    "explanation": "El sistema binario utiliza dos valores: 0 y 1.",
    "source": "https://es.wikipedia.org/wiki/Sistema_binario"
  },
  {
    "id": 145,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Qué puerta lógica devuelve 1 solo si todas sus entradas son 1?",
    "options": [
      "OR",
      "XOR",
      "AND",
      "NOT"
    ],
    "correct": 2,
    "explanation": "La puerta AND solo da salida 1 cuando todas las entradas son 1.",
    "source": "https://es.wikipedia.org/wiki/Puerta_l%C3%B3gica"
  },
  {
    "id": 146,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Qué puerta lógica invierte el valor de la entrada?",
    "options": [
      "AND",
      "OR",
      "XOR",
      "NOT"
    ],
    "correct": 3,
    "explanation": "La puerta NOT invierte el valor lógico.",
    "source": "https://es.wikipedia.org/wiki/Puerta_l%C3%B3gica"
  },
  {
    "id": 147,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Qué dispositivo convierte señales analógicas en digitales?",
    "options": [
      "DAC",
      "ADC",
      "PWM",
      "GPIO"
    ],
    "correct": 1,
    "explanation": "El ADC convierte señales analógicas en digitales.",
    "source": "https://es.wikipedia.org/wiki/Convertidor_anal%C3%B3gico-digital"
  },
  {
    "id": 148,
    "category": "UF0863 - Electrónica digital",
    "question": "¿Qué componente convierte señales digitales en analógicas?",
    "options": [
      "ADC",
      "PWM",
      "DAC",
      "RTOS"
    ],
    "correct": 2,
    "explanation": "El DAC convierte señales digitales en analógicas.",
    "source": "https://es.wikipedia.org/wiki/Convertidor_digital-anal%C3%B3gico"
  },
  {
    "id": 149,
    "category": "UF0863 - Interrupciones",
    "question": "¿Qué es una interrupción en un microcontrolador?",
    "options": [
      "Un error del sistema",
      "Una pausa provocada por un evento",
      "Un modo de bajo consumo",
      "Un tipo de sensor"
    ],
    "correct": 1,
    "explanation": "Las interrupciones permiten responder a eventos externos o internos.",
    "source": "https://es.wikipedia.org/wiki/Interrupción"
  },
  {
    "id": 150,
    "category": "UF0863 - Interrupciones",
    "question": "¿Qué ventaja ofrecen las interrupciones frente al sondeo?",
    "options": [
      "Mayor consumo",
      "Respuesta más rápida a eventos",
      "Menor precisión",
      "Mayor complejidad"
    ],
    "correct": 1,
    "explanation": "Las interrupciones permiten responder inmediatamente a eventos.",
    "source": "https://es.wikipedia.org/wiki/Interrupción"
  },
  {
    "id": 151,
    "category": "UF0863 - Interrupciones",
    "question": "¿Qué sucede si varias interrupciones ocurren simultáneamente?",
    "options": [
      "Se ignoran todas",
      "Se ejecutan en orden de prioridad",
      "El sistema se apaga",
      "Se pierde información"
    ],
    "correct": 1,
    "explanation": "Las interrupciones se gestionan según prioridad.",
    "source": "https://es.wikipedia.org/wiki/Interrupción"
  },
  {
    "id": 152,
    "category": "UF0863 - Timers",
    "question": "¿Para qué se utiliza un temporizador (timer) en un microcontrolador?",
    "options": [
      "Medir tensión",
      "Generar retardos y eventos temporales",
      "Almacenar datos",
      "Controlar sensores"
    ],
    "correct": 1,
    "explanation": "Los timers permiten generar retardos y eventos temporales.",
    "source": "https://es.wikipedia.org/wiki/Temporizador"
  },
  {
    "id": 153,
    "category": "UF0863 - Timers",
    "question": "¿Qué parámetro define la frecuencia de un temporizador?",
    "options": [
      "Prescaler",
      "GPIO",
      "Watchdog",
      "RTOS"
    ],
    "correct": 0,
    "explanation": "El prescaler divide la frecuencia del reloj.",
    "source": "https://es.wikipedia.org/wiki/Temporizador"
  },
  {
    "id": 154,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sistema no responde a pulsadores. ¿Qué comprobar primero?",
    "options": [
      "El LED",
      "La configuración de interrupciones",
      "La carcasa",
      "La nube"
    ],
    "correct": 1,
    "explanation": "Los pulsadores suelen gestionarse mediante interrupciones.",
    "source": "https://es.wikipedia.org/wiki/Interrupción"
  },
  {
    "id": 155,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un temporizador genera eventos demasiado rápidos. ¿Qué ajustar?",
    "options": [
      "GPIO",
      "Prescaler",
      "Sensor",
      "Firmware cloud"
    ],
    "correct": 1,
    "explanation": "El prescaler ajusta la frecuencia del temporizador.",
    "source": "https://es.wikipedia.org/wiki/Temporizador"
  },
  {
    "id": 156,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un ADC devuelve valores inestables. ¿Qué causa es probable?",
    "options": [
      "Ruido eléctrico",
      "Fallo del LED",
      "Sistema operativo",
      "Error de GPIO"
    ],
    "correct": 0,
    "explanation": "El ruido eléctrico afecta a las lecturas analógicas.",
    "source": "https://es.wikipedia.org/wiki/Ruido_el%C3%A9ctrico"
  },
  {
    "id": 157,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un DAC no genera señal correcta. ¿Qué verificar?",
    "options": [
      "Configuración del canal",
      "Conexión Wi-Fi",
      "Tipo de sensor",
      "Fuente cloud"
    ],
    "correct": 0,
    "explanation": "El canal del DAC debe configurarse correctamente.",
    "source": "https://es.wikipedia.org/wiki/Convertidor_digital-anal%C3%B3gico"
  },
  {
    "id": 158,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿Qué magnitud eléctrica se mide en voltios?",
    "options": [
      "Corriente",
      "Resistencia",
      "Tensión",
      "Potencia"
    ],
    "correct": 2,
    "explanation": "La tensión eléctrica se mide en voltios.",
    "source": "https://es.wikipedia.org/wiki/Tensi%C3%B3n_el%C3%A9ctrica"
  },
  {
    "id": 159,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿En qué unidad se mide la corriente eléctrica?",
    "options": [
      "Voltio",
      "Ohmio",
      "Amperio",
      "Vatio"
    ],
    "correct": 2,
    "explanation": "La corriente se mide en amperios.",
    "source": "https://es.wikipedia.org/wiki/Corriente_el%C3%A9ctrica"
  },
  {
    "id": 160,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿Qué componente se opone al paso de la corriente?",
    "options": [
      "Condensador",
      "Bobina",
      "Resistencia",
      "Diodo"
    ],
    "correct": 2,
    "explanation": "La resistencia limita el paso de corriente.",
    "source": "https://es.wikipedia.org/wiki/Resistencia_el%C3%A9ctrica"
  },
  {
    "id": 161,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿Qué componente almacena energía en forma de campo eléctrico?",
    "options": [
      "Resistencia",
      "Condensador",
      "Bobina",
      "Transistor"
    ],
    "correct": 1,
    "explanation": "El condensador almacena energía en un campo eléctrico.",
    "source": "https://es.wikipedia.org/wiki/Condensador_el%C3%A9ctrico"
  },
  {
    "id": 162,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿Qué componente almacena energía en forma de campo magnético?",
    "options": [
      "Resistencia",
      "Condensador",
      "Bobina",
      "Diodo"
    ],
    "correct": 2,
    "explanation": "La bobina almacena energía en un campo magnético.",
    "source": "https://es.wikipedia.org/wiki/Inductor"
  },
  {
    "id": 163,
    "category": "UF0863 - Electrónica analógica",
    "question": "¿Qué dispositivo permite el paso de corriente en un solo sentido?",
    "options": [
      "Transistor",
      "Diodo",
      "Relé",
      "Amplificador"
    ],
    "correct": 1,
    "explanation": "El diodo conduce la corriente en un solo sentido.",
    "source": "https://es.wikipedia.org/wiki/Diodo"
  },
  {
    "id": 164,
    "category": "UF0863 - Amplificadores operacionales",
    "question": "¿Cuál es la función principal de un amplificador operacional?",
    "options": [
      "Almacenar energía",
      "Amplificar señales",
      "Generar corriente",
      "Convertir digital a analógico"
    ],
    "correct": 1,
    "explanation": "Un amplificador operacional amplifica señales analógicas.",
    "source": "https://es.wikipedia.org/wiki/Amplificador_operacional"
  },
  {
    "id": 165,
    "category": "UF0863 - Amplificadores operacionales",
    "question": "¿Qué configuración de amplificador operacional no invierte la señal?",
    "options": [
      "Inversor",
      "Comparador",
      "No inversor",
      "Sumador"
    ],
    "correct": 2,
    "explanation": "La configuración no inversora mantiene la fase.",
    "source": "https://es.wikipedia.org/wiki/Amplificador_operacional"
  },
  {
    "id": 166,
    "category": "UF0863 - Señales",
    "question": "¿Qué tipo de señal varía de forma continua?",
    "options": [
      "Digital",
      "Binaria",
      "Analógica",
      "Lógica"
    ],
    "correct": 2,
    "explanation": "Las señales analógicas varían de forma continua.",
    "source": "https://es.wikipedia.org/wiki/Se%C3%B1al_anal%C3%B3gica"
  },
  {
    "id": 167,
    "category": "UF0863 - Señales",
    "question": "¿Qué parámetro indica la altura de una señal?",
    "options": [
      "Frecuencia",
      "Periodo",
      "Amplitud",
      "Fase"
    ],
    "correct": 2,
    "explanation": "La amplitud indica el valor máximo de la señal.",
    "source": "https://es.wikipedia.org/wiki/Amplitud"
  },
  {
    "id": 168,
    "category": "UF0863 - Señales",
    "question": "¿Qué instrumento permite visualizar una señal eléctrica?",
    "options": [
      "Polímetro",
      "Osciloscopio",
      "Fuente de alimentación",
      "Pinza amperimétrica"
    ],
    "correct": 1,
    "explanation": "El osciloscopio muestra señales en el tiempo.",
    "source": "https://es.wikipedia.org/wiki/Osciloscopio"
  },
  {
    "id": 169,
    "category": "UF0863 - Acondicionamiento de señal",
    "question": "¿Para qué se utilizan los filtros electrónicos?",
    "options": [
      "Generar ruido",
      "Eliminar o atenuar frecuencias",
      "Aumentar tensión",
      "Almacenar energía"
    ],
    "correct": 1,
    "explanation": "Los filtros permiten controlar el contenido frecuencial.",
    "source": "https://es.wikipedia.org/wiki/Filtro_electr%C3%B3nico"
  },
  {
    "id": 170,
    "category": "UF0863 - Acondicionamiento de señal",
    "question": "¿Qué filtro deja pasar bajas frecuencias?",
    "options": [
      "Paso alto",
      "Paso banda",
      "Paso bajo",
      "Rechazo de banda"
    ],
    "correct": 2,
    "explanation": "El filtro paso bajo deja pasar bajas frecuencias.",
    "source": "https://es.wikipedia.org/wiki/Filtro_paso_bajo"
  },
  {
    "id": 171,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor entrega valores erráticos. ¿Qué se debe revisar primero?",
    "options": [
      "Acondicionamiento de señal",
      "Carcasa",
      "Firmware cloud",
      "LED indicador"
    ],
    "correct": 0,
    "explanation": "Un mal filtrado o amplificación produce errores.",
    "source": "https://es.wikipedia.org/wiki/Acondicionamiento_de_señal"
  },
  {
    "id": 172,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un amplificador operacional satura la salida. ¿Qué causa es probable?",
    "options": [
      "Alimentación insuficiente",
      "Sensor digital",
      "GPIO mal configurado",
      "Error de red"
    ],
    "correct": 0,
    "explanation": "La saturación suele deberse a tensión insuficiente.",
    "source": "https://es.wikipedia.org/wiki/Amplificador_operacional"
  },
  {
    "id": 173,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una señal tiene mucho ruido. ¿Qué solución es adecuada?",
    "options": [
      "Añadir un filtro",
      "Aumentar frecuencia",
      "Eliminar resistencias",
      "Reducir muestreo"
    ],
    "correct": 0,
    "explanation": "Los filtros reducen el ruido.",
    "source": "https://es.wikipedia.org/wiki/Ruido_el%C3%A9ctrico"
  },
  {
    "id": 174,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "El osciloscopio no muestra señal. ¿Qué comprobar primero?",
    "options": [
      "Sonda y masa",
      "Firmware IoT",
      "Broker MQTT",
      "GPIO cloud"
    ],
    "correct": 0,
    "explanation": "Una mala conexión de sonda impide la medición.",
    "source": "https://es.wikipedia.org/wiki/Osciloscopio"
  },
  {
    "id": 175,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor se utiliza para medir temperatura?",
    "options": [
      "LDR",
      "Termistor",
      "PIR",
      "Acelerómetro"
    ],
    "correct": 1,
    "explanation": "El termistor cambia su resistencia con la temperatura.",
    "source": "https://es.wikipedia.org/wiki/Termistor"
  },
  {
    "id": 176,
    "category": "UF0863 - Sensores",
    "question": "¿Qué tipo de sensor es una LDR?",
    "options": [
      "Temperatura",
      "Presión",
      "Luz",
      "Movimiento"
    ],
    "correct": 2,
    "explanation": "La LDR varía su resistencia con la luz.",
    "source": "https://es.wikipedia.org/wiki/Fotorresistor"
  },
  {
    "id": 177,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor detecta movimiento por infrarrojos?",
    "options": [
      "Ultrasónico",
      "PIR",
      "Hall",
      "Giroscopio"
    ],
    "correct": 1,
    "explanation": "El sensor PIR detecta radiación infrarroja.",
    "source": "https://es.wikipedia.org/wiki/Sensor_infrarrojo_pasivo"
  },
  {
    "id": 178,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor se usa para medir distancia mediante sonido?",
    "options": [
      "Infrarrojo",
      "Ultrasónico",
      "Capacitivo",
      "Magnético"
    ],
    "correct": 1,
    "explanation": "El sensor ultrasónico mide distancia por eco.",
    "source": "https://es.wikipedia.org/wiki/Sensor_ultras%C3%B3nico"
  },
  {
    "id": 179,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor mide aceleración en tres ejes?",
    "options": [
      "Giroscopio",
      "Magnetómetro",
      "Acelerómetro",
      "Sensor Hall"
    ],
    "correct": 2,
    "explanation": "El acelerómetro mide aceleración en varios ejes.",
    "source": "https://es.wikipedia.org/wiki/Aceler%C3%B3metro"
  },
  {
    "id": 180,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor detecta campos magnéticos?",
    "options": [
      "PIR",
      "Hall",
      "LDR",
      "Termistor"
    ],
    "correct": 1,
    "explanation": "El sensor Hall detecta campos magnéticos.",
    "source": "https://es.wikipedia.org/wiki/Efecto_Hall"
  },
  {
    "id": 181,
    "category": "UF0863 - Sensores",
    "question": "¿Qué tipo de señal suele entregar un sensor analógico?",
    "options": [
      "Binaria",
      "Continua",
      "PWM",
      "Digital cifrada"
    ],
    "correct": 1,
    "explanation": "Los sensores analógicos entregan señales continuas.",
    "source": "https://es.wikipedia.org/wiki/Sensor"
  },
  {
    "id": 182,
    "category": "UF0863 - Sensores",
    "question": "¿Qué componente es necesario para leer un sensor analógico en un microcontrolador?",
    "options": [
      "DAC",
      "ADC",
      "RTOS",
      "GPIO digital"
    ],
    "correct": 1,
    "explanation": "El ADC convierte señales analógicas en digitales.",
    "source": "https://es.wikipedia.org/wiki/Convertidor_anal%C3%B3gico-digital"
  },
  {
    "id": 183,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor mide presión atmosférica?",
    "options": [
      "Barómetro",
      "Termistor",
      "PIR",
      "Hall"
    ],
    "correct": 0,
    "explanation": "El barómetro mide la presión atmosférica.",
    "source": "https://es.wikipedia.org/wiki/Bar%C3%B3metro"
  },
  {
    "id": 184,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor mide humedad relativa?",
    "options": [
      "Higrómetro",
      "Acelerómetro",
      "Giroscopio",
      "Sensor Hall"
    ],
    "correct": 0,
    "explanation": "El higrómetro mide humedad.",
    "source": "https://es.wikipedia.org/wiki/Higr%C3%B3metro"
  },
  {
    "id": 185,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor de temperatura marca valores extremos. ¿Qué revisar primero?",
    "options": [
      "Calibración",
      "Carcasa",
      "Broker MQTT",
      "LED"
    ],
    "correct": 0,
    "explanation": "Una mala calibración provoca lecturas erróneas.",
    "source": "https://es.wikipedia.org/wiki/Calibraci%C3%B3n"
  },
  {
    "id": 186,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor analógico no cambia valores. ¿Qué comprobar?",
    "options": [
      "Alimentación",
      "Color del cable",
      "Tipo de nube",
      "Puerto USB"
    ],
    "correct": 0,
    "explanation": "Sin alimentación el sensor no funciona.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 187,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor ultrasónico no mide distancia. ¿Qué elemento es clave?",
    "options": [
      "Tiempo de eco",
      "Resolución ADC",
      "GPIO PWM",
      "Sistema operativo"
    ],
    "correct": 0,
    "explanation": "El tiempo de eco determina la distancia.",
    "source": "https://es.wikipedia.org/wiki/Sensor_ultras%C3%B3nico"
  },
  {
    "id": 188,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un acelerómetro da lecturas ruidosas. ¿Qué aplicar?",
    "options": [
      "Filtro",
      "Overclock",
      "Más sensores",
      "Eliminar resistencias"
    ],
    "correct": 0,
    "explanation": "Los filtros suavizan el ruido.",
    "source": "https://es.wikipedia.org/wiki/Filtro_electr%C3%B3nico"
  },
  {
    "id": 189,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un sensor digital no responde. ¿Qué revisar primero?",
    "options": [
      "Protocolo de comunicación",
      "Carcasa",
      "LED",
      "Dimensiones físicas"
    ],
    "correct": 0,
    "explanation": "Un protocolo mal configurado impide la comunicación.",
    "source": "https://es.wikipedia.org/wiki/Protocolo_de_comunicaci%C3%B3n"
  },
  {
    "id": 190,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador permite abrir o cerrar un circuito eléctrico?",
    "options": [
      "Motor",
      "Relé",
      "Sensor PIR",
      "LDR"
    ],
    "correct": 1,
    "explanation": "El relé actúa como interruptor controlado eléctricamente.",
    "source": "https://es.wikipedia.org/wiki/Relé"
  },
  {
    "id": 191,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué tipo de motor se controla fácilmente por PWM?",
    "options": [
      "Motor paso a paso",
      "Motor de corriente continua",
      "Motor síncrono",
      "Motor trifásico"
    ],
    "correct": 1,
    "explanation": "Los motores DC se controlan por PWM.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 192,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador se usa para control preciso de posición?",
    "options": [
      "Motor DC",
      "Relé",
      "Servo",
      "Electroválvula"
    ],
    "correct": 2,
    "explanation": "El servo permite posicionamiento preciso.",
    "source": "https://es.wikipedia.org/wiki/Servo"
  },
  {
    "id": 193,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador convierte energía eléctrica en movimiento rotativo?",
    "options": [
      "Relé",
      "Motor",
      "Válvula",
      "Sensor"
    ],
    "correct": 1,
    "explanation": "El motor convierte energía eléctrica en mecánica.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 194,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué componente se usa para aislar un microcontrolador de cargas altas?",
    "options": [
      "Transistor",
      "Optoacoplador",
      "Sensor",
      "ADC"
    ],
    "correct": 1,
    "explanation": "El optoacoplador proporciona aislamiento eléctrico.",
    "source": "https://es.wikipedia.org/wiki/Optoacoplador"
  },
  {
    "id": 195,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador controla el flujo de fluidos?",
    "options": [
      "Servo",
      "Relé",
      "Electroválvula",
      "Motor DC"
    ],
    "correct": 2,
    "explanation": "La electroválvula controla el paso de fluidos.",
    "source": "https://es.wikipedia.org/wiki/Electroválvula"
  },
  {
    "id": 196,
    "category": "UF0863 - Control de potencia",
    "question": "¿Qué componente electrónico se usa para conmutar cargas en DC?",
    "options": [
      "Condensador",
      "MOSFET",
      "LDR",
      "Bobina"
    ],
    "correct": 1,
    "explanation": "El MOSFET se usa para conmutar cargas en DC.",
    "source": "https://es.wikipedia.org/wiki/MOSFET"
  },
  {
    "id": 197,
    "category": "UF0863 - Control de potencia",
    "question": "¿Qué componente se utiliza para cargas en AC?",
    "options": [
      "MOSFET",
      "TRIAC",
      "ADC",
      "DAC"
    ],
    "correct": 1,
    "explanation": "El TRIAC permite controlar cargas en corriente alterna.",
    "source": "https://es.wikipedia.org/wiki/TRIAC"
  },
  {
    "id": 198,
    "category": "UF0863 - Control de potencia",
    "question": "¿Qué función cumple un diodo flyback?",
    "options": [
      "Amplificar señal",
      "Proteger ante picos inductivos",
      "Reducir ruido digital",
      "Aumentar tensión"
    ],
    "correct": 1,
    "explanation": "El diodo flyback protege frente a picos inductivos.",
    "source": "https://es.wikipedia.org/wiki/Diodo"
  },
  {
    "id": 199,
    "category": "UF0863 - Control de potencia",
    "question": "¿Qué señal se usa normalmente para controlar servos?",
    "options": [
      "Analógica",
      "PWM",
      "I2C",
      "SPI"
    ],
    "correct": 1,
    "explanation": "Los servos se controlan mediante PWM.",
    "source": "https://es.wikipedia.org/wiki/Servo"
  },
  {
    "id": 200,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un relé no conmuta. ¿Qué comprobar primero?",
    "options": [
      "Tensión de la bobina",
      "Color del relé",
      "Firmware cloud",
      "Tipo de sensor"
    ],
    "correct": 0,
    "explanation": "Sin tensión adecuada la bobina no activa el relé.",
    "source": "https://es.wikipedia.org/wiki/Relé"
  },
  {
    "id": 201,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un motor DC no gira. ¿Qué causa es más común?",
    "options": [
      "Falta de alimentación",
      "Error de red",
      "Firmware cloud",
      "Sensor PIR"
    ],
    "correct": 0,
    "explanation": "Sin alimentación el motor no funciona.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 202,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un servo vibra sin posicionarse. ¿Qué revisar?",
    "options": [
      "Señal PWM",
      "Carcasa",
      "Broker MQTT",
      "LED"
    ],
    "correct": 0,
    "explanation": "Una señal PWM incorrecta provoca vibraciones.",
    "source": "https://es.wikipedia.org/wiki/Servo"
  },
  {
    "id": 203,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un MOSFET se calienta en exceso. ¿Qué causa es probable?",
    "options": [
      "Disipación insuficiente",
      "Error del sensor",
      "GPIO mal numerado",
      "Firmware cloud"
    ],
    "correct": 0,
    "explanation": "Una mala disipación provoca sobrecalentamiento.",
    "source": "https://es.wikipedia.org/wiki/MOSFET"
  },
  {
    "id": 204,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una electroválvula no abre. ¿Qué elemento comprobar?",
    "options": [
      "Alimentación de la bobina",
      "Protocolo MQTT",
      "Filtro digital",
      "ADC"
    ],
    "correct": 0,
    "explanation": "La bobina necesita alimentación para activar la válvula.",
    "source": "https://es.wikipedia.org/wiki/Electroválvula"
  },
  {
    "id": 205,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué protocolo de comunicación es asíncrono?",
    "options": [
      "SPI",
      "I2C",
      "UART",
      "I2S"
    ],
    "correct": 2,
    "explanation": "UART es un protocolo asíncrono.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 206,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué línea se usa para sincronización en I2C?",
    "options": [
      "MOSI",
      "MISO",
      "SCL",
      "CS"
    ],
    "correct": 2,
    "explanation": "SCL es la línea de reloj en I2C.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 207,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué línea transmite datos desde el maestro en SPI?",
    "options": [
      "MISO",
      "MOSI",
      "SCLK",
      "CS"
    ],
    "correct": 1,
    "explanation": "MOSI envía datos del maestro al esclavo.",
    "source": "https://es.wikipedia.org/wiki/SPI"
  },
  {
    "id": 208,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Cuántos dispositivos pueden compartir el bus I2C?",
    "options": [
      "Solo uno",
      "Dos",
      "Varios",
      "Solo maestros"
    ],
    "correct": 2,
    "explanation": "I2C permite varios dispositivos en el bus.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 209,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué elemento identifica a un dispositivo en I2C?",
    "options": [
      "Puerto",
      "Dirección",
      "Pin",
      "Velocidad"
    ],
    "correct": 1,
    "explanation": "Cada dispositivo I2C tiene una dirección.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 210,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué protocolo es más rápido generalmente?",
    "options": [
      "UART",
      "I2C",
      "SPI",
      "RS-232"
    ],
    "correct": 2,
    "explanation": "SPI ofrece mayores velocidades.",
    "source": "https://es.wikipedia.org/wiki/SPI"
  },
  {
    "id": 211,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué problema ocurre si dos dispositivos I2C tienen la misma dirección?",
    "options": [
      "Nada",
      "Conflicto en el bus",
      "Mayor velocidad",
      "Menor consumo"
    ],
    "correct": 1,
    "explanation": "Dos dispositivos con la misma dirección generan conflicto.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 212,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué parámetro debe coincidir en UART para una comunicación correcta?",
    "options": [
      "Color del cable",
      "Baud rate",
      "Tipo de sensor",
      "Sistema operativo"
    ],
    "correct": 1,
    "explanation": "El baud rate debe ser igual en ambos extremos.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 213,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué señal selecciona un esclavo en SPI?",
    "options": [
      "MISO",
      "MOSI",
      "CS",
      "SCLK"
    ],
    "correct": 2,
    "explanation": "CS selecciona el esclavo activo.",
    "source": "https://es.wikipedia.org/wiki/SPI"
  },
  {
    "id": 214,
    "category": "UF0863 - Comunicación serie",
    "question": "¿Qué resistencia es necesaria en I2C?",
    "options": [
      "Pull-up",
      "Pull-down",
      "Limitadora",
      "Shunt"
    ],
    "correct": 0,
    "explanation": "I2C necesita resistencias pull-up.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 215,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo I2C no responde. ¿Qué revisar primero?",
    "options": [
      "Dirección",
      "Carcasa",
      "LED",
      "Firmware cloud"
    ],
    "correct": 0,
    "explanation": "Una dirección incorrecta impide la comunicación.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 216,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "La comunicación UART muestra caracteres erróneos. ¿Qué causa es probable?",
    "options": [
      "Baud rate incorrecto",
      "Sensor defectuoso",
      "GPIO incorrecto",
      "Fuente cloud"
    ],
    "correct": 0,
    "explanation": "Un baud rate distinto provoca errores de transmisión.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 217,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un bus I2C se bloquea. ¿Qué dispositivo puede causarlo?",
    "options": [
      "Uno que mantiene SDA en bajo",
      "Un LED",
      "Un ADC",
      "Un DAC"
    ],
    "correct": 0,
    "explanation": "Un esclavo bloqueando SDA impide el bus.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 218,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un SPI no comunica con un esclavo. ¿Qué comprobar?",
    "options": [
      "CS",
      "LED",
      "Carcasa",
      "RTOS"
    ],
    "correct": 0,
    "explanation": "Sin CS activo no hay comunicación.",
    "source": "https://es.wikipedia.org/wiki/SPI"
  },
  {
    "id": 219,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un analizador lógico muestra ruido en el bus. ¿Qué hacer?",
    "options": [
      "Reducir velocidad",
      "Aumentar consumo",
      "Eliminar resistencias",
      "Añadir sensores"
    ],
    "correct": 0,
    "explanation": "Reducir velocidad mejora la estabilidad.",
    "source": "https://es.wikipedia.org/wiki/Bus_(informática)"
  },
  {
    "id": 220,
    "category": "UF0863 - Redes",
    "question": "¿Qué dispositivo permite interconectar redes distintas?",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "Repetidor"
    ],
    "correct": 1,
    "explanation": "El router interconecta redes diferentes.",
    "source": "https://es.wikipedia.org/wiki/Router"
  },
  {
    "id": 221,
    "category": "UF0863 - Redes",
    "question": "¿Qué protocolo asigna direcciones IP automáticamente?",
    "options": [
      "DNS",
      "HTTP",
      "DHCP",
      "FTP"
    ],
    "correct": 2,
    "explanation": "DHCP asigna direcciones IP de forma automática.",
    "source": "https://es.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol"
  },
  {
    "id": 222,
    "category": "UF0863 - Redes",
    "question": "¿Qué protocolo traduce nombres de dominio a direcciones IP?",
    "options": [
      "FTP",
      "HTTP",
      "DNS",
      "SNMP"
    ],
    "correct": 2,
    "explanation": "DNS traduce dominios a direcciones IP.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio"
  },
  {
    "id": 223,
    "category": "UF0863 - Redes",
    "question": "¿Qué dirección IP pertenece al rango privado?",
    "options": [
      "8.8.8.8",
      "192.168.1.10",
      "1.1.1.1",
      "172.217.3.4"
    ],
    "correct": 1,
    "explanation": "192.168.x.x es un rango privado.",
    "source": "https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP"
  },
  {
    "id": 224,
    "category": "UF0863 - Redes",
    "question": "¿Qué tecnología permite conexión inalámbrica de corto alcance?",
    "options": [
      "Wi-Fi",
      "Ethernet",
      "Bluetooth",
      "Fibra óptica"
    ],
    "correct": 2,
    "explanation": "Bluetooth es de corto alcance.",
    "source": "https://es.wikipedia.org/wiki/Bluetooth"
  },
  {
    "id": 225,
    "category": "UF0863 - Redes",
    "question": "¿Qué estándar define las redes Wi-Fi?",
    "options": [
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.15",
      "IEEE 802.1"
    ],
    "correct": 1,
    "explanation": "Wi-Fi está definido por IEEE 802.11.",
    "source": "https://es.wikipedia.org/wiki/IEEE_802.11"
  },
  {
    "id": 226,
    "category": "UF0863 - Redes",
    "question": "¿Qué parámetro afecta directamente al alcance Wi-Fi?",
    "options": [
      "Frecuencia",
      "Color del cable",
      "Sistema operativo",
      "Sensor"
    ],
    "correct": 0,
    "explanation": "La frecuencia influye en el alcance y penetración.",
    "source": "https://es.wikipedia.org/wiki/Wi-Fi"
  },
  {
    "id": 227,
    "category": "UF0863 - Redes",
    "question": "¿Qué banda Wi-Fi ofrece mayor alcance?",
    "options": [
      "2,4 GHz",
      "5 GHz",
      "6 GHz",
      "60 GHz"
    ],
    "correct": 0,
    "explanation": "2,4 GHz tiene mayor alcance.",
    "source": "https://es.wikipedia.org/wiki/Wi-Fi"
  },
  {
    "id": 228,
    "category": "UF0863 - Redes",
    "question": "¿Qué tecnología se usa en IoT de bajo consumo y largo alcance?",
    "options": [
      "Bluetooth clásico",
      "LoRa",
      "Ethernet",
      "USB"
    ],
    "correct": 1,
    "explanation": "LoRa se usa en IoT de largo alcance y bajo consumo.",
    "source": "https://es.wikipedia.org/wiki/LoRa"
  },
  {
    "id": 229,
    "category": "UF0863 - Redes",
    "question": "¿Qué protocolo se usa habitualmente sobre TCP/IP para IoT?",
    "options": [
      "FTP",
      "MQTT",
      "SNMP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "MQTT es muy usado en IoT.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 230,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo IoT no obtiene IP. ¿Qué servicio revisar?",
    "options": [
      "DNS",
      "DHCP",
      "HTTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "DHCP asigna direcciones IP.",
    "source": "https://es.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol"
  },
  {
    "id": 231,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo Wi-Fi tiene señal débil. ¿Qué mejora aplicar?",
    "options": [
      "Cambiar canal",
      "Reducir potencia",
      "Desactivar antena",
      "Aumentar ruido"
    ],
    "correct": 0,
    "explanation": "Cambiar canal reduce interferencias.",
    "source": "https://es.wikipedia.org/wiki/Wi-Fi"
  },
  {
    "id": 232,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo Bluetooth no empareja. ¿Qué verificar?",
    "options": [
      "Modo visible",
      "Carcasa",
      "Broker MQTT",
      "Dirección IP"
    ],
    "correct": 0,
    "explanation": "El dispositivo debe estar visible.",
    "source": "https://es.wikipedia.org/wiki/Bluetooth"
  },
  {
    "id": 233,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un nodo LoRa no comunica. ¿Qué revisar primero?",
    "options": [
      "Frecuencia y configuración",
      "Sensor",
      "GPIO",
      "Sistema operativo"
    ],
    "correct": 0,
    "explanation": "La configuración de frecuencia debe coincidir.",
    "source": "https://es.wikipedia.org/wiki/LoRa"
  },
  {
    "id": 234,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo tiene IP pero no accede a Internet. ¿Qué comprobar?",
    "options": [
      "Puerta de enlace",
      "LED",
      "Sensor",
      "RTOS"
    ],
    "correct": 0,
    "explanation": "La puerta de enlace permite salida a Internet.",
    "source": "https://es.wikipedia.org/wiki/Red_inform%C3%A1tica"
  },
  {
    "id": 235,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué sistema operativo se utiliza habitualmente en Raspberry Pi?",
    "options": [
      "Windows Server",
      "Raspberry Pi OS",
      "Android",
      "FreeDOS"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi OS es el sistema oficial.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 236,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué núcleo utiliza Raspberry Pi OS?",
    "options": [
      "NT",
      "Linux",
      "BSD",
      "Mach"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi OS está basado en el kernel Linux.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 237,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué componente permite el arranque del sistema en Raspberry Pi?",
    "options": [
      "Disco duro",
      "Tarjeta microSD",
      "BIOS",
      "ROM USB"
    ],
    "correct": 1,
    "explanation": "El sistema arranca desde la microSD.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 238,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué interfaz se usa para controlar los pines GPIO?",
    "options": [
      "HDMI",
      "GPIO",
      "PCIe",
      "SATA"
    ],
    "correct": 1,
    "explanation": "Los pines GPIO permiten control de entradas y salidas.",
    "source": "https://en.wikipedia.org/wiki/General-purpose_input/output"
  },
  {
    "id": 239,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué comando permite listar procesos en Linux?",
    "options": [
      "ls",
      "ps",
      "cd",
      "mkdir"
    ],
    "correct": 1,
    "explanation": "El comando ps muestra procesos activos.",
    "source": "https://es.wikipedia.org/wiki/Ps_(Unix)"
  },
  {
    "id": 240,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué comando se usa para ver mensajes del sistema?",
    "options": [
      "top",
      "dmesg",
      "kill",
      "nano"
    ],
    "correct": 1,
    "explanation": "dmesg muestra mensajes del kernel.",
    "source": "https://es.wikipedia.org/wiki/Dmesg"
  },
  {
    "id": 241,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué sistema de archivos es común en Linux?",
    "options": [
      "NTFS",
      "ext4",
      "FAT16",
      "HFS+"
    ],
    "correct": 1,
    "explanation": "ext4 es común en Linux.",
    "source": "https://es.wikipedia.org/wiki/Ext4"
  },
  {
    "id": 242,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué servicio gestiona el arranque de servicios en Linux moderno?",
    "options": [
      "init",
      "systemd",
      "cron",
      "bash"
    ],
    "correct": 1,
    "explanation": "systemd gestiona servicios y arranque.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 243,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué comando permite habilitar un servicio en systemd?",
    "options": [
      "service start",
      "systemctl enable",
      "ps aux",
      "chmod"
    ],
    "correct": 1,
    "explanation": "systemctl enable activa un servicio al arranque.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 244,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué lenguaje se usa habitualmente para controlar GPIO en Raspberry Pi?",
    "options": [
      "C#",
      "Python",
      "Java",
      "PHP"
    ],
    "correct": 1,
    "explanation": "Python es muy usado para GPIO.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 245,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una Raspberry Pi no arranca. ¿Qué revisar primero?",
    "options": [
      "Tarjeta microSD",
      "LED RGB",
      "Sensor",
      "Cable HDMI"
    ],
    "correct": 0,
    "explanation": "Una microSD dañada impide el arranque.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 246,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un servicio no inicia tras reinicio. ¿Qué comando revisar?",
    "options": [
      "ps",
      "systemctl status",
      "ls",
      "nano"
    ],
    "correct": 1,
    "explanation": "systemctl status muestra el estado del servicio.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 247,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un GPIO no responde. ¿Qué revisar primero?",
    "options": [
      "Configuración del pin",
      "Carcasa",
      "Broker MQTT",
      "Dirección IP"
    ],
    "correct": 0,
    "explanation": "El pin debe configurarse como entrada o salida.",
    "source": "https://en.wikipedia.org/wiki/General-purpose_input/output"
  },
  {
    "id": 248,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una Raspberry Pi se reinicia sola. ¿Qué causa es probable?",
    "options": [
      "Alimentación insuficiente",
      "Error de DNS",
      "Sensor mal calibrado",
      "Firmware cloud"
    ],
    "correct": 0,
    "explanation": "Una fuente insuficiente provoca reinicios.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 249,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "El sistema se ralentiza con el tiempo. ¿Qué revisar?",
    "options": [
      "Uso de CPU y memoria",
      "Color del cable",
      "Tipo de LED",
      "GPIO"
    ],
    "correct": 0,
    "explanation": "Procesos consumiendo recursos ralentizan el sistema.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 235,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué sistema operativo se utiliza habitualmente en Raspberry Pi?",
    "options": [
      "Windows Server",
      "Raspberry Pi OS",
      "Android",
      "FreeDOS"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi OS es el sistema oficial.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 236,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué núcleo utiliza Raspberry Pi OS?",
    "options": [
      "NT",
      "Linux",
      "BSD",
      "Mach"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi OS está basado en el kernel Linux.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 237,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué componente permite el arranque del sistema en Raspberry Pi?",
    "options": [
      "Disco duro",
      "Tarjeta microSD",
      "BIOS",
      "ROM USB"
    ],
    "correct": 1,
    "explanation": "El sistema arranca desde la microSD.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 238,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué interfaz se usa para controlar los pines GPIO?",
    "options": [
      "HDMI",
      "GPIO",
      "PCIe",
      "SATA"
    ],
    "correct": 1,
    "explanation": "Los pines GPIO permiten control de entradas y salidas.",
    "source": "https://en.wikipedia.org/wiki/General-purpose_input/output"
  },
  {
    "id": 239,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué comando permite listar procesos en Linux?",
    "options": [
      "ls",
      "ps",
      "cd",
      "mkdir"
    ],
    "correct": 1,
    "explanation": "El comando ps muestra procesos activos.",
    "source": "https://es.wikipedia.org/wiki/Ps_(Unix)"
  },
  {
    "id": 240,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué comando se usa para ver mensajes del sistema?",
    "options": [
      "top",
      "dmesg",
      "kill",
      "nano"
    ],
    "correct": 1,
    "explanation": "dmesg muestra mensajes del kernel.",
    "source": "https://es.wikipedia.org/wiki/Dmesg"
  },
  {
    "id": 241,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué sistema de archivos es común en Linux?",
    "options": [
      "NTFS",
      "ext4",
      "FAT16",
      "HFS+"
    ],
    "correct": 1,
    "explanation": "ext4 es común en Linux.",
    "source": "https://es.wikipedia.org/wiki/Ext4"
  },
  {
    "id": 242,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué servicio gestiona el arranque de servicios en Linux moderno?",
    "options": [
      "init",
      "systemd",
      "cron",
      "bash"
    ],
    "correct": 1,
    "explanation": "systemd gestiona servicios y arranque.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 243,
    "category": "UF0863 - Linux embebido",
    "question": "¿Qué comando permite habilitar un servicio en systemd?",
    "options": [
      "service start",
      "systemctl enable",
      "ps aux",
      "chmod"
    ],
    "correct": 1,
    "explanation": "systemctl enable activa un servicio al arranque.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 244,
    "category": "UF0863 - Raspberry Pi",
    "question": "¿Qué lenguaje se usa habitualmente para controlar GPIO en Raspberry Pi?",
    "options": [
      "C#",
      "Python",
      "Java",
      "PHP"
    ],
    "correct": 1,
    "explanation": "Python es muy usado para GPIO.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 245,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una Raspberry Pi no arranca. ¿Qué revisar primero?",
    "options": [
      "Tarjeta microSD",
      "LED RGB",
      "Sensor",
      "Cable HDMI"
    ],
    "correct": 0,
    "explanation": "Una microSD dañada impide el arranque.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 246,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un servicio no inicia tras reinicio. ¿Qué comando revisar?",
    "options": [
      "ps",
      "systemctl status",
      "ls",
      "nano"
    ],
    "correct": 1,
    "explanation": "systemctl status muestra el estado del servicio.",
    "source": "https://es.wikipedia.org/wiki/Systemd"
  },
  {
    "id": 247,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un GPIO no responde. ¿Qué revisar primero?",
    "options": [
      "Configuración del pin",
      "Carcasa",
      "Broker MQTT",
      "Dirección IP"
    ],
    "correct": 0,
    "explanation": "El pin debe configurarse como entrada o salida.",
    "source": "https://en.wikipedia.org/wiki/General-purpose_input/output"
  },
  {
    "id": 248,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Una Raspberry Pi se reinicia sola. ¿Qué causa es probable?",
    "options": [
      "Alimentación insuficiente",
      "Error de DNS",
      "Sensor mal calibrado",
      "Firmware cloud"
    ],
    "correct": 0,
    "explanation": "Una fuente insuficiente provoca reinicios.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 249,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "El sistema se ralentiza con el tiempo. ¿Qué revisar?",
    "options": [
      "Uso de CPU y memoria",
      "Color del cable",
      "Tipo de LED",
      "GPIO"
    ],
    "correct": 0,
    "explanation": "Procesos consumiendo recursos ralentizan el sistema.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 250,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué principio de seguridad limita los permisos al mínimo necesario?",
    "options": [
      "Redundancia",
      "Mínimo privilegio",
      "Alta disponibilidad",
      "Balanceo de carga"
    ],
    "correct": 1,
    "explanation": "El principio de mínimo privilegio limita accesos.",
    "source": "https://es.wikipedia.org/wiki/Principio_de_m%C3%ADnimo_privilegio"
  },
  {
    "id": 251,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué comando cambia permisos en Linux?",
    "options": [
      "chown",
      "chmod",
      "ps",
      "kill"
    ],
    "correct": 1,
    "explanation": "chmod modifica permisos de archivos.",
    "source": "https://es.wikipedia.org/wiki/Chmod"
  },
  {
    "id": 252,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué archivo contiene las contraseñas cifradas en Linux?",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/boot/config"
    ],
    "correct": 1,
    "explanation": "Las contraseñas cifradas están en /etc/shadow.",
    "source": "https://en.wikipedia.org/wiki/Passwd"
  },
  {
    "id": 253,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué herramienta permite filtrar tráfico de red?",
    "options": [
      "iptables",
      "ps",
      "nano",
      "top"
    ],
    "correct": 0,
    "explanation": "iptables permite crear reglas de firewall.",
    "source": "https://es.wikipedia.org/wiki/Iptables"
  },
  {
    "id": 254,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué protocolo cifra las comunicaciones web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correct": 2,
    "explanation": "HTTPS cifra comunicaciones web.",
    "source": "https://es.wikipedia.org/wiki/HTTPS"
  },
  {
    "id": 255,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué ataque intenta adivinar contraseñas por fuerza?",
    "options": [
      "Phishing",
      "Fuerza bruta",
      "Spoofing",
      "Sniffing"
    ],
    "correct": 1,
    "explanation": "La fuerza bruta prueba múltiples contraseñas.",
    "source": "https://es.wikipedia.org/wiki/Ataque_de_fuerza_bruta"
  },
  {
    "id": 256,
    "category": "UF0863 - Seguridad informática",
    "question": "¿Qué ataque suplanta identidad en red?",
    "options": [
      "Spoofing",
      "Sniffing",
      "DDoS",
      "SQL injection"
    ],
    "correct": 0,
    "explanation": "El spoofing suplanta identidad.",
    "source": "https://es.wikipedia.org/wiki/Spoofing"
  },
  {
    "id": 257,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué medida básica mejora la seguridad en IoT?",
    "options": [
      "Contraseñas por defecto",
      "Actualización de firmware",
      "Puertos abiertos",
      "Red pública"
    ],
    "correct": 1,
    "explanation": "Actualizar firmware corrige vulnerabilidades.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas#Seguridad"
  },
  {
    "id": 258,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué protocolo seguro se usa en IoT?",
    "options": [
      "MQTT",
      "MQTT sobre TLS",
      "HTTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "MQTT sobre TLS cifra la comunicación.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 259,
    "category": "UF0863 - Seguridad IoT",
    "question": "¿Qué riesgo existe al exponer un dispositivo IoT a Internet?",
    "options": [
      "Mayor velocidad",
      "Acceso no autorizado",
      "Menor consumo",
      "Mejor señal"
    ],
    "correct": 1,
    "explanation": "La exposición puede permitir accesos no autorizados.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas#Seguridad"
  },
  {
    "id": 260,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un usuario no puede acceder a un archivo. ¿Qué revisar primero?",
    "options": [
      "Permisos",
      "Carcasa",
      "Sensor",
      "Red"
    ],
    "correct": 0,
    "explanation": "Los permisos determinan el acceso.",
    "source": "https://es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos"
  },
  {
    "id": 261,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un servicio no es accesible desde red externa. ¿Qué revisar?",
    "options": [
      "Firewall",
      "Sensor",
      "LED",
      "GPIO"
    ],
    "correct": 0,
    "explanation": "El firewall puede bloquear el acceso.",
    "source": "https://es.wikipedia.org/wiki/Firewall"
  },
  {
    "id": 262,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un dispositivo IoT fue comprometido. ¿Qué acción inmediata tomar?",
    "options": [
      "Aislar de la red",
      "Reiniciar sin cambios",
      "Ignorar",
      "Abrir puertos"
    ],
    "correct": 0,
    "explanation": "Aislar evita propagación.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 263,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Se detectan intentos de acceso repetidos. ¿Qué ataque es probable?",
    "options": [
      "Fuerza bruta",
      "DDoS",
      "Spoofing",
      "Sniffing"
    ],
    "correct": 0,
    "explanation": "Los intentos repetidos indican fuerza bruta.",
    "source": "https://es.wikipedia.org/wiki/Ataque_de_fuerza_bruta"
  },
  {
    "id": 264,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un firewall bloquea tráfico legítimo. ¿Qué hacer?",
    "options": [
      "Revisar reglas",
      "Desactivar seguridad",
      "Abrir todos los puertos",
      "Ignorar"
    ],
    "correct": 0,
    "explanation": "Las reglas deben ajustarse correctamente.",
    "source": "https://es.wikipedia.org/wiki/Firewall"
  },
  {
    "id": 265,
    "category": "UF0863 - Mantenimiento preventivo",
    "question": "¿Cuál es el objetivo del mantenimiento preventivo?",
    "options": [
      "Reparar tras la avería",
      "Evitar fallos futuros",
      "Reducir rendimiento",
      "Eliminar seguridad"
    ],
    "correct": 1,
    "explanation": "El mantenimiento preventivo busca evitar fallos.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 266,
    "category": "UF0863 - Mantenimiento correctivo",
    "question": "¿Cuándo se realiza mantenimiento correctivo?",
    "options": [
      "Antes del fallo",
      "Después del fallo",
      "Durante el diseño",
      "En fabricación"
    ],
    "correct": 1,
    "explanation": "El mantenimiento correctivo se realiza tras la avería.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_correctivo"
  },
  {
    "id": 267,
    "category": "UF0863 - Mantenimiento preventivo",
    "question": "¿Qué acción forma parte del mantenimiento preventivo?",
    "options": [
      "Sustituir placa dañada",
      "Limpiar ventiladores",
      "Reparar cortocircuito",
      "Reprogramar firmware dañado"
    ],
    "correct": 1,
    "explanation": "La limpieza evita sobrecalentamiento.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 268,
    "category": "UF0863 - Documentación técnica",
    "question": "¿Qué documento describe pasos para reparar un equipo?",
    "options": [
      "Manual de usuario",
      "Manual de servicio",
      "Factura",
      "Inventario"
    ],
    "correct": 1,
    "explanation": "El manual de servicio detalla procedimientos técnicos.",
    "source": "https://es.wikipedia.org/wiki/Manual_de_usuario"
  },
  {
    "id": 269,
    "category": "UF0863 - Documentación técnica",
    "question": "¿Qué documento registra las intervenciones realizadas?",
    "options": [
      "Hoja de mantenimiento",
      "Catálogo",
      "Presupuesto",
      "Garantía"
    ],
    "correct": 0,
    "explanation": "La hoja de mantenimiento registra actuaciones.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 270,
    "category": "UF0863 - Procedimientos técnicos",
    "question": "¿Qué se debe hacer antes de intervenir un equipo?",
    "options": [
      "Encenderlo",
      "Desconectarlo de la corriente",
      "Actualizar firmware",
      "Conectarlo a Internet"
    ],
    "correct": 1,
    "explanation": "Desconectar evita riesgos eléctricos.",
    "source": "https://es.wikipedia.org/wiki/Riesgo_eléctrico"
  },
  {
    "id": 271,
    "category": "UF0863 - Procedimientos técnicos",
    "question": "¿Qué equipo protege frente a descargas electrostáticas?",
    "options": [
      "Guantes térmicos",
      "Pulsera antiestática",
      "Casco",
      "Gafas"
    ],
    "correct": 1,
    "explanation": "La pulsera antiestática evita ESD.",
    "source": "https://es.wikipedia.org/wiki/Descarga_electrost%C3%A1tica"
  },
  {
    "id": 272,
    "category": "UF0863 - Procedimientos técnicos",
    "question": "¿Qué herramienta se usa para medir tensión y corriente?",
    "options": [
      "Osciloscopio",
      "Polímetro",
      "Analizador lógico",
      "Fuente regulable"
    ],
    "correct": 1,
    "explanation": "El polímetro mide magnitudes eléctricas.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 273,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Cuál es el primer paso en un protocolo de diagnóstico?",
    "options": [
      "Sustituir componentes",
      "Recoger síntomas",
      "Actualizar firmware",
      "Cambiar sensores"
    ],
    "correct": 1,
    "explanation": "El diagnóstico comienza identificando síntomas.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 274,
    "category": "UF0864 - Diagnóstico de averías",
    "question": "¿Qué técnica consiste en descartar causas una a una?",
    "options": [
      "Prueba aleatoria",
      "Método de eliminación",
      "Sustitución directa",
      "Overclock"
    ],
    "correct": 1,
    "explanation": "El método de eliminación es sistemático.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 275,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un equipo se sobrecalienta. ¿Qué acción preventiva aplicar?",
    "options": [
      "Eliminar ventilación",
      "Limpiar disipadores",
      "Aumentar voltaje",
      "Cerrar carcasa"
    ],
    "correct": 1,
    "explanation": "La limpieza mejora la disipación térmica.",
    "source": "https://es.wikipedia.org/wiki/Disipador_de_calor"
  },
  {
    "id": 276,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Tras una reparación, ¿qué se debe hacer?",
    "options": [
      "Entregar sin pruebas",
      "Realizar pruebas funcionales",
      "Apagar el equipo",
      "Formatear"
    ],
    "correct": 1,
    "explanation": "Las pruebas verifican la reparación.",
    "source": "https://es.wikipedia.org/wiki/Prueba_de_software"
  },
  {
    "id": 277,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un técnico no documenta una intervención. ¿Qué problema genera?",
    "options": [
      "Mejor rendimiento",
      "Pérdida de trazabilidad",
      "Mayor seguridad",
      "Menor tiempo"
    ],
    "correct": 1,
    "explanation": "La documentación asegura trazabilidad.",
    "source": "https://es.wikipedia.org/wiki/Trazabilidad"
  },
  {
    "id": 278,
    "category": "UF0864 - Caso práctico de diagnóstico",
    "question": "Un equipo falla de nuevo tras reparación. ¿Qué revisar?",
    "options": [
      "Proceso seguido",
      "Color del cable",
      "Tipo de carcasa",
      "LED"
    ],
    "correct": 0,
    "explanation": "Revisar el procedimiento permite detectar errores.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_correctivo"
  },
  {
    "id": 279,
    "category": "UF0863 - Prevención de riesgos laborales",
    "question": "¿Qué norma regula la prevención de riesgos laborales en España?",
    "options": [
      "ISO 9001",
      "Ley 31/1995",
      "UNE 1337",
      "GDPR"
    ],
    "correct": 1,
    "explanation": "La Ley 31/1995 regula la PRL en España.",
    "source": "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292"
  },
  {
    "id": 280,
    "category": "UF0863 - Seguridad eléctrica",
    "question": "¿Qué color identifica el conductor de protección?",
    "options": [
      "Azul",
      "Marrón",
      "Verde y amarillo",
      "Negro"
    ],
    "correct": 2,
    "explanation": "El conductor de protección es verde-amarillo.",
    "source": "https://es.wikipedia.org/wiki/Toma_de_tierra"
  },
  {
    "id": 281,
    "category": "UF0863 - Seguridad eléctrica",
    "question": "¿Qué elemento protege contra sobreintensidades?",
    "options": [
      "Interruptor diferencial",
      "Fusible",
      "Transformador",
      "Relé"
    ],
    "correct": 1,
    "explanation": "El fusible protege contra sobreintensidades.",
    "source": "https://es.wikipedia.org/wiki/Fusible"
  },
  {
    "id": 282,
    "category": "UF0863 - Seguridad eléctrica",
    "question": "¿Qué protege el interruptor diferencial?",
    "options": [
      "Sobretensión",
      "Fugas a tierra",
      "Cortocircuitos",
      "Caídas de tensión"
    ],
    "correct": 1,
    "explanation": "El diferencial protege frente a fugas de corriente.",
    "source": "https://es.wikipedia.org/wiki/Interruptor_diferencial"
  },
  {
    "id": 283,
    "category": "UF0863 - PRL",
    "question": "¿Qué EPI protege los ojos?",
    "options": [
      "Guantes",
      "Gafas de seguridad",
      "Casco",
      "Calzado"
    ],
    "correct": 1,
    "explanation": "Las gafas protegen los ojos.",
    "source": "https://es.wikipedia.org/wiki/Equipo_de_protecci%C3%B3n_individual"
  },
  {
    "id": 284,
    "category": "UF0863 - Medioambiente",
    "question": "¿Qué normativa regula residuos electrónicos?",
    "options": [
      "RoHS",
      "REACH",
      "ISO 14001",
      "WEEE"
    ],
    "correct": 3,
    "explanation": "WEEE regula residuos de aparatos eléctricos.",
    "source": "https://es.wikipedia.org/wiki/RAEE"
  },
  {
    "id": 285,
    "category": "UF0863 - Medioambiente",
    "question": "¿Qué símbolo indica un producto electrónico reciclable?",
    "options": [
      "Triángulo flechas",
      "Cubo tachado",
      "Rayo",
      "Llama"
    ],
    "correct": 1,
    "explanation": "El cubo tachado indica RAEE.",
    "source": "https://es.wikipedia.org/wiki/RAEE"
  },
  {
    "id": 286,
    "category": "UF0863 - Medioambiente",
    "question": "¿Qué componente contiene materiales peligrosos?",
    "options": [
      "Plástico",
      "Batería",
      "Carcasa",
      "Tornillos"
    ],
    "correct": 1,
    "explanation": "Las baterías contienen sustancias peligrosas.",
    "source": "https://es.wikipedia.org/wiki/Bater%C3%ADa"
  },
  {
    "id": 287,
    "category": "UF0864 - Caso práctico PRL",
    "question": "Un técnico trabaja con tensión aplicada. ¿Qué riesgo existe?",
    "options": [
      "Ruido",
      "Electrocución",
      "Vibración",
      "Radiación"
    ],
    "correct": 1,
    "explanation": "Trabajar con tensión supone riesgo eléctrico.",
    "source": "https://es.wikipedia.org/wiki/Electrocuci%C3%B3n"
  },
  {
    "id": 288,
    "category": "UF0864 - Caso práctico PRL",
    "question": "Se derrama tóner. ¿Qué acción correcta?",
    "options": [
      "Aspirar sin filtro",
      "Usar protección y limpiar adecuadamente",
      "Soplar",
      "Ignorar"
    ],
    "correct": 1,
    "explanation": "El tóner requiere limpieza segura.",
    "source": "https://es.wikipedia.org/wiki/T%C3%B3ner"
  },
  {
    "id": 289,
    "category": "UF0864 - Caso práctico PRL",
    "question": "Un cable presenta aislamiento dañado. ¿Qué hacer?",
    "options": [
      "Seguir usando",
      "Sustituir el cable",
      "Cubrir con cinta común",
      "Ignorar"
    ],
    "correct": 1,
    "explanation": "El cable dañado debe sustituirse.",
    "source": "https://es.wikipedia.org/wiki/Riesgo_eléctrico"
  },
  {
    "id": 290,
    "category": "UF0864 - Caso práctico medioambiental",
    "question": "¿Dónde depositar placas electrónicas usadas?",
    "options": [
      "Basura común",
      "Punto limpio",
      "Contenedor orgánico",
      "Incinerar"
    ],
    "correct": 1,
    "explanation": "Los RAEE deben ir a puntos limpios.",
    "source": "https://es.wikipedia.org/wiki/RAEE"
  },
  {
    "id": 291,
    "category": "UF0864 - Caso práctico medioambiental",
    "question": "¿Qué hacer con una batería hinchada?",
    "options": [
      "Perforarla",
      "Depositarla como residuo peligroso",
      "Usarla",
      "Quemarla"
    ],
    "correct": 1,
    "explanation": "Las baterías hinchadas son peligrosas.",
    "source": "https://es.wikipedia.org/wiki/Bater%C3%ADa"
  },
  {
    "id": 292,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué tipo de impresora utiliza cartuchos de tinta líquida?",
    "options": [
      "Láser",
      "Inyección de tinta",
      "Matricial",
      "Térmica"
    ],
    "correct": 1,
    "explanation": "Las impresoras de inyección utilizan tinta líquida.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 293,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué componente fija el tóner al papel en una impresora láser?",
    "options": [
      "Tambor",
      "Fusor",
      "Rodillo de carga",
      "Láser"
    ],
    "correct": 1,
    "explanation": "El fusor fija el tóner mediante calor y presión.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 294,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué consumible se agota en una impresora láser?",
    "options": [
      "Tinta",
      "Tóner",
      "Papel térmico",
      "Cabezal"
    ],
    "correct": 1,
    "explanation": "Las impresoras láser utilizan tóner.",
    "source": "https://es.wikipedia.org/wiki/T%C3%B3ner"
  },
  {
    "id": 295,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué componente carga electrostáticamente el tambor?",
    "options": [
      "Fusor",
      "Rodillo de carga",
      "Láser",
      "Bandeja"
    ],
    "correct": 1,
    "explanation": "El rodillo de carga prepara el tambor.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 296,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué mantenimiento es típico en impresoras de inyección?",
    "options": [
      "Cambio de fusor",
      "Limpieza de cabezales",
      "Alineación láser",
      "Cambio de tambor"
    ],
    "correct": 1,
    "explanation": "Los cabezales se obstruyen con facilidad.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 297,
    "category": "UF0865 - Impresoras",
    "question": "¿Qué impresora es más adecuada para grandes volúmenes?",
    "options": [
      "Inyección",
      "Láser",
      "Matricial",
      "Térmica"
    ],
    "correct": 1,
    "explanation": "Las láser soportan altos volúmenes.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 298,
    "category": "UF0865 - Averías de impresoras",
    "question": "Una impresora láser deja manchas repetitivas. ¿Qué revisar?",
    "options": [
      "Fusor",
      "Tambor",
      "Bandeja",
      "Driver"
    ],
    "correct": 1,
    "explanation": "El tambor dañado provoca patrones repetitivos.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 299,
    "category": "UF0865 - Averías de impresoras",
    "question": "Una impresora no reconoce cartuchos nuevos. ¿Causa probable?",
    "options": [
      "Sensor sucio",
      "Firmware",
      "Papel incorrecto",
      "Cable USB"
    ],
    "correct": 1,
    "explanation": "El firmware puede bloquear cartuchos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 300,
    "category": "UF0865 - Averías de impresoras",
    "question": "Atascos frecuentes indican problema en:",
    "options": [
      "Rodillos de arrastre",
      "Fusor",
      "Driver",
      "Red"
    ],
    "correct": 0,
    "explanation": "Rodillos desgastados causan atascos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 301,
    "category": "UF0865 - Averías de impresoras",
    "question": "La impresora imprime páginas en blanco. ¿Qué revisar?",
    "options": [
      "Tóner vacío",
      "Pantalla",
      "Cable",
      "Carcasa"
    ],
    "correct": 0,
    "explanation": "Sin tóner no hay impresión.",
    "source": "https://es.wikipedia.org/wiki/T%C3%B3ner"
  },
  {
    "id": 302,
    "category": "UF0865 - Caso práctico de diagnóstico",
    "question": "Impresión borrosa en láser. Primer paso lógico:",
    "options": [
      "Actualizar sistema",
      "Revisar consumibles",
      "Cambiar placa",
      "Formatear"
    ],
    "correct": 1,
    "explanation": "Consumibles influyen directamente.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 303,
    "category": "UF0865 - Caso práctico de diagnóstico",
    "question": "Una impresora no enciende. ¿Qué revisar primero?",
    "options": [
      "Fuente de alimentación",
      "Driver",
      "Papel",
      "Red"
    ],
    "correct": 0,
    "explanation": "La alimentación es básica.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 304,
    "category": "UF0865 - Caso práctico de diagnóstico",
    "question": "Tras cambiar tóner hay error persistente. ¿Qué hacer?",
    "options": [
      "Reiniciar impresora",
      "Cambiar cable",
      "Instalar SO",
      "Cambiar bandeja"
    ],
    "correct": 0,
    "explanation": "Reiniciar actualiza el estado.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 305,
    "category": "UF0865 - Caso práctico de diagnóstico",
    "question": "Impresora de inyección no imprime tras tiempo parada. ¿Causa?",
    "options": [
      "Cabezales secos",
      "Driver nuevo",
      "Papel incorrecto",
      "Cable largo"
    ],
    "correct": 0,
    "explanation": "La tinta se seca en los cabezales.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 306,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué dispositivo interconecta equipos en una red local?",
    "options": [
      "Router",
      "Switch",
      "Módem",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "El switch conecta equipos dentro de una LAN.",
    "source": "https://es.wikipedia.org/wiki/Conmutador_(dispositivo_de_red)"
  },
  {
    "id": 307,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué protocolo asigna direcciones IP automáticamente?",
    "options": [
      "DNS",
      "DHCP",
      "FTP",
      "HTTP"
    ],
    "correct": 1,
    "explanation": "DHCP asigna direcciones IP de forma automática.",
    "source": "https://es.wikipedia.org/wiki/DHCP"
  },
  {
    "id": 308,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué protocolo traduce nombres de dominio a IP?",
    "options": [
      "HTTP",
      "FTP",
      "DNS",
      "SMTP"
    ],
    "correct": 2,
    "explanation": "DNS traduce nombres a direcciones IP.",
    "source": "https://es.wikipedia.org/wiki/Domain_Name_System"
  },
  {
    "id": 309,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué medio físico es más común en redes cableadas?",
    "options": [
      "Fibra óptica",
      "Cable coaxial",
      "Par trenzado",
      "Infrarrojos"
    ],
    "correct": 2,
    "explanation": "El par trenzado es el más usado en LAN.",
    "source": "https://es.wikipedia.org/wiki/Par_trenzado"
  },
  {
    "id": 310,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué estándar define redes Wi-Fi?",
    "options": [
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.15",
      "IEEE 802.1Q"
    ],
    "correct": 1,
    "explanation": "IEEE 802.11 define Wi-Fi.",
    "source": "https://es.wikipedia.org/wiki/IEEE_802.11"
  },
  {
    "id": 311,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué dirección identifica un dispositivo a nivel físico?",
    "options": [
      "IP",
      "MAC",
      "DNS",
      "Gateway"
    ],
    "correct": 1,
    "explanation": "La dirección MAC identifica físicamente al dispositivo.",
    "source": "https://es.wikipedia.org/wiki/Direcci%C3%B3n_MAC"
  },
  {
    "id": 312,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué comando comprueba conectividad en red?",
    "options": [
      "ipconfig",
      "ping",
      "netstat",
      "tracert"
    ],
    "correct": 1,
    "explanation": "ping comprueba conectividad.",
    "source": "https://es.wikipedia.org/wiki/Ping"
  },
  {
    "id": 313,
    "category": "UF0863 - Redes básicas",
    "question": "¿Qué comando muestra configuración IP en Linux?",
    "options": [
      "ifconfig",
      "ps",
      "ls",
      "top"
    ],
    "correct": 0,
    "explanation": "ifconfig muestra configuración de red.",
    "source": "https://es.wikipedia.org/wiki/Ifconfig"
  },
  {
    "id": 314,
    "category": "UF0864 - Diagnóstico de red",
    "question": "Un equipo no obtiene IP. ¿Qué servicio revisar?",
    "options": [
      "DNS",
      "DHCP",
      "HTTP",
      "FTP"
    ],
    "correct": 1,
    "explanation": "DHCP asigna IP automáticamente.",
    "source": "https://es.wikipedia.org/wiki/DHCP"
  },
  {
    "id": 315,
    "category": "UF0864 - Diagnóstico de red",
    "question": "Hay conexión Wi-Fi pero no Internet. ¿Qué revisar primero?",
    "options": [
      "Router",
      "Monitor",
      "Teclado",
      "Carcasa"
    ],
    "correct": 0,
    "explanation": "El router conecta con Internet.",
    "source": "https://es.wikipedia.org/wiki/Router"
  },
  {
    "id": 316,
    "category": "UF0864 - Diagnóstico de red",
    "question": "Un cable Ethernet no funciona. ¿Qué comprobar?",
    "options": [
      "Conectores RJ45",
      "Pantalla",
      "Driver de audio",
      "BIOS"
    ],
    "correct": 0,
    "explanation": "Los conectores pueden estar dañados.",
    "source": "https://es.wikipedia.org/wiki/RJ-45"
  },
  {
    "id": 317,
    "category": "UF0864 - Diagnóstico de red",
    "question": "Un equipo responde por IP pero no por nombre. ¿Problema en?",
    "options": [
      "DNS",
      "DHCP",
      "Firewall",
      "Switch"
    ],
    "correct": 0,
    "explanation": "El DNS resuelve nombres.",
    "source": "https://es.wikipedia.org/wiki/Domain_Name_System"
  },
  {
    "id": 318,
    "category": "UF0864 - Diagnóstico de red",
    "question": "Latencia elevada en red local. ¿Causa probable?",
    "options": [
      "Colisiones o saturación",
      "Pantalla",
      "Fuente",
      "Firmware BIOS"
    ],
    "correct": 0,
    "explanation": "La saturación causa latencia.",
    "source": "https://es.wikipedia.org/wiki/Red_de_computadoras"
  },
  {
    "id": 319,
    "category": "UF0864 - Caso práctico de red",
    "question": "Un dispositivo IoT pierde conexión Wi-Fi. ¿Qué revisar?",
    "options": [
      "Cobertura y señal",
      "Sensor",
      "GPIO",
      "Firmware BIOS"
    ],
    "correct": 0,
    "explanation": "La cobertura afecta a IoT.",
    "source": "https://es.wikipedia.org/wiki/Wi-Fi"
  },
  {
    "id": 320,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué protocolo permite acceso remoto seguro a un sistema?",
    "options": [
      "Telnet",
      "SSH",
      "FTP",
      "HTTP"
    ],
    "correct": 1,
    "explanation": "SSH cifra la comunicación remota.",
    "source": "https://es.wikipedia.org/wiki/Secure_Shell"
  },
  {
    "id": 321,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué puerto usa SSH por defecto?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "correct": 1,
    "explanation": "SSH utiliza el puerto 22.",
    "source": "https://es.wikipedia.org/wiki/Secure_Shell"
  },
  {
    "id": 322,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué protocolo se usa para transferencia de archivos?",
    "options": [
      "FTP",
      "SMTP",
      "DNS",
      "SNMP"
    ],
    "correct": 0,
    "explanation": "FTP transfiere archivos.",
    "source": "https://es.wikipedia.org/wiki/File_Transfer_Protocol"
  },
  {
    "id": 323,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué versión de HTTP cifra la comunicación?",
    "options": [
      "HTTP/1.1",
      "HTTPS",
      "FTP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "HTTPS cifra mediante TLS.",
    "source": "https://es.wikipedia.org/wiki/HTTPS"
  },
  {
    "id": 324,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué protocolo es ligero y usado en IoT?",
    "options": [
      "HTTP",
      "FTP",
      "MQTT",
      "SMTP"
    ],
    "correct": 2,
    "explanation": "MQTT es ligero y eficiente.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 325,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué modelo de comunicación usa MQTT?",
    "options": [
      "Cliente-servidor",
      "Publicador-suscriptor",
      "Peer to peer",
      "Broadcast"
    ],
    "correct": 1,
    "explanation": "MQTT usa publish/subscribe.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 326,
    "category": "UF0863 - Protocolos de red",
    "question": "¿Qué componente central gestiona mensajes MQTT?",
    "options": [
      "Router",
      "Broker",
      "Switch",
      "Gateway"
    ],
    "correct": 1,
    "explanation": "El broker gestiona mensajes.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 327,
    "category": "UF0863 - Servicios de red",
    "question": "¿Qué servicio traduce nombres de dominio?",
    "options": [
      "FTP",
      "DNS",
      "SSH",
      "DHCP"
    ],
    "correct": 1,
    "explanation": "DNS traduce nombres a IP.",
    "source": "https://es.wikipedia.org/wiki/Domain_Name_System"
  },
  {
    "id": 328,
    "category": "UF0863 - Servicios de red",
    "question": "¿Qué servicio asigna IP automáticamente?",
    "options": [
      "DNS",
      "DHCP",
      "SNMP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "DHCP asigna IP.",
    "source": "https://es.wikipedia.org/wiki/DHCP"
  },
  {
    "id": 329,
    "category": "UF0863 - Servicios de red",
    "question": "¿Qué servicio permite enviar correos?",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "FTP"
    ],
    "correct": 0,
    "explanation": "SMTP envía correos.",
    "source": "https://es.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol"
  },
  {
    "id": 330,
    "category": "UF0864 - Diagnóstico de servicios",
    "question": "No se puede acceder por SSH. ¿Qué revisar primero?",
    "options": [
      "Servicio SSH activo",
      "Monitor",
      "Sensor",
      "GPIO"
    ],
    "correct": 0,
    "explanation": "El servicio debe estar activo.",
    "source": "https://es.wikipedia.org/wiki/Secure_Shell"
  },
  {
    "id": 331,
    "category": "UF0864 - Diagnóstico de servicios",
    "question": "Un cliente MQTT no recibe mensajes. ¿Qué revisar?",
    "options": [
      "Tema suscrito",
      "Pantalla",
      "Fuente",
      "Carcasa"
    ],
    "correct": 0,
    "explanation": "El tema debe coincidir.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 332,
    "category": "UF0864 - Diagnóstico de servicios",
    "question": "Un servicio web no responde. ¿Qué comprobar?",
    "options": [
      "Puerto abierto",
      "Sensor",
      "Ventilador",
      "Batería"
    ],
    "correct": 0,
    "explanation": "El puerto debe estar accesible.",
    "source": "https://es.wikipedia.org/wiki/Servidor_web"
  },
  {
    "id": 333,
    "category": "UF0864 - Caso práctico IoT",
    "question": "Un sensor IoT envía datos pero no llegan al servidor. ¿Paso lógico?",
    "options": [
      "Verificar conectividad",
      "Cambiar sensor",
      "Actualizar BIOS",
      "Reemplazar carcasa"
    ],
    "correct": 0,
    "explanation": "La conectividad es clave.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas"
  },
  {
    "id": 334,
    "category": "UF0864 - Caso práctico IoT",
    "question": "Datos MQTT se duplican. ¿Causa probable?",
    "options": [
      "QoS mal configurado",
      "Sensor defectuoso",
      "GPIO",
      "Firmware BIOS"
    ],
    "correct": 0,
    "explanation": "El nivel QoS influye.",
    "source": "https://en.wikipedia.org/wiki/MQTT"
  },
  {
    "id": 335,
    "category": "UF0863 - Microcontroladores",
    "question": "¿Qué es un microcontrolador?",
    "options": [
      "Un procesador sin memoria",
      "Un sistema integrado con CPU, memoria y periféricos",
      "Un sistema operativo",
      "Un dispositivo de almacenamiento"
    ],
    "correct": 1,
    "explanation": "Integra CPU, memoria y periféricos.",
    "source": "https://es.wikipedia.org/wiki/Microcontrolador"
  },
  {
    "id": 336,
    "category": "UF0863 - Arduino",
    "question": "¿Qué microcontrolador usa Arduino Uno?",
    "options": [
      "ATmega328P",
      "ESP32",
      "PIC16F84",
      "ARM Cortex-M7"
    ],
    "correct": 0,
    "explanation": "Arduino Uno usa ATmega328P.",
    "source": "https://es.wikipedia.org/wiki/Arduino_Uno"
  },
  {
    "id": 337,
    "category": "UF0863 - Arduino",
    "question": "¿Qué lenguaje se usa en Arduino?",
    "options": [
      "Python",
      "C/C++",
      "Java",
      "Assembly x86"
    ],
    "correct": 1,
    "explanation": "Arduino usa C/C++ simplificado.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 338,
    "category": "UF0863 - Arduino",
    "question": "¿Qué función se ejecuta una sola vez al iniciar un programa Arduino?",
    "options": [
      "loop()",
      "setup()",
      "main()",
      "start()"
    ],
    "correct": 1,
    "explanation": "setup() se ejecuta al inicio.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 339,
    "category": "UF0863 - Arduino",
    "question": "¿Qué función se ejecuta repetidamente?",
    "options": [
      "setup()",
      "loop()",
      "run()",
      "main()"
    ],
    "correct": 1,
    "explanation": "loop() se repite continuamente.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 340,
    "category": "UF0863 - Arduino",
    "question": "¿Qué pin se usa para lectura analógica?",
    "options": [
      "D2",
      "A0",
      "TX",
      "RX"
    ],
    "correct": 1,
    "explanation": "Los pines A* son analógicos.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 341,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor mide temperatura?",
    "options": [
      "LDR",
      "Termistor",
      "PIR",
      "Ultrasónico"
    ],
    "correct": 1,
    "explanation": "El termistor mide temperatura.",
    "source": "https://es.wikipedia.org/wiki/Termistor"
  },
  {
    "id": 342,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor detecta movimiento por infrarrojos?",
    "options": [
      "LDR",
      "PIR",
      "Ultrasónico",
      "Hall"
    ],
    "correct": 1,
    "explanation": "PIR detecta movimiento.",
    "source": "https://es.wikipedia.org/wiki/Sensor_infrarrojo_pasivo"
  },
  {
    "id": 343,
    "category": "UF0863 - Sensores",
    "question": "¿Qué sensor mide distancia?",
    "options": [
      "Ultrasónico",
      "LDR",
      "Termistor",
      "PIR"
    ],
    "correct": 0,
    "explanation": "Ultrasónico mide distancia.",
    "source": "https://es.wikipedia.org/wiki/Sensor_ultras%C3%B3nico"
  },
  {
    "id": 344,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué actuador convierte señal eléctrica en movimiento?",
    "options": [
      "Sensor",
      "Motor",
      "Resistencia",
      "Condensador"
    ],
    "correct": 1,
    "explanation": "El motor convierte energía eléctrica en mecánica.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 345,
    "category": "UF0863 - Actuadores",
    "question": "¿Qué dispositivo permite controlar cargas con Arduino?",
    "options": [
      "Sensor",
      "Relé",
      "Potenciómetro",
      "Diodo"
    ],
    "correct": 1,
    "explanation": "El relé controla cargas.",
    "source": "https://es.wikipedia.org/wiki/Relé"
  },
  {
    "id": 346,
    "category": "UF0864 - Diagnóstico Arduino",
    "question": "Un programa Arduino no arranca. ¿Qué revisar primero?",
    "options": [
      "Alimentación",
      "Sensor",
      "LED",
      "Carcasa"
    ],
    "correct": 0,
    "explanation": "Sin alimentación no funciona.",
    "source": "https://es.wikipedia.org/wiki/Arduino"
  },
  {
    "id": 347,
    "category": "UF0864 - Diagnóstico Arduino",
    "question": "Un sensor no devuelve datos. ¿Paso lógico?",
    "options": [
      "Revisar conexiones",
      "Cambiar placa",
      "Actualizar BIOS",
      "Reinstalar SO"
    ],
    "correct": 0,
    "explanation": "Las conexiones suelen fallar.",
    "source": "https://es.wikipedia.org/wiki/Sensor"
  },
  {
    "id": 348,
    "category": "UF0864 - Diagnóstico Arduino",
    "question": "Un motor no gira. ¿Qué revisar?",
    "options": [
      "Fuente suficiente",
      "Monitor",
      "Teclado",
      "Sistema operativo"
    ],
    "correct": 0,
    "explanation": "Los motores requieren suficiente corriente.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 349,
    "category": "UF0864 - Caso práctico IoT",
    "question": "Un sistema Arduino envía datos erróneos. ¿Primer paso?",
    "options": [
      "Verificar sensor",
      "Cambiar red",
      "Reinstalar IDE",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "El sensor puede estar mal calibrado.",
    "source": "https://es.wikipedia.org/wiki/Internet_de_las_cosas"
  },
  {
    "id": 350,
    "category": "UF0863 - Raspberry Pi avanzada",
    "question": "¿Qué tipo de dispositivo es Raspberry Pi?",
    "options": [
      "Microcontrolador",
      "Ordenador de placa reducida",
      "PLC industrial",
      "Router dedicado"
    ],
    "correct": 1,
    "explanation": "Raspberry Pi es un ordenador de placa reducida (SBC).",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 351,
    "category": "UF0863 - Raspberry Pi avanzada",
    "question": "¿Qué tensión de trabajo utilizan los GPIO de Raspberry Pi?",
    "options": [
      "12 V",
      "5 V",
      "3,3 V",
      "1,8 V"
    ],
    "correct": 2,
    "explanation": "Los GPIO trabajan a 3,3 V.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi#GPIO"
  },
  {
    "id": 352,
    "category": "UF0863 - GPIO",
    "question": "¿Qué riesgo existe al aplicar 5 V a un GPIO?",
    "options": [
      "Funcionamiento normal",
      "Daño permanente",
      "Mayor velocidad",
      "Menor consumo"
    ],
    "correct": 1,
    "explanation": "Los GPIO no son tolerantes a 5 V.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi#GPIO"
  },
  {
    "id": 353,
    "category": "UF0863 - Buses de comunicación",
    "question": "¿Qué bus permite conectar múltiples dispositivos con dos líneas?",
    "options": [
      "SPI",
      "UART",
      "I2C",
      "USB"
    ],
    "correct": 2,
    "explanation": "I2C usa SDA y SCL.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 354,
    "category": "UF0863 - Buses de comunicación",
    "question": "¿Qué bus utiliza comunicación maestro-esclavo de alta velocidad?",
    "options": [
      "UART",
      "I2C",
      "SPI",
      "RS-232"
    ],
    "correct": 2,
    "explanation": "SPI es rápido y maestro-esclavo.",
    "source": "https://es.wikipedia.org/wiki/Serial_Peripheral_Interface"
  },
  {
    "id": 355,
    "category": "UF0863 - Buses de comunicación",
    "question": "¿Qué bus se usa para comunicación serie simple?",
    "options": [
      "SPI",
      "I2C",
      "UART",
      "CAN"
    ],
    "correct": 2,
    "explanation": "UART es comunicación serie básica.",
    "source": "https://es.wikipedia.org/wiki/UART"
  },
  {
    "id": 356,
    "category": "UF0863 - Raspberry Pi avanzada",
    "question": "¿Qué interfaz permite conectar una cámara oficial?",
    "options": [
      "HDMI",
      "CSI",
      "USB",
      "SPI"
    ],
    "correct": 1,
    "explanation": "La cámara usa interfaz CSI.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi#Conectores"
  },
  {
    "id": 357,
    "category": "UF0863 - Raspberry Pi avanzada",
    "question": "¿Qué interfaz se usa para pantallas oficiales?",
    "options": [
      "DSI",
      "HDMI",
      "USB",
      "VGA"
    ],
    "correct": 0,
    "explanation": "Las pantallas usan DSI.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi#Conectores"
  },
  {
    "id": 358,
    "category": "UF0863 - Sensores en Raspberry Pi",
    "question": "¿Qué protocolo usan muchos sensores digitales?",
    "options": [
      "I2C",
      "VGA",
      "PCIe",
      "IDE"
    ],
    "correct": 0,
    "explanation": "I2C es común en sensores.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 359,
    "category": "UF0863 - Sensores en Raspberry Pi",
    "question": "¿Qué librería es habitual para GPIO en Python?",
    "options": [
      "NumPy",
      "RPi.GPIO",
      "Matplotlib",
      "Flask"
    ],
    "correct": 1,
    "explanation": "RPi.GPIO controla pines.",
    "source": "https://es.wikipedia.org/wiki/Raspberry_Pi"
  },
  {
    "id": 360,
    "category": "UF0864 - Diagnóstico Raspberry Pi",
    "question": "Un sensor I2C no aparece. ¿Qué comprobar primero?",
    "options": [
      "Dirección I2C",
      "Pantalla",
      "Fuente ATX",
      "Sistema operativo"
    ],
    "correct": 0,
    "explanation": "Cada dispositivo tiene dirección única.",
    "source": "https://es.wikipedia.org/wiki/I%C2%B2C"
  },
  {
    "id": 361,
    "category": "UF0864 - Diagnóstico Raspberry Pi",
    "question": "GPIO no responde. ¿Paso lógico inicial?",
    "options": [
      "Configurar pin",
      "Cambiar placa",
      "Reinstalar SO",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "El pin debe configurarse correctamente.",
    "source": "https://en.wikipedia.org/wiki/General-purpose_input/output"
  },
  {
    "id": 362,
    "category": "UF0864 - Diagnóstico Raspberry Pi",
    "question": "La Raspberry se reinicia al conectar sensores. ¿Causa probable?",
    "options": [
      "Consumo excesivo",
      "Error DNS",
      "Puerto HDMI",
      "Firmware de red"
    ],
    "correct": 0,
    "explanation": "Los sensores pueden sobrecargar la fuente.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 363,
    "category": "UF0864 - Caso práctico IoT",
    "question": "Datos erráticos en sensores. ¿Qué revisar?",
    "options": [
      "Masa común",
      "Carcasa",
      "Driver gráfico",
      "BIOS"
    ],
    "correct": 0,
    "explanation": "Una mala referencia de masa genera errores.",
    "source": "https://es.wikipedia.org/wiki/Tierra_(electricidad)"
  },
  {
    "id": 364,
    "category": "UF0864 - Caso práctico IoT",
    "question": "Un bus SPI no comunica. ¿Paso lógico?",
    "options": [
      "Revisar selección de esclavo",
      "Cambiar SD",
      "Actualizar sistema",
      "Formatear"
    ],
    "correct": 0,
    "explanation": "El pin CS es clave en SPI.",
    "source": "https://es.wikipedia.org/wiki/Serial_Peripheral_Interface"
  },
  {
    "id": 365,
    "category": "UF0864 - Malware",
    "question": "¿Qué es un virus informático?",
    "options": [
      "Un fallo de hardware",
      "Un programa que se replica y altera el sistema",
      "Un sistema operativo",
      "Un controlador de dispositivo"
    ],
    "correct": 1,
    "explanation": "Un virus se replica y puede dañar el sistema.",
    "source": "https://es.wikipedia.org/wiki/Virus_inform%C3%A1tico"
  },
  {
    "id": 366,
    "category": "UF0864 - Malware",
    "question": "¿Qué tipo de malware cifra archivos y pide rescate?",
    "options": [
      "Spyware",
      "Ransomware",
      "Adware",
      "Gusano"
    ],
    "correct": 1,
    "explanation": "El ransomware cifra datos y exige pago.",
    "source": "https://es.wikipedia.org/wiki/Ransomware"
  },
  {
    "id": 367,
    "category": "UF0864 - Malware",
    "question": "¿Qué malware recopila información sin consentimiento?",
    "options": [
      "Troyano",
      "Spyware",
      "Rootkit",
      "Botnet"
    ],
    "correct": 1,
    "explanation": "El spyware espía la actividad del usuario.",
    "source": "https://es.wikipedia.org/wiki/Spyware"
  },
  {
    "id": 368,
    "category": "UF0864 - Antivirus",
    "question": "¿Cuál es la función principal de un antivirus?",
    "options": [
      "Optimizar el hardware",
      "Detectar y eliminar malware",
      "Actualizar Windows",
      "Gestionar usuarios"
    ],
    "correct": 1,
    "explanation": "El antivirus detecta y elimina software malicioso.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 369,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué método usa un antivirus para detectar amenazas conocidas?",
    "options": [
      "Análisis heurístico",
      "Firmas",
      "Sandboxing",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "Las firmas identifican malware conocido.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 370,
    "category": "UF0864 - Antivirus",
    "question": "¿Por qué es importante actualizar un antivirus?",
    "options": [
      "Para acelerar el sistema",
      "Para incluir nuevas firmas",
      "Para liberar memoria",
      "Para cambiar la licencia"
    ],
    "correct": 1,
    "explanation": "Las actualizaciones incluyen nuevas amenazas.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 371,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué indica un sistema Windows que no arranca pero muestra errores?",
    "options": [
      "Fallo mecánico",
      "Avería lógica",
      "Pantalla dañada",
      "Fuente defectuosa"
    ],
    "correct": 1,
    "explanation": "Los errores de arranque suelen ser lógicos.",
    "source": "https://es.wikipedia.org/wiki/Windows"
  },
  {
    "id": 372,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué herramienta repara archivos de sistema en Windows?",
    "options": [
      "chkdsk",
      "sfc /scannow",
      "diskpart",
      "msconfig"
    ],
    "correct": 1,
    "explanation": "SFC verifica y repara archivos del sistema.",
    "source": "https://support.microsoft.com/es-es/topic/use-la-herramienta-comprobador-de-archivos-de-sistema-para-reparar-los-archivos-de-sistema-que-faltan-o-están-dañados-79aa86cb-ca52-166a-92a3-966e85d4094e"
  },
  {
    "id": 373,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué herramienta revisa errores en el disco?",
    "options": [
      "regedit",
      "chkdsk",
      "taskmgr",
      "dxdiag"
    ],
    "correct": 1,
    "explanation": "CHKDSK analiza el sistema de archivos.",
    "source": "https://es.wikipedia.org/wiki/CHKDSK"
  },
  {
    "id": 374,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué acción es prioritaria tras borrado accidental?",
    "options": [
      "Instalar software",
      "Dejar de usar el disco",
      "Reiniciar varias veces",
      "Formatear"
    ],
    "correct": 1,
    "explanation": "Evitar sobrescritura aumenta recuperación.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 375,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué tipo de fallo permite recuperación por software?",
    "options": [
      "Fallo mecánico",
      "Fallo lógico",
      "Motor dañado",
      "Cabezal roto"
    ],
    "correct": 1,
    "explanation": "Los fallos lógicos permiten recuperación.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 376,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué permite AnyDesk?",
    "options": [
      "Impresión local",
      "Acceso remoto al escritorio",
      "Gestión de discos",
      "Análisis antivirus"
    ],
    "correct": 1,
    "explanation": "AnyDesk permite control remoto.",
    "source": "https://es.wikipedia.org/wiki/AnyDesk"
  },
  {
    "id": 377,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué ventaja tiene TeamViewer?",
    "options": [
      "No necesita red",
      "Funciona tras NAT",
      "No requiere sistema operativo",
      "No usa cifrado"
    ],
    "correct": 1,
    "explanation": "TeamViewer funciona tras NAT.",
    "source": "https://es.wikipedia.org/wiki/TeamViewer"
  },
  {
    "id": 378,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué sistema remoto está integrado en Windows?",
    "options": [
      "VNC",
      "Escritorio remoto",
      "AnyDesk",
      "DWService"
    ],
    "correct": 1,
    "explanation": "Windows incluye Escritorio remoto.",
    "source": "https://es.wikipedia.org/wiki/Escritorio_remoto"
  },
  {
    "id": 379,
    "category": "UF0864 - Caso práctico malware",
    "question": "Un equipo muestra anuncios constantes. Primer paso lógico:",
    "options": [
      "Formatear",
      "Analizar con antivirus",
      "Cambiar monitor",
      "Actualizar BIOS"
    ],
    "correct": 1,
    "explanation": "El adware se detecta con antivirus.",
    "source": "https://es.wikipedia.org/wiki/Adware"
  },
  {
    "id": 380,
    "category": "UF0864 - Caso práctico Windows",
    "question": "Windows arranca lento tras instalar programa desconocido. ¿Paso lógico?",
    "options": [
      "Reinstalar Windows",
      "Desinstalar y analizar malware",
      "Cambiar RAM",
      "Actualizar firmware"
    ],
    "correct": 1,
    "explanation": "El programa puede ser malicioso.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 381,
    "category": "UF0864 - Caso práctico recuperación",
    "question": "Usuario borra carpeta crítica. ¿Procedimiento correcto?",
    "options": [
      "Seguir usando el equipo",
      "Detener uso y recuperar",
      "Reiniciar varias veces",
      "Instalar juegos"
    ],
    "correct": 1,
    "explanation": "Evitar sobrescritura es clave.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 382,
    "category": "UF0864 - Caso práctico soporte remoto",
    "question": "Usuario necesita ayuda urgente a distancia. ¿Solución adecuada?",
    "options": [
      "Desplazamiento físico",
      "Conexión remota segura",
      "Formatear equipo",
      "Cambiar hardware"
    ],
    "correct": 1,
    "explanation": "La conexión remota permite asistencia inmediata.",
    "source": "https://es.wikipedia.org/wiki/Acceso_remoto"
  },
  {
    "id": 383,
    "category": "UF0864 - Malware",
    "question": "¿Qué malware se disfraza de software legítimo?",
    "options": [
      "Gusano",
      "Troyano",
      "Ransomware",
      "Adware"
    ],
    "correct": 1,
    "explanation": "El troyano aparenta ser software legítimo.",
    "source": "https://es.wikipedia.org/wiki/Troyano_(inform%C3%A1tica)"
  },
  {
    "id": 384,
    "category": "UF0864 - Malware",
    "question": "¿Qué malware permite control remoto no autorizado?",
    "options": [
      "Spyware",
      "Rootkit",
      "RAT",
      "Adware"
    ],
    "correct": 2,
    "explanation": "Un RAT permite control remoto.",
    "source": "https://es.wikipedia.org/wiki/Software_de_administración_remota"
  },
  {
    "id": 385,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué análisis detecta comportamientos sospechosos?",
    "options": [
      "Firmas",
      "Heurístico",
      "Manual",
      "Firewall"
    ],
    "correct": 1,
    "explanation": "El análisis heurístico detecta comportamientos.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 386,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué se debe hacer tras detectar malware?",
    "options": [
      "Ignorar",
      "Eliminar y analizar daños",
      "Formatear siempre",
      "Desactivar antivirus"
    ],
    "correct": 1,
    "explanation": "Eliminar y evaluar daños es correcto.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 387,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué causa frecuente provoca pantallazos azules?",
    "options": [
      "Errores de software o drivers",
      "Pantalla rota",
      "Fuente defectuosa",
      "Cable HDMI"
    ],
    "correct": 0,
    "explanation": "Drivers y software causan BSOD.",
    "source": "https://es.wikipedia.org/wiki/Pantalla_azul_de_la_muerte"
  },
  {
    "id": 388,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué utilidad gestiona programas de inicio?",
    "options": [
      "taskmgr",
      "regedit",
      "eventvwr",
      "diskpart"
    ],
    "correct": 0,
    "explanation": "El administrador de tareas gestiona inicio.",
    "source": "https://es.wikipedia.org/wiki/Administrador_de_tareas_de_Windows"
  },
  {
    "id": 389,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué visor muestra errores del sistema?",
    "options": [
      "Visor de eventos",
      "Explorador",
      "Panel de control",
      "CMD"
    ],
    "correct": 0,
    "explanation": "El visor de eventos registra errores.",
    "source": "https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/wevtutil"
  },
  {
    "id": 390,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué acción reduce éxito de recuperación?",
    "options": [
      "Uso continuo del disco",
      "Apagar el equipo",
      "Clonar el disco",
      "Analizar en otro sistema"
    ],
    "correct": 0,
    "explanation": "El uso sobrescribe datos.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 391,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué herramienta de Windows recupera versiones anteriores?",
    "options": [
      "Historial de archivos",
      "chkdsk",
      "diskpart",
      "msconfig"
    ],
    "correct": 0,
    "explanation": "El historial guarda versiones.",
    "source": "https://support.microsoft.com/es-es/windows/copia-de-seguridad-y-restauración-en-windows-352091d2-bb9d-3ea3-ed18-52ef2b88cbef"
  },
  {
    "id": 392,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué riesgo tiene el acceso remoto mal configurado?",
    "options": [
      "Mayor velocidad",
      "Acceso no autorizado",
      "Menor consumo",
      "Mejor estabilidad"
    ],
    "correct": 1,
    "explanation": "Una mala configuración expone el sistema.",
    "source": "https://es.wikipedia.org/wiki/Acceso_remoto"
  },
  {
    "id": 393,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué medida mejora la seguridad en soporte remoto?",
    "options": [
      "Contraseñas fuertes",
      "Puertos abiertos",
      "Sesiones permanentes",
      "Sin cifrado"
    ],
    "correct": 0,
    "explanation": "Contraseñas fuertes mejoran seguridad.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 394,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "¿Qué servicio gestiona las colas de impresión en Windows?",
    "options": [
      "Print Spooler",
      "Task Scheduler",
      "Windows Update",
      "WMI"
    ],
    "correct": 0,
    "explanation": "El spooler gestiona impresiones.",
    "source": "https://es.wikipedia.org/wiki/Spooling"
  },
  {
    "id": 395,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "La impresora aparece 'sin conexión'. ¿Primer paso lógico?",
    "options": [
      "Revisar estado y cola",
      "Cambiar tóner",
      "Formatear PC",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "Revisar estado es prioritario.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 396,
    "category": "UF0864 - Caso práctico malware",
    "question": "El antivirus no se actualiza. ¿Qué revisar primero?",
    "options": [
      "Conectividad a Internet",
      "Pantalla",
      "RAM",
      "BIOS"
    ],
    "correct": 0,
    "explanation": "La conexión es necesaria.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 397,
    "category": "UF0864 - Caso práctico Windows",
    "question": "Windows no carga tras actualización. ¿Paso lógico?",
    "options": [
      "Restaurar sistema",
      "Cambiar disco",
      "Actualizar BIOS",
      "Instalar drivers"
    ],
    "correct": 0,
    "explanation": "La restauración revierte cambios.",
    "source": "https://es.wikipedia.org/wiki/Restaurar_sistema"
  },
  {
    "id": 398,
    "category": "UF0864 - Caso práctico soporte remoto",
    "question": "Cliente duda sobre seguridad del soporte remoto. ¿Qué explicar?",
    "options": [
      "Uso de cifrado",
      "Acceso permanente",
      "Puertos abiertos",
      "Sesiones públicas"
    ],
    "correct": 0,
    "explanation": "El cifrado protege la comunicación.",
    "source": "https://es.wikipedia.org/wiki/Cifrado"
  },
  {
    "id": 399,
    "category": "UF0864 - Ransomware",
    "question": "¿Cuál es el primer paso ante un ataque de ransomware activo?",
    "options": [
      "Pagar el rescate",
      "Aislar el equipo de la red",
      "Reiniciar el sistema",
      "Actualizar antivirus"
    ],
    "correct": 1,
    "explanation": "Aislar el equipo evita la propagación.",
    "source": "https://es.wikipedia.org/wiki/Ransomware"
  },
  {
    "id": 400,
    "category": "UF0864 - Ransomware",
    "question": "¿Qué acción reduce el impacto del ransomware?",
    "options": [
      "Copias de seguridad",
      "Usuarios administradores",
      "Puertos abiertos",
      "Desactivar firewall"
    ],
    "correct": 0,
    "explanation": "Las copias permiten restaurar datos.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 401,
    "category": "UF0864 - Ransomware",
    "question": "¿Qué vía común utiliza el ransomware para entrar?",
    "options": [
      "Correo electrónico",
      "BIOS",
      "Teclado",
      "Monitor"
    ],
    "correct": 0,
    "explanation": "El phishing es una vía habitual.",
    "source": "https://es.wikipedia.org/wiki/Phishing"
  },
  {
    "id": 402,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué modo de Windows facilita la eliminación de malware?",
    "options": [
      "Modo seguro",
      "Modo suspensión",
      "Modo hibernación",
      "Modo juego"
    ],
    "correct": 0,
    "explanation": "El modo seguro carga servicios mínimos.",
    "source": "https://es.wikipedia.org/wiki/Modo_seguro"
  },
  {
    "id": 403,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué indica que un antivirus está desactivado sin permiso?",
    "options": [
      "Posible infección",
      "Mejor rendimiento",
      "Actualización correcta",
      "Sistema estable"
    ],
    "correct": 0,
    "explanation": "El malware suele desactivar defensas.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 404,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "Windows entra en bucle de reinicio. ¿Paso lógico inicial?",
    "options": [
      "Arrancar en modo seguro",
      "Cambiar hardware",
      "Actualizar BIOS",
      "Instalar drivers"
    ],
    "correct": 0,
    "explanation": "El modo seguro permite diagnóstico.",
    "source": "https://es.wikipedia.org/wiki/Modo_seguro"
  },
  {
    "id": 405,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "Un perfil de usuario no carga. ¿Solución habitual?",
    "options": [
      "Crear nuevo perfil",
      "Cambiar disco",
      "Actualizar firmware",
      "Instalar impresora"
    ],
    "correct": 0,
    "explanation": "Perfiles dañados suelen recrearse.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 406,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué herramienta permite revertir cambios de registro?",
    "options": [
      "Restaurar sistema",
      "chkdsk",
      "diskpart",
      "taskmgr"
    ],
    "correct": 0,
    "explanation": "La restauración revierte el registro.",
    "source": "https://es.wikipedia.org/wiki/Restaurar_sistema"
  },
  {
    "id": 407,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué es una imagen forense del disco?",
    "options": [
      "Copia bit a bit",
      "Copia parcial",
      "Backup en la nube",
      "Instantánea del sistema"
    ],
    "correct": 0,
    "explanation": "La imagen forense copia todo el disco.",
    "source": "https://es.wikipedia.org/wiki/Inform%C3%A1tica_forense"
  },
  {
    "id": 408,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué acción es correcta antes de recuperar datos?",
    "options": [
      "Clonar el disco",
      "Formatear",
      "Desfragmentar",
      "Instalar software"
    ],
    "correct": 0,
    "explanation": "Clonar evita daños adicionales.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 409,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "Errores persistentes tras reinstalar driver indican:",
    "options": [
      "Spooler dañado",
      "Pantalla defectuosa",
      "Fusor roto",
      "Rodillo gastado"
    ],
    "correct": 0,
    "explanation": "El spooler puede estar corrupto.",
    "source": "https://es.wikipedia.org/wiki/Spooling"
  },
  {
    "id": 410,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "Cola de impresión bloqueada. ¿Paso lógico?",
    "options": [
      "Reiniciar servicio",
      "Cambiar tóner",
      "Actualizar BIOS",
      "Sustituir impresora"
    ],
    "correct": 0,
    "explanation": "Reiniciar el servicio desbloquea la cola.",
    "source": "https://es.wikipedia.org/wiki/Spooling"
  },
  {
    "id": 411,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué práctica mejora la seguridad tras una sesión remota?",
    "options": [
      "Cerrar sesión y revocar acceso",
      "Mantener acceso permanente",
      "Compartir credenciales",
      "Abrir más puertos"
    ],
    "correct": 0,
    "explanation": "Cerrar accesos reduce riesgos.",
    "source": "https://es.wikipedia.org/wiki/Acceso_remoto"
  },
  {
    "id": 412,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué característica comparten AnyDesk y TeamViewer?",
    "options": [
      "Cifrado de la conexión",
      "Acceso sin red",
      "Uso sin sistema operativo",
      "Puertos abiertos permanentes"
    ],
    "correct": 0,
    "explanation": "Ambos usan cifrado.",
    "source": "https://es.wikipedia.org/wiki/TeamViewer"
  },
  {
    "id": 413,
    "category": "UF0864 - Caso práctico ransomware",
    "question": "Archivos cifrados y nota de rescate. ¿Secuencia correcta?",
    "options": [
      "Aislar → analizar → restaurar copias",
      "Reiniciar → pagar → continuar",
      "Formatear → seguir usando",
      "Actualizar drivers"
    ],
    "correct": 0,
    "explanation": "El protocolo correcto evita propagación.",
    "source": "https://es.wikipedia.org/wiki/Ransomware"
  },
  {
    "id": 414,
    "category": "UF0864 - Caso práctico Windows",
    "question": "Sistema inestable tras malware. ¿Paso final?",
    "options": [
      "Verificar integridad y actualizar",
      "Ignorar",
      "Abrir puertos",
      "Desactivar firewall"
    ],
    "correct": 0,
    "explanation": "Verificar y actualizar asegura estabilidad.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 415,
    "category": "UF0864 - Malware",
    "question": "¿Qué tipo de malware se oculta profundamente en el sistema?",
    "options": [
      "Adware",
      "Spyware",
      "Rootkit",
      "Gusano"
    ],
    "correct": 2,
    "explanation": "Un rootkit oculta su presencia en el sistema.",
    "source": "https://es.wikipedia.org/wiki/Rootkit"
  },
  {
    "id": 416,
    "category": "UF0864 - Malware",
    "question": "¿Qué indica un tráfico de red elevado sin actividad del usuario?",
    "options": [
      "Uso normal",
      "Posible botnet",
      "Actualización del sistema",
      "Copia de seguridad"
    ],
    "correct": 1,
    "explanation": "El equipo puede formar parte de una botnet.",
    "source": "https://es.wikipedia.org/wiki/Botnet"
  },
  {
    "id": 417,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué función bloquea conexiones no autorizadas?",
    "options": [
      "Antivirus",
      "Firewall",
      "Proxy",
      "DNS"
    ],
    "correct": 1,
    "explanation": "El firewall controla el tráfico.",
    "source": "https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)"
  },
  {
    "id": 418,
    "category": "UF0864 - Antivirus",
    "question": "¿Por qué no se recomienda usar varios antivirus simultáneamente?",
    "options": [
      "Reducen la seguridad",
      "Conflictos y bloqueos",
      "Consumen menos recursos",
      "No detectan malware"
    ],
    "correct": 1,
    "explanation": "Varios antivirus pueden entrar en conflicto.",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 419,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué archivo gestiona el arranque de Windows moderno?",
    "options": [
      "boot.ini",
      "BCD",
      "ntldr",
      "autoexec.bat"
    ],
    "correct": 1,
    "explanation": "BCD gestiona el arranque en Windows modernos.",
    "source": "https://es.wikipedia.org/wiki/Boot_Configuration_Data"
  },
  {
    "id": 420,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué indica un error de registro corrupto?",
    "options": [
      "Fallo físico",
      "Problema lógico",
      "Pantalla dañada",
      "Fuente defectuosa"
    ],
    "correct": 1,
    "explanation": "El registro es un componente lógico.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 421,
    "category": "UF0864 - Averías lógicas Windows",
    "question": "¿Qué herramienta permite editar el registro?",
    "options": [
      "msconfig",
      "regedit",
      "taskmgr",
      "eventvwr"
    ],
    "correct": 1,
    "explanation": "Regedit permite editar el registro.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 422,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué significa formateo rápido?",
    "options": [
      "Borrado total de datos",
      "Eliminación de referencias",
      "Destrucción física",
      "Cifrado completo"
    ],
    "correct": 1,
    "explanation": "El formateo rápido elimina referencias.",
    "source": "https://es.wikipedia.org/wiki/Formateo"
  },
  {
    "id": 423,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué sistema de archivos usa Windows por defecto?",
    "options": [
      "FAT32",
      "NTFS",
      "ext4",
      "HFS+"
    ],
    "correct": 1,
    "explanation": "NTFS es el sistema por defecto.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 424,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "La impresora imprime caracteres incorrectos. ¿Causa probable?",
    "options": [
      "Driver incorrecto",
      "Fusor dañado",
      "Rodillos sucios",
      "Tóner bajo"
    ],
    "correct": 0,
    "explanation": "Un driver incorrecto genera errores.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 425,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "¿Qué protocolo usan impresoras en red?",
    "options": [
      "FTP",
      "IPP",
      "SMTP",
      "SNMP"
    ],
    "correct": 1,
    "explanation": "IPP es habitual para impresión.",
    "source": "https://es.wikipedia.org/wiki/Internet_Printing_Protocol"
  },
  {
    "id": 426,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué riesgo tiene dejar AnyDesk instalado sin control?",
    "options": [
      "Acceso no autorizado",
      "Mejor rendimiento",
      "Menor latencia",
      "Mayor estabilidad"
    ],
    "correct": 0,
    "explanation": "Puede permitir accesos indebidos.",
    "source": "https://es.wikipedia.org/wiki/AnyDesk"
  },
  {
    "id": 427,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué buena práctica limita accesos remotos?",
    "options": [
      "Autenticación de dos factores",
      "Contraseñas simples",
      "Acceso permanente",
      "Puertos abiertos"
    ],
    "correct": 0,
    "explanation": "El doble factor mejora la seguridad.",
    "source": "https://es.wikipedia.org/wiki/Autenticaci%C3%B3n_de_dos_factores"
  },
  {
    "id": 428,
    "category": "UF0864 - Caso práctico Windows",
    "question": "Registro dañado impide inicio. ¿Secuencia correcta?",
    "options": [
      "Modo seguro → restaurar sistema",
      "Formatear directamente",
      "Cambiar hardware",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "Restaurar corrige el registro.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 429,
    "category": "UF0864 - Caso práctico recuperación",
    "question": "Disco formateado por error. ¿Paso inicial?",
    "options": [
      "Dejar de usar el disco",
      "Reinstalar Windows",
      "Copiar archivos",
      "Desfragmentar"
    ],
    "correct": 0,
    "explanation": "Evitar sobrescritura es clave.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 430,
    "category": "UF0864 - Caso práctico impresoras",
    "question": "Impresora en red no responde. ¿Primer paso lógico?",
    "options": [
      "Comprobar conectividad",
      "Cambiar tóner",
      "Reemplazar fusor",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "La red es el primer punto a revisar.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 431,
    "category": "UF0864 - Malware",
    "question": "¿Qué malware se ejecuta antes del sistema operativo?",
    "options": [
      "Spyware",
      "Bootkit",
      "Adware",
      "Gusano"
    ],
    "correct": 1,
    "explanation": "Un bootkit se carga antes del sistema operativo.",
    "source": "https://es.wikipedia.org/wiki/Rootkit"
  },
  {
    "id": 432,
    "category": "UF0864 - Malware",
    "question": "¿Qué indica que un equipo forma parte de una botnet?",
    "options": [
      "Uso elevado de CPU sin tareas",
      "Pantalla rota",
      "Fallo de teclado",
      "Error de impresión"
    ],
    "correct": 0,
    "explanation": "Las botnets consumen recursos sin intervención del usuario.",
    "source": "https://es.wikipedia.org/wiki/Botnet"
  },
  {
    "id": 433,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué acción es correcta tras limpiar una infección grave?",
    "options": [
      "Cambiar contraseñas",
      "Ignorar el incidente",
      "Abrir puertos",
      "Desactivar firewall"
    ],
    "correct": 0,
    "explanation": "Las credenciales pueden haber sido comprometidas.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 434,
    "category": "UF0864 - Antivirus",
    "question": "¿Qué técnica ejecuta malware en entorno controlado?",
    "options": [
      "Sandboxing",
      "Firmas",
      "Firewall",
      "Proxy"
    ],
    "correct": 0,
    "explanation": "El sandbox analiza comportamiento sin riesgo.",
    "source": "https://es.wikipedia.org/wiki/Sandbox_(seguridad_informática)"
  },
  {
    "id": 435,
    "category": "UF0864 - Arranque Windows",
    "question": "¿Qué herramienta repara el cargador de arranque de Windows?",
    "options": [
      "bootrec",
      "regedit",
      "taskmgr",
      "msconfig"
    ],
    "correct": 0,
    "explanation": "Bootrec repara el arranque.",
    "source": "https://learn.microsoft.com/es-es/troubleshoot/windows-server/performance/use-winre-to-troubleshoot-startup-issue"
  },
  {
    "id": 436,
    "category": "UF0864 - Arranque Windows",
    "question": "¿Qué error suele indicar corrupción del BCD?",
    "options": [
      "Windows no encuentra sistema",
      "Pantalla azul por driver",
      "Error de red",
      "Problema de impresora"
    ],
    "correct": 0,
    "explanation": "El BCD gestiona el arranque.",
    "source": "https://es.wikipedia.org/wiki/Boot_Configuration_Data"
  },
  {
    "id": 437,
    "category": "UF0864 - Arranque Windows",
    "question": "¿Qué modo permite reparar Windows sin cargar controladores?",
    "options": [
      "Modo seguro",
      "Modo suspensión",
      "Modo avión",
      "Modo juego"
    ],
    "correct": 0,
    "explanation": "El modo seguro carga lo mínimo.",
    "source": "https://es.wikipedia.org/wiki/Modo_seguro"
  },
  {
    "id": 438,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué técnica se usa cuando el sistema no arranca?",
    "options": [
      "Arranque desde medio externo",
      "Instalar juegos",
      "Desfragmentar",
      "Actualizar drivers"
    ],
    "correct": 0,
    "explanation": "Un live USB permite acceso a datos.",
    "source": "https://es.wikipedia.org/wiki/Live_USB"
  },
  {
    "id": 439,
    "category": "UF0864 - Recuperación de datos",
    "question": "¿Qué sistema evita modificar el disco original?",
    "options": [
      "Clonado",
      "Formateo",
      "Instalación limpia",
      "Desfragmentación"
    ],
    "correct": 0,
    "explanation": "El clonado preserva el original.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 440,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "Impresora imprime páginas en blanco. ¿Causa lógica posible?",
    "options": [
      "Driver incorrecto",
      "Rodillo desgastado",
      "Fuente dañada",
      "Puerto USB roto"
    ],
    "correct": 0,
    "explanation": "Drivers erróneos generan errores lógicos.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 441,
    "category": "UF0864 - Impresoras (lógica)",
    "question": "¿Qué componente lógico gestiona trabajos en red?",
    "options": [
      "Servidor de impresión",
      "Fusor",
      "Rodillo",
      "Tóner"
    ],
    "correct": 0,
    "explanation": "El servidor de impresión gestiona colas.",
    "source": "https://es.wikipedia.org/wiki/Servidor_de_impresi%C3%B3n"
  },
  {
    "id": 442,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué protocolo usa Escritorio remoto?",
    "options": [
      "RDP",
      "FTP",
      "HTTP",
      "SMTP"
    ],
    "correct": 0,
    "explanation": "RDP es el protocolo de Escritorio remoto.",
    "source": "https://es.wikipedia.org/wiki/Remote_Desktop_Protocol"
  },
  {
    "id": 443,
    "category": "UF0864 - Conexión remota",
    "question": "¿Qué medida reduce ataques por fuerza bruta en RDP?",
    "options": [
      "Cambiar puerto y usar 2FA",
      "Desactivar cifrado",
      "Usuarios genéricos",
      "Acceso público"
    ],
    "correct": 0,
    "explanation": "Reducir exposición mejora seguridad.",
    "source": "https://es.wikipedia.org/wiki/Remote_Desktop_Protocol"
  },
  {
    "id": 444,
    "category": "UF0864 - Caso práctico malware",
    "question": "Antivirus detecta rootkit. ¿Acción recomendada?",
    "options": [
      "Arranque desde medio externo",
      "Ignorar alerta",
      "Seguir usando el equipo",
      "Abrir puertos"
    ],
    "correct": 0,
    "explanation": "Los rootkits requieren análisis externo.",
    "source": "https://es.wikipedia.org/wiki/Rootkit"
  },
  {
    "id": 445,
    "category": "UF0864 - Caso práctico Windows",
    "question": "Windows no arranca tras malware. ¿Procedimiento lógico?",
    "options": [
      "Reparación de inicio",
      "Cambiar hardware",
      "Actualizar BIOS",
      "Instalar impresora"
    ],
    "correct": 0,
    "explanation": "La reparación de inicio soluciona fallos lógicos.",
    "source": "https://es.wikipedia.org/wiki/Windows"
  },
  {
    "id": 446,
    "category": "UF0864 - Caso práctico soporte remoto",
    "question": "Sesión remota finalizada. ¿Paso de seguridad?",
    "options": [
      "Cerrar sesión y eliminar permisos",
      "Mantener acceso",
      "Compartir credenciales",
      "Abrir puertos"
    ],
    "correct": 0,
    "explanation": "Eliminar permisos evita accesos indebidos.",
    "source": "https://es.wikipedia.org/wiki/Acceso_remoto"
  },
  {
    "id": 447,
    "category": "UF0865 - Partes de impresoras",
    "question": "¿Cuál es la función principal del fusor en una impresora láser?",
    "options": [
      "Cargar eléctricamente el tambor",
      "Transferir el tóner al papel",
      "Fijar el tóner al papel mediante calor y presión",
      "Distribuir el papel desde la bandeja"
    ],
    "correct": 2,
    "explanation": "El fusor aplica calor y presión para fijar permanentemente el tóner al papel.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 448,
    "category": "UF0865 - Partes de impresoras",
    "question": "¿Qué componente detecta la presencia y el avance del papel dentro de la impresora?",
    "options": [
      "Encoder óptico",
      "Sensor de papel",
      "Rodillo de presión",
      "Motor paso a paso"
    ],
    "correct": 1,
    "explanation": "Los sensores de papel detectan atascos y controlan el recorrido del papel.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 449,
    "category": "UF0865 - Reparación de impresoras",
    "question": "¿Qué herramienta es más adecuada para limpiar contactos eléctricos en una impresora?",
    "options": [
      "Alcohol isopropílico",
      "Agua destilada",
      "Lubricante industrial",
      "Aire comprimido con aceite"
    ],
    "correct": 0,
    "explanation": "El alcohol isopropílico limpia sin dejar residuos ni provocar corrosión.",
    "source": "https://es.wikipedia.org/wiki/Alcohol_isoprop%C3%ADlico"
  },
  {
    "id": 450,
    "category": "UF0865 - Errores comunes",
    "question": "¿Qué causa habitual provoca impresiones con líneas verticales repetitivas en impresoras láser?",
    "options": [
      "Driver incorrecto",
      "Tambor o rodillo de carga defectuoso",
      "Memoria insuficiente",
      "Cable USB defectuoso"
    ],
    "correct": 1,
    "explanation": "Defectos periódicos suelen coincidir con el perímetro del tambor o rodillos.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 451,
    "category": "UF0865 - Errores comunes",
    "question": "¿Qué síntoma indica normalmente un cabezal de inyección obstruido?",
    "options": [
      "Manchas de tóner",
      "Colores ausentes o discontinuos",
      "Papel arrugado",
      "Error de fusor"
    ],
    "correct": 1,
    "explanation": "Los inyectores obstruidos provocan falta de color o líneas discontinuas.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 452,
    "category": "UF0865 - Mantenimiento preventivo",
    "question": "¿Qué acción reduce el riesgo de atascos de papel?",
    "options": [
      "Sobrecargar la bandeja",
      "Usar papel adecuado y bien almacenado",
      "Apagar la impresora durante la impresión",
      "Forzar el papel manualmente"
    ],
    "correct": 1,
    "explanation": "El papel húmedo o deformado es una causa frecuente de atascos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 453,
    "category": "UF0865 - Fabricantes de impresoras",
    "question": "¿Qué fabricante es conocido por su tecnología láser y cartuchos con tambor integrado?",
    "options": [
      "Epson",
      "HP",
      "Canon",
      "Brother"
    ],
    "correct": 1,
    "explanation": "HP popularizó los cartuchos láser con tambor integrado.",
    "source": "https://es.wikipedia.org/wiki/Hewlett-Packard"
  },
  {
    "id": 454,
    "category": "UF0865 - Fabricantes de impresoras",
    "question": "¿Qué fabricante destaca por su tecnología de inyección sin calor (Piezoeléctrica)?",
    "options": [
      "HP",
      "Canon",
      "Epson",
      "Xerox"
    ],
    "correct": 2,
    "explanation": "Epson utiliza tecnología piezoeléctrica en inyección de tinta.",
    "source": "https://es.wikipedia.org/wiki/Epson"
  },
  {
    "id": 455,
    "category": "UF0865 - Diagnóstico de averías",
    "question": "Una impresora no es detectada por el sistema operativo. ¿Cuál es el primer paso lógico?",
    "options": [
      "Sustituir la impresora",
      "Reinstalar el sistema operativo",
      "Comprobar conexión y drivers",
      "Cambiar el cartucho"
    ],
    "correct": 2,
    "explanation": "El diagnóstico comienza verificando conexión física y controladores.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 456,
    "category": "UF0865 - Averías lógicas",
    "question": "¿Qué tipo de fallo provoca que una impresora imprima caracteres incorrectos?",
    "options": [
      "Fallo mecánico",
      "Fallo del fusor",
      "Driver o configuración incorrecta",
      "Rodillos desgastados"
    ],
    "correct": 2,
    "explanation": "Errores de codificación suelen deberse a controladores incorrectos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 457,
    "category": "UF0865 - Caso práctico",
    "question": "Una impresora láser imprime en blanco aunque el tóner está lleno. ¿Qué debe comprobarse?",
    "options": [
      "El cable de red",
      "El fusor",
      "El obturador del cartucho",
      "El papel utilizado"
    ],
    "correct": 2,
    "explanation": "Un obturador bloqueado impide que el tóner llegue al tambor.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 458,
    "category": "UF0865 - Caso práctico",
    "question": "Una impresora muestra error de atasco sin papel visible. ¿Cuál es una causa probable?",
    "options": [
      "Sensor de papel defectuoso",
      "Cartucho vacío",
      "Firmware actualizado",
      "Bandeja llena"
    ],
    "correct": 0,
    "explanation": "Un sensor defectuoso puede detectar falsos atascos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 459,
    "category": "UF0865 - Herramientas de diagnóstico",
    "question": "¿Qué herramienta software permite comprobar el estado de una cola de impresión?",
    "options": [
      "BIOS",
      "Administrador de dispositivos",
      "Gestor de impresión del sistema",
      "Editor del registro"
    ],
    "correct": 2,
    "explanation": "El gestor de impresión permite pausar, cancelar y diagnosticar trabajos.",
    "source": "https://es.wikipedia.org/wiki/Cola_(informática)"
  },
  {
    "id": 460,
    "category": "UF0865 - Herramientas de diagnóstico",
    "question": "¿Qué herramienta es útil para detectar fallos eléctricos en una impresora?",
    "options": [
      "Destornillador",
      "Multímetro",
      "Pinza mecánica",
      "Lubricante"
    ],
    "correct": 1,
    "explanation": "El multímetro permite verificar continuidad y voltajes.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 461,
    "category": "UF0865 - Averías físicas",
    "question": "¿Qué componente suele desgastarse y provocar alimentación irregular del papel?",
    "options": [
      "Placa lógica",
      "Rodillos de arrastre",
      "Fusor",
      "Memoria interna"
    ],
    "correct": 1,
    "explanation": "Los rodillos pierden adherencia con el uso.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 462,
    "category": "UF0865 - Averías mixtas",
    "question": "¿Qué tipo de avería combina fallos mecánicos y de configuración?",
    "options": [
      "Atasco físico con error persistente en software",
      "Cartucho nuevo",
      "Cambio de idioma",
      "Actualización correcta"
    ],
    "correct": 0,
    "explanation": "Un atasco no reseteado puede generar errores lógicos persistentes.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 463,
    "category": "UF0865 - Uso de impresoras",
    "question": "¿Qué acción prolonga la vida útil de una impresora de inyección?",
    "options": [
      "Dejarla meses sin uso",
      "Imprimir periódicamente",
      "Apagarla desenchufando",
      "Usar tinta incompatible"
    ],
    "correct": 1,
    "explanation": "La impresión regular evita que los inyectores se sequen.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 464,
    "category": "UF0865 - Procedimiento de diagnóstico",
    "question": "¿Cuál es el orden correcto en un diagnóstico técnico?",
    "options": [
      "Sustituir piezas directamente",
      "Comprobar software, luego hardware",
      "Comprobar alimentación, mecánica y software",
      "Actualizar firmware sin pruebas"
    ],
    "correct": 2,
    "explanation": "El diagnóstico estructurado reduce tiempo y errores.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 465,
    "category": "UF0865 - Seguridad en reparación",
    "question": "¿Qué precaución debe tomarse al manipular el fusor?",
    "options": [
      "Lubricarlo",
      "Enfriarlo antes de tocarlo",
      "Mojarlo",
      "Desconectarlo del papel"
    ],
    "correct": 1,
    "explanation": "El fusor alcanza altas temperaturas y puede causar quemaduras.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 466,
    "category": "UF0865 - Recuperación y pruebas",
    "question": "¿Qué prueba se realiza tras una reparación mecánica?",
    "options": [
      "Prueba de red",
      "Página de prueba",
      "Actualización de BIOS",
      "Cambio de usuario"
    ],
    "correct": 1,
    "explanation": "La página de prueba valida mecánica y calidad de impresión.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 467,
    "category": "UF0865 - Firmware de impresoras",
    "question": "¿Qué riesgo implica una actualización de firmware incorrecta?",
    "options": [
      "Mayor velocidad",
      "Bloqueo del dispositivo",
      "Menor consumo",
      "Mejor calidad"
    ],
    "correct": 1,
    "explanation": "Una actualización fallida puede inutilizar la impresora.",
    "source": "https://es.wikipedia.org/wiki/Firmware"
  },
  {
    "id": 468,
    "category": "UF0865 - Redes e impresoras",
    "question": "¿Qué protocolo se utiliza habitualmente para impresión en red?",
    "options": [
      "FTP",
      "SMB / IPP",
      "HTTP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "IPP y SMB son comunes en impresión en red.",
    "source": "https://es.wikipedia.org/wiki/Internet_Printing_Protocol"
  },
  {
    "id": 469,
    "category": "UF0865 - Casos prácticos",
    "question": "Una impresora en red imprime lento para todos los usuarios. ¿Qué se debe revisar?",
    "options": [
      "El papel",
      "La red y el servidor de impresión",
      "El idioma",
      "El cartucho"
    ],
    "correct": 1,
    "explanation": "Problemas comunes incluyen red saturada o servidor sobrecargado.",
    "source": "https://es.wikipedia.org/wiki/Servidor_de_impresi%C3%B3n"
  },
  {
    "id": 470,
    "category": "UF0865 - Documentación técnica",
    "question": "¿Qué documento es clave para reparaciones avanzadas?",
    "options": [
      "Manual de usuario",
      "Factura",
      "Manual de servicio técnico",
      "Garantía"
    ],
    "correct": 2,
    "explanation": "El manual técnico incluye despieces y procedimientos oficiales.",
    "source": "https://es.wikipedia.org/wiki/Manual_de_usuario"
  },
   {
    "id": 471,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora láser imprime páginas completamente negras tras sustituir el cartucho. ¿Cuál es la causa más probable?",
    "options": [
      "Fusor defectuoso",
      "Rodillo de carga en cortocircuito",
      "Driver incompatible",
      "Exceso de memoria"
    ],
    "correct": 1,
    "explanation": "Un rodillo de carga defectuoso puede provocar una carga incorrecta del tambor, generando páginas negras.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 472,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora de inyección no imprime tras meses sin uso. Los cartuchos están llenos. ¿Qué procedimiento es correcto?",
    "options": [
      "Actualizar firmware",
      "Ejecutar limpieza profunda del cabezal",
      "Sustituir la placa lógica",
      "Cambiar el cable USB"
    ],
    "correct": 1,
    "explanation": "La tinta seca obstruye los inyectores y requiere limpieza profunda.",
    "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n_de_tinta"
  },
  {
    "id": 473,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora en red aparece como 'en pausa' continuamente tras reiniciar el servidor. ¿Qué debe revisarse?",
    "options": [
      "El papel",
      "Permisos y servicio de cola de impresión",
      "El cartucho",
      "El fusor"
    ],
    "correct": 1,
    "explanation": "Errores de permisos o servicios detenidos bloquean la cola.",
    "source": "https://es.wikipedia.org/wiki/Servidor_de_impresi%C3%B3n"
  },
  {
    "id": 474,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora láser imprime con sombras duplicadas del texto. ¿Qué componente está implicado?",
    "options": [
      "Tambor o fusor desgastado",
      "Driver incorrecto",
      "Memoria insuficiente",
      "Sensor de papel"
    ],
    "correct": 0,
    "explanation": "El desgaste del fusor o tambor provoca efecto fantasma.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 475,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Tras cambiar rodillos, la impresora sigue atascando papel siempre en el mismo punto. ¿Qué investigar?",
    "options": [
      "Sensor de paso y guías internas",
      "Tipo de driver",
      "Firmware",
      "Nivel de tinta"
    ],
    "correct": 0,
    "explanation": "Guías deformadas o sensores defectuosos generan atascos persistentes.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 476,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora imprime correctamente desde USB pero falla por red. ¿Qué descarta esto?",
    "options": [
      "Fallo mecánico",
      "Fallo del fusor",
      "Fallo del cartucho",
      "Fallo físico general"
    ],
    "correct": 0,
    "explanation": "Si imprime por USB, la mecánica funciona correctamente.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 477,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora muestra error de fusor tras encender en frío. ¿Qué medición es prioritaria?",
    "options": [
      "Voltaje del termistor",
      "Nivel de tóner",
      "Velocidad de red",
      "Versión del driver"
    ],
    "correct": 0,
    "explanation": "El termistor controla la temperatura del fusor.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 478,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora imprime colores incorrectos tras cambiar cartuchos compatibles. ¿Qué acción es correcta?",
    "options": [
      "Alinear cabezales y perfiles de color",
      "Cambiar la placa base",
      "Actualizar BIOS",
      "Cambiar el papel"
    ],
    "correct": 0,
    "explanation": "Cartuchos compatibles requieren calibración y alineación.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_color"
  },
  {
    "id": 479,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora en red responde a ping pero no imprime. ¿Qué protocolo comprobar?",
    "options": [
      "DNS",
      "IPP / SMB",
      "DHCP",
      "ICMP"
    ],
    "correct": 1,
    "explanation": "La conectividad no garantiza funcionamiento del servicio de impresión.",
    "source": "https://es.wikipedia.org/wiki/Internet_Printing_Protocol"
  },
  {
    "id": 480,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora láser genera olor a quemado y se apaga. ¿Qué acción inmediata es correcta?",
    "options": [
      "Reiniciar",
      "Desconectar y revisar fusor y fuente",
      "Actualizar driver",
      "Cambiar cartucho"
    ],
    "correct": 1,
    "explanation": "Puede existir sobrecalentamiento o cortocircuito.",
    "source": "https://es.wikipedia.org/wiki/Riesgo_eléctrico"
  },
  {
    "id": 481,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Tras una actualización de firmware la impresora no arranca. ¿Qué procedimiento puede recuperarla?",
    "options": [
      "Reset eléctrico",
      "Modo recovery / reflash",
      "Cambio de fusor",
      "Cambio de papel"
    ],
    "correct": 1,
    "explanation": "Algunos modelos permiten recuperación por firmware de emergencia.",
    "source": "https://es.wikipedia.org/wiki/Firmware"
  },
  {
    "id": 482,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora imprime desplazado solo desde un software concreto. ¿Qué indica?",
    "options": [
      "Fallo mecánico",
      "Fallo lógico de aplicación o driver",
      "Fallo del fusor",
      "Sensor roto"
    ],
    "correct": 1,
    "explanation": "Errores dependientes de software indican fallo lógico.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 483,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora imprime páginas lentísimas tras añadir muchos usuarios. ¿Qué revisar?",
    "options": [
      "Capacidad del servidor de impresión",
      "Rodillos",
      "Cartucho",
      "Fusor"
    ],
    "correct": 0,
    "explanation": "La saturación del servidor afecta al rendimiento global.",
    "source": "https://es.wikipedia.org/wiki/Servidor_de_impresi%C3%B3n"
  },
  {
    "id": 484,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora térmica deja de imprimir tras cambiar el papel. ¿Qué comprobar primero?",
    "options": [
      "Orientación del papel térmico",
      "Firmware",
      "Red",
      "Driver gráfico"
    ],
    "correct": 0,
    "explanation": "El papel térmico solo imprime por una cara.",
    "source": "https://es.wikipedia.org/wiki/Impresora_t%C3%A9rmica"
  },
  {
    "id": 485,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora presenta errores aleatorios tras encender motores. ¿Qué herramienta usar?",
    "options": [
      "Multímetro para comprobar fuente",
      "Editor de texto",
      "Gestor de tareas",
      "Cambio de papel"
    ],
    "correct": 0,
    "explanation": "Picos de consumo pueden indicar fuente defectuosa.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 486,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora muestra errores intermitentes solo en horas punta. ¿Qué sospechar?",
    "options": [
      "Problemas eléctricos o de red",
      "Cartucho vacío",
      "Rodillo roto",
      "Cabezal seco"
    ],
    "correct": 0,
    "explanation": "Sobrecargas eléctricas o de red generan fallos intermitentes.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 487,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Tras limpiar sensores, la impresora sigue detectando atasco. ¿Qué paso sigue?",
    "options": [
      "Verificar cableado y placa lógica",
      "Actualizar driver",
      "Cambiar idioma",
      "Cambiar papel"
    ],
    "correct": 0,
    "explanation": "El fallo puede estar en el circuito de detección.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 488,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora imprime solo la primera página y se bloquea. ¿Qué indica?",
    "options": [
      "Fallo de spooler o memoria",
      "Fallo de rodillos",
      "Fallo del fusor",
      "Fallo del papel"
    ],
    "correct": 0,
    "explanation": "Errores de cola o memoria afectan trabajos largos.",
    "source": "https://es.wikipedia.org/wiki/Cola_(informática)"
  },
  {
    "id": 489,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Una impresora multifunción escanea pero no imprime. ¿Qué se descarta?",
    "options": [
      "Fallo mecánico general",
      "Fallo del driver de impresión",
      "Fallo de red",
      "Fallo lógico"
    ],
    "correct": 0,
    "explanation": "Si escanea, la mecánica principal funciona.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 490,
    "category": "UF0865 - Casos prácticos complejos",
    "question": "Tras una tormenta eléctrica la impresora no responde pero enciende. ¿Qué componente es sospechoso?",
    "options": [
      "Placa lógica",
      "Rodillos",
      "Cartucho",
      "Papel"
    ],
    "correct": 0,
    "explanation": "Las sobretensiones dañan la electrónica de control.",
    "source": "https://es.wikipedia.org/wiki/Sobretensi%C3%B3n"
  },
    {
    "id": 491,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Una impresora no enciende. El cable y el enchufe funcionan. ¿Cuál es el siguiente paso lógico?",
    "options": [
      "Cambiar el cartucho",
      "Medir la fuente de alimentación",
      "Reinstalar el driver",
      "Cambiar el papel"
    ],
    "correct": 1,
    "explanation": "Tras descartar alimentación externa, se comprueba la fuente interna.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 492,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "La fuente entrega tensión correcta pero la impresora no arranca. ¿Qué se revisa a continuación?",
    "options": [
      "Rodillos",
      "Placa lógica",
      "Tipo de papel",
      "Firmware del PC"
    ],
    "correct": 1,
    "explanation": "La placa lógica controla el encendido y arranque del sistema.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 493,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "La impresora arranca pero muestra error de inicialización. ¿Qué prueba sigue?",
    "options": [
      "Página de prueba",
      "Autotest interno",
      "Cambio de cartucho",
      "Actualización de SO"
    ],
    "correct": 1,
    "explanation": "El autotest permite aislar fallos internos sin intervención del PC.",
    "source": "https://en.wikipedia.org/wiki/Power-on_self-test"
  },
  {
    "id": 494,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "El autotest falla en el movimiento del papel. ¿Qué se inspecciona primero?",
    "options": [
      "Drivers",
      "Rodillos y sensores",
      "Firmware",
      "Cola de impresión"
    ],
    "correct": 1,
    "explanation": "Los problemas mecánicos se inspeccionan antes que el software.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 495,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras limpiar rodillos, el fallo persiste. ¿Qué paso sigue?",
    "options": [
      "Comprobar sensores de paso",
      "Actualizar driver",
      "Cambiar cartucho",
      "Reiniciar PC"
    ],
    "correct": 0,
    "explanation": "Los sensores pueden generar falsos atascos.",
    "source": "https://es.wikipedia.org/wiki/Sensor"
  },
  {
    "id": 496,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Los sensores funcionan correctamente pero el motor no gira. ¿Qué medir?",
    "options": [
      "Memoria RAM",
      "Voltaje del motor",
      "Nivel de tóner",
      "Idioma del panel"
    ],
    "correct": 1,
    "explanation": "Se verifica alimentación eléctrica del motor.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 497,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "El motor recibe tensión pero no gira. ¿Conclusión técnica?",
    "options": [
      "Driver incorrecto",
      "Motor defectuoso",
      "Firmware dañado",
      "Papel húmedo"
    ],
    "correct": 1,
    "explanation": "Si hay tensión y no movimiento, el motor está averiado.",
    "source": "https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico"
  },
  {
    "id": 498,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras cambiar el motor, la impresora imprime pero con mala calidad. ¿Qué revisar ahora?",
    "options": [
      "Cabezal o tambor",
      "Red",
      "Firmware",
      "Conectores USB"
    ],
    "correct": 0,
    "explanation": "La calidad de impresión depende de los elementos de imagen.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 499,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "El tambor presenta desgaste uniforme. ¿Qué acción es correcta?",
    "options": [
      "Limpieza externa",
      "Sustitución del tambor",
      "Actualización del driver",
      "Cambio de papel"
    ],
    "correct": 1,
    "explanation": "El desgaste del tambor no es reparable.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 500,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras sustituir el tambor, aparecen manchas periódicas. ¿Qué sigue?",
    "options": [
      "Revisar rodillo de carga",
      "Cambiar idioma",
      "Actualizar firmware",
      "Reinstalar SO"
    ],
    "correct": 0,
    "explanation": "Manchas periódicas indican problemas en elementos rotativos.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 501,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras reparar la parte mecánica, la impresora no imprime desde red. ¿Primer paso?",
    "options": [
      "Comprobar conectividad IP",
      "Cambiar fusor",
      "Cambiar cartucho",
      "Cambiar papel"
    ],
    "correct": 0,
    "explanation": "Siempre se verifica conectividad básica.",
    "source": "https://es.wikipedia.org/wiki/Red_de_computadoras"
  },
  {
    "id": 502,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "La impresora responde a ping pero no imprime. ¿Siguiente comprobación?",
    "options": [
      "Protocolos de impresión",
      "Rodillos",
      "Fuente",
      "Memoria"
    ],
    "correct": 0,
    "explanation": "La conectividad no garantiza servicio operativo.",
    "source": "https://es.wikipedia.org/wiki/Internet_Printing_Protocol"
  },
  {
    "id": 503,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "El servicio IPP está activo pero los trabajos se quedan en cola. ¿Qué revisar?",
    "options": [
      "Permisos y cola de impresión",
      "Sensor de papel",
      "Fusor",
      "Nivel de tinta"
    ],
    "correct": 0,
    "explanation": "Errores de permisos bloquean la cola.",
    "source": "https://es.wikipedia.org/wiki/Cola_(informática)"
  },
  {
    "id": 504,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Los permisos son correctos pero solo falla un usuario. ¿Conclusión?",
    "options": [
      "Fallo de impresora",
      "Fallo de perfil de usuario",
      "Fallo del fusor",
      "Fallo eléctrico"
    ],
    "correct": 1,
    "explanation": "El problema está aislado al entorno del usuario.",
    "source": "https://es.wikipedia.org/wiki/Cuenta_de_usuario"
  },
  {
    "id": 505,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Corregido el perfil, la impresora imprime desplazado. ¿Qué revisar ahora?",
    "options": [
      "Configuración de papel y márgenes",
      "Fuente",
      "Rodillos",
      "Red"
    ],
    "correct": 0,
    "explanation": "Los márgenes dependen de la configuración lógica.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 506,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras corregir márgenes, aparece efecto fantasma. ¿Qué componente revisar?",
    "options": [
      "Fusor",
      "Sensor",
      "Red",
      "Cola"
    ],
    "correct": 0,
    "explanation": "El efecto fantasma se asocia al fusor.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 507,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "El fusor está desgastado. ¿Acción final correcta?",
    "options": [
      "Reparación",
      "Sustitución del fusor",
      "Actualización de firmware",
      "Cambio de cable"
    ],
    "correct": 1,
    "explanation": "El fusor es un componente no reparable.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 508,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "Tras la reparación completa, ¿qué prueba confirma el éxito?",
    "options": [
      "Ping",
      "Página de prueba interna",
      "Reinicio del PC",
      "Cambio de usuario"
    ],
    "correct": 1,
    "explanation": "La página de prueba valida todos los subsistemas.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 509,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "¿Qué documentación se debe actualizar tras la intervención?",
    "options": [
      "Manual de usuario",
      "Parte de mantenimiento",
      "Factura eléctrica",
      "Contrato de red"
    ],
    "correct": 1,
    "explanation": "La trazabilidad técnica es clave en mantenimiento profesional.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 510,
    "category": "UF0865 - Casos encadenados (diagnóstico paso a paso)",
    "question": "¿Qué acción preventiva reduce futuras incidencias tras este caso?",
    "options": [
      "Plan de mantenimiento periódico",
      "Cambiar impresora",
      "Desactivar red",
      "Usar solo USB"
    ],
    "correct": 0,
    "explanation": "El mantenimiento preventivo reduce fallos recurrentes.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
   {
    "id": 511,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresora no imprime. ¿Cuál es la primera decisión en el diagrama de diagnóstico?",
    "options": [
      "Cambiar cartucho",
      "¿Enciende la impresora?",
      "Actualizar driver",
      "Cambiar papel"
    ],
    "correct": 1,
    "explanation": "Todo diagrama comienza verificando alimentación y encendido.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 512,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresora enciende pero no responde al enviar trabajos. ¿Qué decisión sigue?",
    "options": [
      "Revisar cartuchos",
      "¿Imprime página de prueba interna?",
      "Cambiar fusor",
      "Reiniciar red"
    ],
    "correct": 1,
    "explanation": "La página interna separa fallos internos de externos.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 513,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La página interna falla. ¿Qué rama del diagrama se sigue?",
    "options": [
      "Diagnóstico de red",
      "Diagnóstico mecánico interno",
      "Configuración de usuario",
      "Perfil de color"
    ],
    "correct": 1,
    "explanation": "Un fallo interno dirige a revisión mecánica o electrónica.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 514,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La página interna es correcta pero falla desde red. ¿Qué decisión aplica?",
    "options": [
      "Cambiar rodillos",
      "¿Hay conectividad IP?",
      "Cambiar fusor",
      "Cambiar tambor"
    ],
    "correct": 1,
    "explanation": "Se verifica conectividad antes de servicios.",
    "source": "https://es.wikipedia.org/wiki/Red_de_computadoras"
  },
  {
    "id": 515,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "Hay conectividad IP pero no imprime. ¿Siguiente nodo lógico?",
    "options": [
      "Comprobar protocolos IPP/SMB",
      "Cambiar papel",
      "Cambiar cartucho",
      "Limpiar sensores"
    ],
    "correct": 0,
    "explanation": "El servicio de impresión es el siguiente punto lógico.",
    "source": "https://es.wikipedia.org/wiki/Internet_Printing_Protocol"
  },
  {
    "id": 516,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "El protocolo funciona pero la cola está detenida. ¿Qué acción sigue?",
    "options": [
      "Liberar cola y permisos",
      "Cambiar fusor",
      "Cambiar red",
      "Reinstalar SO"
    ],
    "correct": 0,
    "explanation": "La cola bloqueada detiene el flujo lógico.",
    "source": "https://es.wikipedia.org/wiki/Cola_(informática)"
  },
  {
    "id": 517,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La cola se libera pero la calidad es deficiente. ¿Qué rama se sigue?",
    "options": [
      "Red",
      "Calidad de impresión",
      "Usuarios",
      "Firmware"
    ],
    "correct": 1,
    "explanation": "El diagrama deriva a elementos de imagen.",
    "source": "https://es.wikipedia.org/wiki/Impresora"
  },
  {
    "id": 518,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresión tiene manchas periódicas. ¿Qué decisión es correcta?",
    "options": [
      "Revisar elementos rotativos",
      "Reinstalar driver",
      "Cambiar red",
      "Cambiar papel"
    ],
    "correct": 0,
    "explanation": "La periodicidad indica componentes rotativos.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 519,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "Tras cambiar tambor, persiste el fallo. ¿Siguiente decisión?",
    "options": [
      "Revisar fusor",
      "Cambiar idioma",
      "Cambiar red",
      "Actualizar PC"
    ],
    "correct": 0,
    "explanation": "El fusor es el siguiente elemento del proceso.",
    "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
  },
  {
    "id": 520,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "El fusor está correcto pero hay sombras. ¿Qué indica el diagrama?",
    "options": [
      "Configuración incorrecta",
      "Desgaste residual de rodillos",
      "Error de red",
      "Error de usuario"
    ],
    "correct": 1,
    "explanation": "El diagrama contempla desgaste acumulado.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 521,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresora no detecta papel. ¿Qué decisión inicial es correcta?",
    "options": [
      "Cambiar papel",
      "Verificar sensores",
      "Cambiar cartucho",
      "Actualizar driver"
    ],
    "correct": 1,
    "explanation": "El diagrama prioriza detección antes de sustituciones.",
    "source": "https://es.wikipedia.org/wiki/Sensor"
  },
  {
    "id": 522,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "Sensor limpio pero fallo persiste. ¿Siguiente rama?",
    "options": [
      "Comprobar cableado",
      "Cambiar papel",
      "Cambiar cartucho",
      "Cambiar red"
    ],
    "correct": 0,
    "explanation": "El cableado forma parte del circuito lógico.",
    "source": "https://es.wikipedia.org/wiki/Cableado_estructurado"
  },
  {
    "id": 523,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "Cableado correcto pero error continúa. ¿Qué concluye el diagrama?",
    "options": [
      "Placa lógica defectuosa",
      "Usuario incorrecto",
      "Fallo de red",
      "Fallo de papel"
    ],
    "correct": 0,
    "explanation": "Se llega a fallo de control electrónico.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 524,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresora imprime lento. ¿Primer nodo lógico?",
    "options": [
      "Calidad",
      "Red/cola de impresión",
      "Rodillos",
      "Fusor"
    ],
    "correct": 1,
    "explanation": "El rendimiento suele depender de cola o red.",
    "source": "https://es.wikipedia.org/wiki/Servidor_de_impresi%C3%B3n"
  },
  {
    "id": 525,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La red está saturada. ¿Qué decisión toma el diagrama?",
    "options": [
      "Optimizar servidor",
      "Cambiar fusor",
      "Cambiar cartucho",
      "Cambiar sensores"
    ],
    "correct": 0,
    "explanation": "El cuello de botella es lógico, no físico.",
    "source": "https://es.wikipedia.org/wiki/Rendimiento"
  },
  {
    "id": 526,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "La impresora imprime caracteres erróneos. ¿Qué rama se sigue?",
    "options": [
      "Driver/configuración",
      "Rodillos",
      "Fusor",
      "Sensor"
    ],
    "correct": 0,
    "explanation": "Los errores de codificación son lógicos.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 527,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "Tras reinstalar driver, el error desaparece. ¿Conclusión del diagrama?",
    "options": [
      "Fallo físico",
      "Fallo lógico resuelto",
      "Fallo eléctrico",
      "Fallo mecánico"
    ],
    "correct": 1,
    "explanation": "El diagrama finaliza en fallo lógico.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 528,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "¿Qué representa el último nodo del diagrama?",
    "options": [
      "Cambio de impresora",
      "Acción correctiva final",
      "Reinicio del PC",
      "Cambio de usuario"
    ],
    "correct": 1,
    "explanation": "Todo diagrama termina con acción o cierre.",
    "source": "https://es.wikipedia.org/wiki/Diagrama_de_flujo"
  },
  {
    "id": 529,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "¿Qué ventaja aporta el diagrama lógico?",
    "options": [
      "Más coste",
      "Diagnóstico estructurado",
      "Más sustituciones",
      "Más tiempo"
    ],
    "correct": 1,
    "explanation": "Reduce errores y tiempos de diagnóstico.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 530,
    "category": "UF0865 - Casos con diagrama lógico de decisión",
    "question": "¿Qué documento suele acompañar al diagrama tras la reparación?",
    "options": [
      "Parte de intervención",
      "Manual de usuario",
      "Contrato de red",
      "Factura eléctrica"
    ],
    "correct": 0,
    "explanation": "Garantiza trazabilidad técnica.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 531,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Un diagnóstico básico se resuelve en 15 minutos sin piezas. ¿Qué coste predomina?",
    "options": [
      "Material",
      "Mano de obra",
      "Transporte",
      "Consumibles"
    ],
    "correct": 1,
    "explanation": "El coste principal es el tiempo técnico.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 532,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Sustituir rodillos requiere 30 minutos y bajo coste. ¿Tipo de intervención?",
    "options": [
      "Correctiva mayor",
      "Preventiva",
      "Emergencia",
      "Crítica"
    ],
    "correct": 1,
    "explanation": "Rodillos se sustituyen preventivamente.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 533,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Cambiar fusor implica 90 minutos y alto coste. ¿Decisión técnica correcta?",
    "options": [
      "Reparar fusor",
      "Evaluar rentabilidad",
      "Ignorar fallo",
      "Actualizar driver"
    ],
    "correct": 1,
    "explanation": "Debe evaluarse coste frente a sustitución del equipo.",
    "source": "https://es.wikipedia.org/wiki/An%C3%A1lisis_costo-beneficio"
  },
  {
    "id": 534,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Un fallo lógico se resuelve en 10 minutos sin coste material. ¿Qué mejora?",
    "options": [
      "Margen de beneficio",
      "Consumo eléctrico",
      "Desgaste mecánico",
      "Vida del fusor"
    ],
    "correct": 0,
    "explanation": "Los fallos lógicos tienen alta rentabilidad.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
  {
    "id": 535,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Un diagnóstico erróneo provoca sustitución innecesaria. ¿Qué aumenta?",
    "options": [
      "Coste total",
      "Calidad",
      "Fiabilidad",
      "Velocidad"
    ],
    "correct": 0,
    "explanation": "El error incrementa costes y tiempo.",
    "source": "https://es.wikipedia.org/wiki/Error_humano"
  },
  {
    "id": 536,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Reparar una impresora antigua cuesta el 70% de una nueva. ¿Decisión óptima?",
    "options": [
      "Reparar",
      "Sustituir",
      "Actualizar driver",
      "Cambiar papel"
    ],
    "correct": 1,
    "explanation": "Superar el 60% suele indicar sustitución.",
    "source": "https://es.wikipedia.org/wiki/Obsolescencia"
  },
  {
    "id": 537,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Reducir tiempos de diagnóstico mejora principalmente:",
    "options": [
      "Coste de piezas",
      "Satisfacción del cliente",
      "Consumo eléctrico",
      "Vida útil del papel"
    ],
    "correct": 1,
    "explanation": "Menos tiempo implica mejor percepción del servicio.",
    "source": "https://es.wikipedia.org/wiki/Atenci%C3%B3n_al_cliente"
  },
  {
    "id": 538,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "¿Qué técnica reduce costes repetitivos?",
    "options": [
      "Mantenimiento preventivo",
      "Reparación reactiva",
      "Uso intensivo",
      "Apagado forzado"
    ],
    "correct": 0,
    "explanation": "Prevención reduce averías recurrentes.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 539,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "Documentar tiempos reales de reparación permite:",
    "options": [
      "Cobrar más",
      "Optimizar procesos",
      "Aumentar fallos",
      "Reducir calidad"
    ],
    "correct": 1,
    "explanation": "La mejora continua se basa en métricas.",
    "source": "https://es.wikipedia.org/wiki/Mejora_continua"
  },
  {
    "id": 540,
    "category": "UF0865 - Diagnóstico con tiempos y costes",
    "question": "¿Qué indicador justifica un contrato de mantenimiento?",
    "options": [
      "Número de incidencias",
      "Color de impresión",
      "Tipo de papel",
      "Idioma del panel"
    ],
    "correct": 0,
    "explanation": "Alta frecuencia de fallos justifica mantenimiento contratado.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
   {
    "id": 541,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Una impresora deja de imprimir tras una actualización del sistema operativo. ¿Primer nodo del diagrama?",
    "options": [
      "Cambiar cartucho",
      "Comprobar compatibilidad del driver",
      "Cambiar impresora",
      "Limpiar rodillos"
    ],
    "correct": 1,
    "explanation": "Las actualizaciones pueden invalidar controladores antiguos.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 542,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "El driver no es compatible. ¿Qué decisión sigue?",
    "options": [
      "Instalar driver actualizado",
      "Cambiar fusor",
      "Formatear disco",
      "Cambiar cable"
    ],
    "correct": 0,
    "explanation": "El diagrama prioriza correcciones lógicas no destructivas.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 543,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Tras instalar el driver, la cola se queda bloqueada. ¿Siguiente decisión?",
    "options": [
      "Revisar servicio de impresión",
      "Cambiar papel",
      "Cambiar impresora",
      "Limpiar cabezal"
    ],
    "correct": 0,
    "explanation": "El spooler es un servicio crítico del sistema.",
    "source": "https://es.wikipedia.org/wiki/Cola_(informática)"
  },
  {
    "id": 544,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "El servicio de impresión no inicia. ¿Qué rama del diagrama se sigue?",
    "options": [
      "Revisión de dependencias y logs",
      "Sustitución de hardware",
      "Cambio de tóner",
      "Cambio de papel"
    ],
    "correct": 0,
    "explanation": "Los logs permiten identificar errores de sistema.",
    "source": "https://es.wikipedia.org/wiki/Log_(informática)"
  },
  {
    "id": 545,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Los logs muestran archivos corruptos. ¿Qué decisión es correcta?",
    "options": [
      "Comprobar sistema de ficheros",
      "Cambiar impresora",
      "Actualizar firmware",
      "Cambiar cartucho"
    ],
    "correct": 0,
    "explanation": "La corrupción lógica afecta al funcionamiento del sistema.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 546,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "El sistema de ficheros tiene errores corregibles. ¿Acción final?",
    "options": [
      "Reparar con herramienta del sistema",
      "Formatear",
      "Cambiar hardware",
      "Cambiar impresora"
    ],
    "correct": 0,
    "explanation": "El diagrama evita acciones destructivas innecesarias.",
    "source": "https://es.wikipedia.org/wiki/CHKDSK"
  },
  {
    "id": 547,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "La impresora solo falla en un usuario. ¿Qué nodo lógico aplica?",
    "options": [
      "Perfil de usuario",
      "Placa lógica",
      "Fusor",
      "Sensor de papel"
    ],
    "correct": 0,
    "explanation": "El aislamiento por usuario indica fallo lógico.",
    "source": "https://es.wikipedia.org/wiki/Cuenta_de_usuario"
  },
  {
    "id": 548,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "El perfil está dañado. ¿Decisión recomendada?",
    "options": [
      "Crear nuevo perfil",
      "Cambiar impresora",
      "Cambiar cable",
      "Cambiar cartucho"
    ],
    "correct": 0,
    "explanation": "La recreación del perfil resuelve errores lógicos.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 549,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "La impresora imprime caracteres extraños. ¿Qué rama se sigue?",
    "options": [
      "Codificación/driver",
      "Rodillos",
      "Fusor",
      "Fuente"
    ],
    "correct": 0,
    "explanation": "Los errores de codificación son puramente lógicos.",
    "source": "https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_caracteres"
  },
  {
    "id": 550,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Tras reinstalar el driver, el fallo persiste. ¿Siguiente decisión?",
    "options": [
      "Comprobar malware",
      "Cambiar hardware",
      "Cambiar fusor",
      "Cambiar papel"
    ],
    "correct": 0,
    "explanation": "El malware puede alterar servicios y colas.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 551,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Se detecta malware activo. ¿Acción prioritaria?",
    "options": [
      "Aislar sistema y desinfectar",
      "Cambiar impresora",
      "Actualizar firmware",
      "Cambiar cartucho"
    ],
    "correct": 0,
    "explanation": "La seguridad es prioritaria en el diagrama lógico.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 552,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Tras desinfección, el sistema sigue inestable. ¿Nodo final?",
    "options": [
      "Reinstalación del sistema operativo",
      "Cambio de impresora",
      "Cambio de fusor",
      "Cambio de papel"
    ],
    "correct": 0,
    "explanation": "El diagrama contempla reinstalación como último recurso.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 553,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "La impresora no aparece tras reinstalar el SO. ¿Qué se verifica?",
    "options": [
      "Instalación del driver",
      "Rodillos",
      "Cartucho",
      "Fusor"
    ],
    "correct": 0,
    "explanation": "Los drivers no se instalan automáticamente siempre.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 554,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "El sistema detecta la impresora pero no imprime. ¿Qué problema puede ser?",
    "options": [
      "Permisos del sistema",
      "Cambio de hardware",
      "Cambio de fusor",
      "Cambio de papel"
    ],
    "correct": 0,
    "explanation": "Los permisos afectan al acceso a dispositivos.",
    "source": "https://es.wikipedia.org/wiki/Permisos_de_acceso_a_archivos"
  },
  {
    "id": 555,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "Los permisos son correctos pero falla tras reiniciar. ¿Conclusión?",
    "options": [
      "Servicio no persistente",
      "Fallo mecánico",
      "Fallo eléctrico",
      "Fallo de papel"
    ],
    "correct": 0,
    "explanation": "Servicios mal configurados no arrancan automáticamente.",
    "source": "https://es.wikipedia.org/wiki/Servicio_de_Windows"
  },
  {
    "id": 556,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "¿Qué representa el último nodo del diagrama lógico?",
    "options": [
      "Solución documentada",
      "Cambio de impresora",
      "Reinicio del PC",
      "Cambio de usuario"
    ],
    "correct": 0,
    "explanation": "El cierre incluye documentación y validación.",
    "source": "https://en.wikipedia.org/wiki/Technical_writing"
  },
  {
    "id": 557,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "¿Qué ventaja principal aporta el diagrama en averías lógicas?",
    "options": [
      "Evita reinstalaciones innecesarias",
      "Aumenta costes",
      "Aumenta tiempos",
      "Reduce calidad"
    ],
    "correct": 0,
    "explanation": "Permite escalar acciones progresivamente.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 558,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "¿Qué herramienta apoya mejor el diagrama lógico?",
    "options": [
      "Logs del sistema",
      "Destornillador",
      "Lubricante",
      "Multímetro"
    ],
    "correct": 0,
    "explanation": "Las averías lógicas se analizan con registros.",
    "source": "https://es.wikipedia.org/wiki/Log_(informática)"
  },
  {
    "id": 559,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "¿Qué documento valida el cierre correcto del caso lógico?",
    "options": [
      "Parte de intervención",
      "Factura de hardware",
      "Garantía",
      "Manual del usuario"
    ],
    "correct": 0,
    "explanation": "Garantiza trazabilidad y calidad del servicio.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 560,
    "category": "UF0865 - Casos lógicos con diagrama de decisión",
    "question": "¿Qué acción preventiva reduce fallos lógicos futuros?",
    "options": [
      "Actualizaciones controladas",
      "Cambio frecuente de hardware",
      "Uso intensivo",
      "Apagado forzado"
    ],
    "correct": 0,
    "explanation": "Las actualizaciones planificadas reducen incidencias.",
    "source": "https://es.wikipedia.org/wiki/Windows_Update"
  },
  {
    "id": 561,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Resolver un fallo de driver lleva 10 minutos sin coste material. ¿Qué coste predomina?",
    "options": [
      "Mano de obra",
      "Material",
      "Consumibles",
      "Transporte"
    ],
    "correct": 0,
    "explanation": "El tiempo técnico es el coste principal.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 562,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Eliminar malware y restaurar servicios lleva 60 minutos. ¿Qué se debe justificar?",
    "options": [
      "Coste de intervención",
      "Cambio de impresora",
      "Cambio de cartucho",
      "Cambio de fusor"
    ],
    "correct": 0,
    "explanation": "El tiempo prolongado requiere justificación técnica.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
  {
    "id": 563,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Reinstalar el sistema operativo requiere 2 horas. ¿Qué debe evaluarse antes?",
    "options": [
      "Rentabilidad y copia de seguridad",
      "Cambio de hardware",
      "Cambio de impresora",
      "Cambio de fusor"
    ],
    "correct": 0,
    "explanation": "La reinstalación es una acción de alto impacto.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 564,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Un fallo lógico recurrente aumenta principalmente:",
    "options": [
      "Coste acumulado",
      "Calidad",
      "Velocidad",
      "Vida útil del hardware"
    ],
    "correct": 0,
    "explanation": "Los fallos repetitivos incrementan costes indirectos.",
    "source": "https://es.wikipedia.org/wiki/Coste_total"
  },
  {
    "id": 565,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué acción reduce costes lógicos a largo plazo?",
    "options": [
      "Mantenimiento preventivo del sistema",
      "Reparación reactiva",
      "Uso intensivo",
      "Apagado forzado"
    ],
    "correct": 0,
    "explanation": "Prevención reduce reinstalaciones.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 566,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Un sistema infectado provoca paradas del servicio. ¿Qué coste indirecto crece?",
    "options": [
      "Pérdida de productividad",
      "Coste del papel",
      "Coste del tóner",
      "Coste eléctrico"
    ],
    "correct": 0,
    "explanation": "Las paradas afectan al trabajo del usuario.",
    "source": "https://es.wikipedia.org/wiki/Productividad"
  },
  {
    "id": 567,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Documentar tiempos reales permite:",
    "options": [
      "Mejorar estimaciones futuras",
      "Aumentar errores",
      "Reducir calidad",
      "Evitar mantenimiento"
    ],
    "correct": 0,
    "explanation": "Las métricas permiten optimización.",
    "source": "https://es.wikipedia.org/wiki/Mejora_continua"
  },
  {
    "id": 568,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "Una reinstalación fallida obliga a repetir el proceso. ¿Qué se duplica?",
    "options": [
      "Coste total",
      "Calidad",
      "Fiabilidad",
      "Velocidad"
    ],
    "correct": 0,
    "explanation": "El tiempo y recursos se multiplican.",
    "source": "https://es.wikipedia.org/wiki/Error_humano"
  },
  {
    "id": 569,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué indicador justifica migrar a un nuevo sistema?",
    "options": [
      "Fallos lógicos frecuentes",
      "Color de impresión",
      "Tipo de papel",
      "Idioma del panel"
    ],
    "correct": 0,
    "explanation": "Alta incidencia lógica indica obsolescencia.",
    "source": "https://es.wikipedia.org/wiki/Obsolescencia"
  },
  {
    "id": 570,
    "category": "UF0865 - Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué práctica reduce tiempos de diagnóstico lógico?",
    "options": [
      "Uso de diagramas y procedimientos",
      "Sustitución directa",
      "Reinstalación sistemática",
      "Cambio de hardware"
    ],
    "correct": 0,
    "explanation": "Los procedimientos estructurados reducen tiempos.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
   {
    "id": 571,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema no arranca tras una actualización. ¿Primer nodo del diagrama?",
    "options": [
      "Reinstalar el sistema",
      "¿Accede al BIOS/UEFI?",
      "Formatear disco",
      "Cambiar disco duro"
    ],
    "correct": 1,
    "explanation": "El acceso a firmware determina si el fallo es lógico o hardware.",
    "source": "https://es.wikipedia.org/wiki/UEFI"
  },
  {
    "id": 572,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El BIOS detecta el disco pero el sistema no arranca. ¿Siguiente decisión?",
    "options": [
      "Revisar gestor de arranque",
      "Cambiar RAM",
      "Cambiar fuente",
      "Actualizar navegador"
    ],
    "correct": 0,
    "explanation": "El fallo apunta al bootloader.",
    "source": "https://es.wikipedia.org/wiki/Cargador_de_arranque"
  },
  {
    "id": 573,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El gestor de arranque muestra error de sistema inexistente. ¿Qué rama seguir?",
    "options": [
      "Reparación del arranque",
      "Reinstalación completa",
      "Cambio de disco",
      "Cambio de placa"
    ],
    "correct": 0,
    "explanation": "La reparación lógica es prioritaria.",
    "source": "https://es.wikipedia.org/wiki/Gestor_de_arranque"
  },
  {
    "id": 574,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Tras reparar el arranque, el sistema entra en bucle de reinicio. ¿Qué comprobar?",
    "options": [
      "Integridad del sistema de ficheros",
      "Tarjeta gráfica",
      "Fuente de alimentación",
      "Monitor"
    ],
    "correct": 0,
    "explanation": "La corrupción lógica provoca reinicios.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 575,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema dual boot arranca siempre el mismo SO. ¿Decisión correcta?",
    "options": [
      "Configurar gestor de arranque",
      "Formatear disco",
      "Eliminar un SO",
      "Cambiar disco"
    ],
    "correct": 0,
    "explanation": "El gestor controla la selección de sistemas.",
    "source": "https://es.wikipedia.org/wiki/Arranque_dual"
  },
  {
    "id": 576,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Una aplicación no abre tras actualización del sistema. ¿Primer nodo?",
    "options": [
      "Comprobar compatibilidad",
      "Reinstalar SO",
      "Cambiar hardware",
      "Eliminar usuario"
    ],
    "correct": 0,
    "explanation": "Las actualizaciones rompen compatibilidades.",
    "source": "https://es.wikipedia.org/wiki/Compatibilidad"
  },
  {
    "id": 577,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "La aplicación falla solo en un usuario. ¿Qué rama seguir?",
    "options": [
      "Perfil de usuario",
      "Hardware",
      "Sistema de ficheros",
      "BIOS"
    ],
    "correct": 0,
    "explanation": "El fallo aislado indica problema de perfil.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 578,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El navegador se cierra al iniciarse. ¿Primer paso lógico?",
    "options": [
      "Desactivar extensiones",
      "Reinstalar SO",
      "Cambiar disco",
      "Cambiar RAM"
    ],
    "correct": 0,
    "explanation": "Extensiones corruptas causan cierres.",
    "source": "https://es.wikipedia.org/wiki/Navegador_web"
  },
  {
    "id": 579,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Desactivadas extensiones, el fallo continúa. ¿Siguiente nodo?",
    "options": [
      "Restablecer perfil del navegador",
      "Cambiar sistema",
      "Formatear",
      "Cambiar hardware"
    ],
    "correct": 0,
    "explanation": "El perfil almacena configuraciones dañadas.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 580,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Una máquina virtual no arranca tras moverla de equipo. ¿Qué comprobar?",
    "options": [
      "Compatibilidad del hipervisor",
      "Tarjeta gráfica",
      "Disco físico",
      "Fuente"
    ],
    "correct": 0,
    "explanation": "Las VMs dependen del hipervisor.",
    "source": "https://es.wikipedia.org/wiki/Virtualizaci%C3%B3n"
  },
  {
    "id": 581,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "La VM muestra error de archivo de disco corrupto. ¿Decisión?",
    "options": [
      "Reparar imagen virtual",
      "Reinstalar host",
      "Cambiar hardware",
      "Eliminar VM"
    ],
    "correct": 0,
    "explanation": "La imagen puede repararse lógicamente.",
    "source": "https://es.wikipedia.org/wiki/VHD_(formato_de_archivo)"
  },
  {
    "id": 582,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema se vuelve lento tras instalar software desconocido. ¿Nodo clave?",
    "options": [
      "Comprobar malware",
      "Cambiar RAM",
      "Cambiar CPU",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "El malware degrada el rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 583,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El antivirus detecta amenazas persistentes. ¿Acción prioritaria?",
    "options": [
      "Aislar el sistema",
      "Ignorar",
      "Actualizar navegador",
      "Cambiar hardware"
    ],
    "correct": 0,
    "explanation": "Se evita propagación y daño adicional.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 584,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Tras limpiar malware, siguen errores aleatorios. ¿Nodo final?",
    "options": [
      "Reinstalar sistema operativo",
      "Cambiar monitor",
      "Cambiar teclado",
      "Cambiar red"
    ],
    "correct": 0,
    "explanation": "El sistema puede quedar dañado lógicamente.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 585,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema no monta una partición tras apagado brusco. ¿Decisión?",
    "options": [
      "Comprobar sistema de ficheros",
      "Formatear inmediatamente",
      "Cambiar disco",
      "Cambiar BIOS"
    ],
    "correct": 0,
    "explanation": "Los apagados causan corrupción lógica.",
    "source": "https://es.wikipedia.org/wiki/CHKDSK"
  },
  {
    "id": 586,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El sistema de ficheros tiene errores recuperables. ¿Acción correcta?",
    "options": [
      "Reparar con herramienta",
      "Reinstalar sistema",
      "Formatear",
      "Cambiar disco"
    ],
    "correct": 0,
    "explanation": "Se prioriza recuperación no destructiva.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 587,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Una actualización rompe múltiples aplicaciones. ¿Decisión global?",
    "options": [
      "Revertir actualización",
      "Cambiar hardware",
      "Eliminar aplicaciones",
      "Formatear disco"
    ],
    "correct": 0,
    "explanation": "La reversión es parte del diagrama lógico.",
    "source": "https://es.wikipedia.org/wiki/Parche_(informática)"
  },
  {
    "id": 588,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema arranca solo en modo seguro. ¿Qué indica?",
    "options": [
      "Conflicto de drivers o servicios",
      "Fallo de hardware",
      "Fallo de monitor",
      "Fallo eléctrico"
    ],
    "correct": 0,
    "explanation": "Modo seguro desactiva servicios conflictivos.",
    "source": "https://es.wikipedia.org/wiki/Modo_seguro"
  },
  {
    "id": 589,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Tras deshabilitar un servicio, el sistema arranca normal. ¿Conclusión?",
    "options": [
      "Fallo lógico resuelto",
      "Fallo físico",
      "Fallo eléctrico",
      "Fallo de disco"
    ],
    "correct": 0,
    "explanation": "El diagrama concluye en error lógico.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 590,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué ventaja principal aporta el diagrama lógico en SO?",
    "options": [
      "Evitar reinstalaciones innecesarias",
      "Aumentar tiempo",
      "Aumentar costes",
      "Reducir seguridad"
    ],
    "correct": 0,
    "explanation": "Escala las acciones progresivamente.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 591,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué herramienta apoya mejor estos diagramas?",
    "options": [
      "Logs del sistema",
      "Destornillador",
      "Multímetro",
      "Lubricante"
    ],
    "correct": 0,
    "explanation": "Las decisiones se basan en registros.",
    "source": "https://es.wikipedia.org/wiki/Log_(informática)"
  },
  {
    "id": 592,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué documento cierra el proceso lógico?",
    "options": [
      "Informe técnico",
      "Factura eléctrica",
      "Manual del hardware",
      "Garantía"
    ],
    "correct": 0,
    "explanation": "Garantiza trazabilidad y calidad.",
    "source": "https://en.wikipedia.org/wiki/Technical_writing"
  },
  {
    "id": 593,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un error aparece tras instalar software pirata. ¿Nodo crítico?",
    "options": [
      "Legalidad y seguridad del software",
      "Cambio de hardware",
      "Cambio de monitor",
      "Cambio de red"
    ],
    "correct": 0,
    "explanation": "Software no fiable introduce malware.",
    "source": "https://es.wikipedia.org/wiki/Infracción_de_derechos_de_autor"
  },
  {
    "id": 594,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "El sistema no aplica políticas tras iniciar sesión. ¿Qué revisar?",
    "options": [
      "Servicios y permisos",
      "Disco duro",
      "Fuente",
      "BIOS"
    ],
    "correct": 0,
    "explanation": "Las políticas dependen de servicios.",
    "source": "https://es.wikipedia.org/wiki/Directiva_de_grupo"
  },
  {
    "id": 595,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un sistema Linux no monta /home. ¿Primer nodo?",
    "options": [
      "fstab y sistema de ficheros",
      "Reinstalar kernel",
      "Cambiar disco",
      "Cambiar RAM"
    ],
    "correct": 0,
    "explanation": "fstab controla los montajes.",
    "source": "https://es.wikipedia.org/wiki/Fstab"
  },
  {
    "id": 596,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "Un Windows no reconoce aplicaciones tras migración. ¿Qué revisar?",
    "options": [
      "Registro del sistema",
      "BIOS",
      "Fuente",
      "Monitor"
    ],
    "correct": 0,
    "explanation": "El registro almacena referencias de aplicaciones.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 597,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Cuándo se llega al nodo de reinstalación completa?",
    "options": [
      "Tras agotar opciones lógicas",
      "Siempre",
      "Tras el primer error",
      "Tras cambiar hardware"
    ],
    "correct": 0,
    "explanation": "Es el último recurso.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 598,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué acción preventiva reduce averías lógicas?",
    "options": [
      "Copias de seguridad y actualizaciones controladas",
      "Uso intensivo",
      "Apagado forzado",
      "Software no verificado"
    ],
    "correct": 0,
    "explanation": "Prevención reduce impacto de fallos.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 599,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué representa el nodo final del diagrama?",
    "options": [
      "Solución validada y documentada",
      "Cambio de equipo",
      "Reinicio del sistema",
      "Cambio de usuario"
    ],
    "correct": 0,
    "explanation": "Cierre técnico del incidente.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 600,
    "category": "Casos lógicos con diagrama de decisión",
    "question": "¿Qué beneficio aporta este enfoque al cliente?",
    "options": [
      "Menos tiempo y coste",
      "Más reinstalaciones",
      "Más hardware",
      "Más incidencias"
    ],
    "correct": 0,
    "explanation": "Optimiza recursos y tiempo.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
   {
    "id": 601,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Reparar un arranque dañado lleva 30 minutos sin piezas. ¿Coste principal?",
    "options": [
      "Mano de obra",
      "Material",
      "Electricidad",
      "Licencias"
    ],
    "correct": 0,
    "explanation": "El tiempo técnico domina.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 602,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Eliminar malware avanzado requiere 2 horas. ¿Qué coste indirecto aumenta?",
    "options": [
      "Pérdida de productividad",
      "Coste eléctrico",
      "Coste de hardware",
      "Coste de red"
    ],
    "correct": 0,
    "explanation": "El sistema no es usable durante la intervención.",
    "source": "https://es.wikipedia.org/wiki/Productividad"
  },
  {
    "id": 603,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Reinstalar SO cuesta 3 horas. ¿Qué debe evaluarse antes?",
    "options": [
      "Copia de seguridad y rentabilidad",
      "Cambio de monitor",
      "Cambio de teclado",
      "Cambio de red"
    ],
    "correct": 0,
    "explanation": "Es una acción destructiva si no hay backup.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 604,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Un fallo lógico recurrente aumenta:",
    "options": [
      "Coste total de soporte",
      "Calidad del sistema",
      "Vida del hardware",
      "Velocidad"
    ],
    "correct": 0,
    "explanation": "Los incidentes repetidos encarecen el soporte.",
    "source": "https://es.wikipedia.org/wiki/Coste_total"
  },
  {
    "id": 605,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué acción reduce costes a largo plazo?",
    "options": [
      "Mantenimiento preventivo del sistema",
      "Reinstalar siempre",
      "Cambiar hardware",
      "Ignorar avisos"
    ],
    "correct": 0,
    "explanation": "Prevención reduce incidencias.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 606,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Documentar tiempos reales permite:",
    "options": [
      "Mejorar estimaciones futuras",
      "Aumentar errores",
      "Reducir seguridad",
      "Evitar mantenimiento"
    ],
    "correct": 0,
    "explanation": "Las métricas mejoran planificación.",
    "source": "https://es.wikipedia.org/wiki/Mejora_continua"
  },
  {
    "id": 607,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Una reinstalación fallida duplica:",
    "options": [
      "Coste total",
      "Calidad",
      "Fiabilidad",
      "Velocidad"
    ],
    "correct": 0,
    "explanation": "Se repite el consumo de recursos.",
    "source": "https://es.wikipedia.org/wiki/Error_humano"
  },
  {
    "id": 608,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué justifica migrar a un nuevo sistema?",
    "options": [
      "Fallos lógicos frecuentes",
      "Color del escritorio",
      "Idioma",
      "Tipo de ratón"
    ],
    "correct": 0,
    "explanation": "Alta incidencia indica obsolescencia.",
    "source": "https://es.wikipedia.org/wiki/Obsolescencia"
  },
  {
    "id": 609,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "Reducir tiempo de diagnóstico mejora:",
    "options": [
      "Satisfacción del usuario",
      "Consumo eléctrico",
      "Uso de hardware",
      "Errores"
    ],
    "correct": 0,
    "explanation": "Menos tiempo implica mejor servicio.",
    "source": "https://es.wikipedia.org/wiki/Atenci%C3%B3n_al_cliente"
  },
  {
    "id": 610,
    "category": "Diagnóstico lógico con tiempos y costes",
    "question": "¿Qué práctica reduce incidencias lógicas repetidas?",
    "options": [
      "Procedimientos y diagramas de decisión",
      "Reinstalar sin analizar",
      "Cambiar hardware",
      "Ignorar logs"
    ],
    "correct": 0,
    "explanation": "La estandarización reduce errores.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 611,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un equipo con Windows 11 entra en un bucle de reinicio tras una actualización acumulativa. El BIOS reconoce el disco correctamente. ¿Cuál es la primera actuación técnica recomendada?",
    "options": [
      "Reparación de inicio desde entorno de recuperación",
      "Formateo completo del sistema",
      "Sustitución del disco duro",
      "Actualización del firmware UEFI"
    ],
    "correct": 0,
    "explanation": "En exámenes oficiales se prioriza la reparación lógica antes de acciones destructivas.",
    "source": "https://learn.microsoft.com/windows-hardware/manufacture/desktop/windows-recovery-environment--windows-re-"
  },
  {
    "id": 612,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema Linux no arranca tras modificar el archivo fstab. El error indica que no se puede montar /home. ¿Qué acción es correcta?",
    "options": [
      "Arrancar en modo rescate y corregir fstab",
      "Reinstalar el sistema operativo",
      "Formatear la partición /home",
      "Actualizar el kernel"
    ],
    "correct": 0,
    "explanation": "fstab mal configurado provoca fallos de arranque lógicos recuperables.",
    "source": "https://es.wikipedia.org/wiki/Fstab"
  },
  {
    "id": 613,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un usuario informa que todas las aplicaciones tardan en abrir tras instalar un software gratuito de procedencia desconocida. ¿Qué diagnóstico es más probable?",
    "options": [
      "Infección por malware",
      "Fallo de CPU",
      "Fallo de RAM",
      "Error del monitor"
    ],
    "correct": 0,
    "explanation": "La ralentización general tras software no confiable es un síntoma típico de malware.",
    "source": "https://es.wikipedia.org/wiki/Malware"
  },
  {
    "id": 614,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema arranca únicamente en modo seguro. ¿Qué indica este comportamiento?",
    "options": [
      "Conflicto con drivers o servicios",
      "Fallo de la fuente de alimentación",
      "Fallo del disco duro",
      "Problema de red"
    ],
    "correct": 0,
    "explanation": "El modo seguro desactiva controladores y servicios no esenciales.",
    "source": "https://es.wikipedia.org/wiki/Modo_seguro"
  },
  {
    "id": 615,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un navegador web se cierra al iniciarse solo para un usuario concreto. ¿Dónde debe centrarse el diagnóstico?",
    "options": [
      "Perfil de usuario",
      "Sistema de archivos global",
      "BIOS",
      "Hardware gráfico"
    ],
    "correct": 0,
    "explanation": "Los problemas aislados por usuario apuntan a perfiles corruptos.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 616,
    "category": "Examen oficial - Casos prácticos",
    "question": "Tras un apagado brusco, una partición NTFS no monta. ¿Qué herramienta es adecuada en primera instancia?",
    "options": [
      "CHKDSK",
      "Formateo rápido",
      "Sustitución del disco",
      "Actualización de controladores"
    ],
    "correct": 0,
    "explanation": "CHKDSK repara errores lógicos del sistema de archivos.",
    "source": "https://learn.microsoft.com/windows-server/administration/windows-commands/chkdsk"
  },
  {
    "id": 617,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema dual boot inicia siempre el mismo sistema operativo sin mostrar menú. ¿Qué componente debe revisarse?",
    "options": [
      "Gestor de arranque",
      "BIOS",
      "Memoria RAM",
      "Sistema de refrigeración"
    ],
    "correct": 0,
    "explanation": "El gestor de arranque controla la selección de sistemas.",
    "source": "https://es.wikipedia.org/wiki/Arranque_dual"
  },
  {
    "id": 618,
    "category": "Examen oficial - Casos prácticos",
    "question": "Una máquina virtual no arranca tras copiarla a otro host. ¿Qué factor es crítico comprobar?",
    "options": [
      "Compatibilidad del hipervisor",
      "Estado del monitor",
      "Firmware del host",
      "Tipo de teclado"
    ],
    "correct": 0,
    "explanation": "Las VMs dependen del hipervisor y su versión.",
    "source": "https://es.wikipedia.org/wiki/Virtualizaci%C3%B3n"
  },
  {
    "id": 619,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema presenta errores aleatorios tras eliminar un virus. ¿Qué acción es más segura?",
    "options": [
      "Reinstalar el sistema operativo",
      "Actualizar el navegador",
      "Cambiar la tarjeta gráfica",
      "Ignorar los errores"
    ],
    "correct": 0,
    "explanation": "El malware puede dejar el sistema inestable.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 620,
    "category": "Examen oficial - Casos prácticos",
    "question": "Una aplicación deja de funcionar tras una actualización del sistema. ¿Qué decisión es correcta según buenas prácticas?",
    "options": [
      "Comprobar compatibilidad de versiones",
      "Reinstalar el hardware",
      "Formatear el equipo",
      "Cambiar de usuario"
    ],
    "correct": 0,
    "explanation": "Las incompatibilidades son frecuentes tras actualizaciones.",
    "source": "https://es.wikipedia.org/wiki/Compatibilidad"
  },

  {
    "id": 621,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un equipo no reconoce aplicaciones previamente instaladas tras migrar datos manualmente. ¿Qué componente lógico puede estar dañado?",
    "options": [
      "Registro del sistema",
      "BIOS",
      "Fuente de alimentación",
      "Disco físico"
    ],
    "correct": 0,
    "explanation": "El registro almacena referencias críticas de software.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 622,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un usuario pierde permisos tras iniciar sesión. ¿Qué se debe revisar?",
    "options": [
      "Configuración de cuentas y grupos",
      "Firmware",
      "Estado del disco",
      "Resolución de pantalla"
    ],
    "correct": 0,
    "explanation": "Los permisos dependen de cuentas y grupos.",
    "source": "https://es.wikipedia.org/wiki/Control_de_acceso"
  },
  {
    "id": 623,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema Linux no aplica cambios tras editar un servicio. ¿Qué error común puede existir?",
    "options": [
      "No reiniciar el servicio",
      "Fallo de hardware",
      "Error de BIOS",
      "Fallo de red"
    ],
    "correct": 0,
    "explanation": "Los servicios requieren reinicio para aplicar cambios.",
    "source": "https://es.wikipedia.org/wiki/Servicio_de_Windows"
  },
  {
    "id": 624,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema presenta pantallazos azules tras instalar un driver no oficial. ¿Diagnóstico?",
    "options": [
      "Driver incompatible",
      "Fallo de monitor",
      "Fallo de teclado",
      "Error de usuario"
    ],
    "correct": 0,
    "explanation": "Drivers no certificados generan inestabilidad.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 625,
    "category": "Examen oficial - Casos prácticos",
    "question": "¿Qué acción reduce la probabilidad de errores lógicos en sistemas productivos?",
    "options": [
      "Mantenimiento preventivo y copias de seguridad",
      "Uso continuo sin reinicio",
      "Instalación de software sin verificar",
      "Apagados forzados"
    ],
    "correct": 0,
    "explanation": "La prevención es clave en entornos oficiales.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },

  {
    "id": 626,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un fallo solo aparece tras iniciar sesión con un usuario concreto. ¿Qué tipo de fallo es?",
    "options": [
      "Lógico de perfil",
      "Físico",
      "Eléctrico",
      "Ambiental"
    ],
    "correct": 0,
    "explanation": "Los perfiles almacenan configuraciones específicas.",
    "source": "https://es.wikipedia.org/wiki/Usuario_(informática)"
  },
  {
    "id": 627,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un sistema no actualiza correctamente pese a tener red. ¿Qué revisar primero?",
    "options": [
      "Servicios de actualización",
      "Tarjeta de red",
      "Cableado",
      "Monitor"
    ],
    "correct": 0,
    "explanation": "Las actualizaciones dependen de servicios activos.",
    "source": "https://es.wikipedia.org/wiki/Parche_(informática)"
  },
  {
    "id": 628,
    "category": "Examen oficial - Casos prácticos",
    "question": "Un error persiste tras varias reparaciones parciales. ¿Qué decisión suele ser correcta en exámenes?",
    "options": [
      "Reinstalación completa documentada",
      "Ignorar el fallo",
      "Cambiar periféricos",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "Cuando se agotan opciones lógicas, se reinstala.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 629,
    "category": "Examen oficial - Casos prácticos",
    "question": "¿Qué herramienta es clave para diagnóstico lógico?",
    "options": [
      "Registros del sistema",
      "Destornillador",
      "Multímetro",
      "Pasta térmica"
    ],
    "correct": 0,
    "explanation": "Los logs guían el diagnóstico lógico.",
    "source": "https://es.wikipedia.org/wiki/Log_(informática)"
  },
  {
    "id": 630,
    "category": "Examen oficial - Casos prácticos",
    "question": "¿Cuál es el objetivo principal del diagnóstico estructurado?",
    "options": [
      "Reducir tiempo y errores",
      "Aumentar complejidad",
      "Cambiar hardware",
      "Reinstalar siempre"
    ],
    "correct": 0,
    "explanation": "El enfoque estructurado es evaluado positivamente.",
    "source": "https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_problemas"
  },
  {
    "id": 631,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no enciende y no muestra LEDs. El cargador funciona correctamente en otro equipo. ¿Cuál es la primera comprobación técnica?",
    "options": [
      "Estado del conector de alimentación (DC Jack)",
      "Sustitución de la batería",
      "Cambio de disco duro",
      "Reinstalación del sistema operativo"
    ],
    "correct": 0,
    "explanation": "El DC Jack es un punto crítico de fallo en portátiles.",
    "source": "https://es.wikipedia.org/wiki/Conector_eléctrico"
  },
  {
    "id": 632,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil funciona solo con batería, pero no carga. ¿Qué componente es más probable que esté dañado?",
    "options": [
      "Circuito de carga o DC Jack",
      "Pantalla",
      "Disco duro",
      "Memoria RAM"
    ],
    "correct": 0,
    "explanation": "El fallo de carga suele estar en el circuito de alimentación.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 633,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "El portátil enciende, pero no muestra imagen. Se oyen ventiladores. ¿Qué prueba debe realizarse primero?",
    "options": [
      "Conectar un monitor externo",
      "Reinstalar el sistema operativo",
      "Cambiar el disco duro",
      "Actualizar BIOS"
    ],
    "correct": 0,
    "explanation": "Permite descartar fallo de pantalla o cable LVDS/eDP.",
    "source": "https://es.wikipedia.org/wiki/Pantalla_LCD"
  },
  {
    "id": 634,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil se apaga a los pocos minutos de uso. ¿Cuál es la causa más probable?",
    "options": [
      "Sobrecalentamiento",
      "Error de sistema operativo",
      "Virus",
      "Fallo del teclado"
    ],
    "correct": 0,
    "explanation": "El apagado térmico es una protección del hardware.",
    "source": "https://es.wikipedia.org/wiki/Sobrecalentamiento"
  },
  {
    "id": 635,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué mantenimiento preventivo reduce apagados por temperatura?",
    "options": [
      "Limpieza interna y cambio de pasta térmica",
      "Reinstalación del sistema",
      "Cambio de batería",
      "Actualización del navegador"
    ],
    "correct": 0,
    "explanation": "El polvo y la pasta seca elevan la temperatura.",
    "source": "https://es.wikipedia.org/wiki/Pasta_t%C3%A9rmica"
  },
  {
    "id": 636,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil emite pitidos al arrancar y no muestra imagen. ¿Qué indican normalmente?",
    "options": [
      "Errores de hardware (RAM, GPU, placa)",
      "Errores del sistema operativo",
      "Problemas de red",
      "Errores del disco lógico"
    ],
    "correct": 0,
    "explanation": "Los pitidos POST indican fallos de hardware.",
    "source": "https://es.wikipedia.org/wiki/POST"
  },
  {
    "id": 637,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no detecta el disco duro tras una caída. ¿Qué tipo de avería es más probable?",
    "options": [
      "Física en el disco o conector",
      "Lógica del sistema de archivos",
      "Error de usuario",
      "Problema de red"
    ],
    "correct": 0,
    "explanation": "Los golpes afectan a componentes mecánicos.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 638,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "El teclado de un portátil deja de funcionar parcialmente tras derrame de líquido. ¿Acción correcta?",
    "options": [
      "Sustituir el teclado",
      "Reinstalar el sistema",
      "Actualizar BIOS",
      "Cambiar la batería"
    ],
    "correct": 0,
    "explanation": "Los líquidos dañan circuitos del teclado.",
    "source": "https://es.wikipedia.org/wiki/Teclado_(inform%C3%A1tica)"
  },
  {
    "id": 639,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no reconoce módulos RAM nuevos. ¿Qué debe verificarse?",
    "options": [
      "Compatibilidad y tipo de memoria",
      "Sistema operativo",
      "Pantalla",
      "Disco duro"
    ],
    "correct": 0,
    "explanation": "No todas las RAM son compatibles.",
    "source": "https://es.wikipedia.org/wiki/Memoria_RAM"
  },
  {
    "id": 640,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "La batería de un portátil dura pocos minutos. ¿Cuál es la causa más común?",
    "options": [
      "Desgaste de la batería",
      "Fallo de placa base",
      "Virus",
      "Error de BIOS"
    ],
    "correct": 0,
    "explanation": "Las baterías tienen ciclos de vida limitados.",
    "source": "https://es.wikipedia.org/wiki/Bater%C3%ADa_recargable"
  },

  {
    "id": 641,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no detecta redes Wi-Fi, pero el adaptador aparece en BIOS. ¿Tipo de avería?",
    "options": [
      "Lógica (driver o sistema)",
      "Física de antena",
      "Eléctrica",
      "Pantalla"
    ],
    "correct": 0,
    "explanation": "Si BIOS detecta, el problema suele ser software.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 642,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil se reinicia al mover la pantalla. ¿Qué componente revisar?",
    "options": [
      "Cable de pantalla o bisagras",
      "Disco duro",
      "Sistema operativo",
      "Batería"
    ],
    "correct": 0,
    "explanation": "El cableado puede provocar cortos o apagados.",
    "source": "https://es.wikipedia.org/wiki/Bisagra"
  },
  {
    "id": 643,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué avería es típica en portátiles antiguos con GPU dedicada?",
    "options": [
      "Fallo por soldadura BGA",
      "Error de sistema de archivos",
      "Virus",
      "Fallo de teclado"
    ],
    "correct": 0,
    "explanation": "El calor degrada las soldaduras BGA.",
    "source": "https://es.wikipedia.org/wiki/BGA"
  },
  {
    "id": 644,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no apaga correctamente y se queda bloqueado. ¿Posible causa?",
    "options": [
      "Controladores o sistema operativo",
      "Pantalla rota",
      "Batería dañada",
      "Teclado defectuoso"
    ],
    "correct": 0,
    "explanation": "Los drivers controlan el apagado.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 645,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué medida de seguridad es obligatoria antes de desmontar un portátil?",
    "options": [
      "Desconectar batería y alimentación",
      "Actualizar BIOS",
      "Reinstalar sistema",
      "Conectar a red"
    ],
    "correct": 0,
    "explanation": "Evita cortocircuitos y daños.",
    "source": "https://es.wikipedia.org/wiki/Riesgo_eléctrico"
  },

  {
    "id": 646,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil hace ruido excesivo al funcionar. ¿Qué componente revisar primero?",
    "options": [
      "Ventilador",
      "Disco SSD",
      "Pantalla",
      "RAM"
    ],
    "correct": 0,
    "explanation": "El ventilador suele acumular polvo.",
    "source": "https://es.wikipedia.org/wiki/Ventilador"
  },
  {
    "id": 647,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no detecta la batería nueva. ¿Qué comprobar?",
    "options": [
      "Compatibilidad y firmware",
      "Sistema de archivos",
      "Pantalla",
      "Teclado"
    ],
    "correct": 0,
    "explanation": "Algunas baterías requieren firmware compatible.",
    "source": "https://es.wikipedia.org/wiki/Firmware"
  },
  {
    "id": 648,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué herramienta es básica para diagnóstico físico en portátiles?",
    "options": [
      "Multímetro",
      "Editor de texto",
      "Antivirus",
      "Navegador web"
    ],
    "correct": 0,
    "explanation": "Permite medir tensiones y continuidad.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 649,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un puerto USB no funciona tras forzar un dispositivo. ¿Tipo de daño?",
    "options": [
      "Físico en el conector",
      "Lógico del sistema",
      "Error de usuario",
      "Virus"
    ],
    "correct": 0,
    "explanation": "Los conectores USB son frágiles.",
    "source": "https://es.wikipedia.org/wiki/USB"
  },
  {
    "id": 650,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué práctica mejora la reparabilidad de portátiles?",
    "options": [
      "Documentar desmontaje y tornillos",
      "Forzar piezas",
      "Desconectar componentes en caliente",
      "Ignorar manuales"
    ],
    "correct": 0,
    "explanation": "La documentación evita errores.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },

  {
    "id": 651,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "Un portátil no arranca tras actualización de BIOS interrumpida. ¿Resultado más probable?",
    "options": [
      "Placa base inutilizada",
      "Error de sistema operativo",
      "Fallo de batería",
      "Error de teclado"
    ],
    "correct": 0,
    "explanation": "Una BIOS corrupta impide el arranque.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 652,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué síntoma indica fallo de la placa base en portátiles?",
    "options": [
      "No enciende pese a alimentación correcta",
      "Sistema lento",
      "Error de aplicación",
      "Virus"
    ],
    "correct": 0,
    "explanation": "La placa coordina todos los subsistemas.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 653,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué factor debe valorarse antes de reparar un portátil antiguo?",
    "options": [
      "Coste frente a sustitución",
      "Color del equipo",
      "Marca del ratón",
      "Idioma del sistema"
    ],
    "correct": 0,
    "explanation": "La viabilidad económica es clave.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 654,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Qué documento debe entregarse tras una reparación?",
    "options": [
      "Informe técnico",
      "Manual del usuario",
      "Licencia de software",
      "Factura eléctrica"
    ],
    "correct": 0,
    "explanation": "El informe documenta la intervención.",
    "source": "https://en.wikipedia.org/wiki/Technical_writing"
  },
  {
    "id": 655,
    "category": "Reparación de portátiles - Casos prácticos",
    "question": "¿Cuál es el objetivo principal de un diagnóstico correcto?",
    "options": [
      "Resolver la avería con el menor coste y tiempo",
      "Cambiar piezas",
      "Reinstalar siempre",
      "Evitar pruebas"
    ],
    "correct": 0,
    "explanation": "Es el criterio evaluado en exámenes oficiales.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 656,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un portátil no enciende y no consume corriente. El cargador es correcto. ¿Qué componente se comprueba primero en placa?",
    "options": [
      "MOSFET de entrada",
      "Chip BIOS",
      "Memoria RAM",
      "Chip de audio"
    ],
    "correct": 0,
    "explanation": "Los MOSFET de entrada controlan la alimentación inicial.",
    "source": "https://es.wikipedia.org/wiki/MOSFET"
  },
  {
    "id": 657,
    "category": "Placa base - Reparación a nivel componente",
    "question": "El equipo consume corriente pero no arranca. ¿Qué señal crítica debe verificarse?",
    "options": [
      "Señal de encendido (POWER_ON)",
      "Señal de vídeo",
      "Señal USB",
      "Señal de audio"
    ],
    "correct": 0,
    "explanation": "Sin POWER_ON no se inicia la secuencia.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
  },
  {
    "id": 658,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un corto en la línea principal de alimentación suele deberse a:",
    "options": [
      "Condensador en cortocircuito",
      "BIOS corrupta",
      "RAM defectuosa",
      "SSD dañado"
    ],
    "correct": 0,
    "explanation": "Los condensadores son fallos habituales.",
    "source": "https://es.wikipedia.org/wiki/Condensador"
  },
  {
    "id": 659,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué herramienta es imprescindible para localizar cortocircuitos en placa?",
    "options": [
      "Multímetro en modo continuidad",
      "Destornillador",
      "Osciloscopio USB",
      "Pinzas"
    ],
    "correct": 0,
    "explanation": "Permite detectar resistencias anómalas.",
    "source": "https://es.wikipedia.org/wiki/Mult%C3%ADmetro"
  },
  {
    "id": 660,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Una BIOS corrupta suele provocar:",
    "options": [
      "No arranque sin pitidos",
      "Sobrecalentamiento",
      "Fallo de batería",
      "Fallo de teclado"
    ],
    "correct": 0,
    "explanation": "El sistema no inicia POST.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 661,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué técnica se utiliza para reprogramar una BIOS dañada?",
    "options": [
      "Programador externo",
      "Actualización online",
      "Cambio de disco",
      "Reinstalación del SO"
    ],
    "correct": 0,
    "explanation": "La BIOS se reescribe fuera del sistema.",
    "source": "https://es.wikipedia.org/wiki/Firmware"
  },
  {
    "id": 662,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un portátil enciende pero no muestra imagen y no hay señal externa. ¿Componente sospechoso?",
    "options": [
      "GPU o circuito gráfico",
      "Teclado",
      "Disco",
      "Wi-Fi"
    ],
    "correct": 0,
    "explanation": "El vídeo depende del subsistema gráfico.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
  },
  {
    "id": 663,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué fallo es típico en GPUs BGA de portátiles antiguos?",
    "options": [
      "Fisuras en soldaduras",
      "Virus",
      "Error de sistema",
      "Fallo de BIOS"
    ],
    "correct": 0,
    "explanation": "El calor degrada las soldaduras.",
    "source": "https://es.wikipedia.org/wiki/BGA"
  },
  {
    "id": 664,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué técnica se utiliza para reparar soldaduras BGA?",
    "options": [
      "Reballing",
      "Formateo",
      "Actualización de drivers",
      "Cambio de batería"
    ],
    "correct": 0,
    "explanation": "Se sustituyen las bolas de soldadura.",
    "source": "https://es.wikipedia.org/wiki/Soldadura_blanda"
  },
  {
    "id": 665,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un regulador de tensión defectuoso provoca:",
    "options": [
      "Inestabilidad o no arranque",
      "Error de aplicación",
      "Fallo de teclado",
      "Problemas de red"
    ],
    "correct": 0,
    "explanation": "Las tensiones deben ser estables.",
    "source": "https://es.wikipedia.org/wiki/Regulador_de_tensi%C3%B3n"
  },
  {
    "id": 666,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué elemento protege la placa frente a sobretensiones?",
    "options": [
      "Diodos de protección",
      "BIOS",
      "RAM",
      "SSD"
    ],
    "correct": 0,
    "explanation": "Absorben picos eléctricos.",
    "source": "https://es.wikipedia.org/wiki/Diodo"
  },
  {
    "id": 667,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un consumo anómalo en standby indica:",
    "options": [
      "Corto en línea secundaria",
      "Error de usuario",
      "Fallo de software",
      "Error de BIOS"
    ],
    "correct": 0,
    "explanation": "El consumo debe ser mínimo.",
    "source": "https://es.wikipedia.org/wiki/Energ%C3%ADa_el%C3%A9ctrica"
  },
  {
    "id": 668,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué instrumento permite observar señales digitales?",
    "options": [
      "Osciloscopio",
      "Multímetro",
      "Destornillador",
      "Pinzas"
    ],
    "correct": 0,
    "explanation": "Muestra forma de onda y frecuencia.",
    "source": "https://es.wikipedia.org/wiki/Osciloscopio"
  },
  {
    "id": 669,
    "category": "Placa base - Reparación a nivel componente",
    "question": "Un corto desaparece al retirar un chip. ¿Conclusión?",
    "options": [
      "El chip está defectuoso",
      "El disco está dañado",
      "El SO falla",
      "La RAM es incompatible"
    ],
    "correct": 0,
    "explanation": "El componente retirado es la causa.",
    "source": "https://es.wikipedia.org/wiki/Cortocircuito"
  },
  {
    "id": 670,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué habilidad es crítica en reparación a nivel componente?",
    "options": [
      "Interpretar esquemas eléctricos",
      "Instalar software",
      "Configurar redes",
      "Diseñar interfaces"
    ],
    "correct": 0,
    "explanation": "Los esquemas guían el diagnóstico.",
    "source": "https://es.wikipedia.org/wiki/Esquema_el%C3%A9ctrico"
  },
  {
    "id": 671,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué riesgo tiene aplicar calor excesivo?",
    "options": [
      "Daño irreversible de la placa",
      "Mejor conductividad",
      "Mayor rendimiento",
      "Ahorro energético"
    ],
    "correct": 0,
    "explanation": "Puede despegar pistas o chips.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 672,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué justifica una reparación a nivel componente frente a sustitución?",
    "options": [
      "Reducción significativa de coste",
      "Mayor complejidad",
      "Mayor tiempo",
      "Menor fiabilidad"
    ],
    "correct": 0,
    "explanation": "Es más económica si es viable.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_correctivo"
  },
  {
    "id": 673,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Cuándo NO es viable reparar una placa?",
    "options": [
      "Daño estructural grave",
      "Fallo de condensador",
      "BIOS corrupta",
      "MOSFET dañado"
    ],
    "correct": 0,
    "explanation": "Pistas quemadas o fracturas invalidan la reparación.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 674,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué documento respalda la reparación profesional?",
    "options": [
      "Informe técnico",
      "Manual del usuario",
      "Factura eléctrica",
      "Licencia"
    ],
    "correct": 0,
    "explanation": "Garantiza trazabilidad.",
    "source": "https://en.wikipedia.org/wiki/Technical_writing"
  },
  {
    "id": 675,
    "category": "Placa base - Reparación a nivel componente",
    "question": "¿Qué se evalúa en exámenes oficiales sobre este tema?",
    "options": [
      "Metodología y diagnóstico lógico",
      "Velocidad",
      "Cambio de piezas",
      "Uso de software"
    ],
    "correct": 0,
    "explanation": "El proceso es más importante que el resultado.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  },
  {
    "id": 676,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Portátil no enciende. Diagnóstico: MOSFET de entrada dañado. Reparación 1h. ¿Presupuesto lógico?",
    "options": [
      "Mano de obra + componente (60–90 €)",
      "Sustitución de equipo (800 €)",
      "Reinstalación SO",
      "Cambio de teclado"
    ],
    "correct": 0,
    "explanation": "La reparación a nivel componente reduce costes.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento"
  },
  {
    "id": 677,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Reballing de GPU en portátil antiguo. Coste estimado:",
    "options": [
      "120–180 €",
      "20 €",
      "40 €",
      "600 €"
    ],
    "correct": 0,
    "explanation": "Es una reparación compleja y especializada.",
    "source": "https://es.wikipedia.org/wiki/Soldadura_blanda"
  },
  {
    "id": 678,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Limpieza interna + pasta térmica. Tiempo habitual:",
    "options": [
      "45–60 minutos",
      "5 minutos",
      "3 horas",
      "1 día"
    ],
    "correct": 0,
    "explanation": "Es una intervención estándar.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_preventivo"
  },
  {
    "id": 679,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Sustitución de conector DC Jack soldado. Coste típico:",
    "options": [
      "70–100 €",
      "10 €",
      "200 €",
      "500 €"
    ],
    "correct": 0,
    "explanation": "Incluye mano de obra especializada.",
    "source": "https://es.wikipedia.org/wiki/Conector_eléctrico"
  },
  {
    "id": 680,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Diagnóstico sin reparación. ¿Qué se factura?",
    "options": [
      "Tiempo de diagnóstico",
      "Piezas",
      "Licencias",
      "Electricidad"
    ],
    "correct": 0,
    "explanation": "El tiempo técnico es un coste.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 681,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "BIOS corrupta reprogramada con programador. Coste típico:",
    "options": [
      "50–80 €",
      "5 €",
      "150 €",
      "400 €"
    ],
    "correct": 0,
    "explanation": "Intervención corta pero técnica.",
    "source": "https://es.wikipedia.org/wiki/Firmware"
  },
  {
    "id": 682,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Puerto USB dañado en placa. Reparación a nivel componente:",
    "options": [
      "60–90 €",
      "10 €",
      "300 €",
      "No reparable"
    ],
    "correct": 0,
    "explanation": "Es viable si no hay daño estructural.",
    "source": "https://es.wikipedia.org/wiki/USB"
  },
  {
    "id": 683,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Cliente rechaza presupuesto tras diagnóstico. ¿Qué se entrega?",
    "options": [
      "Informe y equipo",
      "Equipo desmontado",
      "Nada",
      "Piezas nuevas"
    ],
    "correct": 0,
    "explanation": "El informe respalda el trabajo.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
  {
    "id": 684,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué factor invalida una reparación económicamente?",
    "options": [
      "Coste cercano al valor del equipo",
      "Complejidad",
      "Tiempo",
      "Marca"
    ],
    "correct": 0,
    "explanation": "No es rentable para el cliente.",
    "source": "https://es.wikipedia.org/wiki/Obsolescencia"
  },
  {
    "id": 685,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué debe incluir siempre un presupuesto?",
    "options": [
      "Mano de obra, piezas y garantía",
      "Solo piezas",
      "Solo tiempo",
      "Solo IVA"
    ],
    "correct": 0,
    "explanation": "Transparencia profesional.",
    "source": "https://es.wikipedia.org/wiki/Presupuesto"
  },

  {
    "id": 686,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Recuperación de datos tras fallo de placa. ¿Coste habitual?",
    "options": [
      "80–150 €",
      "10 €",
      "30 €",
      "600 €"
    ],
    "correct": 0,
    "explanation": "Depende del acceso al almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/Recuperaci%C3%B3n_de_datos"
  },
  {
    "id": 687,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Cliente solicita rapidez sobre coste. ¿Qué se prioriza?",
    "options": [
      "Sustitución frente a reparación",
      "Reballing",
      "Diagnóstico largo",
      "Reparación parcial"
    ],
    "correct": 0,
    "explanation": "El tiempo es un factor clave.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
  {
    "id": 688,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué reparación tiene mayor margen de beneficio?",
    "options": [
      "Diagnóstico y mantenimiento",
      "Cambio de disco",
      "Venta de hardware",
      "Reinstalación"
    ],
    "correct": 0,
    "explanation": "Menor coste de piezas.",
    "source": "https://es.wikipedia.org/wiki/Modelo_de_negocio"
  },
  {
    "id": 689,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Un cliente acepta presupuesto. ¿Siguiente paso?",
    "options": [
      "Autorización por escrito",
      "Reparar sin aviso",
      "Cobrar inmediatamente",
      "Pedir piezas sin confirmar"
    ],
    "correct": 0,
    "explanation": "Evita conflictos legales.",
    "source": "https://es.wikipedia.org/wiki/Contrato"
  },
  {
    "id": 690,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué práctica reduce reclamaciones?",
    "options": [
      "Documentar diagnóstico y pruebas",
      "Reparar rápido",
      "Cambiar piezas",
      "No informar"
    ],
    "correct": 0,
    "explanation": "La documentación protege al SAT.",
    "source": "https://es.wikipedia.org/wiki/Calidad_de_servicio"
  },
  {
    "id": 691,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué reparación suele rechazarse más?",
    "options": [
      "Placa base en equipos antiguos",
      "Cambio de teclado",
      "Cambio de batería",
      "Limpieza"
    ],
    "correct": 0,
    "explanation": "El coste no compensa.",
    "source": "https://es.wikipedia.org/wiki/Coste"
  },
  {
    "id": 692,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué se garantiza tras una reparación?",
    "options": [
      "La intervención realizada",
      "Todo el equipo",
      "El software del cliente",
      "La batería"
    ],
    "correct": 0,
    "explanation": "La garantía es limitada.",
    "source": "https://es.wikipedia.org/wiki/Garant%C3%ADa"
  },
  {
    "id": 693,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "Un cliente no recoge el equipo. ¿Qué procede?",
    "options": [
      "Aplicar política de custodia",
      "Reparar de nuevo",
      "Vender piezas",
      "Eliminar datos"
    ],
    "correct": 0,
    "explanation": "Debe estar reflejado en condiciones.",
    "source": "https://es.wikipedia.org/wiki/Servicio"
  },
  {
    "id": 694,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué valor aporta un SAT profesional?",
    "options": [
      "Diagnóstico fiable y transparencia",
      "Solo rapidez",
      "Cambio de piezas",
      "Precio bajo"
    ],
    "correct": 0,
    "explanation": "La confianza es clave.",
    "source": "https://es.wikipedia.org/wiki/Soporte_t%C3%A9cnico"
  },
  {
    "id": 695,
    "category": "SAT profesional - Casos reales con presupuestos",
    "question": "¿Qué evalúan los tribunales en estos casos?",
    "options": [
      "Criterio técnico y viabilidad económica",
      "Marca del equipo",
      "Velocidad",
      "Cantidad de piezas"
    ],
    "correct": 0,
    "explanation": "Se valora el razonamiento profesional.",
    "source": "https://es.wikipedia.org/wiki/Diagn%C3%B3stico"
  }
];

