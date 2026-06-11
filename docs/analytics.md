# Vercel Analytics — DismaferWeb

## Descripción

**Vercel Analytics** es un servicio de análisis integrado que monitorea:
- 📊 Page views (vistas de página)
- 👥 Unique visitors (visitantes únicos)
- ⏱️ Core Web Vitals (LCP, FID, CLS)
- 🌍 Geographic data (ubicación de visitantes)
- 📱 Device & browser info (dispositivo y navegador)

**Sin cookies de terceros** — Respeta privacidad del usuario.

---

## Setup

### 1. Instalación

```bash
pnpm add @vercel/analytics
```

### 2. Agregar Analytics al layout

```astro
---
// src/layouts/BaseLayout.astro
import Analytics from '@vercel/analytics/astro';
---

<html>
  <body>
    <slot />
    <Analytics />
  </body>
</html>
```

### 3. Deploy a Vercel

```bash
# Vercel auto-detecta Astro
git push origin main
```

Analytics comienza a recolectar datos automáticamente después del deploy.

---

## Dashboard

### Acceder a datos

1. Ir a https://vercel.com/dashboard
2. Seleccionar el proyecto `dismafer-web`
3. Click en pestaña **Analytics**

### Métricas disponibles

| Métrica | Descripción |
|---|---|
| **Page Views** | Total de vistas de página |
| **Unique Visitors** | Visitantes únicos (basado en hash de IP) |
| **LCP** | Largest Contentful Paint (target < 2.5s) |
| **FID** | First Input Delay (target < 100ms) |
| **CLS** | Cumulative Layout Shift (target < 0.1) |
| **TTFB** | Time to First Byte (target < 200ms) |
| **Geographic** | Países/ciudades con más traffic |
| **Device** | Desktop/Mobile/Tablet breakdown |
| **OS** | Windows/macOS/iOS/Android |
| **Browser** | Chrome/Firefox/Safari/Edge |

---

## Privacidad

### ¿Qué datos se recolectan?

✅ **SÍ se recolecta:**
- URL de página visitada
- Viewport size
- Device type (mobile/desktop)
- User agent (navegador/SO)
- Referrer (de dónde vino)
- Geographic info (basado en IP)
- Core Web Vitals

❌ **NO se recolecta:**
- Información personal (nombre, email, etc.)
- Cookies persistentes
- Session IDs
- Datos de formulario
- Contenido de página

### Cumplimiento legal

- ✅ GDPR compliant — Sin consentimiento de cookie requerido
- ✅ CCPA compatible — No vende datos
- ✅ No usa terceros para tracking

---

## Interpretación de datos

### Core Web Vitals

```
LCP (Largest Contentful Paint)
├─ Good:    < 2.5s  ✅
├─ Needs improvement: 2.5s - 4.0s ⚠️
└─ Poor:    > 4.0s  ❌

FID (First Input Delay)
├─ Good:    < 100ms ✅
├─ Needs improvement: 100ms - 300ms ⚠️
└─ Poor:    > 300ms ❌

CLS (Cumulative Layout Shift)
├─ Good:    < 0.1   ✅
├─ Needs improvement: 0.1 - 0.25 ⚠️
└─ Poor:    > 0.25  ❌
```

### Actuación recomendada

- **If LCP > 3s**: Optimizar imágenes, reducir JS, mejorar server response
- **If FID > 150ms**: Reducir main thread JavaScript, usar web workers
- **If CLS > 0.15**: Establecer dimensions explícitas en imgs/iframes, evitar fonts que cambian

---

## Alertas y Monitoreo

### Configurar alertas en Vercel

1. Dashboard → Analytics
2. Settings → Thresholds
3. Configurar límites para:
   - LCP máximo
   - FID máximo
   - CLS máximo
   - Error rate

### Revisar regularmente

**Semanal:**
- ¿Aumentó el traffic?
- ¿Cambió LCP?

**Mensual:**
- Compilar report de Core Web Vitals
- Identificar páginas lentas
- Comparar vs mes anterior

**Trimestral:**
- Análisis de tendencias
- Device breakdown
- Geographic insights

---

## Troubleshooting

### No veo datos en el dashboard

1. **Verificar deploy:**
   ```bash
   # Confirmar que Analytics está en el HTML renderizado
   curl https://dismafer.shop | grep "vercel/analytics"
   ```

2. **Esperar 30 segundos** — Datos no son inmediatos

3. **Deshabilitar adblockers** — Algunos bloqueadores afectan analytics

4. **Revisar logs:**
   ```bash
   vercel logs dismafer-web
   ```

### Datos anómalos

- **Spike de traffic:** Revisar social media, Google Search trends
- **LCP alta de repente:** Revisar cambios recientes de código
- **CLS sube:** Revisar nuevas imágenes/ads sin dimensions

---

## Alternativas a Vercel Analytics

Si necesitas más funcionalidades, considerar:

| Herramienta | Privacidad | Costo | Casos de uso |
|---|---|---|---|
| **Vercel Analytics** | Alta | Gratis | Métricas básicas, Web Vitals |
| **Plausible** | Muy Alta | Pago | GDPR-first, sin cookies |
| **Fathom Analytics** | Muy Alta | Pago | Máxima privacidad |
| **Umami** | Muy Alta | Gratis (self-hosted) | Open source, control total |
| **Google Analytics 4** | Media | Gratis | Análisis profundo, pero requiere consentimiento |

---

## Referencias

- **Vercel Analytics Docs:** https://vercel.com/docs/analytics
- **Web Vitals Guide:** https://web.dev/vitals/
- **Astro Integration:** https://docs.astro.build/en/guides/integrations-guide/vercel/

