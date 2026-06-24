# Casa Vestigio — Landing page

Proyecto de una **landing page** (un solo archivo, `index.html`, en HTML + CSS + JS) para **Casa Vestigio**: ventas privadas curadas en residencias (arte, antigüedades, relojería, cristal, mobiliario, objetos con historia) en Caracas (próximamente C.C. San Ignacio), con mención aspiracional a Panamá y Miami.

El corazón de la página es un **formulario por pasos** que segmenta al visitante en tres caminos (vender / comprar / ambos), calcula un perfil y termina abriendo WhatsApp con un mensaje pre-rellenado.

## Voz de marca (OBLIGATORIA en todo el copy)
- **Palabras ancla:** Criterio · Valor · Confianza.
- **Tono:** sereno, preciso, humano, discreto y comercial con elegancia. Siempre **de usted**.
- **Concepto rector:** "Cada pieza se valora, se investiga y se presenta. Nada se deja al azar."
- **Promesa (frase madre):** "Lo que vale merece algo más que publicarlo y esperar."
- **Palabra ancla del proceso:** usar **"valorar / valoración"** (no "evaluar").
- **NUNCA debe parecer:** venta de garaje, tienda de antigüedades desordenada, remate barato, marketplace sin filtro, promesas sensacionalistas ni firma arrogante. Evitar repetir "discreción" en exceso.

## Estado del proyecto (al día)
**Hecho:**
- Diseño visual mobile-first refinado (paleta verde/dorado/beige, tipografías Cormorant Garamond + Hanken Grotesk, grano de papel, foil dorado, sello de diamante, movimiento sobrio con `text-wrap: balance` y reveal al scroll).
- Formulario completo y funcional, con validación, consentimiento y campo "Otra ciudad" condicional.
- Copy optimizado (titular, promesa, bajada, formulario).
- Integración con Google Sheets preparada en el código (`enviarAGoogleSheets`).

**Pendiente:**
1. **Número de WhatsApp real** → constante `WHATSAPP_NUMERO` en `index.html` (hoy es de ejemplo). Se pondrá al publicar.
2. **Conectar Google Sheets** → falta publicar el Apps Script (`apps-script-leads.gs`) como Web App y pegar su URL `/exec` en la constante `SHEETS_ENDPOINT` de `index.html`. La hoja "Casa Vestigio — Leads" ya existe en el Drive de la cuenta.
3. **Publicar la landing** (p. ej. GitHub Pages).

## Archivos clave
- `index.html` — la landing completa (HTML + CSS + JS en un solo archivo).
- `apps-script-leads.gs` — script de Google Apps Script que recibe los leads y los guarda en la hoja.

## Cómo previsualizar
La landing es estática. Servirla localmente, por ejemplo:
```
python -m http.server 8000
```
y abrir `http://localhost:8000`.

## Notas de trabajo
- Rama de trabajo: `landing-page`.
- El usuario (Eduard) está aprendiendo Git/GitHub; explicar los pasos con calma, en español. Cuenta de GitHub: `vestigiolimpo-billion`.
