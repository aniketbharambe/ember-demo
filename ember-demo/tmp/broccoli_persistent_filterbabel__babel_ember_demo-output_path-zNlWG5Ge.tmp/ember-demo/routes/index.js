define('ember-demo/routes/index', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var RSVP = _ember.default.RSVP;
	exports.default = _ember.default.Route.extend({
		model: function model() {
			return RSVP.hash({

				services: [{
					"name": "Unique Layouts",
					"path": "../assets/img/bulb.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Responsive",
					"path": "../assets/img/mobile.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Ajax Transitions",
					"path": "../assets/img/ajax.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "E-Commerce",
					"path": "../assets/img/bag.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Unlimited Portfolios",
					"path": "../assets/img/portfolio.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Powerful",
					"path": "../assets/img/power.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}],
				ourteam: [{
					"name": "Riff Raff",
					"designation": "Founder",
					"avatar": "assets/img/team/riffraff.jpg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "#",
					"facebook": "#",
					"linked_in": "#"
				}, {
					"name": "2 Chainz",
					"designation": "Chief Technology Officer",
					"avatar": "assets/img/team/2chainz.jpeg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "#",
					"facebook": "#",
					"linked_in": "#"
				}, {
					"name": "Nene Leakes",
					"designation": "Director of Markerting",
					"avatar": "assets/img/team/nene.jpeg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "#",
					"facebook": "#",
					"linked_in": "#"
				}, {
					"name": "Miley Cirus",
					"designation": "Creative Director",
					"avatar": "assets/img/team/miley.jpg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "#",
					"facebook": "#",
					"linked_in": "#"
				}],
				brand: [{
					"brand_name": "nike",
					"brand_logo": "assets/img/logos/logo-nike.svg" }, {
					"brand_name": "Microsoft",
					"brand_logo": "assets/img/logos/logo-ms.svg" }, {
					"brand_name": "github", "client_logo": "assets/img/logos/logo-github.svg"
				}]

			});
		}
	});
});