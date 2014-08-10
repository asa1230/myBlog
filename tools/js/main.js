$(document).ready(function() {

		//cambio de idioma rápido
			// sin no lo hay va a "en"
			// si lo hay va al correspondiente o a "en"
			// si hago clic en el idioma
			
			$('#lang a').click(function() {
				var new_lang = $(this).attr('class');
				$('#lang li').removeClass('sel');
				$(this).parent('li').addClass('sel');
				$('article').hide();
				$('article').each(function(index) {
					if ($(this).hasClass(new_lang)){
						$(this).show();
					}
				});
			});
			
			// detectar si hay #algo
			var actual = location.href;
			var change = actual.search('#');
			if (change > 0){
				var param = actual.split('#');
				$('article').hide();
				switch(param[1])
				{
				case 'es':
					$('#lang a.es').click();
					break;
				case 'en':
					$('#lang a.en').click();
					break;
				case 'jp':
					$('#lang a.jp').click();
					break;
				default:
					$('#lang a.en').click();
				}
			}
			
			
	});