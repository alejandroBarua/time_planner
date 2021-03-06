export default function selectBlock(setBlocksStorage) {
 
    const $blocks = document.querySelectorAll(".blocks div");
    const numberToDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        dayToNumber = day => numberToDay.findIndex( el => el == day);
        
       
    $blocks.forEach(el => {

        let day = el.classList[0].slice(0,3);
        let number = el.classList[0].slice(3,5);
            
        const $day = document.querySelector(`.${day}`),
            $number = document.querySelector(`.id${number}`);

        el.addEventListener("mouseover", e => {
            $day.classList.add("color-blue");
            $number.classList.add("color-blue");

                      
            const $task = document.querySelector(".select-task"),
                $block = e.target;
            
            if($task != null){
                    
                const $first = document.querySelector(".first");
                
                if($first != null){
                    
                    let color = $task.style.backgroundColor;

                    let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                    let numberFirst = parseInt($first.classList[0].slice(3,5));

                    let daySecond = dayToNumber($block.classList[0].slice(0,3));
                    let numberSecond = parseInt($block.classList[0].slice(3,5));

                    if(dayFirst > daySecond){
                        let a = daySecond;
                        daySecond = dayFirst;
                        dayFirst = a;
                    }
                    if(numberFirst > numberSecond){
                        let a = numberSecond;
                        numberSecond = numberFirst;
                        numberFirst = a;
                    }

                    for(let i= dayFirst; i <= daySecond; i++){

                        for(let j = numberFirst; j <= numberSecond; j++){

                            let $blockTrick = document.querySelector(`.${numberToDay[i]}${j}`);
                            
                            if($first != $blockTrick) $blockTrick.style.backgroundColor= color;
                        }
                    }
                }
            }



        });
        
        el.addEventListener("mouseout", e => {
            
            $day.classList.remove("color-blue");
            $number.classList.remove("color-blue");

            const $task = document.querySelector(".select-task"),
                $block = e.target;
            
            if($task != null){
                    
                const $first = document.querySelector(".first");

                if($first != null){

                    if($first.style.backgroundColor != "var(--second-color)"){
                        
                        let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                        let numberFirst = parseInt($first.classList[0].slice(3,5));

                        let daySecond = dayToNumber($block.classList[0].slice(0,3));
                        let numberSecond = parseInt($block.classList[0].slice(3,5));

                        if(dayFirst > daySecond){
                            let a = daySecond;
                            daySecond = dayFirst;
                            dayFirst = a;
                        }
                        if(numberFirst > numberSecond){
                            let a = numberSecond;
                            numberSecond = numberFirst;
                            numberFirst = a;
                        }

                        for(let i= dayFirst; i <= daySecond; i++){

                            for(let j = numberFirst; j <= numberSecond; j++){

                                const $blockTrick = document.querySelector(`.${numberToDay[i]}${j}`);
                            
                                if($first != $blockTrick){ 
                                    $blockTrick.style.backgroundColor= "var(--second-color)";
                                
                                    if($blockTrick.classList.length == 3){
                                        
                                        if($blockTrick.classList[1] != "point"){
                                    
                                         $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                        }
                                        else{
                                            $blockTrick.classList.remove(`${$blockTrick.classList[2]}`);
                                        }
                                    }

                                    if($blockTrick.classList.length == 2 && !$blockTrick.classList.contains("point")){
                                        $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                    }        
                                }
                            
                            }
                        }
                    }
                    else{
                        $first.classList.remove("first");
                    }
                }
            }

        });

        el.addEventListener("click", e => {
            
            const $block = e.target,
                $task = document.querySelector(".select-task");

            if($task != null){

                const $trick = document.querySelector(".trick");
                if($trick.classList.contains("select-trick")){
                    const $first = document.querySelector(".first");
                    if($first == null) {
                        const $divs = document.querySelectorAll(".blocks div"); 
                        let history = new Array();

                        $divs.forEach(el => {
                            
                            if(el.classList.contains("point")) el.classList.remove("point");
                            
                            if(el.classList.length != 1){
                                history.push(el.classList.value);
                            }
                        });
                    }
                }
            

                let color = $task.style.backgroundColor;
                
                if($block.classList.length == 3){
                    if($block.classList[1] != "point"){
                
                        $block.classList.remove(`${$block.classList[1]}`);
                    }
                    else{
                        $block.classList.remove(`${$block.classList[2]}`);
                    }
                }

                if($block.classList.length == 2 && !$block.classList.contains("point")){
                    $block.classList.remove(`${$block.classList[1]}`);
                }
                
                if(el.style.backgroundColor == color){
                    
                    el.style.backgroundColor = "var(--second-color)";
                }
                else{
                    el.style.backgroundColor = color;
                    $block.classList.add(`${$task.children[0].textContent.replace(/ /g, "")}`);
                }
                

                if($trick.classList.contains("select-trick")){
    
                    const $first = document.querySelector(".first");
                    if($first == null){
                        
                        $block.classList.add("first");            
                    }
                    else{
                        
                        let dayFirst = dayToNumber($first.classList[0].slice(0,3));
                        let numberFirst = parseInt($first.classList[0].slice(3,5));

                        let daySecond = dayToNumber($block.classList[0].slice(0,3));
                        let numberSecond = parseInt($block.classList[0].slice(3,5));

                        if(dayFirst > daySecond){
                            let a = daySecond;
                            daySecond = dayFirst;
                            dayFirst = a;
                        }
                        if(numberFirst > numberSecond){
                            let a = numberSecond;
                            numberSecond = numberFirst;
                            numberFirst = a;
                        }

                        for(let i= dayFirst; i <= daySecond; i++){

                            for(let j = numberFirst; j <= numberSecond; j++){

                                const $blockTrick = document.querySelector(`.${numberToDay[i]}${j}`);

                                if($blockTrick.classList.length == 3){
                                    if($blockTrick.classList[1] != "point"){
                                    
                                        $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                    }
                                    else{
                                        $blockTrick.classList.remove(`${$blockTrick.classList[2]}`);
                                    }
                                }

                                if($blockTrick.classList.length == 2 && !$blockTrick.classList.contains("point")){
                                    $blockTrick.classList.remove(`${$blockTrick.classList[1]}`);
                                } 

                                $blockTrick.classList.add(`${$task.children[0].textContent.replace(/ /g, "")}`);
                                $blockTrick.style.backgroundColor = $first.style.backgroundColor;
                            }
                        }
                        $first.classList.remove("first");
                    }
                }

                setBlocksStorage();
            }
                
        });
    });
    
}