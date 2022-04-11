/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Languages */
var deflg = window.navigator.userLanguage || window.navigator.language;
var lstlg = localStorage.getItem("language");
//la lange par defaut est l'anglais, sauf si le nav est fr, ou la dernière langue utilisée etait fr
var firstlg = (/^fr/.test(lstlg || deflg)) ? "fr" : "en";

var LG_fr = {
	language: "fr",
	titre: "Freelance depuis 2012",
	maindesc: [
		"Fort d'une expérience de 12 ans dans le déploiement, <b>l'exploitation et l'ingénierie des télécoms et réseaux</b>, en 2012 j'ai choisi de me reconvertir dans le développement. Ce n'était pas nouveau pour moi car dans chaque entreprise où j'ai travaillé, j'ai régulièrement fait du développement à plus ou moins grande échelle, afin de répondre aux problématiques internes",
		"J'étais toujours le \"<b>DevOps</b>\"!",
		"Maintenant je propose mes services de <b>développement d'interface web et de mise en place de process devops</b> aux entreprises qui ont des besoins très spécifiques et pour lesquels elles ne trouvent pas de produits sur le marché. Mon expérience me permet de faire des propositions pertinentes, sans que l'entreprise n'ait besoin de formaliser ses attentes.",
		"J'utilise les nouvelles technologies à ma disposition afin de faire des applications toujours plus performantes et ergonomiques. J'adapte des templates pour le design et je peux m'interfacer avec un Web Designer au besoin."
	],
	header: { fonction: "Développeur Web Fullstack/DevOps"},
	stack: {
		titre: "Ma \"Stack\"",
		desc: "Voici une liste non exhaustive des outils et technos que j'aime utiliser:",
		list: [
			{
				type: "FrontEnd",
				items: ["HTML/Css", "Javascript", "React", "NextJs", "Gatsby", "Chakra-ui"]
			},
			{
				type: "Devops",
				items: ["Linux", "Docker", "AWS (EC2, ECS, Lambda functions, …)", "Firebase", "Gitlab CI", "Ansible"]
			},
			{
				type: "Backend",
				items: ["NodeJs", "Python (FastAPI)", "Php"]
			},
			{
				type: "Bases de données",
				items: ["MongoDB", "MySql", "Athena (AWS)"]
			}
		]
	},
	demo: {
		titre: "Quelques exemples de mes réalisations",
		desc: "Il s'agit ici d'un petit aperçu, pour plus d'informations, veuillez me contacter.",
		foot: "La plupart de ces applications ont un backend en <b>PHP ou NodeJs</b> et un frontend en <b>HTML/Javascript/React</b>. Je suis ouvert à toutes les nouveautés et je teste régulièrement de nouvelles technologies, afin de toujours apporter la meilleur expérience utilisateur à mes clients.",
		articles: [
			{ titre: "BTH", image: "bth", width: "12u",
				desc: "Application de gestion de parc techniques",
				list: [
					"Multi utilisateur, reliée à un Active Directory",
					"Multi-langues: Français, anglais, italien",
					"Reactif, mobile first",
					"API de provisionning des serveurs DNS et DHCP sous windows",
					"Architecture déportée avec plusieurs Poolers",
					"Audits d'analyse d'erreurs sur le parc, avec correction automatique",
					"Configuration des équipements réseaux via SNMP",
					"Meteor, React, Nodejs, Mongodb, SemanticUI, ES6."
				] },
			{ titre: "BeloteNotDead", image: "belote", width: "12u",
				desc: "Application de gestion de tournois de belote pour l'association BeloteNotDead",
				list: [
					"Application web et mobile",
					"Affichage des scores en temps réel",
					"Gestion utilisateurs",
					"Module Admin",
					'<a href="https://tournois.tk" target="_blank">Tournois.tk</a>',
					'<a href="https://play.google.com/store/apps/details?id=fr.frpz.bndmobileapp" target="_blank">PlayStore</a>',
					"Meteor, React, ReactNative, Nodejs, Mongodb."
				] },
			{ titre: "FireFlux", image: "fireflux", width: "12u",
				desc: "Application de gestion de flux de firewalls. ",
				list: [
					"Affichage des flux entre les différents firewalls",
					"Import dans la base de données des fichiers de configuration des firewalls",
					"Génération automatique des configuration, et envoi sur les équipements",
					"Gestion des droits utilisateurs (Active Directory)",
					"Utilisation de templates de création de flux",
					"Regroupement des flux par Projets",
					"PHP, MySql, Angular 1, React, JqueryUI, SemanticUI, Ansible"
				] },
			{ titre: "KalliGraph", image: "kalligraph", width: "12u",
				desc: "Affichage de graphiques",
				list: [
					"Affichage de différents types de graphiques (Linear, Polar...) depuis la base de données",
					"Export des graphs sous différents formats (pdf, jpeg, xml)",
					"Multi-utilisateurs et multi-groupes",
					"PHP, MySql, Bootstrap, HighCharts"
				]
			},
			{ titre: "ORO: Gestion de temps", image: "oro", width: "12u",
				desc: "Application de Time Managment pour des équipes travaillant sur différents projets",
				list: [
					"Multi-utilisateurs",
					"Génération de rapports d'activité",
					"Edition des projets",
					"PHP, MySql, JqueryUI"
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
					"Configuration des bases de données de routage",
					"PHP, MySql, JqueryUI"
				]
			}
		]
	},
	contact : {
		intro   : "N'hésitez pas à me contacter pour un devis gratuit, je vous répondrai rapidement, à votre convenance par mail ou par téléphone.",
		nom     : "Nom",
		email   : "Email",
		societe : "Société",
		tel     : "Téléphone (facultatif)",
		message : "Message",
		envoyer : "Envoyer",
		encours : "Envoi en cours...",
		envoiok : "<strong>Merci!</strong> Votre message a été envoyé. J'y répondrai dans les plus bref délais."
	}
};
var LG_en = {
	language: "en",
	titre: "Freelance since 2012",
	maindesc: [
		"After 12 years in telecom and network deployement, engineering and devops, I have decided to switch to development. It wasn't all new to me because in every company I've worked for, I often had to do some code to adjust to the internal requirements.",
		"I've always been a \"DevOps\" in spirit!",
		"Now, based in Paris (France), I develop web interfaces setup devops processes for companies with very specific needs for which they can't find any products on the market. My experience enables me to do many relevant propositions, without the need for the clients to write any specifications.",

		"I use new technologies in order to make applications more effective and ergonomic. I adapt templates for design and I can also work with your web designer if necessary."
	],
	header: { fonction: "Fullstack Web Developer/DevOps"},
	stack: {
		titre: "My \"Stack\"",
		desc: "Here is a quick list of the tools and technologies I like to use",
		list: [
			{
				type: "FrontEnd",
				items: ["HTML/Css", "Javascript", "React", "NextJs", "Gatsby", "Chakra-ui"]
			},
			{
				type: "Devops",
				items: ["Linux", "Docker", "AWS (EC2, ECS, Lambda functions, …)", "Firebase", "Gitlab CI", "Ansible"]
			},
			{
				type: "Backend",
				items: ["NodeJs", "Python (FastAPI)", "Php"]
			},
			{
				type: "Databases",
				items: ["MongoDB", "MySql", "Athena (AWS)"]
			}
		]
	},
	demo: {
		titre: "Some samples of my work",
		desc: "It's only a small snoop of my work, for more information please contact me.",
		foot: "Most of these applications have a <b>PHP or NodeJs</b> backend and a <b>HTML/javascript/React</b> frontend. I am open to new technologies that I test very often so I can always improve my customers' user experience.",
		articles: [
			{ titre: "BTH", image: "bth", width: "12u",
				desc: "Technical auto pools management app",
				list: [
					"Multi-users: linked to an Active Directory server",
					"Multi-language: French, english, italian",
					"Reactif, mobile first",
					"Commitionning API for DNS and DHCP windows servers",
					"Deported achitechture with many poolers",
					"Audits to analyse errors in the park, with an automated correction of errors.",
					"Network equipments setup via SNMP",
					"Meteor, React, Nodejs, Mongodb, SemanticUI, ES6."
				] },
			{ titre: "Belote", image: "belote", width: "12u",
				desc: "Belote tournement management app for beloteNotDead",
				list: [
					"Web and Mobile app",
					"Real time score display",
					"User management",
					"Admin Module",
					'<a href="https://tournois.tk" target="_blank">Tournois.tk</a>',
					'<a href="https://play.google.com/store/apps/details?id=fr.frpz.bndmobileapp" target="_blank">PlayStore</a>',
					"Meteor, React ReactNative, Nodejs, Mongodb."
				] },
			{ titre: "FireFlux", image: "fireflux", width: "12u",
				desc: "Firewall flows management webapp",
				list: [
					"Display links between each firewall",
					"Import firewall settings into database",
					"Auto generation of configurations and application on the equipment",
					"Rights management for users (Active Directory)",
					"Use of flow creation templates",
					"Group flows by projects",
					"PHP, MySql, React, Angular 1, JqueryUI, SemanticUI, Ansible"
				] },
			{ titre: "KalliGraph", image: "kalligraph", width: "12u",
				desc: "Graph display",
				list: [
					"Display of several graph types (Linear, Polar) and tables from database",
					"Export graphs with different formats (pdf, jpeg, xml)",
					"Multi users and multi groups",
					"PHP, MySql, Bootstrap, HighCharts"
				]
			},
			{ titre: "ORO: Time management", image: "oro", width: "12u",
				desc: "Time management application for teams working on sereval projects",
				list: [
					"Multi users",
					"Activity reports",
					"Project configuration",
					"PHP, MySql, JqueryUI"
				]
			},
			{ titre: "JPower", image: "jpower", width: "6u",
				desc: "Commissioning web interface for DNS server 'PowerDns'"
			},
			{ titre: "Class 4 management tools", image: "class4", width: "6u",
				desc: "Set of tools to manage a voice network",
				list: [
					"ENUM config for the class 4",
					"Importing and analysing of Acme Packet's configuration",
					"Commissionning of the routing databases",
					"PHP, MySql, JqueryUI"
				]
			}
		]
	},
	contact : {
		intro   : "Please don't hesitate to contact me for a free quotation, I will reply quickly, either by email or by phone as requested.",
		nom     : "Name",
		email   : "Email",
		societe : "Company",
		tel     : "Phone Number (optional)",
		message : "Message",
		envoyer : "Send",
		encours : "Sending...",
		envoiok : "<strong>Thank You!</strong> Your message has been sent. I will reply as soon as possible."
	}
};

