# Pain Relief Center - Sitio Web

Sitio web institucional para el Pain Relief Center, desarrollado con tecnologías modernas del lado del cliente, 100% responsive, multiidioma (español/inglés) y sin necesidad de backend.

---

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible.
- **TailwindCSS**: Framework de utilidades para estilos rápidos, responsivos y modernos, sin necesidad de escribir CSS personalizado salvo casos estrictamente necesarios.
- **Alpine.js**: Micro-framework para interactividad reactiva y ligera en el frontend (menú móvil, etc).
- **i18next**: Motor de internacionalización para soporte multiidioma, usando archivos JSON externos.
- **EmailJS**: Permite el envío de formularios de contacto directamente desde el frontend, sin backend propio.
- **JavaScript Vanilla**: Para cargar componentes y manejar la lógica de internacionalización.

---

## 📁 Estructura de Carpetas

painreliefcenter/
│
├── index.html
├── /assets
│ ├── /images
│ ├── /styles
│ └── /js
│ ├── i18n.js
│ └── form.js
├── /locales
│ ├── en.json
│ └── es.json
└── /components
├── navbar.html
└── footer.html

---

## 🧩 Componentes

- **Navbar (`components/navbar.html`)**  
  Menú de navegación fijo, responsive, con selector de idioma y enlaces con scroll suave a secciones ancladas.
- **Footer (`components/footer.html`)**  
  Pie de página con información de contacto, enlaces rápidos y derechos de autor.
- **Secciones principales (`index.html`)**  
  - Hero/Home
  - Sobre Nosotros
  - Servicios
  - Contacto (formulario funcional, próximamente)

---

## 🌐 Multiidioma

- Los textos se gestionan en archivos JSON (`locales/en.json` y `locales/es.json`).
- El idioma por defecto se detecta automáticamente según el navegador.
- El usuario puede cambiar el idioma dinámicamente desde el selector en el navbar.
- Todos los textos visibles usan el atributo `data-i18n` para ser reemplazados automáticamente por i18next.

---

## 🛠️ ¿Cómo ejecutar el proyecto?

1. **Clona o descarga el repositorio.**
2. **Abre la carpeta del proyecto en VS Code** (o tu editor favorito).
3. **Usa Live Server** (recomendado) o cualquier servidor local para evitar problemas de CORS:
   - Instala la extensión "Live Server" en VS Code.
   - Haz clic derecho en `index.html` y selecciona "Open with Live Server".
   - Alternativamente, puedes usar `python -m http.server` en la raíz del proyecto.
4. **Navega a la URL local** que te indique Live Server (ejemplo: `http://127.0.0.1:5500/painreliefcenter/index.html`).

---

## 📝 Explicación Técnica y Justificación de Tecnologías

- **TailwindCSS**: Permite un desarrollo rápido y limpio, aplicando clases utilitarias directamente en el HTML. Esto elimina la necesidad de archivos CSS extensos y facilita la personalización responsiva.
- **Alpine.js**: Ideal para agregar interactividad ligera (como el menú móvil) sin la sobrecarga de frameworks grandes como React o Vue.
- **i18next**: Solución robusta y flexible para internacionalización, soportando carga dinámica de archivos de idioma y cambio en tiempo real.
- **EmailJS**: Permite enviar correos desde el frontend, eliminando la necesidad de un backend propio para el formulario de contacto.
- **Componentes HTML externos**: El navbar y el footer se cargan dinámicamente con `fetch`, permitiendo modularidad y fácil mantenimiento.

---

## ⚠️ Notas

- Si abres el archivo `index.html` directamente (doble clic), los componentes no se cargarán por restricciones de seguridad del navegador. **Siempre usa un servidor local.**
- El logo debe ubicarse en `assets/images/logo.png` para que se muestre correctamente.
- El formulario de contacto y su integración con EmailJS se implementarán en los siguientes pasos.

---

## 📌 Próximos pasos

- Implementar el formulario de contacto funcional con validaciones y envío por EmailJS.
- Mejorar la accesibilidad y SEO.
- Agregar imágenes y optimización de recursos.

---

Desarrollado con ❤️ para Pain Relief Center

HISI solutions.



