/**
 * Created by mitch on 2/28/2014.
 */

function MainCtrl($scope, $ionicSideMenuDelegate) {
   $scope.menuButtons = [
      {
         type: 'button-stable',
         content: '<i class="icon ion-navicon-round"></i>',
         tap: function () {
            $ionicSideMenuDelegate.toggleRight($scope.$$childHead);
         }
      }
   ];
}

MainCtrl.$inject = ['$scope', '$ionicSideMenuDelegate'];