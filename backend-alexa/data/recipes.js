/**
 * Datos de recetas por tipo de comida (compatible con MCP y frontend recetario-mx).
 * Cada receta incluye ingredients con { name } para que el frontend muestre chips/tags.
 */
const RECETAS_DEMO = {
  desayuno: [
    { name: 'Huevos a la mexicana', description: 'Huevos revueltos con jitomate, cebolla y chile verde. Ideal para empezar el dia.', cost: 25, calories: 220, ingredients: [{ name: 'Huevo' }, { name: 'Jitomate' }, { name: 'Cebolla' }, { name: 'Chile verde' }] },
    { name: 'Avena con platano', description: 'Avena en leche con platano y un poco de miel. Rapido y nutritivo.', cost: 20, calories: 280, ingredients: [{ name: 'Avena' }, { name: 'Platano' }, { name: 'Leche' }] },
    { name: 'Chilaquiles rojos', description: 'Totopos con salsa roja, crema, queso y huevo. Clasico del desayuno mexicano.', cost: 45, calories: 380, ingredients: [{ name: 'Tortilla' }, { name: 'Huevo' }, { name: 'Jitomate' }, { name: 'Crema' }, { name: 'Queso' }] }
  ],
  comida: [
    { name: 'Arroz con pollo', description: 'Pollo guisado con arroz, verduras y especias. Plato completo y economico.', cost: 55, calories: 420, ingredients: [{ name: 'Pollo' }, { name: 'Arroz' }, { name: 'Jitomate' }, { name: 'Cebolla' }] },
    { name: 'Tacos de tinga', description: 'Tinga de pollo con chipotle, servida en tortillas con cebolla y cilantro.', cost: 50, calories: 350, ingredients: [{ name: 'Pollo' }, { name: 'Tortilla' }, { name: 'Cebolla' }, { name: 'Chile' }] },
    { name: 'Enchiladas verdes', description: 'Tortillas rellenas de pollo bañadas en salsa verde con crema y queso.', cost: 60, calories: 400, ingredients: [{ name: 'Tortilla' }, { name: 'Pollo' }, { name: 'Tomate verde' }, { name: 'Crema' }, { name: 'Queso' }] }
  ],
  cena: [
    { name: 'Sopa de tortilla', description: 'Caldo de jitomate con tiras de tortilla frita, aguacate, queso y crema.', cost: 35, calories: 220, ingredients: [{ name: 'Tortilla' }, { name: 'Jitomate' }, { name: 'Aguacate' }, { name: 'Queso' }] },
    { name: 'Quesadillas de flor de calabaza', description: 'Quesadillas con flor de calabaza y queso. Ligero y sabroso.', cost: 30, calories: 180, ingredients: [{ name: 'Tortilla' }, { name: 'Flor de calabaza' }, { name: 'Queso' }] },
    { name: 'Tostadas de atun', description: 'Tostadas con atun, lechuga, jitomate, crema y limon. Fresco y rapido.', cost: 40, calories: 250, ingredients: [{ name: 'Atun' }, { name: 'Tortilla' }, { name: 'Lechuga' }, { name: 'Jitomate' }, { name: 'Limon' }] }
  ]
};

function getRecetas(tipoComida) {
  const key = ['desayuno', 'comida', 'cena'].includes(tipoComida) ? tipoComida : 'comida';
  return RECETAS_DEMO[key] || RECETAS_DEMO.comida;
}

module.exports = { RECETAS_DEMO, getRecetas };
