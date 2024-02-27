


# TENOLOGÍAS USADAS
- Lenguaje: React JS + Tyspescript
- Librerías React: Material UI (Data Grid, ), Styled Components, Redux
- Gestor de archivos: Yarn


# DEFINICIÓN DE PRUEBA
## Acerca de esta prueba
Queremos saber su capacidad para crear una aplicación de una sola página modema y funcional. A continuación, encontrará una lista de requisitos y puntos clave que debe tener en cuenta durante el desarrollo.
¡Que empiecen los juegos de desarrollo!
## Tomar en consideración:
•	Todas las bibliotecas y/o marcos de JavaScript están a su disposición.
•	Solo para los navegadores más recientes.
•	Utilice mecanografiado y ES6.
•	Le recomendamos que utilice SCSS.
•	Puntos extra:
o	Calidad del código
o	Soporte móvil
o	Estructura de la aplicación
o	Unit Tests experiencia de usuario
o	Optimización (tiempos de carga y rendimiento de renderizado)
## Empecemos 
Le presentamos la "Herramienta de seguimiento de la felicidad del empleado" o HSEE, para
acelerar las cosas. HSEE, es una aplicación que ayuda al usuario a realizar un seguimiento del nivel de felicidad de las personas relacionadas con su empresa.
Cada persona tendrá las siguientes propiedades:
•	Nombre
•	Categoría (Empleado o Gerente)
•	Nombre de empresa
•	Nivel de felicidad
Queremos que enumere a las personas y permita buscarlas por su nombre o categoría. Los resultados deben incluir la posibilidad de ordenarlos por nivel de felicidad, categoría o empresa en orden ascendente o descendente.
También queremos que los usuarios seleccionen a qué personas rastrear, como una lista de favoritos, para comprobar cómo evolucionan. Recomendamos mostrar la lista de favoritos dentro de un modal al que se puede acceder fácilmente mediante la barra de navegación.
En el modal de favoritos, quiero poder buscar por nombre, categoría y empresa y tener la posibilidad de eliminar a las personas de la lista de favoritos, sin tener que cerrarla.
¡Intenta usar la paginación para los listados! Recomendamos mostra|r 5 a la vez.
## Requisitos de entrega
Puede usar cualquier estrategia que prefiera para almacenar la lista de favoritos y no se requiere persistencia. Debe adjuntar su solución en un solo archivo zip o proporcionarlos mediante un repositorio privado de git. La solución debe ejecutarse correctamente y se debe proporcionar un archivo de texto con las instrucciones necesarias para compilarla y/o ejecutarla.
Entrega adicional (no requerida)
Se tendrá en cuenta cualquier mejora de UX o UI que desee desarrollar. Seria genial saber si no tuviste tiempo para completar el ejercicio o si harias algo diferente si tuvieras más tiempo.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


