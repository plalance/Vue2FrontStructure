import $ from 'jquery';
import c from 'build/config'

window.$ = window.jQuery = $;
window.configuration = c;

if(configuration.DEBUG){
    console.log('DEBUG Activé');
    console.log('main.js : Fichier de JS pour méthodes communes à tout le site.');
}