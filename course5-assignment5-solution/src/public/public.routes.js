(function() {
'use strict';

angular.module('public')
.config(routeConfig);

 
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/form_signup.html',
      controller: 'FormSignupController',
      controllerAs: 'FormSignupCtrl',
      resolve: {
        menuItems: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems();
        }]
      }
    })
    .state('public.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/public/signup/submitted.html',   
        controller: 'submittedController',
        controllerAs: 'submittedCtrl',            
        resolve: {
        submitInfo: ['MenuService', function (MenuService) {
          return MenuService.getSubmit();
        }]    
      }
    })		
	;
}
})();
