# Deploy en GitHub Pages

## Opcion simple: sin Git en terminal

1. Crea un repositorio nuevo en GitHub.
2. Descomprime `topbono-site-release.zip`.
3. Sube al root del repo el contenido de la carpeta `topbono-site-release`.
4. Haz commit de todos los archivos.
5. Ve a `Settings -> Pages`.
6. En `Build and deployment`, elige:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
7. Guarda y espera 1-3 minutos.
8. GitHub te dara una URL tipo:
   - `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

## Antes de publicar con dominio real

El sitio trae un placeholder:

- `https://topbono-mexico.example`

Puedes reemplazarlo con este script:

```powershell
.\set-domain.ps1 -Domain https://tu-dominio.com
```

Ese script actualiza:

- `index.html`
- `sitemap.xml`
- `robots.txt`

## Si vas a usar la URL de GitHub Pages

Ejemplo:

```powershell
.\set-domain.ps1 -Domain https://tuusuario.github.io/topbono-site
```

## Archivos que se suben

Sube estos archivos tal como estan dentro de `topbono-site-release`:

- `assets/`
- `index.html`
- `bonos.html`
- `pagos.html`
- `juegos.html`
- `app.html`
- `faq.html`
- `privacidad.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `.nojekyll`
- `favicon.ico`
- `apple-touch-icon.png`

## Nota

En esta maquina `git` no esta disponible en terminal ahora mismo, por eso no puedo hacer el push directo desde aqui. El sitio ya queda listo para subir con el archivo release.
