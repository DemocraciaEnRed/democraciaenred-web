# Democracia en Red — Web (CLAUDE.md)

## Stack
- **Gatsby** (React) + **Bulma** CSS + **SCSS**
- **gatsby-plugin-intl** para i18n (es/en) — archivos de traducción en `src/intl/es.json` y `src/intl/en.json`
- **react-slick** para sliders
- **Typeform PopupButton** para contacto/newsletter
- Servidor de desarrollo: `./node_modules/.bin/gatsby develop -p 8001` (el puerto 8000 está ocupado con otra cosa)

## Estructura del menú (rediseño 2026)
| Item | Ruta |
|------|------|
| Conócenos | `/conocenos` |
| Productos | `/productos` |
| Proyectos | `/recursos` (title: "Proyectos") |
| Ecosistema | `/ecosistema` |
| Blog | externo (Wagtail) |
| Contáctanos | Typeform PopupButton |

**Eliminados:** Prensa y Transparencia (Transparencia va dentro de Conócenos).

## Estructura de páginas

### Home (`src/pages/index.js`)
```
HeroSlider → QueHacemos → Newsletter
```
Solo esos 3 bloques. Nada más.

### Conócenos (`src/pages/conocenos.js`)
```
UsSection → EjesEstrategicos → Mision → Division → TeamGrid → Division → Council → Balance
```

### Productos (`src/pages/productos.js`)
```
DemocracyosProduct → Division → products.map(Product)
```
(productos apilados, sin slider, iconos como anchors `<a href="#id">`)

### Proyectos (`src/pages/recursos.js`)
- Title cambiado a "Proyectos" via `resources.title` en intl JSON

### Ecosistema (`src/pages/ecosistema.js`)
- 4 sectores: `SOCIEDAD_CIVIL`, `FINANCIADORES`, `GOBIERNOS`, `REDES`
- **Importante:** usar `<div>` en vez de `<section>` — el CSS global de Bulma aplica `padding: 6rem` a `section` y rompe el layout
- Logos en `src/components/work-with-section/assets/`
- CSS en `src/pages/ecosistema.scss` → grid de 6 columnas (4 tablet, 3 mobile)

## Componentes nuevos (rediseño 2026)
- `src/components/que-hacemos/` — 3 cards de colores (blue, green, pink)
- `src/components/ejes-estrategicos/` — 3 cards de colores (yellow, purple, green)
- `src/components/team-grid/` — grilla de equipo en 4 columnas (`is-one-quarter-desktop is-half-tablet`)
- `src/components/layout/styles.scss` — `padding-top: 3rem` para compensar el navbar fijo

## Navbar (`src/components/navbar/index.js`)
- **Fijo** (`position: fixed; top: 0; z-index: 1000`) en `src/components/navbar/styles.scss`
- Detecta sección activa con **IntersectionObserver** en home, y con **pathname matching** en otras páginas
- Clase `.nav-active` aplica `text-decoration: underline`

## Hero Slider (`src/components/hero-slider/`)
- `autoplay: true, autoplaySpeed: 2500`
- Botón pausa/play con SVG icons
- **Dots dentro de la foto:** `.slick-slider { position: relative }` + `.slick-dots { position: absolute; bottom: 1.5rem }`
- Overlay oscuro: `rgb(15 10 7 / 45%)`
- **Sin** la barra de colores (Division) debajo del slider

## Newsletter
- Clase `newsletter-grey` (fondo `#4d4d4d`) — diferenciada del footer negro

## Footer (`src/components/footer/index.js`)
- Links actualizados: Conócenos, Productos, Proyectos (`/recursos`), Ecosistema, Blog
- **Sin** Prensa ni Transparencia

## Patrones CSS importantes
- Subrayado corto bajo títulos de sección: `::after { width: 35px; height: 3px; background: #000 }`
- Para suprimir ese subrayado en cards internas: `.card-class .title:after { display: none }`
- Espaciado entre filas en team-grid: override con `padding-top: 0.25rem !important` (Bulma usa padding, no gap)
- Cards de "Qué hacemos" y "Ejes estratégicos: `margin-bottom: 40px !important` en `h3` para separar título del texto

## Traducciones (`src/intl/es.json`) — secciones agregadas
- `queHacemos.*` — título + 3 items (Participación, Tecnología, Incidencia)
- `ejes.*` — título + 3 items (Democratizar, Inteligencia colectiva, Poder ciudadano)
- `resources.title` → "Proyectos"
- `products_title` → "Productos" (con mayúscula)

## Pendiente
- **Blog iframe:** Plan acordado — Wagtail agrega `?embed=true` para ocultar su header, y este sitio muestra un `<iframe>` en `src/pages/blog/index.js`. Esperando que el equipo de Wagtail haga los cambios en su lado.

## Branch activo
`rediseno-2026` — fork en GitHub para revisión del CTO.
