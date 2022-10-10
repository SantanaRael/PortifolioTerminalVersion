let txt = document.getElementById("textarea");
let menu = "1 - Sobre mim \n2 - Portifólio \n3 - Contato\n4 - Tecnologias\n\n\n\n"
let conteudo =
	"Portifólio Pessoal [versão 2.0.2]\n(c) Israel Santana - 2022. Todos os direitos reservados.\n\n1 - Sobre mim \n2 - Portifólio \n3 - Contato\n4 - Tecnologias\n\n";
let i = 0;
let speed = 1;

txt.value.length; 
txt.focus();
txt.setSelectionRange(txt, txt);



typeWriter()

function typeWriter() {
  if (i < conteudo.length) {
    document.getElementById("textarea").value += conteudo.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

txt.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		let valor = txt.value.split("\n");
		var ultima_linha = valor.pop();
		switch (ultima_linha) {
			case "1":
				txt.value = menu +
					" Israel Santana**\n\nPossuo minha carreira desenvolvida na área de TI, atuando como suporte ao cliente, totalizando 4 anos de vivência na área. Atualmente estou concluindo uma graduação em Análise e desenvolvimento de sistemas, pela Universidade Paulista, com previsão de conclusão para Outubro de 2022.\n\nDomínio em desenvolvimento de sites e aplicativos para a internet. além disso, conhecimento de manutenção de hardware e software, adquirida durante o período que passei trabalhando de forma autônoma.\n ";
				break;
			case "2":
				txt.value = menu +
					"-------------------------------------\n**Este Portifólio**\n\nEsse portifólio foi desenvolvido para mostrar minhas experiencias.\n-------------------------------------\n\n\n-------------------------------------\n**Aplicativo Mensageiro**\n\nPagina que imita a interface de uma aplicativo mensageiro.\n-------------------------------------\n\n\n-------------------------------------\n**Calculadora**\n\nCalculadora foi feita para testar conceitos de css grid e Javascript.\n-------------------------------------\n\n\n-------------------------------------\n**Alien invasion**\n\nÉ um min-game cujo o objetivo é atirar na direção das naves invasoras utilizando o click ou as setas do teclado.\n--------------------------------------\n\n\n-------------------------------------\n**Site de cadastro**\n\nPagina web para desktop para realização de cadastro de pessoas.\n-------------------------------------\n\n\n-------------------------------------\n**Lista de tarefas**\n\nUma lista de tarefas simples que é possivel adicionar e apagar elementos da lista.\n-------------------------------------\n";
				break;
			case "3":
				txt.value = menu +
					" Linkedin**\n\nhttps://www.linkedin.com/in/israel-santana-489a341a3/\n\n\n**Github**\n\nhttps://github.com/SantanaRael\n ";
				break;
			case "4":
				txt.value = menu +
					" Front-End:**\n\nJavascript\nHTML\nCSS\nAngular\nBootstrap\nTypescript\n\n\n\n**Outras**\n\nASP.net core\nC\nC#\nAndroid Studio\nGit\nGithub\nSelenium\nCypress\nSQL Server\n\n ";
				break;

                default: txt.value = menu +
                    " Digite o numero das opções citadas acima**\n\n";
		}
	}
});