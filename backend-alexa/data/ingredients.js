/**
 * Datos de ingredientes (compatible con MCP /api/mcp/ingredients).
 * Lista demo para listar y asociar a recetas/compras.
 */
const INGREDIENTES_DEMO = [
  { id: '1', name: 'Huevo', category: 'PROTEINAS', unit: 'pieza', price: 3 },
  { id: '2', name: 'Jitomate', category: 'VERDURAS', unit: 'kg', price: 25 },
  { id: '3', name: 'Cebolla', category: 'VERDURAS', unit: 'kg', price: 20 },
  { id: '4', name: 'Chile verde', category: 'VERDURAS', unit: 'kg', price: 35 },
  { id: '5', name: 'Pollo', category: 'PROTEINAS', unit: 'kg', price: 85 },
  { id: '6', name: 'Arroz', category: 'CEREALES', unit: 'kg', price: 30 },
  { id: '7', name: 'Tortilla', category: 'CEREALES', unit: 'kg', price: 18 },
  { id: '8', name: 'Avena', category: 'CEREALES', unit: 'kg', price: 45 },
  { id: '9', name: 'Platano', category: 'VERDURAS', unit: 'kg', price: 22 },
  { id: '10', name: 'Atun', category: 'PROTEINAS', unit: 'lata', price: 28 }
];

function listIngredientes(userId) {
  return INGREDIENTES_DEMO.map(i => ({ ...i, userId: userId || null }));
}

module.exports = { INGREDIENTES_DEMO, listIngredientes };
