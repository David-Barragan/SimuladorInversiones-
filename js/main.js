function inversion(){
    // 1. Ocultar la imagen y mostrar el panel con los datos de la simulacion
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");

    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    //2. Capturamos y mostramos los datos que no se capturan
    let campoNombres = document.getElementById("nombres").value;
    let campoEmail = document.getElementById("email").value;
    let nombresShow = document.getElementById("nombres-show");
    let emailShow = document.getElementById("email-show");

    nombresShow.innerText = campoNombres;
    emailShow.innerHTML = campoEmail;

    //3. Capturamos los datos de inversion y tiempo, creamos las variables de ganancia y ganancia total

    let inversion = parseFloat(document.getElementById("inversion").value);
    let tiempo = document.getElementById("tiempo").value;
    let gananciashow = document.getElementById("ganancia-show");
    let totalshow = document.getElementById("total-show");

    let ganancia = 0;
    let gananciaTotal = 0;

    //4. validamos y comparamos el tiempo de inversion, segun esto mostramos la ganancia, el total y los demas datos 
    
    
    switch (tiempo){
        case "1":

        ganancia = (inversion * 0.8/100) * 12;
        gananciaTotal = (inversion) + (ganancia);
        console.log(gananciaTotal)
        gananciashow.innerText = ganancia;
        totalshow.innerText = gananciaTotal;



            break;
        

        case "2":

        ganancia = (inversion * 1.3/100) * 24;
        gananciaTotal = parseInt(inversion) + parseInt(ganancia);

        gananciashow.innerText = ganancia;
        totalshow.innerText = gananciaTotal;



            break;



        case "3":

        ganancia = (inversion * 1.7/100) * 36;
        gananciaTotal = parseInt(inversion) + parseInt(ganancia);

        gananciashow.innerText = ganancia;
        totalshow.innerText = gananciaTotal;
  

            break;

    }
}