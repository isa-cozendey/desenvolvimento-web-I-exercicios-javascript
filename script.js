const botao = document.getElementById('editor');
const texto = document.getElementById('texto');
botao.addEventListener('click', () => {
	texto.style.color = 'red';
	texto.textContent = "O botão foi clicado e agora o texto foi modificado.";
});
