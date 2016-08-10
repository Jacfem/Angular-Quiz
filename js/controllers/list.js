(function(){
  // We don't pass [] because we're fetching the module.
  angular.module("climbingTrivia")
  // Once it's fetched, we can chain on more methods
  .controller("listCtrl", ListController);

  ListController.$inject = ['quizResults', 'DataService']

  // $scope is a service that lets us bind things to it
  function ListController(quizResults, DataService){
    // this for current context - our list controller here
    var vm = this;
    vm.quizResults = quizResults;
    vm.data = DataService.climbingData;
    vm.activeCategory = {};
    vm.changeActiveCategory = changeActiveCategory;
    vm.activateQuiz = activateQuiz;

    vm.search = "";

    function changeActiveCategory(index){
      vm.activeCategory = index;
    }

    function activateQuiz(){
      quizResults.changeState(true);
    }

  }



})();
