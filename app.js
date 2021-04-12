
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');
const correctAnswer = ["B", "B", "B", "B"];



// var select = document.getElementById("container");
// var select = document.querySelector("#container");
// console.log(select);
// const div = document.querySelectorAll('div');
// console.log(div);

var siblings = document.getElementById("container");
console.log(siblings);
console.log(siblings.previousElementSibling) //pour afficher les elements précedents.

var radios = document.querySelectorAll('[type="radio"]');  // on selectione par l'attribut
console.log(radios);

var radios = document.querySelectorAll('[type="radio"]');
 
/* A node list in Javascript is an array it can be iterative */
radios.forEach(element =>{
    console.log(element.value); // pour afficher les valeurs de l'input de type radio.

  //code here to get the value of the radios
});



formi.addEventListener('submit', e => { 
    e.preventDefault(); //to stop the event normal behavior and refreshing the page
    
    
     /* the object e is an event object containig many usefull informations  */
       
        console.log('/========= event Object =========/');
        console.log(e);
        console.log('/========= Type of event =========/');
        console.log(e.type);
        console.log('/========= the handler of event =========/');
        console.log(e.submitter);
        console.log('/========= the target of the event =========/');
        console.log(e.target);
        console.log('/========= the current target if exist of the event =========/');
        console.log(e.currentTarget);
        console.log('/=========    =========/');


        var pattern = /^[a-zA-Z]{6,12}$/ ;
        if(pattern.test(formi.answer.value)){
         let obtainans = document.getElementById("answer").value;
        console.log(obtainans);

        var creatInput = document.createElement("input");
        var test = document.querySelector(".req_box");
        test.append(creatInput);
        creatInput.className += "rect"; // to add a class!!!!!

        creatInput.setAttribute("value",obtainans);
        creatInput.setAttribute("id",'correct');
        creatInput.setAttribute("name",'q1');
        creatInput.setAttribute("disabled", true);

        // document.getElementById("myBtn").disabled = true;
        /*to disabled the submit button there re 2 ways :-document.getElementById("myBtn").disabled = true;
                                                        -  e.submitter.disabled = true;*/                                                 
        e.submitter.disabled = true;  
        
        // var submitBtn = formi.querySelector('[type="submit"]')
        // submitBtn.disabled = true;
        // formi.addEventListener('input', function () {
        // submitBtn.disabled = !formi.checkValidity();
        // });            

        }else{
            alert("Sorry,you didnt respect the regex");
        }    
    });


   
inputs.addEventListener('click', (e) => {
    e.preventDefault();
   
        
        var radios = document.querySelectorAll('[type="radio"]:checked');
        var correctt = 0;
        
        
        radios.forEach((radio,index) =>{
          // checked.push(element.value);
          if(radio.value == correctAnswer[index]) correctt +=25;
        })
        annimateScore(correctt)
    });
    function annimateScore(correctt) {
      let step = 0;
      scrollTo(0,0);
      document.querySelector(".result").classList.remove('d-none');
          setInterval(() => {
              if(step >= correctt){return false;}
              step++;
              document.querySelector(".result").querySelector('span').innerText = " "+step+"% ";
          }, 30);
  }

    