# Migración a React + Vite

## Auditoría del sitio legado

El sitio original se compone de cuatro documentos HTML, con una hoja de estilo Bootstrap, estilos globales compilados desde SCSS, jQuery, Bootstrap JS y Slick Carousel. Cabecera, pie, testimonios, contacto y bloques de calidad se repetían entre páginas. Los carruseles se inicializaban globalmente, incluso en páginas sin un elemento objetivo; existían bloques grandes comentados, enlaces sin destino, campos sin etiquetas y formularios sin una acción útil.

También se corrigieron enlaces de Instagram mal formados, la semántica de encabezados y los controles de carrusel sin nombre accesible. El proyecto legado se conserva como referencia; la aplicación se arranca con el nuevo `index.html` de Vite.

## Arquitectura

```
src/
  components/     # UI reutilizable y layout
  constants/      # navegación y configuración de contacto
  pages/          # módulos cargados bajo demanda por ruta
  styles/         # punto de entrada de estilos y ajustes React
  App.jsx         # rutas y división de código
```

Esta variante mantiene una estructura por capas deliberadamente ligera: aún no hay dominio, API ni estado compartido que justifique añadir Redux/Zustand o una carpeta de servicios. Cuando se incorpore una galería administrable o reservas, esos límites se pueden crear por feature sin alterar los componentes comunes.

## Decisiones

- `react-router-dom` convierte las cuatro páginas estáticas en rutas con un layout compartido y un 404.
- `React.lazy` y `Suspense` separan las páginas en chunks; los assets debajo del pliegue usan `loading="lazy"`.
- El carrusel es un componente React controlado por estado local. El intervalo se limpia en `useEffect`; no hay jQuery ni listeners/manual DOM.
- Se conservaron Bootstrap CSS y los estilos visuales existentes en `public/styles` para proteger la apariencia durante la migración. Los ajustes nuevos están aislados en `src/styles/global.css`.
- La información repetida de servicios, planes y navegación vive en datos/constantes en vez de HTML duplicado.
- El formulario genera un mensaje de WhatsApp. No simula un envío a un backend que el proyecto no tiene.

## SEO y accesibilidad

`index.html` contiene descripción, canonical, Open Graph y Twitter Card. La página principal emite JSON-LD de `ProfessionalService`; `robots.txt` y `sitemap.xml` quedan disponibles en `public`. Se usan `main`, `header`, `footer`, encabezados, `label`, `aria-label`, `aria-current`, indicadores accesibles y controles de teclado nativos.

Antes de desplegar, cambie el dominio de ejemplo en `index.html`, `public/robots.txt`, `public/sitemap.xml` y configure `VITE_WHATSAPP_NUMBER` desde `.env.example`.

## Uso

```bash
npm install
npm run dev
npm run build
npm run lint
```

Validado con Node.js 24.18.0 y npm 11.16.0: `npm run build` y `npm run lint` finalizan correctamente. Vite 8 y `@vitejs/plugin-react` se mantienen alineados para evitar conflictos de dependencias.
