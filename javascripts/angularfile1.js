angular.module('cougarApp', ['ui.bootstrap'])
    .controller('CougarController', ['$scope', function($scope){

        $scope.cougarItems = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.addCougar = function() {
            $scope.cougarItems.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.removeCougar = function() {
            $scope.cougarItems.splice($scope.todoIndex -1, 1);
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.cougarItems, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.cougarItems;
            $scope.cougarItems = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.cougarItems.push(todo);
            });
        };

    }])

    .controller('myAccordionController', ['$scope', function($scope) {
        //initiate an array to hold all active tabs
        $scope.activeTabs = [];

        //check if the tab is active
        $scope.isOpenTab = function (tab) {
            //check if this tab is already in the activeTabs array
            if ($scope.activeTabs.indexOf(tab) > -1) {
                //if so, return true
                return true;
            } else {
                //if not, return false
                return false;
            }
        }

        //function to 'open' a tab
        $scope.openTab = function (tab) {
            //check if tab is already open
            if ($scope.isOpenTab(tab)) {
                //if it is, remove it from the activeTabs array
                $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
            } else {
                //if it's not, add it!
                $scope.activeTabs.push(tab);
            }
        }
    }])



    .controller('TodoController', ['$scope', function($scope) {
        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
}]);