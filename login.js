

function login(){

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user === "admin" && pass === "admin123"){

      
      window.location.href = "nextpage.html";

  }else{

    
      document.getElementById("errorBox").classList.remove("hidden");
      document.getElementById("defaultUser").classList.remove("hidden");
      document.getElementById("defaultPass").classList.remove("hidden");

  }

}

