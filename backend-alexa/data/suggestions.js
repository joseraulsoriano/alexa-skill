/**
 * Menu / sugerencias por tipo de comida (compatible con MCP /api/mcp/suggestions).
 * Construye menu del dia a partir de recetas demo.
 */
const { getRecetas } = require('./recipes');

function getMenu(tiposComida) {
  const tipos = Array.isArray(tiposComida) && tiposComida.length
    ? tiposComida
    : ['desayuno', 'comida', 'cena'];
  const menu = {};
  for (const t of tipos) {
    const key = ['desayuno', 'comida', 'cena'].includes(t) ? t : t.toLowerCase();
    menu[key] = getRecetas(key);
  }
  return menu;
}

module.exports = { getMenu };
