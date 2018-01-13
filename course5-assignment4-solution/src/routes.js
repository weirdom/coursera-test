(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categorie list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/main-categories.template.html',
    controller: 'categoriesListController as categListCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
		   return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categShortName}',
    templateUrl: 'src/data/templates/main-items.template.html',
    controller: 'itemsListController as itemsListCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categShortName)
                .then(function (items) {
                  return items;
                });
            }]
    }
    });
}

})();
