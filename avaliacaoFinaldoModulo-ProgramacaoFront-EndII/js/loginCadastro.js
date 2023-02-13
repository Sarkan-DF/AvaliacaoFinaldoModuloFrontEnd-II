// ***Inicio Cadastro*** //
let allUser = JSON.parse(localStorage.getItem("allUser")) || [];

const userName = document.getElementById("userRegister");
const userPassword = document.getElementById("passwordRegister");
const userRepeatPassword = document.getElementById("repeatPasswordRegister");

const alerta = document.getElementById("alerta");
const alerta1 = new bootstrap.Toast(alerta);

function registerUser() {
  const checkUser = allUser.some((valor) => userName.value === valor.userName);
  if (checkUser) {
    alerta.children[0].innerHTML = "Usuario já cadastrado!";
    return alerta1.show();
  }

  if (
    userName.value === "" ||
    userPassword.value === "" ||
    userRepeatPassword.value === ""
  ) {
    alerta.children[0].innerHTML = "Todos os campos tem que ser prencidos!";
    return alerta1.show();
  }

  if (userPassword.value != userRepeatPassword.value) {
    alerta.children[0].innerHTML = "A senhas devem ser iguais!";
    return alerta1.show();
  }

  const newUser = {
    userName: userName.value,
    userPassword: userPassword.value,
    logged: false,
    recados: [],
  };
  allUser.push(newUser);
  saveOnStorege();
  alerta.children[0].innerHTML = "Usuario castrado com sucesso!";
  return alerta1.show();
}

function saveOnStorege() {
  localStorage.setItem("allUser", JSON.stringify(allUser));
}
// ***Fim Cadastro*** //

// ***Inicio Login*** ///

const userNameLogin = document.getElementById("usuarioLogin");
const userPasswordLogin = document.getElementById("passwordLogin");

function login() {
  const checkUser = allUser.find(
    (valor) =>
      valor.userName === userNameLogin.value &&
      valor.userPassword === userPasswordLogin.value
  );

  if (checkUser) {
    checkUser.logged = true;
    sessionStorage.setItem("loggedUser", JSON.stringify(checkUser));
    window.location.href = "recados.html";
  } else {
    alerta.children[0].innerHTML = "Usuario ou senha incorreta!";
    return alerta1.show();
  }
}

// ***Fim Login*** ///

// colocar funcionabilidade de limpar campos!
// alert(document.getElementById("userRegister").reset());
