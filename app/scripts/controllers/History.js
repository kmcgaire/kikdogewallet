/**
 * Created by mitch on 2/25/2014.
 */
function HistoryCtrl($scope, Wallet) {
   $scope.wallet = Wallet;
   $scope.transactions = [];

   $scope.refresh = function () {
      $scope.wallet.getTransactions(function (error, txs) {
         if (error) {
            console.error(error);
            return;
         }
         $scope.transactions = txs;
         $scope.$broadcast('scroll.refreshComplete');
      })
   };

   $scope.refresh();
}

HistoryCtrl.$inject = ['$scope', 'Wallet'];