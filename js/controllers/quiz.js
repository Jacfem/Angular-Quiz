(function(){
  angular.module("climbingTrivia")

  .controller("quizCtrl", QuizController);

  QuizController.$inject = ['quizResults', 'DataService'];

  function QuizController(quizResults, DataService){
    var vm = this;

    vm.quizResults = quizResults;
    vm.deActivateQuiz = deActivateQuiz;
    
    // vm.dataService = DataService;

    function deActivateQuiz(){
      quizResults.changeState(false);
    }
  }




})();