/* Main script */
(function($) {

	Handlebars.registerHelper('isFirst', function(context,opt) {
		//console.log("helper: ",context.data);
		return context.data.first ? context.fn() : "";
	});
	
	Handlebars.registerHelper('isLang', function(lg, titre, alt) {
		//console.log("helper isLang: ",arguments, this);
		return new Handlebars.SafeString('<span class="lglink" title="'+alt+'">' + ( this.language == lg ? titre : '<a href="#/'+lg+'">'+titre+"</a>") + '</span>');
	});
	
	//fonction pour compiler un template
	var hb = function(template,opts){
		var t= Handlebars.compile($("#"+template).html());
		return t(opts || {});
	};
	var $main = $("#main");

	//fonction pour préparer l'affichage d'un template
	var display = function(template,opts){
		return function(){
			//On mémorise la dernire langue utilisée
			localStorage.setItem("language", opts.language);
			opts.header.language = opts.language;

			//on recharge le header avec les textes de la langue
			$("#header").html(hb("headerTemplate",opts.header));

			//compilation du template principal
			var t= Handlebars.compile($("#"+template).html());

			//google analytics
			ga('send', 'pageview', { 'page': window.location.hash.substring(1)  });

			//On fade le contenu actuel puis on remet le nouveau
			$("#main").fadeOut(200,function(){
				$("#main").html(t(opts || {})).fadeIn(200);

				//galerie photo
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

				//formulaire de contact:
				$("#contactform").submit(function(e){
					var $f = $(e.currentTarget);
					var subbut = $f.find("input[type=submit]").prop("disabled", true);
					subbut.val(subbut.data("envoiencours"));
					var ob = {};
					$.each($f.serializeArray(), function(_, kv) {
						ob[kv.name] = kv.value;
					});
					//console.log("form: ", $f, ob);
					$("#contactformerror").html('');
					$.post($f.get(0).action, ob, function(data, res, xq){
						//console.log("form: ", $f.get(0).action, arguments);
						if(data.error != 0){
							$("#contactformerror").html(data.message);
							subbut.prop("disabled", false).val(subbut.data("envoyer"));
						}
						if(data.error == 0){
						$("#contactform").fadeOut(2000,function(){
							$("#contactformerror").html($("#envoimessageok").html());
							})
						}
					}, "jsonp");
					return false;
				});

			});
		};
	};
	
	var router = new Simrou({
		"/"   : display("page-home", LG_fr),
		"/fr" : display("page-home", LG_fr),
		"/en" : display("page-home", LG_en)
	});
	router.start("/"+firstlg);







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
