# GeoProcesses

GeoProcesses is a browser-based, installable learning application for visualizing geomorphological and tectonic processes.

The initial module presents the **Wilson Cycle** through six animated stages:

1. Continental rift
2. Young sea
3. Mature ocean
4. Onset of subduction
5. Closing ocean
6. Continental collision

For every stage, the application provides cross-sectional, oblique, and top-down views as well as spatial references, geological context, and scientific literature.

## Run locally

The application has no build step or external runtime dependencies. Serve the directory through a local web server:

```powershell
cd C:\Copilot
python -m http.server 8090
```

Open <http://localhost:8090>. On a supported browser, use the **Install** button to add it as a Progressive Web App.

## Technology

- HTML, CSS, and vanilla JavaScript
- SVG-based process visualizations
- Progressive Web App manifest and service worker
- German and English interface
