# MF0954_2 Test Application

Aplicación web completa para la preparación del certificado MF0954_2 - Reparación de equipamiento microinformático.

## 🌐 Acceso a la Aplicación

**URL:** [https://furichies.github.io/CP2135/](https://furichies.github.io/CP2135/)

> ⚠️ **Nota**: Las preguntas han sido verificadas y actualizadas. Aunque se ha realizado un proceso de revisión exhaustivo, pueden existir algunos errores. Si encuentras alguna inconsistencia, por favor repórtala.

## Características

### 🎯 Funcionalidades Principales
- **710 preguntas** de nivel medio sobre SSOO
- **Formato test** con 4-5 respuestas posibles (una correcta)
- **Preguntas reales** basadas en contenido técnico verificado
- **Retroalimentación fundamentada** con fuentes verificadas oficiales
- **Cuatro modos de uso**: Test completo, Modo reducido, Modo práctica y personalizado
- **Estadísticas detalladas** de rendimiento
- **Interfaz moderna** y responsive
- **12 categorías** temáticas bien organizadas

### 📊 Características Técnicas
- **Diseño responsive** con Tailwind CSS
- **Animaciones fluidas** con Anime.js
- **Gráficos interactivos** con Plotly.js
- **Almacenamiento local** de progreso
- **Navegación intuitiva** entre preguntas
- **Sistema de marcado** de preguntas
- **Revisión completa** de respuestas

## Estructura del Proyecto

```
MF0954_2-Test/
├── index.html          # Página principal con el test
├── estadisticas.html   # Página de estadísticas y análisis
├── recursos.html       # Página de recursos de aprendizaje
├── app.js             # Lógica principal de la aplicación
├── estadisticas.js    # Lógica de estadísticas
├── recursos.js        # Lógica de recursos
├── questions.js       # Base de datos de preguntas
└── README.md          # Este archivo
```

## Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Comienza a practicar!

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js
npx serve .
```

### Opción 3: Despliegue en GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings → Pages
4. Selecciona la rama main y carpeta root
5. Tu aplicación estará disponible en `https://[tu-usuario].github.io/[nombre-repositorio]/`

## Cómo Usar la Aplicación

### Iniciar un Test
1. **Modo Test Completo**: 497 preguntas (todas las disponibles) con tiempo ilimitado
2. **Modo Reducido**: 100 preguntas aleatorias - ideal para repasos rápidos
3. **Modo Práctica**: 20 preguntas aleatorias con retroalimentación inmediata

### Durante el Test
- **Navegación**: Usa los botones "Anterior" y "Siguiente"
- **Marcar preguntas**: Presiona el botón "Marcar" para revisar después
- **Retroalimentación**: En modo práctica, verás explicaciones inmediatamente

### Al Finalizar
- **Resultados detallados**: Porcentaje de aciertos y preguntas correctas/incorrectas
- **Revisión completa**: Accede a todas las preguntas con explicaciones
- **Estadísticas**: Visualiza tu progreso en la página de estadísticas

## Categorías de Preguntas

La aplicación incluye **710 preguntas** organizadas en categorías temáticas:
**1.** **Casos lógicos con diagrama de decisión**  
**2.** **Diagnóstico lógico con tiempos y costes**  
**3.** **Examen oficial - Casos prácticos**  
**4.** **Placa base - Reparación a nivel componente**  
**5.** **Reparación de portátiles - Casos prácticos**  
**6.** **SAT profesional - Casos reales con presupuestos**  
**7.** **UF0863 - Acondicionamiento de señal**  
**8.** **UF0863 - Actuadores**  
**9.** **UF0863 - Amplificadores operacionales**  
**10.** **UF0863 - Arduino**  
**11.** **UF0863 - Buses de comunicación**  
**12.** **UF0863 - Cargadores de portátiles**  
**13.** **UF0863 - Cloud e IoT**  
**14.** **UF0863 - Componentes electrónicos básicos**  
**15.** **UF0863 - Comunicaciones**  
**16.** **UF0863 - Comunicación serie**  
**17.** **UF0863 - Control de potencia**  
**18.** **UF0863 - Documentación técnica**  
**19.** **UF0863 - ESP8266 / ESP32**  
**20.** **UF0863 - Electricidad básica aplicada al hardware**  
**21.** **UF0863 - Electrónica analógica**  
**22.** **UF0863 - Electrónica digital**  
**23.** **UF0863 - Fuentes de alimentación**  
**24.** **UF0863 - GPIO**  
**25.** **UF0863 - Gestión de energía**  
**26.** **UF0863 - Herramientas de medición**  
**27.** **UF0863 - Interrupciones**  
**28.** **UF0863 - IoT**  
**29.** **UF0863 - Linux embebido**  
**30.** **UF0863 - Mantenimiento correctivo**  
**31.** **UF0863 - Mantenimiento preventivo**  
**32.** **UF0863 - Medioambiente**  
**33.** **UF0863 - Microcontroladores**  
**34.** **UF0863 - PRL**  
**35.** **UF0863 - Pilas y baterías**  
**36.** **UF0863 - Prevención de riesgos laborales**  
**37.** **UF0863 - Procedimientos técnicos**  
**38.** **UF0863 - Protocolos IoT**  
**39.** **UF0863 - Protocolos de red**  
**40.** **UF0863 - RTOS**  
**41.** **UF0863 - Raspberry Pi**  
**42.** **UF0863 - Raspberry Pi avanzada**  
**43.** **UF0863 - Redes**  
**44.** **UF0863 - Redes básicas**  
**45.** **UF0863 - Seguridad IoT**  
**46.** **UF0863 - Seguridad eléctrica**  
**47.** **UF0863 - Seguridad informática**  
**48.** **UF0863 - Sensores**  
**49.** **UF0863 - Sensores en Raspberry Pi**  
**50.** **UF0863 - Servicios de red**  
**51.** **UF0863 - Señales**  
**52.** **UF0863 - Sistemas embebidos**  
**53.** **UF0863 - Soldadura electrónica**  
**54.** **UF0863 - Timers**  
**55.** **UF0863 - VRM y placas base**  
**56.** **UF0863 - Watchdog**  
**57.** **UF0864 - Almacenamiento y averías lógicas**  
**58.** **UF0864 - Antivirus**  
**59.** **UF0864 - Arranque Windows**  
**60.** **UF0864 - Averías lógicas Windows**  
**61.** **UF0864 - Caso práctico IoT**  
**62.** **UF0864 - Caso práctico PRL**  
**63.** **UF0864 - Caso práctico Windows**  
**64.** **UF0864 - Caso práctico de diagnóstico**  
**65.** **UF0864 - Caso práctico de red**  
**66.** **UF0864 - Caso práctico impresoras**  
**67.** **UF0864 - Caso práctico malware**  
**68.** **UF0864 - Caso práctico medioambiental**  
**69.** **UF0864 - Caso práctico ransomware**  
**70.** **UF0864 - Caso práctico recuperación**  
**71.** **UF0864 - Caso práctico soporte remoto**  
**72.** **UF0864 - Conexión remota**  
**73.** **UF0864 - Diagnóstico Arduino**  
**74.** **UF0864 - Diagnóstico Raspberry Pi**  
**75.** **UF0864 - Diagnóstico de averías**  
**76.** **UF0864 - Diagnóstico de red**  
**77.** **UF0864 - Diagnóstico de servicios**  
**78.** **UF0864 - Impresoras (lógica)**  
**79.** **UF0864 - Malware**  
**80.** **UF0864 - Ransomware**  
**81.** **UF0864 - Recuperación de datos**  
**82.** **UF0865 - Averías comunes**  
**83.** **UF0865 - Averías de impresoras**  
**84.** **UF0865 - Averías físicas**  
**85.** **UF0865 - Averías lógicas**  
**86.** **UF0865 - Averías mixtas**  
**87.** **UF0865 - Caso práctico**  
**88.** **UF0865 - Caso práctico de diagnóstico**  
**89.** **UF0865 - Casos con diagrama lógico de decisión**  
**90.** **UF0865 - Casos encadenados (diagnóstico paso a paso)**  
**91.** **UF0865 - Casos lógicos con diagrama de decisión**  
**92.** **UF0865 - Casos prácticos**  
**93.** **UF0865 - Casos prácticos complejos**  
**94.** **UF0865 - Consumibles**  
**95.** **UF0865 - Diagnóstico con tiempos y costes**  
**96.** **UF0865 - Diagnóstico de averías**  
**97.** **UF0865 - Diagnóstico lógico con tiempos y costes**  
**98.** **UF0865 - Documentación técnica**  
**99.** **UF0865 - Errores comunes**  
**100.** **UF0865 - Fabricantes de impresoras**  
**101.** **UF0865 - Firmware de impresoras**  
**102.** **UF0865 - Funcionamiento de impresoras de inyección**  
**103.** **UF0865 - Funcionamiento de impresoras láser**  
**104.** **UF0865 - Herramientas de diagnóstico**  
**105.** **UF0865 - Impresoras**  
**106.** **UF0865 - Mantenimiento preventivo**  
**107.** **UF0865 - Partes de impresoras**  
**108.** **UF0865 - Procedimiento de diagnóstico**  
**109.** **UF0865 - Recuperación y pruebas**  
**110.** **UF0865 - Redes e impresoras**  
**111.** **UF0865 - Reparación de impresoras**  
**112.** **UF0865 - Seguridad en reparación**  
**113.** **UF0865 - Seguridad y medio ambiente**  
**114.** **UF0865 - Tipos de impresoras**  
**115.** **UF0865 - Uso de impresoras**

## Fuentes y Referencias

Todas las preguntas incluyen:
- **Explicación detallada** del concepto
- **Enlaces a fuentes** verificadas
- **Contexto técnico** actualizado
- **Referencias oficiales** del SEPE e INCUAL

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** - Framework de diseño
- **JavaScript ES6+** - Lógica de aplicación
- **Anime.js** - Animaciones
- **Plotly.js** - Gráficos interactivos
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía

## Características de Desarrollo

### Código Limpio y Modular
- **Separación de responsabilidades**
- **Funciones reutilizables**
- **Comentarios descriptivos**
- **Nomenclatura consistente**

### Optimización de Rendimiento
- **Carga diferida** de gráficos
- **Almacenamiento local** eficiente
- **Animaciones optimizadas**
- **Imágenes vectorizadas**

### Accesibilidad
- **Contraste de colores** adecuado
- **Navegación por teclado**
- **Textos alternativos**
- **Estructura semántica**

## Personalización

### Añadir Nuevas Preguntas
Edita `questions.js` y añade objetos con el siguiente formato:

```javascript
{
    id: 201,
    category: "Componentes Básicos",
    question: "Tu pregunta aquí",
    options: ["Opción A", "Opción B", "Opción C", "Opción D", "Opción E"],
    correct: 2, // Índice de la respuesta correcta (0-4)
    explanation: "Explicación detallada de la respuesta",
    source: "URL de la fuente"
}
```

### Modificar el Diseño
- **Colores**: Edita las clases de Tailwind CSS
- **Animaciones**: Ajusta los parámetros en `app.js`
- **Layout**: Modifica la estructura HTML

## Contribuciones

Las contribuciones son bienvenidas:
1. Fork del repositorio
2. Crea una rama para tu feature
3. Realiza los cambios
4. Añade tests si es necesario
5. Envía un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia GPLv3.

## Agradecimientos

- **SEPE** por la documentación oficial
- **Comunidad educativa** por los recursos compartidos
- **Contribuyentes** que mejoran el contenido

## Soporte

Si encuentras errores o tienes sugerencias:
1. Abre un issue en GitHub
2. Usa el formulario de contacto en la página de recursos
3. Envía un email con tus comentarios

---

**¡Buena suerte en tu certificación MF0954_2!** 🎯
