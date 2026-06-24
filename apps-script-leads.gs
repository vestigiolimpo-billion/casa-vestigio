/**
 * Casa Vestigio — Recolector de leads del formulario.
 * Recibe los datos de la landing (vía POST) y los agrega como una fila
 * en la hoja "Casa Vestigio — Leads".
 *
 * ───────────────────────────────────────────────────────────────
 * INSTALACIÓN (una sola vez, ~5 minutos)
 * ───────────────────────────────────────────────────────────────
 * 1. Abre la hoja "Casa Vestigio — Leads" en Google Drive.
 * 2. Menú:  Extensiones  →  Apps Script.
 * 3. Borra todo lo que haya y pega TODO este archivo. Guarda (💾).
 * 4. Arriba a la derecha:  Implementar  →  Nueva implementación.
 *      - Engranaje ⚙️  →  Tipo: "Aplicación web".
 *      - Descripción: "Casa Vestigio leads"
 *      - Ejecutar como:  Yo (tu cuenta)
 *      - Quién tiene acceso:  "Cualquier usuario"
 *    Pulsa  Implementar  y autoriza los permisos cuando lo pida.
 * 5. Copia la "URL de la aplicación web" (termina en /exec).
 * 6. Pégala en index.html, en la constante  SHEETS_ENDPOINT.
 * ───────────────────────────────────────────────────────────────
 */

// Orden EXACTO de las columnas en la hoja (debe coincidir con los encabezados).
var COLUMNAS = [
  'interes', 'nombre', 'whatsapp', 'ciudad', 'correo', 'perfil', 'prioridad',
  'vend_piezas', 'vend_motivo', 'vend_volumen', 'vend_conoce', 'vend_expectativa', 'vend_desc', 'vend_visita',
  'comp_intereses', 'comp_proposito', 'comp_wa', 'comp_busca', 'consentimiento'
];

var ENCABEZADOS = [
  'Fecha', 'Interés', 'Nombre', 'WhatsApp', 'Ciudad', 'Correo', 'Perfil', 'Prioridad',
  'Vender: Piezas', 'Vender: Motivo', 'Vender: Volumen', 'Vender: Conoce valor', 'Vender: Expectativa', 'Vender: Descripción', 'Vender: Disponibilidad visita',
  'Comprar: Intereses', 'Comprar: Propósito', 'Comprar: Recibir por WhatsApp', 'Comprar: Busca', 'Consentimiento'
];

function doPost(e) {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Si la hoja está vacía, escribe los encabezados primero.
    if (hoja.getLastRow() === 0) {
      hoja.appendRow(ENCABEZADOS);
    }

    var datos = JSON.parse(e.postData.contents);
    var fila = [new Date()]; // Fecha y hora de recepción (zona horaria de la hoja)
    for (var i = 0; i < COLUMNAS.length; i++) {
      fila.push(datos[COLUMNAS[i]] || '');
    }
    hoja.appendRow(fila);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite comprobar en el navegador que el Web App está publicado y activo.
function doGet() {
  return ContentService.createTextOutput('Casa Vestigio — recolector de leads activo.');
}
