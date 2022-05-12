//INSERE O CSS ANTES DE TUDO
$('head').append('<link rel="stylesheet" href="https://sonofix.com.br/assets/css/wppcss.css?v=3">');

jQuery(document).ready(function($){

	var menuhtml = ''+
	  '<div class="FloatWhatsapp">'+
		'<div class="options" class="display:none;">'+
		  '<span title="(x) Clique para fechar">O que você deseja? <b class="close-option" aria-hidden="true">×</b></span>'+
		  '<ul>'+
			'<li><a class="botao-ver-precos" data-open="ver-preco" aria-controls="ver-preco" aria-haspopup="true" tabindex="0">Ver Preços <img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>'+
			'<li><a class="botao-ver-prazo" data-open="ver-prazo" aria-controls="ver-prazo" aria-haspopup="true" tabindex="0">Ver Prazo de Entrega <img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>'+
			'<li><a class="botao-comprar-cartao" data-open="comprar-cartao" aria-controls="comprar-cartao" aria-haspopup="true" tabindex="0">Comprar no Cartão <img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>'+
			'<li><a class="botao-comprar-boleto" data-open="comprar-boleto" aria-controls="comprar-boleto" aria-haspopup="true" tabindex="0">Comprar no Boleto à Vista<img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>       '+
			'<li><a class="botao-rastrear" href="https://pedidos.store/pedidos/?produto='+produto+'" target="_black">Rastrear Minha Compra <img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>'+
			'<li id="botao-ainda-duvida" style="display:block"><a class="botao-ainda-duvida" target="_black" href="https://api.whatsapp.com/send?phone='+telefonewpp+'&amp;text=Eu%20Quero%20Saber%20Mais%20Sobre%20o%20*'+produto+'*!">Falar com um Atendente <img src="data:image/svg+xml;base64,                  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyICAgIGMtMTAuNDkyLDEwLjUwNC0xMC40OTIsMjcuNTc2LDAsMzguMDY0TDI5My4zOTgsMjQ1LjlsLTE4NC4wNiwxODQuMDZjLTUuMDY0LDUuMDY4LTcuODYsMTEuODI0LTcuODYsMTkuMDI4ICAgIGMwLDcuMjEyLDIuNzk2LDEzLjk2OCw3Ljg2LDE5LjA0bDE2LjEyNCwxNi4xMTZjNS4wNjgsNS4wNjgsMTEuODI0LDcuODYsMTkuMDMyLDcuODZzMTMuOTY4LTIuNzkyLDE5LjAzMi03Ljg2TDM4Mi42NzgsMjY1ICAgIGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzc3Nzc3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" style="width: 8px;float: right;margin: 0;margin-top: 9px;"></a></li>'+
		  '</ul>'+
		'</div>'+
		'<a class="FloatWhatsappBT"><img src="data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMwOCAzMDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwOCAzMDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGcgaWQ9IlhNTElEXzQ2OF8iPgoJPHBhdGggaWQ9IlhNTElEXzQ2OV8iIGQ9Ik0yMjcuOTA0LDE3Ni45ODFjLTAuNi0wLjI4OC0yMy4wNTQtMTEuMzQ1LTI3LjA0NC0xMi43ODFjLTEuNjI5LTAuNTg1LTMuMzc0LTEuMTU2LTUuMjMtMS4xNTYgICBjLTMuMDMyLDAtNS41NzksMS41MTEtNy41NjMsNC40NzljLTIuMjQzLDMuMzM0LTkuMDMzLDExLjI3MS0xMS4xMzEsMTMuNjQyYy0wLjI3NCwwLjMxMy0wLjY0OCwwLjY4Ny0wLjg3MiwwLjY4NyAgIGMtMC4yMDEsMC0zLjY3Ni0xLjQzMS00LjcyOC0xLjg4OGMtMjQuMDg3LTEwLjQ2My00Mi4zNy0zNS42MjQtNDQuODc3LTM5Ljg2N2MtMC4zNTgtMC42MS0wLjM3My0wLjg4Ny0wLjM3Ni0wLjg4NyAgIGMwLjA4OC0wLjMyMywwLjg5OC0xLjEzNSwxLjMxNi0xLjU1NGMxLjIyMy0xLjIxLDIuNTQ4LTIuODA1LDMuODMtNC4zNDhjMC42MDctMC43MzEsMS4yMTUtMS40NjMsMS44MTItMi4xNTMgICBjMS44Ni0yLjE2NCwyLjY4OC0zLjg0NCwzLjY0OC01Ljc5bDAuNTAzLTEuMDExYzIuMzQ0LTQuNjU3LDAuMzQyLTguNTg3LTAuMzA1LTkuODU2Yy0wLjUzMS0xLjA2Mi0xMC4wMTItMjMuOTQ0LTExLjAyLTI2LjM0OCAgIGMtMi40MjQtNS44MDEtNS42MjctOC41MDItMTAuMDc4LTguNTAyYy0wLjQxMywwLDAsMC0xLjczMiwwLjA3M2MtMi4xMDksMC4wODktMTMuNTk0LDEuNjAxLTE4LjY3Miw0LjgwMiAgIGMtNS4zODUsMy4zOTUtMTQuNDk1LDE0LjIxNy0xNC40OTUsMzMuMjQ5YzAsMTcuMTI5LDEwLjg3LDMzLjMwMiwxNS41MzcsMzkuNDUzYzAuMTE2LDAuMTU1LDAuMzI5LDAuNDcsMC42MzgsMC45MjIgICBjMTcuODczLDI2LjEwMiw0MC4xNTQsNDUuNDQ2LDYyLjc0MSw1NC40NjljMjEuNzQ1LDguNjg2LDMyLjA0Miw5LjY5LDM3Ljg5Niw5LjY5YzAuMDAxLDAsMC4wMDEsMCwwLjAwMSwwICAgYzIuNDYsMCw0LjQyOS0wLjE5Myw2LjE2Ni0wLjM2NGwxLjEwMi0wLjEwNWM3LjUxMi0wLjY2NiwyNC4wMi05LjIyLDI3Ljc3NS0xOS42NTVjMi45NTgtOC4yMTksMy43MzgtMTcuMTk5LDEuNzctMjAuNDU4ICAgQzIzMy4xNjgsMTc5LjUwOCwyMzAuODQ1LDE3OC4zOTMsMjI3LjkwNCwxNzYuOTgxeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPHBhdGggaWQ9IlhNTElEXzQ3MF8iIGQ9Ik0xNTYuNzM0LDBDNzMuMzE4LDAsNS40NTQsNjcuMzU0LDUuNDU0LDE1MC4xNDNjMCwyNi43NzcsNy4xNjYsNTIuOTg4LDIwLjc0MSw3NS45MjhMMC4yMTIsMzAyLjcxNiAgIGMtMC40ODQsMS40MjktMC4xMjQsMy4wMDksMC45MzMsNC4wODVDMS45MDgsMzA3LjU4LDIuOTQzLDMwOCw0LDMwOGMwLjQwNSwwLDAuODEzLTAuMDYxLDEuMjExLTAuMTg4bDc5LjkyLTI1LjM5NiAgIGMyMS44NywxMS42ODUsNDYuNTg4LDE3Ljg1Myw3MS42MDQsMTcuODUzQzI0MC4xNDMsMzAwLjI3LDMwOCwyMzIuOTIzLDMwOCwxNTAuMTQzQzMwOCw2Ny4zNTQsMjQwLjE0MywwLDE1Ni43MzQsMHogICAgTTE1Ni43MzQsMjY4Ljk5NGMtMjMuNTM5LDAtNDYuMzM4LTYuNzk3LTY1LjkzNi0xOS42NTdjLTAuNjU5LTAuNDMzLTEuNDI0LTAuNjU1LTIuMTk0LTAuNjU1Yy0wLjQwNywwLTAuODE1LDAuMDYyLTEuMjEyLDAuMTg4ICAgbC00MC4wMzUsMTIuNzI2bDEyLjkyNC0zOC4xMjljMC40MTgtMS4yMzQsMC4yMDktMi41OTUtMC41NjEtMy42NDdjLTE0LjkyNC0yMC4zOTItMjIuODEzLTQ0LjQ4NS0yMi44MTMtNjkuNjc3ICAgYzAtNjUuNTQzLDUzLjc1NC0xMTguODY3LDExOS44MjYtMTE4Ljg2N2M2Ni4wNjQsMCwxMTkuODEyLDUzLjMyNCwxMTkuODEyLDExOC44NjcgICBDMjc2LjU0NiwyMTUuNjc4LDIyMi43OTksMjY4Ljk5NCwxNTYuNzM0LDI2OC45OTR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="></a>'+
	  '</div>';
	
	var modalshtml = ''+

	  '<div class="reveal custom" id="ver-preco" data-reveal>'+
		  '<div class="display-flex">'+
			  '<div class="flex">'+
				  '<h5>Ver Preços</h5>'+
			  '</div>'+
			  '<div>'+
				  '<button data-close aria-label="Close modal" title="(x) Clique para fechar" type="button"><span aria-hidden="true">&times;</span></button>'+
			  '</div>'+
		  '</div>'+
		  '<div class="content">'+
			  '<p>'+preco+'</p>'+
		  '</div>'+
	  '</div>'+

	  '<div class="reveal custom" id="ver-prazo" data-reveal>'+
		  '<div class="display-flex">'+
			  '<div class="flex">'+
				  '<h5>Ver Prazo</h5>'+
			  '</div>'+
			  '<div> <button data-close aria-label="Close modal" title="(x) Clique para fechar" type="button"><span aria-hidden="true">&times;</span></button></div>'+
		  '</div>'+
		  '<div class="content">'+
			  '<p>Os prazos de entrega do '+produto+' são:</p>'+
			  '<ul>'+
				  '<li>Regiões Sul e Sudeste: até 7 dias úteis*</li>'+
				  '<li>Regiões Centro-Oeste e Nordeste: até 10 dias úteis*</li>'+
				  '<li>Região Norte: até 15 dias úteis*</li>'+
			  '</ul>'+
			  '<p>'+
				  '* após processamento do pagamento que pode ser de até 72 horas.'+
			  '</p>'+
			  '<p><a id=\"btnkits\" href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha um dos nossos kits disponíveis.</p>'+
		  '</div>'+
	  '</div>'+

	  '<div class="reveal custom" id="comprar-cartao" data-reveal>'+
	  '<div class="display-flex">'+
		  '<div class="flex">'+
			  '<h5>Comprar no cartão</h5>'+
		  '</div>'+
		  '<div> <button data-close aria-label="Close modal" title="(x) Clique para fechar" type="button"><span aria-hidden="true">&times;</span></button></div>'+
	  '</div>'+
	  '<div class="content">'+
		  '<p>Nós parcelamos em até 12x nos cartões de crédito. <a  id=\"btnkits\" href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha o seu kit.</p>'+
		  '<p>Não esqueça de após digitar os dados do cartão de crédito escolher o número de parcelas desejada.</p>'+
		  '<p>Entregamos sua compra no endereço cadastrado no pedido.</p>'+
	  '</div>'+
	  '</div>'+

	  '<div class="reveal custom" id="comprar-boleto" data-reveal>'+
	  '<div class="display-flex">'+
		  '<div class="flex">'+
			  '<h5>Comprar no boleto</h5>'+
		  '</div>'+
		  '<div> <button data-close aria-label="Close modal" title="(x) Clique para fechar" type="button"><span aria-hidden="true">&times;</span></button></div>'+
	  '</div>'+
	  '<div class="content">'+
		  '<p>Nós boleto bancário para pagamento à vista. <a id=\"btnkits\" href=\"#kits\" style=\"color:red;font-weight:700;\">Clique aqui</a> e escolha o seu kit.</p>'+
		  '<p>Entregamos sua compra no endereço cadastrado no pedido.</p>'+
	  '</div>'+
	  '</div>';

    //INSERE HTML
    $('body').append(menuhtml);
    $('body').append(modalshtml);  
    

    //SE FOR FOUNDATION INSTACIA OS ELEMENTOS
    if(typeof $(document).foundation === "undefined"){
        //NAO É FUUNDATION
    }else{
        //É FOUNDATION
        $('[data-open]').each(function(index, elem){
            var elemcertowpp = $(elem).data('open');
            $('#'+elemcertowpp).foundation();
            //console.log(elemcertowpp);
        })
    }

    $( '.link-modal' ).click( function(){
        id = $( this ).attr( 'data-target' );
        $( id ).modal({
            keyboard: false
        })					
    })

    $('.FloatWhatsappBT, .options span, .btduvidas').on('click',function(){
      $('.options').slideToggle("fast");
    });

    
    $( 'body' ).on('click','a#btnkits', function(){
        if(typeof $(document).foundation !== "undefined"){
            var m = $(this).parent().parent().parent();
            $('#'+m.attr('id')).foundation('close');
        }
    })

  var textoProduto = 'Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20'+produto+'.';

  var now = new Date

  if (wpp247 === 1 || ((now.getHours () >= 9 && now.getHours () < 18) && (now.getDay () > 0 && now.getDay() < 6))) {

    $(".FloatWhatsapp").attr('style', 'display:block');
    $(".FloatWhatsappBT").attr('style', 'display:block');
    //$('.FloatWhatsappBT').attr('href', 'https://api.whatsapp.com/send?phone='+telefonewpp+'&text='+textoProduto);

  } else {

    $(".FloatWhatsapp").attr('style', 'display:none');
    $(".FloatWhatsappBT").attr('style', 'display:none');
    $(".botao-ainda-duvida").attr('style', 'display:none');
    $("#botao-ainda-duvida").attr('style', 'display:none');

  }


});