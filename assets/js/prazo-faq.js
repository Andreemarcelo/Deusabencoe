var prazo = "7 dias";
var prazoMaximo = "12 dias";

var fraseKit = "Até "+prazo+" úteis para todo Brasil*";
var preco = "Os preços variam de R$217 a R$487, de acordo com o kit desejado. <a id=\"btnkits\" href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha um dos nossos 3 kits disponíveis.";
var prazoFrase = "O prazo médio de entrega para a região sudeste é de até "+prazo+" úteis. Para as demais regiões, o prazo de entrega é de até '+prazoMaximo+' dias úteis, normalmente sendo entregue antes.<br>*O prazo passa a valer após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto."

var faq = [
	{
		'p': "Quais são os preços?",
		'r': "Os preços variam de R$217 a R$487, de acordo com o kit desejado. <a href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha um dos nossos 3 kits disponíveis."
	},{
		'p': "Como comprar?",
		'r': "<a href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha um dos nossos 3 kits disponíveis. Ao encontrar aquele que melhor te atende, clique no botão verde \"Comprar Agora\" para ser direcionado a etapa de pagamento."
	},{
		'p': "Quais as medidas do SonoFix?",
		'r': "O travesseiro SonoFix possui 11cm de altura, 40cm de largura e 60cm de comprimento, atendendo perfeitamente homens e mulheres de qualquer peso e estatura."
	},{
		'p': "De qual material é feito?",
		'r': "A base do SonoFix é feita de espuma de memória em poliuretano, um material que nunca deforma e sempre volta ao seu estado original. Já a parte externa é 100% algodão hipoalergênico (não causa alergia)."
	},{
		'p': "A capa é fixa ou removível?",
		'r': "A capa é removível e pode ser lavada normalmente."
	},{
		'p': "Qual é a durabilidade do SonoFix?",
		'r': "A durabilidade do SonoFix vai de acordo com o bom uso de cada cliente, mas a grande maioria utiliza o produto há mais de 5 anos, sem relatar problemas."
	},{
		'p': "O SonoFix pode ser usado por todas as idades?",
		'r': "Sim! O Travesseiro Ortopédico da SonoFix pode ser usado desde crianças ( a partir de 06 de idade), adultos e até idosos."
	},{
		'p': "Quais são as formas de pagamento?",
		'r': "Nós parcelamos em até 12x nos cartões de crédito e aceitamos também boleto bancário para pagamento à vista. <a href=\"#kits\" style=\"color:#0c8140;font-weight:700;\">Clique aqui</a> e escolha o seu kit."
	},{
		'p': "Posso lavar o SonoFix?",
		'r': "A base do travesseiro não deve ser lavada. Recomendamos lavar apenas a capa removível que acompanha o travesseiro."
	},{
		'p': "Grávidas podem usar?",
		'r': "Sim, não existe nenhuma restrição para grávidas, inclusive é um produto recomendado pois é um período em que algumas dores podem incomodar e atrapalhar o sono."
	},{
		'p': "Possui loja física? tem algum representante na minha cidade?",
		'r': "O SonoFix está disponível para venda apenas através do nosso site oficial, e não é vendido em lojas físicas. Essa foi uma estratégia que adotamos para reduzir o preço para você, consumidor final, eliminando os custos com lojas, distribuidores e revendedores. Esse inclusive é outro grande diferencial, no qual superamos nossos principais concorrentes tanto na qualidade como também no preço."
	},{
		'p': "Entrega na minha cidade?",
		'r': "Sim. Entregamos em todo Brasil através de diversas transportadoras e Correios."
	},{
		'p': "Tem alguma garantia?",
		'r': "Confiamos tanto na qualidade do SonoFix que oferecemos uma Garantia incondicional de 1 ano, registrada em cartório. Durante 1 ano, se você não sentir nenhum resultado com o SonoFix, se suas dores e seu sono não melhorarem, então basta enviar um e-mail para o nosso SAC (contato@sonofix.com.br), que devolveremos 100% do dinheiro pago. Sem perguntas e sem burocracia."
	},{
		'p': "Vai Funcionar pra mim?",
		'r': "O tempo de adaptação recomendado para que seu corpo se acostume ao travesseiro, é de 7 dias, porém, os resultados podem ser sentidos a partir do primeiro dia de uso."
	},{
		'p': "É necessário por meus dados nesse site?",
		'r': "Sim. Precisamos dos dados para que sua compra seja validada e o produto entregue corretamente em sua casa."
	},{
		'p': "Depois de pago como faço para acompanhar o envio?",
		'r': "Após a confirmação do pagamento, você receberá em seu e-mail, e também no seu Whatsapp, uma mensagem da nossa equipe com os dados da sua compra e o código de rastreio da transportadora. Com essas informações você poderá acompanhar a entrega do SonoFix à qualquer momento."
	},{
		'p': "É seguro comprar nesse site?",
		'r': "Sim! Você poderá verificar que este site possui o cadeado no topo, garantindo que a transação é totalmente segura."
	},{
		'p': "Qual prazo de entrega?",
		'r': "O prazo médio de entrega para a região sudeste é de até 7 dias úteis. Para as demais regiões, o prazo de entrega é de até 12 dias úteis, normalmente sendo entregue antes.<br>*O prazo passa a valer após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto."
	}
]

faq.forEach(element => {

	var faqhtml = ''+
	'<li class="accordion-item" data-accordion-item> <a href="#" class="accordion-title">'+element.p+'</a>'+
		'<div class="accordion-content" data-tab-content>'+
			'<p>'+element.r+'</p>'+
		'</div>'+
	'</li>';

	$('.accordion').append(faqhtml);

});

$('.accordion').foundation('_destroy');
var options = {'data-allow-all-closed':true}
var elem = new Foundation.Accordion($('.accordion'), options);

////////////////

$(".prazo-frete").each(function(element) {
	$(this).html(fraseKit);
});

$("#faqprazo").html(prazo);
$("#faqprazoate").html(prazoMaximo);