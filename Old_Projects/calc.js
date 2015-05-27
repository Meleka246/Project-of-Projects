 function DisPlay(Figure) {

            Display = document.getElementById('Display');
            if (Figure === null) {
                Display.value = Figure;
            }
            else {
                Display.value += Figure;
            }

            Figure = null;
        }
        function GetAnswer() {

            Screen = Display.value.replace(/'/g, ' ');
            result = eval(Screen);
            
            Display.value =result;

        }
