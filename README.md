<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

# Landing Page de Democracia En Red

> Web Fundación Democracia en Red
> Desarrollada utilizando [Gatsby](https://www.gatsbyjs.org/) v3, framework basado en React, y [Bulma](https://bulma.io/), framework de CSS basado en Flexbox.

## 🚀 Quick start


### Para correr la aplicación:

1. Utilizar Node.js 22, tanto en desarrollo como en el build de Docker:
```bash
nvm install
nvm use
```

2. Instalar dependencias del proyecto
```bash
npm ci
```

`npm ci` instala las versiones de `package-lock.json` sin modificarlo. Usar npm
también en Docker: Yarn no utiliza este lockfile y puede resolver otras versiones.

El archivo `.npmrc` configura `legacy-peer-deps=true` porque
`gatsby-plugin-intl@0.3.3` declara Gatsby 2 como peer dependency, aunque el proyecto
usa Gatsby 3. Esta compatibilidad mantiene las dependencias bloqueadas; no corrige
la incompatibilidad declarada por el plugin.

4. Levantar en modo desarrollo (actualiza los cambios automáticamente)
```bash
npm run develop
```
Se disponibiliza el sitio en [http://localhost:8000/](http://localhost:8000/)

5. Generar build productivo*
```bash
npm run build
```
Genera archivos estáticos dentro de la carpeta `public`

> Se aconseja ejecutar `gatsby clean` previo a generar build productivo que limpia cache de gatsby

6. Para probar el build productivo:
```bash
npm run serve
```
Se disponibiliza el sitio en [http://localhost:9000/](http://localhost:9000/)


En la carpeta `content` se encuentran los textos en formato .json de la landing para facilitar su edición.


---

####  Gatsby v3

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
