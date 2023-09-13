# ![hacker](https://github.com/CinTutuDev/pipesApp/assets/71487857/6e175907-b66f-4769-a747-db9c86e6fe55)pipesApp
🅰Proyecto con Angular16: Pipes y transformación visual de la data(Uppercase, Lowercase, TitleCase... )
Proyecto hecho con: [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

##  🐦Servidor

Ejecutar `ng serve` ó `ng s -o`para un servidor de desarrollo. Navegue a `http://localhost:4200/


##  🎮 Crear Componente y Módulos por comandos

* Módulo:
  ```
  ng g m shared
  ```
* Componente
  ```
  ng g c shared/pages/aboutPage
  ```
* Componente sin archivo de prueba y sin hoja de stilos
  ```
  ng g c shared/pages/aboutPage --inline-style --skip-tests
  ```
    

## 🛠 Build

Para construir el proyecto `ng build` to build the project. Se almacenarán en la carpeta  `dist/` directory.

##  URL Importantes
### Diseño:  [Bootstrap](https://getbootstrap.com/) 
### PrimeNG: [Pipe](https://primeng.org/) 
### API List: [Pipe](https://angular.io/api?query=pipe) 
### PDF atajos: [FernendoH][angular-cheat-sheet.pdf](https://github.com/CinTutuDev/pipesApp/files/12585594/angular-cheat-sheet.pdf)

## 🕹 Intalación de PrimeNG

* Ir a
 ```
https://primeng.org/installation
```

* Intalamos en terminal:
  ```
  npm install primeng
  npm install primeicons
  npm install @angular/animations --save
  ```
* Ir a angular.json:
```
 "styles": [
              "src/styles.scss",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/lara-light-purple/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
```
* Importamos en app.component.ts
 ```
import { PrimeNGConfig } from 'primeng/api';
```
