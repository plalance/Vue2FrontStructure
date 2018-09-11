import $ from 'jquery';
import c from 'build/config'
let ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
let gsap = require("gsap");

window.$ = window.jQuery = $;
window.configuration = c;
window.ScrollMagic = ScrollMagic;
window.gsap = gsap;

if(configuration.DEBUG){
    console.log('DEBUG Activé');
    console.log('main.js : Fichier de JS pour méthodes communes à tout le site.');
}