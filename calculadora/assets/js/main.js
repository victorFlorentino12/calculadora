function createCalculator(){
    return{
        display: document.querySelector('.display'),
        btrClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            document.addEventListener('click',(e)=>{
                const el = e.target;
                if(el.classList.contains('btn-clear')){
                    const clear = '';
                    this.tiredDisplay(clear);
                }
                if(el.classList.contains('btn-del')){
                    this.tiredOne();
                }
            })
        },

        tiredDisplay(valor){
            this.display.value = valor;
        },

        tiredOne(){
            this.display.value = this.display.value.slice(0,-1);
        },
        start(){
            this.clickBotton();
            this.clearDisplay();
            this.pressEnter();
        },
        pressEnter(){
            this.display.addEventListener('keyup', (e)=>{
                const el = e
                if(el.keyCode === 13){
                    this.makeCount();
                    this.display.focus();
                    
                }
            })
        },

        clickBotton(){
            document.addEventListener('click',(e)=>{
               const el = e.target;
               
               if(el.classList.contains('btn-num')){
                this.btnForDisplay(el.innerText);
               }
               if(el.classList.contains('btn-eq')){
                this.makeCount();
               }
            })
        },
        makeCount(){
            let count = this.display.value;
            try{
                count = eval(count);
                if(!count){
                    alert('conta invalida');
                    return;
                }
                this.display.value = count;
            }catch(e){
                alert('conta invalida');
            }
        },

        btnForDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();
calculator.start();