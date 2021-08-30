document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
  document.getElementById("nasc").value != "" &&
  document.getElementById("cep").value != "" &&
  document.getElementById("end").value != "" &&
  document.getElementById("cep").value != "" &&
  document.getElementById("num").value != "" &&
  document.getElementById("bairro").value != "" &&
  document.getElementById("cidade").value != "" &&
  document.getElementById("estado").value != "" &&
  document.getElementById("cel").value != "" &&
  document.getElementById("email").value != "" &&
  document.getElementById("profissao").value != "" &&
  document.getElementById("cpf").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha todos os campos obrigatórios*")
  }
}