class LogicaNegocio{
//resolve,reject)=>{}
    tomarPedido() {
        return new Promise((resolve, reject)=>{
            const erroComunicacion = Math.random() < 0.2;
            setTimeout(() => {
                if(erroComunicacion){
                    reject("No pudimos procesar tu pedido")
                }else{
                  resolve("Pedido recibido correctamente");
                }
                
            }, 1000);
        });
    }

    prepararMasa(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Masa estirada y salsa agregada");
            }, 1500);
        });
    }

    hornearPizza(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const seQuemo = Math.random() < 0.2;
                if(seQuemo){
                    reject("¡Humo en la cocina! La pizza se quemó 🔥");
                }else{
                    resolve("Pizza horneada y crujiente");                    
                }
            }, 2500);
        });
    }
    
    empaquetarPizza(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Pizza guardada en la caja y lista para entrega");
            }, 1000);
        });
    }
}