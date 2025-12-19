# Tourist_municipios

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### arqitertura del pryecto
```bash 
turist-municipios/
├── public/                      # Archivos estáticos servidos directamente
│   ├── svgs/                    # Mapas SVG: bolivia.svg, chuquisaca.svg, oropeza.svg, etc.
│   ├── images/                  # Logos, icons, fotos estáticas
│   └── favicon.ico
├── src/
│   ├── assets/                  # Assets procesados (fuentes, imágenes grandes)
│   ├── components/              # Componentes reutilizables
│   │   ├── ui/                  # Cards, buttons, modals (TourismCard.vue, LoadingSpinner.vue)
│   │   ├── map/                 # Mapas interactivos
│   │      ├── SvgMap.vue       # Mapa SVG genérico clicable
│   │      ├── BoliviaMap.vue
│   │      ├── LeafletMap.vue   # Mapa real con markers y clustering
│   │      └── MapMarker.vue    # Marker personalizado para atracciones              
│   ├── layour/                   # Header.vue, Footer.vue, Sidebar.vue
│   ├── pages/                   # Páginas principales
│   │   ├── HomeView.vue
│   │   ├── BoliviaView.vue
│   │   ├── DepartmentView.vue   # Ruta dinámica: /departamentos/:slug
│   │   ├── ProvinceView.vue     # /provincias/:dept/:prov
│   │   └── PlaceDetailView.vue  # Detalle de hotel/restaurante/atracción
│   ├── composables/             # Funciones reutilizables (Vue Use style)
│   │   └── useFetchApi.js       # Wrapper para llamadas al backend
│   ├── services/                # ⭐ Lógica de conexión al backend (API calls)
│   │   ├── api.js               # Instancia de Axios con baseURL y interceptors
│   │   ├── authService.js       # Login, register, token management
│   │   ├── placesService.js     # GET /api/places, POST /api/reviews, etc.
│   │   └── tourismService.js    # Endpoints específicos (hoteles, restaurantes)
│   ├── stores/                  # Pinia para estado global
│   │   ├── auth.js              # Usuario logueado, token
│   │   ├── tourism.js           # Datos turísticos cacheados
│   │   └── map.js               # Estado del mapa (selección, filtros)
│   ├── data/                    # ⭐ Datos estáticos (JSON locales)
│   │   ├── departments.json     # Lista departamentos Bolivia
│   │   ├── provinces.json
│   │   ├── staticPlaces.json    # Atracciones básicas sin coords dinámicas
│   │   └── categories.json      # Tipos: atracciones, hoteles, restaurantes, nightlife
│   ├── router/
│   │   └── index.js             # Rutas con guards (ej. auth requerida)
│   ├── utils/                   # Helpers (formatDate, calculateDistance, constants)
│   ├── App.vue
│   └── main.js
├── .env                         # Variables: VITE_API_URL=http://tu-backend.com/api
├── vite.config.js
└── package.json
´´´