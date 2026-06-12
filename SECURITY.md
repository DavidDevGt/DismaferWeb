# Política de Seguridad

## Reportando Vulnerabilidades de Seguridad

Si descubres una vulnerabilidad de seguridad en DismaferWeb, **NO abras un issue público**. 

Por favor, reporta responsablemente contactando al mantenedor:

- **Autor:** DavidDevGt
- **GitHub:** [@DavidDevGt](https://github.com/DavidDevGt)
- **Email:** [Disponible en perfil GitHub](https://github.com/DavidDevGt)

### Información a incluir en el reporte

Proporciona los siguientes detalles para ayudarnos a entender y resolver rápidamente:

1. **Descripción de la vulnerabilidad** - Qué es el problema de seguridad
2. **Ubicación** - Dónde ocurre (archivo, línea, componente)
3. **Pasos para reproducir** - Cómo demostrar el problema
4. **Impacto potencial** - Qué riesgos presenta
5. **Configuración del entorno** - Versiones relevantes (Node, pnpm, etc.)

### Nuestro compromiso

- Responderemos a tu reporte dentro de **48 horas hábiles**
- Trabajaremos en un fix y lo reconoceremos en el commit
- Te mantendremos informado del progreso
- Publicaremos un security advisory si es apropiado

### Divulgación responsable

Por favor, permite tiempo para que arreglemos el problema antes de divulgarlo públicamente:
- Vulnerabilidades **críticas**: 7-14 días
- Vulnerabilidades **altas**: 14-30 días
- Vulnerabilidades **medias/bajas**: 30+ días

---

## Stack de Seguridad

Este proyecto implementa las siguientes prácticas de seguridad:

### Análisis Estático
- ✅ **ESLint** - Linting de código con reglas de seguridad
- ✅ **TypeScript** - Type checking para prevenir errores
- ✅ **Astro** - Framework seguro con generación estática

### Testing
- ✅ **Vitest** - Unit testing
- ✅ **Playwright** - E2E testing
- ✅ **CI/CD** - Verificación automática en cada push

### Dependencias
- ✅ **Npm audit** - Escaneo automático de vulnerabilidades
- ✅ **Dependabot** - Alertas de dependencias vulnerables
- ✅ **Pnpm lock** - Lock file para reproducibilidad

### Seguridad en Tiempo de Ejecución
- ✅ **HTTPS obligatorio** - Encriptación en tránsito
- ✅ **CSP headers** - Protección contra XSS
- ✅ **Security headers** - X-Frame-Options, X-Content-Type-Options, etc.

---

## Versiones Soportadas

| Versión | Soporte |
|---------|---------|
| 0.0.1+  | Recibe updates de seguridad |

---

Gracias por ayudar a mantener DismaferWeb seguro.
