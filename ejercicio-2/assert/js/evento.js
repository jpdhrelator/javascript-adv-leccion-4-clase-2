const generarPedido = ()=>{
    
    divMensaje.innerHTML = '';
    resetSteps();

    mostrarOverlay(true, "Conectando con la cocina...");

    updateStepUI(1, 'active');
    const logicaNegcio= new LogicaNegocio();
    logicaNegcio.tomarPedido()
    .then((mensaje)=> {
        console.log(mensaje);
        updateStepUI(1,"done");
        
        // preparamos Paso 2
        mostrarOverlay(true,"Preparando ingredientes...");
        updateStepUI(2,"active");
        return logicaNegcio.prepararMasa();
    })
    .then((mensaje)=>{
        console.log(mensaje);
        updateStepUI(2,"done");

        // Preparamos Paso 3
        mostrarOverlay(true, "Horneando a 200°C...");
        updateStepUI(3, 'active');
        return logicaNegcio.hornearPizza();    
    })
    .then((mensaje)=>{
        console.log(mensaje);
        updateStepUI(3, 'done');
        
        // Preparamos Paso 4
        mostrarOverlay(true, "Empaquetando pedido...");
        updateStepUI(4, 'active');
        return logicaNegcio.empaquetarPizza();
    })
    .then((mensaje)=>{
        // FIN DEL ÉXITO
        console.log(mensaje);
        updateStepUI(4, 'done');
        mostrarAlerta("¡Proceso completo! Disfruta tu pizza 🍕", "success");    
    })
    .catch((error)=>{
        marcarErrorActual();
        mostrarAlerta(`Error en el proceso: ${error} `,"danger");
        console.error(error);
    })
    .finally(()=> mostrarOverlay(false));
}