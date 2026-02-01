/**
 * Precios de ingredientes (compatible con MCP /api/mcp/prices).
 * Para seccion compras / optimizador.
 */
const { INGREDIENTES_DEMO } = require('./ingredients');

function getPrices(userId) {
  return INGREDIENTES_DEMO.map(i => ({
    ingredientId: i.id,
    name: i.name,
    price: i.price,
    unit: i.unit,
    store: 'Demo',
    userId: userId || null
  }));
}

module.exports = { getPrices };
