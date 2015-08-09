/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	Handlebars.registerHelper('isFirst', function(context,opt) {
		//console.log("helper: ",context.data);
		return context.data.first ? context.fn() : "";
	});
	
	var hb = function(template,opts){
		var t= Handlebars.compile($("#"+template).html());
		return t(opts || {});
	};
	var $main = $("#main");
	var display = function(template,opts){
		return function(){
			var t= Handlebars.compile($("#"+template).html());
			$("#main").fadeOut(200,function(){
				$("#main").html(t(opts || {})).fadeIn(200);
				$('#two').poptrox({
					caption: function($a) { return $a.prev('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (skel.breakpoint('small').active ? 0 : 50)
				});

				$("#contactform").submit(function(e){
					var $f = $(e.currentTarget);
					var ob = {};
					$.each($f.serializeArray(), function(_, kv) {
						ob[kv.name] = kv.value;
					});
					console.log("form: ", $f, ob);
					$("#contactformerror").html('');
					$.post($f.get(0).action, ob, function(data, res, xq){
						console.log("form: ", $f.get(0).action, arguments);
						if(data.error != 0) $("#contactformerror").html(data.message);
						if(data.error == 0){
						$("#contactform").fadeOut(2000,function(){
							$("#contactformerror").html('<div style="color: green; font-size: 1.3em; border: 2px dashed gray; padding: 30px; margin: auto;"><strong>Merci!</strong> Votre message a été envoyé. J\'y répondrai dans les plus bref délais.</div>');

							})

						}
					}, "jsonp");
					return false;
				});

			});
		};
	};
	
	var router = new Simrou({
		"/" : display("page-home", {
			titre: "Freelance depuis 2012",
			maindesc: [
				"Fort d'une expérience de 12 ans dans les télécoms et réseaux, j'ai choisit de me reconvertir dans le développement. Ce n'était pas nouveau pour moi car dans chaque entreprise ou j'ai travaillé, j'ai régulièrement fait du développement à plus ou moins grande échelle, afin de répondre aux problématiques internes.",
				"Maintenant je propose mes services de développement d'interface web aux entreprises qui ont des besoins très spécifiques et pour lesquels elles ne trouvent pas de produits sur le marché. Mon expérience me permet de faire des propositions pertinentes, sans que l'entreprise n'aie besoin de formaliser ses attentes.",
				"J'utilise les nouvelles technologies à ma disposition afin de faire des applications toujours plus performantes et ergonomiques. J'adapte des templates pour le design et je peux m'interfacer avec un Web Designer au besoin."
			],
			demo: {
				titre: "Quelques exemples de mes réalisations",
				desc: "Il s'agit ici d'un petit aperçu, pour plus d'informations, veuillez me contacter.",
				foot: "La plupart de ces applications ont un backend en PHP et un frontend en HTML/Javascript. Je suis ouvert à toutes les nouveautés et je test régulièrement de nouvelles technologies, afin de toujours apporter la meilleur expérience utilisateur à mes clients.",
				articles: [
					{ titre: "FireFlux", image: "fireflux", width: "12u",
						desc: "Application de gestion de flux de firewalls. ",
						list: [
							"Affichage des flux entre les différents firewalls",
							"Import dans la base de données des fichiers de configurationd des firewalls",
							"Génération automatique des configuration, et envoi sur les équipements",
							"Gestion des droits utilisateurs (Active Directory)",
							"Gestion de templates de création de flux",
							"Regroupement des flux par Projets"
						] },
					{ titre: "KalliGraph", image: "kalligraph", width: "12u",
						desc: "Affichage de graphiques",
						list: [
							"Affichage de différents types de graphiques (Linear, Polar...) depuis la base de données",
							"Export des graphs sous différents formats",
							"gestion multi-utilisateurs et par groupes"
						]
					},
					{ titre: "ORO: Gestion de temps", image: "oro", width: "12u",
						desc: "Gestion de temps pour des équipes travaillant sur différents projets",
						list: [
							"Gestion multi-utilisateurs",
							"Génération de rapports d'activité",
							"Edition des projets"
						]
					},
					{ titre: "JPower", image: "jpower", width: "6u",
						desc: "Interface de provisionning de serveur DNS 'PowerDns'"
					},
					{ titre: "Outils de gestion Classe 4", image: "class4", width: "6u",
						desc: "Ensemble d'outils permettants d'administrer un réseau Voix",
						list: [
							"Configuration ENUM pour Class 4",
							"Import et analyse de configuration de l'Acme Packet",
							"Gestion des bases de données de routage"
						]
					}
				]
			}
		}),
		"/demo": display("page-demo"),
		"/photos" : display("page-photos",{"images": [ "image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg", "image05.jpg", "image06.jpg", "image07.jpg", "image08.jpg", "image09.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg" ]})
	});
	router.start("/");







	/**************/

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

})(jQuery);
