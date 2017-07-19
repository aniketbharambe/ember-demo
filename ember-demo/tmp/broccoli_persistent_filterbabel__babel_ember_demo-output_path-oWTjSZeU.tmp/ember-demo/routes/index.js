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
					"path": "assets/img/bulb.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Responsive",
					"path": "assets/img/mobile.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Ajax Transitions",
					"path": "assets/img/ajax.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "E-Commerce",
					"path": "assets/img/ajax.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Unlimited Portfolios",
					"path": "assets/img/bag.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}, {
					"name": "Powerful",
					"path": "assets/img/portfolio.png",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
				}],
				ourTeam: [{
					"name": "Riff Raff",
					"designation": "Founder",
					"path": "assets/img/riffraff.jpg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "assets/img/tw.png",
					"facebook": "assets/img/fb.png",
					"linked_in": "assets/img/ln.png"
				}, {
					"name": "2 Chainz",
					"designation": "Chief Technology Officer",
					"path": "assets/img/2chainz.jpeg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "assets/img/tw.png",
					"facebook": "assets/img/fb.png",
					"linked_in": "assets/img/ln.png"
				}, {
					"name": "Nene Leakes",
					"designation": "Director of Markerting",
					"path": "assets/img/nene.jpeg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "assets/img/tw.png",
					"facebook": "assets/img/fb.png",
					"linked_in": "assets/img/ln.png"
				}, {
					"name": "Miley Cirus",
					"designation": "Creative Director",
					"path": "assets/img/miley.jpg",
					"about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
					"twitter": "assets/img/tw.png",
					"facebook": "assets/img/fb.png",
					"linked_in": "assets/img/ln.png"
				}],
				brands: [{
					"brands_logo": "assets/img/nike.png" }, {
					"brands_logo": "assets/img/ms.png" }, {
					"brands_logo": "assets/img/gh.png"
				}]

			});
		}
	});
});