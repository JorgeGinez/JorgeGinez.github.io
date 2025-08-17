# Invitación de Boda Web 💕

Una hermosa invitación de boda web moderna y elegante, completamente responsiva y con animaciones interactivas.

## Características ✨

- **Diseño Elegante**: Tipografías elegantes (Dancing Script, Playfair Display, Lato)
- **Completamente Responsiva**: Se adapta perfectamente a móviles, tablets y desktop
- **Animaciones Suaves**: Efectos de entrada, corazones flotantes, y parallax
- **Contador Regresivo**: Cuenta regresiva en tiempo real hasta el día de la boda
- **Formulario RSVP**: Sistema de confirmación de asistencia con validación
- **Información Completa**: Detalles de ceremonia, recepción, código de vestimenta, etc.
- **Integración con Mapas**: Enlaces directos a Google Maps para las ubicaciones
- **Efectos Interactivos**: Efectos ripple en botones, animaciones de scroll

## Estructura del Proyecto 📁

```
invitacion-boda/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
└── README.md           # Este archivo
```

## Personalización 🎨

### 1. Información de los Novios
Edita en `index.html`:
- Nombres de los novios (líneas 18-20)
- Fecha de la boda (línea 22)
- Mensaje de invitación (línea 23)

### 2. Detalles del Evento
Actualiza en `index.html`:
- **Ceremonia**: Hora, lugar y dirección (líneas 44-49)
- **Recepción**: Hora, lugar y dirección (líneas 58-63)

### 3. Fecha del Contador
Modifica en `script.js`:
```javascript
const weddingDate = new Date('2025-12-21T16:00:00').getTime();
```

### 4. Coordenadas de Mapas
Actualiza en `script.js` (líneas 101-110):
```javascript
if (location === 'ceremony') {
    coordinates = 'TU_LATITUD,TU_LONGITUD';
    placeName = 'Nombre del Lugar';
}
```

### 5. Colores y Estilos
Los colores principales están definidos en `styles.css`:
- **Azul Principal**: `#99D6EA` (RGB: 153, 214, 234) - PMS 2975, tono azul suave y elegante
- **Blanco**: `#FFFFFF` (RGB: 255, 255, 255) - Limpio y fresco
- **Dorado**: `#D4AF37` (RGB: 212, 175, 55) - Dorado clásico rico y saturado
- **Gris Claro Cálido**: `#E0E0E0` (RGB: 224, 224, 224) - Para textos sutiles
- **Azul Marino Suave**: `#34495E` (RGB: 52, 73, 94) - Para contrastes profundos

## Funcionalidades Incluidas 🚀

### Contador Regresivo
- Actualización en tiempo real cada segundo
- Muestra días, horas, minutos y segundos
- Mensaje especial cuando llega el día de la boda

### Formulario RSVP
- Validación de campos obligatorios
- Opción de acompañantes
- Restricciones alimentarias
- Mensaje especial para los novios
- Modal de confirmación

### Animaciones
- Entrada suave de elementos al hacer scroll
- Corazones flotantes aleatorios
- Efecto parallax en la sección hero
- Efectos ripple en botones
- Animación de carga inicial

### Responsive Design
- Optimizado para móviles (320px+)
- Tablets (768px+)
- Desktop (1200px+)

## Instalación y Uso 💻

1. **Descarga los archivos** en una carpeta
2. **Personaliza** la información según tus necesidades
3. **Abre** `index.html` en tu navegador para ver la invitación
4. **Sube** los archivos a tu hosting web favorito

### Hosting Gratuito Recomendado
- [Netlify](https://netlify.com) - Arrastra y suelta la carpeta
- [Vercel](https://vercel.com) - Conecta con GitHub
- [GitHub Pages](https://pages.github.com) - Hosting gratuito de GitHub

## Personalización Avanzada 🔧

### Agregar Música de Fondo
Descomenta el código en `script.js` (líneas 268-280) y agrega tu archivo de música:
```javascript
audio = new Audio('ruta-a-tu-cancion.mp3');
```

### Cambiar Fuentes
Modifica las fuentes en `index.html` (línea 7) y actualiza el CSS correspondiente.

### Agregar Más Secciones
Puedes agregar nuevas secciones como:
- Galería de fotos
- Historia de amor
- Información del hotel
- Registro de regalos

## Tecnologías Utilizadas 🛠️

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Interactividad y funcionalidades dinámicas
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías elegantes

## Compatibilidad 🌐

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Móviles iOS/Android

## Soporte 💬

Si necesitas ayuda con la personalización:
1. Revisa este README
2. Inspecciona el código para entender la estructura
3. Usa las herramientas de desarrollador del navegador

## Licencia 📄

Este proyecto es de uso libre. Puedes modificarlo y usarlo para tu boda personal.

---

¡Esperamos que disfrutes tu día especial! 💕✨

**Creado con amor para Sara y Honorato** 💒