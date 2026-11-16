/*
=========================================================
ACTIVIDAD DE INICIACIÓN A JAVASCRIPT
Proyecto: Mi pequeña tienda
=========================================================
*/


// =======================================================
// APARTADO 1. VARIABLES Y TIPOS DE DATOS
// =======================================================

console.log("===== BIENVENIDO A MI TIENDA =====");

// TAREA 1.
const nombreTienda = "Tienda Luna";

console.log("Bienvenido a " + nombreTienda);

// TAREA 2.
const nombreProducto = "Ratón";
const precio = 15;
let stock = 10;

// TAREA 3.
console.log("Producto: " + nombreProducto);
console.log("Precio: " + precio);
console.log("Stock: " + stock);


// =======================================================
// APARTADO 2. ARRAYS Y MÉTODOS
// =======================================================

console.log("\n===== NUESTROS PRODUCTOS =====");

// TAREA 4.
const productos = ["Ratón", "Teclado", "Monitor", "Altavoz", "Webcam"];

// TAREA 5.
console.log(productos);
console.log("Número de productos: " + productos.length);

// TAREA 6.
productos.push("Micrófono");
console.log(productos);

// TAREA 7.
console.log("¿Hay teclados? " + productos.includes("Teclado"));

// TAREA 8.
console.log("En mayúsculas: " + productos[0].toUpperCase());


// =======================================================
// APARTADO 3. OPERADORES
// =======================================================

console.log("\n===== CALCULAR UNA COMPRA =====");

// TAREA 9.
const unidadesCompradas = 3;
const totalCompra = precio * unidadesCompradas;

// TAREA 10.
console.log("Unidades: " + unidadesCompradas);
console.log("Importe total: " + totalCompra + " €");

// TAREA 11.
const descuento = 4;
const totalConDescuento = totalCompra - descuento;
const precioConDescuento = totalConDescuento / 2;

console.log("Total con descuento: " + totalConDescuento + " €");
console.log("Precio por unidad con descuento: " + precioConDescuento + " €");


// =======================================================
// APARTADO 4. CONDICIONALES
// =======================================================

console.log("\n===== COMPROBAR LA COMPRA =====");

// TAREA 12.
if (precio > 20) {
  console.log("Es un producto caro");
} else {
  console.log("Es un producto económico");
}

// TAREA 13.
if (stock >= unidadesCompradas) {
  console.log("Hay stock suficiente");
} else {
  console.log("No hay stock suficiente");
}

// TAREA 14.
if (unidadesCompradas >= 3) {
  console.log("El cliente tiene descuento");
} else {
  console.log("El cliente no tiene descuento");
}


// =======================================================
// APARTADO 5. BOOLEANOS Y OPERADORES LÓGICOS
// =======================================================

console.log("\n===== COMPROBACIONES =====");

// TAREA 15.
const tiendaAbierta = true;
const pagoRealizado = false;

// TAREA 16.
console.log("Tienda abierta: " + tiendaAbierta);
console.log("Pago realizado: " + pagoRealizado);

// TAREA 17.
if (tiendaAbierta && pagoRealizado) {
  console.log("Pedido confirmado");
} else {
  console.log("Pedido pendiente");
}


// =======================================================
// APARTADO 6. BUCLES
// =======================================================

console.log("\n===== LISTA DE PRODUCTOS =====");

// TAREA 18.
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

// TAREA 19.
for (const producto of productos) {
  console.log(producto);
}

// TAREA 20.
for (let numero = 1; numero <= 5; numero++) {
  console.log("Número: " + numero);
}


// =======================================================
// APARTADO 7. FUNCIONES
// =======================================================

console.log("\n===== FUNCIONES DE LA TIENDA =====");

// TAREA 21.
function saludarCliente() {
  console.log("Gracias por visitar nuestra tienda");
}

saludarCliente();

// TAREA 22.
function calcularTotal(precioProducto, cantidad) {
  return precioProducto * cantidad;
}

console.log("Total calculado: " + calcularTotal(10, 3) + " €");

// TAREA 23.
function comprobarStock(stockDisponible, unidadesSolicitadas) {
  if (stockDisponible >= unidadesSolicitadas) {
    return true;
  } else {
    return false;
  }
}

console.log("Prueba 1 (10, 3): " + comprobarStock(10, 3));
console.log("Prueba 2 (2, 5): " + comprobarStock(2, 5));


// =======================================================
// APARTADO 8. RESUMEN FINAL
// =======================================================

console.log("\n===== RESUMEN DE LA COMPRA =====");

// TAREA 24.
console.log("Tienda: " + nombreTienda);
console.log("Productos disponibles: " + productos.join(", "));
console.log("Producto seleccionado: " + nombreProducto);
console.log("Precio por unidad: " + precio + " €");
console.log("Unidades compradas: " + unidadesCompradas);
console.log("Precio total: " + totalCompra + " €");

// TAREA 25. RETO FINAL OPCIONAL.
if (comprobarStock(stock, unidadesCompradas) && tiendaAbierta && pagoRealizado) {
  console.log("Compra realizada correctamente");
} else {
  console.log("No se puede completar la compra");
}


// =======================================================
// FIN DE LA ACTIVIDAD
// =======================================================

console.log("\n===== FIN DE LA ACTIVIDAD =====");
console.log("¡Buen trabajo!");
