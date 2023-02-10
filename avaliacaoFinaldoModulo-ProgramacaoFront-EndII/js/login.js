// Fazer cadastro do usuario
let allUser = JSON.parse(localStorage.getItem("allUser")) || [];

const userName = document.getElementById("userRegister");
const userPassword = document.getElementById("passwordRegister");
const userRepeatPassword = document.getElementById("repeatPasswordRegister");

function registerUser() {
  const checkUser = allUser.some((valor) => userName.value === valor.userName);
  if (checkUser) {
    return alert("Usuario já cadastrado!");
  }

  if (
    userName.value === "" ||
    userPassword.value === "" ||
    userRepeatPassword.value === ""
  ) {
    return alert("Todos os campos tem que ser prencidos!");
  }

  if (userPassword.value != userRepeatPassword.value) {
    return alert("A senhas devem ser iguais!");
  }

  const newUser = {
    userName: userName.value,
    userPassword: userPassword.value,
    logged: false,
    recados: [],
  };
  allUser.push(newUser);
  saveOnStorege();
  alert(
    "Usuario castrado com sucesso!\nVocê será redirecionado para a tela de login!"
  );
}

function saveOnStorege() {
  localStorage.setItem("allUser", JSON.stringify(allUser));
}
