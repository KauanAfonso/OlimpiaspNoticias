function adiantar(){
    var mesAtual = document.getElementById('mes');

    switch(mesAtual.innerHTML){
        case "Novembro 2023":
            mesAtual.innerHTML = "Dezembro 2023"
            break;
        case "Outubro 2023":
            mesAtual.innerHTML = "Novembro 2023"
            break;
        case "Setembro 2023":
            mesAtual.innerHTML = "Outubro 2023";
            break;
        case "Agosto 2023":
            mesAtual.innerHTML = "Setembro 2023";
            break;
        case "Julho 2023":
            mesAtual.innerHTML = "Agosto 2023";
            break;
        case "Junho 2023":
            mesAtual.innerHTML = "Julho 2023";
            break;
        case "Maio 2023":
            mesAtual.innerHTML = "Julho 2023";
            break;
        case "Março 2023":
            mesAtual.innerHTML = "Maio 2023";
            break;
        case "Fevereiro 2023":
            mesAtual.innerHTML = "Março 2023";
            break;
        case "Janeiro 2023":
            mesAtual.innerHTML = "Fevereiro 2023";
            break;
        
    }
}



	function voltar(){
    var mesAtual = document.getElementById('mes');

	switch(mesAtual.innerHTML){
        case "Dezembro 2023":
            mesAtual.innerHTML = "Novembro 2023"
            break;
		case "Novembro 2023":
			mesAtual.innerHTML = "Outubro 2023"
			break;
		case "Outubro 2023":
			mesAtual.innerHTML = "Setembro 2023"
			break;
		case "Setembro 2023":
			mesAtual.innerHTML = "Agosto 2023"
			break;
		case "Agosto 2023":
			mesAtual.innerHTML = "Julho 2023"
			break;
        case "Julho 2023":
			mesAtual.innerHTML = "Junho 2023"
			break;
		case "Junho 2023":
			mesAtual.innerHTML = "Maio 2023"
			break;
		case "Maio 2023":
			mesAtual.innerHTML = "Abril 2023"
			break;
         case "Abril 2023":
			mesAtual.innerHTML = "Março 2023"
			break;
		case "Março 2023":
			mesAtual.innerHTML = "Fevereiro 2023"
			break;
		case "Fevereiro 2023":
			mesAtual.innerHTML = "Janeiro 2023"
			break;
	}
    
    // if(mesAtual.innerHTML == "Novembro 2023"){
    //     mesAtual.innerHTML = "Outubro 2023";
    // }

	console.log(mesAtual);}


    function AdicionarConteudo() {
        // Correção 1: Use document.querySelectorAll para obter uma lista de elementos
        var conteudo = document.querySelectorAll('.day');
    
        // Correção 2: Crie um novo elemento de input
        var inputNovoElemento = document.createElement('input');
        inputNovoElemento.type = "text";  // Correção 3: Defina o tipo de input para texto
    
        inputNovoElemento.addEventListener('keyup', function(event){
            // Correção 4: Verifique se a tecla pressionada foi "Enter" usando event.key
            if(event.key === "Enter"){
                // Correção 5: Use conteudo[0] para obter o primeiro elemento da lista
                conteudo[0].innerHTML = inputNovoElemento.value;
                // Correção 6: Remova o inputNovoElemento do conteudo[0] (primeiro elemento da lista)
                conteudo[0].removeChild(inputNovoElemento);
            }
        });
    
        // Correção 7: Adicione o inputNovoElemento ao conteudo[0] (primeiro elemento da lista)
        conteudo[0].appendChild(inputNovoElemento);
    
        // Correção 8: Remova esta chave extra que está sobrando
        // inputNovoElemento.focus();
    }


    
    

