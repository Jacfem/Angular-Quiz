(function(){
  angular.module("climbingTrivia")
  .factory("DataService", DataFactory);

  function DataFactory(){
    var dataObj = {
      climbingData: climbingData,
      quizQuestions: quizQuestions
    };

    return dataObj;
  }

  var quizQuestions = [
    {
      question: "A?",
      answer: "A"
    },
    {
      question: "B?",
      answer: "B"
    },
    {
      question: "C?",
      answer: "C"
    },
    {
      question: "D?",
      answer: "D"
    }
  ];

  var climbingData = [
    {
      category: "Styles",
      image_url: "https://organicthemes.com/demo/adventure/files/2013/08/featured_post_03.jpg",
      summary: "There's all types of rock climbing. Indoor & Outdoor Climbing, Aid & Free Climbing, Top Rope & Lead Climbing, to name a few!"
    },
    {
      category: "Lingo",
      image_url: "https://climbcore.files.wordpress.com/2015/02/628x471.jpg",
      summary: "Hang around a climbing gym long enough, and you'll start to hear some funny words you might want to know. Here's the beta!"
    },
    {
      category: "Gear",
      image_url: "http://cdn.gearpatrol.com/wp-content/uploads/2014/11/Rock-Climbing-Kit-Gear-Patrol-Lead-Full.jpg",
      summary: "Gear can be overwhelming at first. Learn more here."
    },
    {
      category: "Holds",
      image_url: "https://cdn.shopify.com/s/files/1/1065/6608/files/whistler_core_indoor_rock_climbing_autobelay_1.jpg?5964580708934534785",
      summary: "Recognizing types of holds & how to use them can better help you drill your technique."
    }
  ]
})();
