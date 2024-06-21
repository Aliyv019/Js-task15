const main=document.querySelector('main')
const txt_area=document.querySelector('textarea')
const counter=document.createElement('p')
main.appendChild(counter)

txt_area.addEventListener('input',()=>{
    txt_area.value=txt_area.value.substring(0,99)
    counter.textContent=`${txt_area.value.length+1}/100`
    if(txt_area.value.length+1==100){
        txt_area.style.outlineColor="red"
        txt_area.style.borderColor='red'
        txt_area.style.color='red'
        counter.style.color='red'
    }
})
