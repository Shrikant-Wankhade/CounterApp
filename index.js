
//variables
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

//event listeners
btns.forEach((btn)=>{

    btn.addEventListener('click',function(e){
        let text = btn.textContent.toLocaleLowerCase();
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }

        value.textContent = count;
    })
})
