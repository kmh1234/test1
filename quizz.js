

        var questions = [
          {
            prompt: "what colour are apples?\n(a) green\n(b) purple\n(c) orange"
            answer: "a",
          }

          {
            prompt: "what colour are bananas?\n(a) blue\n(b) yellow\n(c) green"
            answer: "b",
          }




        ]

        var score = 0; /*score starts at 0*/

          for(var i=0; i < questions.length; i++){
            var response = window.prompt(questions[i].prompt);
              /* how the user will respond to questions. questions[i] specify
              which questions we are looping through.*/
            if(response == questions[i].answer){
              /* if the response is equal to the current question being looped through..*/
            score++;
            /* increment score */
            alert("correct");
          } else {
            alert("wrong");
            }
          }
          alert("you got" + score + "/" questions.length);


    
