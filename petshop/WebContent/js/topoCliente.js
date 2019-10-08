// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYtdhCJW_A4nKXa5D3JwOwnvzhxC9bx5k",
    authDomain: "petshop-e2161.firebaseapp.com",
    databaseURL: "https://petshop-e2161.firebaseio.com",
    projectId: "petshop-e2161",
    storageBucket: "petshop-e2161.appspot.com",
    messagingSenderId: "1079690730674",
    appId: "1:1079690730674:web:da4c182fc65be875"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  const divLogin = document.querySelector("#divLogin");
  const topright = document.querySelector("#topright");
  const navBotao = document.querySelector("#navBotao");
  var user = auth.currentUser;
  
  auth.onAuthStateChanged(function(user){
    if(user==null){
    	navBotao.innerHTML = "<button class='btn btn-primary my-2 my-sm-0' id='loginButton'" +
    			"onclick='exibirPopup()'><i class='fas fa-user'></i>Entrar</button>";               
                                        
    }else{

    	if(user.uid=="HFTg31QioJMxqq5oxYbMCmMNit92"){
    		window.location.replace("graficos.jsp");
    	}else 
    	navBotao.innerHTML = "<input type='button' value='Sair' onclick='sair()'>";
    }    
  });
  
  function exibirPopup(){
	  document.getElementById('modal-wrapper').style.display='block';
  }

  function logar(){
    var email = document.querySelector("#uname");  
    var senha = document.querySelector("#psw");
    
    auth.signInWithEmailAndPassword(email.value, senha.value).then(
    		function(user){
    				email.value= "";
	    		    senha.value= "";
	    			document.getElementById('modal-wrapper').style.display='none';
    		}
    ).catch(function(e){
      console.log("Error: "+e);
    });
  }
  /*function sair(){
    auth.signOut();
  }*/



