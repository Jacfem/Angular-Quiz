(function(){
  angular.module("climbingTrivia")
  .factory("quizResults", QuizResults);

  function QuizResults(){
    // what is returned at the end is what the controllers will have access to
    var quizObj = {
      quizActive: false,
      changeState: changeState
    };

    return quizObj;

    function changeState(state){
      quizObj.quizActive = state;
    }
  }
})();
