let promesa=new Promise(function(resolve,reject){
    let num:number=0;
    //se ejecuta de manera asincrona
    setTimeout(() => {
        console.log("entro al hilo pe varon");
        if(num===1)
            resolve();
        else
            reject();
    }, 1000);

});

console.log("¿Salgo primero o al final?");

promesa.then(function(){
    console.log("Termino Bien");
}, function(){
    console.log("Termino mal");
});
