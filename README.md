
---

# 🕵️ Desafío Práctico: "The Hacker's Loop" (Solo Promesas)


**Objetivo:** Desarrollar la lógica completa de una aplicación web simulada utilizando **JavaScript y Promesas**. Se te entrega la interfaz gráfica lista para que te concentres 100% en el flujo asíncrono, el encadenamiento de procesos y el manejo de errores.

---

## 📂 Material Entregado (Copiar y Pegar)

No pierdas tiempo diseñando. Crea estos dos archivos en tu proyecto y enfócate en el JavaScript.

### 1. `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacker's Loop Simulator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-dark text-success font-monospace">

    <div id="overlay" class="d-none justify-content-center align-items-center flex-column">
        <div class="spinner-grow text-success" role="status" style="width: 4rem; height: 4rem;"></div>
        <h3 class="mt-3 text-white blink-text">EJECUTANDO SECUENCIA...</h3>
    </div>

    <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        
        <div class="card bg-black border-success shadow-lg" style="width: 100%; max-width: 600px;">
            <div class="card-header border-success d-flex justify-content-between align-items-center">
                <span>>_ SYSTEM_ROOT</span>
                <span class="badge bg-success text-dark">ONLINE</span>
            </div>
            
            <div class="card-body">
                <h2 class="text-center mb-4 text-white">SIMULADOR DE INTRUSIÓN</h2>
                
                <p class="text-secondary text-center">
                    El sistema requiere completar 4 protocolos de seguridad secuenciales.
                    <br>Cualquier fallo abortará la operación.
                </p>

                <div class="d-grid gap-2 col-8 mx-auto mb-4">
                    <button id="btnHack" class="btn btn-outline-success btn-lg fw-bold">
                        [ INICIAR_INFILTRACIÓN ]
                    </button>
                </div>

                <div class="console-box p-3 border border-secondary rounded bg-dark" style="height: 250px; overflow-y: auto;">
                    <ul id="logList" class="list-unstyled m-0">
                        <li class="text-secondary">> Esperando comando de usuario...</li>
                    </ul>
                </div>
            </div>
            
            <div class="card-footer border-success text-secondary text-end small">
                v.2.0.4 - Secure Shell
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

```

### 2. `style.css`

```css
/* Estilos Cyberpunk / Hacker */
body {
    background-color: #050505;
    font-family: 'Courier New', Courier, monospace;
}

/* Overlay de pantalla completa */
#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
}

/* Efecto de parpadeo */
.blink-text {
    animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
    50% { opacity: 0; }
}

/* Consola personalizada */
.console-box {
    background-color: #111 !important;
    box-shadow: inset 0 0 10px #000;
}

.log-success { color: #00ff00; }
.log-error { color: #ff3333; font-weight: bold; }
.log-info { color: #00ccff; }

/* Botón personalizado */
.btn-outline-success:hover {
    box-shadow: 0 0 15px #00ff00;
}

```

---

## 💻 Instrucciones del Desafío (Tu Trabajo)

Debes crear el archivo `script.js` y programar la lógica utilizando **Promesas**. El sistema debe simular un hackeo en 4 etapas. Si una falla, todo el proceso se detiene.

### Parte A: Las Funciones Asíncronas (Promesas)

Debes declarar **4 funciones** independientes. Cada una debe retornar una `new Promise`.

1. **`conectarAlServidor()`**
* **Tiempo:** 2 segundos (`setTimeout`).
* **Resultado:** Siempre es exitosa (`resolve`).
* **Mensaje:** Retorna *"Conexión establecida con el servidor Proxy..."*


2. **`bypasearFirewall()`**
* **Tiempo:** 3 segundos.
* **Probabilidad:** Genera un número aleatorio. Tiene un **20% de probabilidad de fallar**.
* **Éxito:** Retorna *"Firewall vulnerado. Acceso a puertos logrado."*
* **Fallo:** Retorna *"ERROR: Firewall detectó la intrusión. IP Bloqueada."* (`reject`).


3. **`inyectarPayload()`**
* **Tiempo:** 2 segundos.
* **Probabilidad:** **30% de probabilidad de fallar**.
* **Éxito:** Retorna *"Payload inyectado. Obteniendo privilegios de Admin..."*
* **Fallo:** Retorna *"ERROR: Antivirus detectó el Payload."* (`reject`).


4. **`descargarActivos()`**
* **Tiempo:** 4 segundos.
* **Probabilidad:** **40% de probabilidad de fallar** (La más difícil).
* **Éxito:** Retorna *"¡ÉXITO! Datos confidenciales descargados."*
* **Fallo:** Retorna *"ERROR: Conexión interrumpida durante la descarga."* (`reject`).



### Parte B: El Flujo Principal (DOM y Encadenamiento)

1. Captura los elementos del DOM: botón, lista de logs y el overlay.
2. Agrega un `EventListener` al botón.
3. Al hacer clic, realiza lo siguiente:
* Limpia la consola de logs.
* Muestra el **Overlay** (quitando la clase `d-none` y agregando `d-flex`).
* **Inicia la cadena de promesas:**
* Llama a la primera función.
* Usa `.then()` para recibir el mensaje de éxito, agregarlo a la consola (creando un `<li>`) y **retornar** la siguiente función.
* Repite el proceso para las 4 funciones de forma secuencial.


* **Manejo de Errores:** Usa un único `.catch()` al final. Si ocurre un error en *cualquier* etapa, muestra el mensaje de error en la consola con color rojo (clase CSS `.log-error`).
* **Finalización:** Usa `.finally()` para ocultar el Overlay (quitando `d-flex` y agregando `d-none`) cuando todo termine, ya sea bien o mal.



---

## 🚀 Entrega y Despliegue

1. **Git:** Inicializa un repositorio local, haz commit de tus 3 archivos.
2. **GitHub:** Crea un repositorio público llamado `hackers-loop-js` y sube tus cambios.
3. **GitHub Pages:** Activa GitHub Pages en la configuración del repositorio.
4. **Prueba:** Comparte el enlace generado. Deberíamos poder usar el simulador y ver cómo a veces ganamos y a veces perdemos (pantalla roja de error en logs).

**¡Que comience la intrusión! 🕵️‍♂️**