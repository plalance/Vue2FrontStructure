### Les technologies et outils


| Technologie   |     Doc         |     Infos supplémentaires         |
| :------------ | :-------------: |:-------------: |
|VueJs2        |https://vuejs.org/v2/guide/| Framework Front-End|
|Axios         |https://github.com/axios/axios|Pour les promesses de requettes HTTP PUT / GET / POST|
|Vue-Axios     |https://www.npmjs.com/package/vue-axios|Wrapper Axios VueJs 2|
|Lodash         |https://lodash.com/|Librairie facilitant la manipulation / opérations sur les objets javascripts|
|Vue I18n|https://kazupon.github.io/vue-i18n/|Plugin d'internationalisation d'appli Vue|
|Vue-X|https://vuex.vuejs.org/guide/|Gestionnaire de State et Commit / Dispatcher d'objets JS dans tous les composants Vue|

### Compilation et gestion des sources

| Technologie   |     Doc         |     Infos supplémentaires         |
| :------------ | :-------------: |:-------------: |
|Brunch (similaire à Webpack)|http://brunch.io/docs/config|  |
|Vue-Loader|https://vue-loader.vuejs.org/|Permet l'écriture des composants Vue sous forme de template Single File Component SFC|
|Vue-Template-Compiler |https://www.npmjs.com/package/vue-template-compiler |This package can be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP restrictions. You will only need it if you are writing build tools with very specific needs.|
|Copycat|PLugin Brunch | Permet de gérer les assets à copier en dur (images / fonts / etc..) dans le répertoire public|
|json-brunch|https://www.npmjs.com/package/json-brunch|Permet l'inclusion de fichiers JSON par la directive require('./json-exemple.json');|

### Utile

| Technologie   |     Doc         |     Infos supplémentaires         |
| :------------ | :-------------: |:-------------: |
| Extension Chrome : Restlet Client|https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm|Extension chrome : Testeur d'API, POST, GET, PUT...|
| Extension Chrome : Vue.Js devtools: Debug d'appli Vue et Vue2 |https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd||


