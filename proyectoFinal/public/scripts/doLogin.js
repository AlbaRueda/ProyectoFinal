async function doLogin(){
    const form = document.getElementById("form");
    let formData = new FormData(form);
    const body = new URLSearchParams(formData);
    const doLoginResult =await fetch("http://localhost:3000/login", {
        method: 'POST', 
        body: body
    });
    const loginResultJSON = await doLoginResult.json();
    if(loginResultJSON.isOk){
        window.location.href ="mispuntosEnviados.html";
    }
}

document.getElementById("enter").addEventListener("click", doLogin);
