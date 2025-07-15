# ✅ Pruebas Funcionales - Visor Rick and Morty

Aplicación desarrollada como prueba técnica para CubiQ. A continuación se listan las pruebas funcionales realizadas:

| ID | Funcionalidad               | Paso a paso                                                       | Resultado esperado                       | Resultado real | Estado |
|----|-----------------------------|--------------------------------------------------------------------|------------------------------------------|----------------|--------|
| 1  | Mostrar personajes          | Abrir la app                                                       | Se muestran personajes en formato grid   | Correcto       | ✅     |
| 2  | Like por personaje          | Clic en botón 👍                                                    | Se incrementa el puntaje                 | Correcto       | ✅     |
| 3  | Dislike por personaje       | Clic en botón 👎                                                    | Se resta el puntaje                      | Correcto       | ✅     |
| 4  | Puntaje reflejado           | Votar varias veces                                                 | Muestra: `Puntaje: x`                    | Correcto       | ✅     |
| 5  | Persistencia de votos       | Recargar la página después de votar                               | Se conserva el puntaje anterior          | Correcto       | ✅     |
| 6  | Responsive (diseño móvil)   | Ver app desde celular o pantalla pequeña                          | Se adapta correctamente                  | Correcto       | ✅     |

---

## ℹ️ Observaciones

- El sistema cumple con los requisitos funcionales mínimos.
- La experiencia de usuario es fluida y estable.
- Las tarjetas son visuales, interactivas y el puntaje se conserva gracias al uso de `localStorage`.