## Prérequis
- NodeJs / Npm (voir https://nodejs.org/en/download/ pour installatateur windows)
- Avoir mis à jour sa version npm (https://www.npmjs.com/package/latest-version)
		npm install --save latest-version
- Installation de Brunch pour compilation des assets, JS, et Scss, templates Vue
		npm install -g brunch
- Git installé (gitflow optionnel)

#### Commandes Brunch

Pour builder les assets (compiler tous les .js et créer les require.register) + les déposer dans le répertoire public (voir configuration dans le fichier brunch-config.js)

        brunch build [ brunch b ]
<br>
Pour watcher (Recompilation dès qu'un .scss / .js / .vue / fichier image source est modifié + rechargement des navigateurs connectés)  

        brunch watch [ brunch w ]
<br>
Pour compiler les assets (.js + .scss -> .css -> .css) en version optimisé (minifiés)

        brunch build --production
        
## Install

        git clone <rrepos>  ...Fichiers source
        yarn install        ...Dépendancess NPM
        brunch build OU brunch watch       ...Compilation fichiers Js /scss
        Lancer la page index.html /web/index.html OU appeler l'url du site.
        
## Structure du projet

Dans le répertoire build

-  /assets
    - Lirbairies externes javascript non isntallées via NPM / yarn
-  /js 
    - fichiers javascripts main.js / scripts spécifiques à chaque page html ( à inclure via require)
- /scss
    -  fichiers sass sources, fonctionne par composant. Préfixer les composants par "_" pour ne pas les compiler 2 fois et les inclure dans le main.scss
- /vue
    - Composants vue (/Components) communs ex: header
    - Formulaires
    - Pages : Page sous forme de composant Vue Dynamique, à exploiter avec le router
    - Router : router full front officiel de vue-js (vue-router)
    - Store : Store VueX / Entity Store (gestionnaire de state et commit pour Vue)
 
Dans le répertoire web :
Tous les fichiers images / js / css sont générés depuis le build apr Brunch
 
Les pages html "classiques" sont versionnées dans le répertoire web.

## Structure fichiers SASS et notation BEM

#### Structure

La structure sass est la suivante :

UN fichier main.scss principal.

Les modules scss (partials) doivent être préfixés d'un underscore " _ " pour ne pas être compilés 2 fois par brunch.

Les fichiers suivants : _exemple.scss ne sont pas compilés sauf s'ils sont inclus dans un autre.

Exemple :

Dans main.scss

@import "./components/button";

Dans /build/scss/components/button.scss :

.button{
    ...
}

#### Notation BEM

J'ai choisi d'utiliser la notation OOCS (Object Oriented CSS), elle n'est pas obligatoire.

Exemple avec sass :

    <div class="component">
      <div class="component__child-element"></div>
    </div>
    <div class="component">
      <div class="component__child-element"></div>
    </div>
    
    .component {
      display: block;
      max-width: 30rem;
       
      &__child-element {
        border-radius: 50%;
        position: absolute;
        top: 50%;
      }
    }

Les éléments de premier rang sont les <strong>conteneurs<strong/>.

Les élements avec double underscore " __ " sont des <strong>objets<strong/>.

Les éléments avec " -- " sont des <strong>mofifiers</strong> 

Exemple de "conteneur" / "éléments" / élément avec "modifier" :

Un "modifier" permet de définir le style d'un élément dans un contexte particulier ou qui possède différentes variantes.

Exemple : les modifiers --blue, --large, --hidden

Exemple complet :

    .block{             // Block est conteneur
        
        &__title{       // Title est élément. Correspond à .block__title
            ...
        }
        
        &__button {     // Button est un autre élément. Correspond à .block__button
            ...
            
            &--large {  // Modifier --large. Correspond à .block__button--large
                ...
            }
        }
        
    }

## Configuration

La configuration principale de l'applciation Vue se fait dans le fichier config.js.


| Propriété   |     Infos      |
| :------------ |:-------------: |
| MODE_DEBUG    | Affiche ou non les logs de console|
| MODE_ADMIN | Non utilisé sur ce projet, permet la restrication a certaines routes dans le vue-router|
|API_URLS|Tableau d'objets JS des codes de service liés aux URL pour les appels backend|
|BASE_URL|Permet de définir l'URL de base sur lequel Vue s'appuie pour les chemins d'images.|
 
Format pour un url d'api dans API_URLS:

    {
        CODE: '/webapi/examplemethod',
        CODE2: '/webapi/examplemethod2',
        ...
        ...
        PING: '/webapi/ping'
    } 
    
## Le Store VueX

### Le store

A la manière de Redux (et du pattern architectural Flux de Facebook dont il est largement inspiré), Vuex impose un flux de données unidirectionnel, dont le principe est opposé au magique “two-way bindings” de la directive v-model de Vue.js :

Les concepts manipulés sont les suivants :

le state, l’arbre unique des attributs constitutifs de l’état qui sera partagé entre les composants ;
les mutations, les seules fonctions par lesquelles on peut passer pour modifier le state et dans lesquelles seules des actions synchrones peuvent être effectuées ;
les actions, des fonctions qui déclenchent une ou plusieurs mutations et faisant potentiellement des appels complémentaires, en particulier des appels asynchrones.
En complément, les getters sont les fonctions par lesquelles ont peut “lire” le state.


### Configuration

Définition d'un state ( = Variable qui sera manipulée par VueX au travers de méthodes, méthodes appelées par nos composants)

Ici on déclare simplement la variable qui permettra à tout nos composants de savoir si la sidebar doit être fermée ou ouverte.

        const state = {
            sideNavActive: false,
        };

Pour pouvoir effectuer des opérations sur un state, (modififier, mettre à null, ajouter un élément a un tableau..), on utilise la notion de mutation;

Une mutation ne peut être appelée que par VueX, pas par un composant. Ici la mutation permettra de mettre à true ou false le state "sideNavActive".

        const mutations = {
            TOGGLE_SIDENAV: (state, value) => {
                state.sideNavActive = value;
            }
         };

Pour que nos composants puissent récupérer les valeurs des states. On déclare les getters.

        const getters = {
            sideNavActive: (state) => state.sideNavActive
        };
 
 Enfin, pour demander au store d'effectuer une mutation, j'ai déclarer les "actions". Elles sont appelable depuis les composants.
 
    actions: {
        toggleSideNav: (store, value) =>{
            store.commit('TOGGLE_SIDENAV', value);
        }
    }

### Appels au Store / Récupération des States et Actions dans les composants Vue
    
Voici le processus à suivre:

1. Le store fournit un esemble de variables, les "state", accessibles, mais non modifiables.
2. Pour effectuer des opérations sur un state, le store passe par une mutation.
3  Une action peut être définie, pour être appelée par un composant. Action qui va appeler des mutations.

Car concret :

- Le state de "livres" est un tableau vide.
- l'action getDatabaseStates du store peut récupérer les livres stockés en base (appels d'API ou autre..) puis appeler une mutation en lui passant en paramètre le tableau de données.
- La mutation va ensuite mettre à jour le state avec les données.

Une action du store est appelable dans un composant via : this.$store.dispatch('ma Methode');

Mais il existe un moyen plus simple pour appeler les getters / actions du store : les mapActions et mapGetters

Les getters sont récupérables de la même manière, au moyen du mapGetters que l'on peut attribuer au computed de Vue.

Exemple complet du script du composant header (simplifié) :

    <script>
                     import {mapGetters, mapActions} from 'vuex';
                 
                     export default {
                         name: 'Header',
                         data() {
                             return {}
                         },
                         computed: {
                             ...mapGetters([
                                 'sideNavActive'             // La valeur du state est transmise grace au getter
                                                             // Appelable via this.sideNavActive
                             ])
                         },
                         methods: {
                             ...mapActions([
                                 'toggleSideNav'             // La méthode du store est déosormais
                                                             // appelable via this.toggleSideNav();
                                                             
                             ]),
                             testAction(){***}               // Méthode à appeler via this.testAction();
                             // Mes autres méthoedes ici
                         },
                     };
                 </script>

On peut mapper les actions du store pour leur donner un nouveau nom au sein de notre composant. POur ne aps entrer en conflit au cas ou :

    ...mapActions({
          maMethodeRenomme:'toggleSideNav'             // La méthode du store toggleSideNav est déosormais
                                                         // mappée et appelable via this.maMethodeRenomme();
                                      
      }),

A noter que poura voir accès au mapAction et mapGetters dans un composant, il faut les importer depuis VueX

    import {mapGetters, mapActions} from 'vuex';
 
## traduction (Vue - I18n)

Les éléments de l'interface sont traduits à la volée grâce au composant core vue-i18n implémenté dans app.js.

Emplacement : web/traductions
Format des fichiers : json

Les deux fichiers sont inclus par require('fichier.json') grâce au plugin json-brunch.

Process :
Les fichiers sont required lors de l'initialisation de l'instance Vue (app.js)

Les trableaux issus de ces json sont stockés et définis en propriété globale Vue, accessible dans tout l'application.

Exemple :

        // Inclusion des json de traduction
       let fr_traductions = require('../../web/traductions/fr.json');
       
       // Mise sous forme d'objet javascript structuré
       const trads = {
           fr: {
               api_choices: fr_traductions.trads.api_choices,
               routes: fr_traductions.trads.routes,
               interface: fr_traductions.trads.interface,
               language: fr_traductions.trads.language,
               forms: fr_traductions.trads.forms,
               action: fr_traductions.trads.action,
               nvms_codes: fr_traductions.trads.nvms_codes,
           }
       };
       
       // Traductions chargées dans le composant Vue I128n
       let i18n = new VueI18n({
           locale: 'fr, // set locale
           fallbackLocale: 'fr', // locale if default not found
           messages: trads, // set locale messages
       });
       
L'instance vue-i18n est associée à l'instance vue dès le départ. Ainsi pas besoin d'inclure i18n dans chaque composant enfant.

Utilisation dans un template Vue SFC (Single File Component) :

        <div id="app">
          <p>{{ $t("api_choices[0].name") }}</p>
        </div>
        
Ici la locale est fr, I18 ira donc chercher dans trads.fr.api_choices le premier objet et affichera son nom.
Il affichera donc "Vérification" (voir exemple de fichier de traduction ci dessous)

#### Structure du fichier de traduction

        {
          "trads": {
            "api_choices": [
              {
                "name": "Exemple de service",
                "code": "AAX2Z3"
              },
               ...
            ],
            "routes": {
              "home": "Accueil",
              "foo": "Page : Foo",
              "Settings": "Page : Paramètres"
              ...
            },
            "interface": {
              "send_button": "Envoyer",
              "erase_button": "Effacer",
              ...
             },
            "language": {
              "en": "Anglais",
              "fr": "Français"
            },
            "action": {
              "type": "Procédure",
              ...
            },
            "forms": {
              "service_selection": "Choix du service",
              "form__item": {
                "product_code": "Code produit"
              }
            },
          }
        }
    
## Définition des services accessibles dans l'interface

Les services d'API listés dans l'application sont ceux définit dans les fichiers de traduction fr.json / en.json

Si les services ne sont aps définis dans ces fichiers, l'application ne fonctionnepa, car le tabelau d'objet API_CHOICES est tiré du json fr.json parsé.

Format pour un service dans api_choices: 
    {
        name: 'Example of service',
        code: 'AAX23',
    }

Implémenter le même service dans le ficher en.json pour que tout fonctionne correctement en front.
 
    
## Routeur spécifique

J'ai implémenté le router de vue (vue-router) sous la forme d'un module javascript.
        
        /build/vue/Router

router.js : Définit l'implémentation du vue-router et les règles de routing. Accepter ou non certaines routes / redirections / règles de sécurité... à définir.
routing.js : Définition des routes sous forme d'objet javascript :

    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Accueil',
            admin: false,
            visible: true,
            icon: 'dashboard'
        },
        component: require('../Pages/Home')
    },
        
| Propriété   |     Infos      |
| :------------ |:-------------: |
| path    | url de la route |
| name | Nom technique de la route. Utile pour faire des redirection / appels via le nom de route.|
|meta.title| Nom public de la route|
|meta.admin| Si défini, le vue router bloque l'accès si le MODE_ADMIN n'est pas défini dans config.js C'est un mode admin de développement. Pas en lien avec des quelconques droits d'accès utilisateur|
|meta.visible| Défini si cette route doit être listée ou non dans le header / la sidebar de navigation|
|meta.icon| Défini l'icone à utiliser (icones du framework materialize CSS) |
|component| Le composant au format SCF (Single File Component) à monter dans l'instance vue par vue-router quand cette route est appelée.|
