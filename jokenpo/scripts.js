const optionImages=document.querySelectorAll(".option-image");
const container=document.querySelector(".container");
const resutText=document.querySelector(".result-text");
const listComputer=["img/pedra-original.png","img/papel-original.png","img/tesoura-original.png"]
const resultUser=document.querySelector(".user-result img")
const resultComputer=document.querySelector(".computer-result img")
const winner={
RR:"Empate",
RP:"Computador",
RS:"Você",
PR:"Você",
PP:"Empate",
PS:"Computador",
SR:"Computador",
SP:"Você",
SS:"Empate"
}

 function optionHand(event){

    const clickimage =event.currentTarget
    const clickedIndex=Array.from(optionImages).indexOf(clickimage)
    
    
    container.classList.add("start")
    resutText.innerHTML="..."
    resultUser.src= resultComputer.src=listComputer[0]
    setTimeout(() => {
        container.classList.remove("start")
        const randomNumber= Math.floor(Math.random()*listComputer.length)

        resultUser.src=listComputer[clickedIndex]
        resultComputer.src=listComputer[randomNumber]

        const userValue=['R','P','S'][clickedIndex]
        const computerValue=['R','P','S'][randomNumber]
        const finalResult=userValue+computerValue
        console.log(finalResult)
        if(finalResult==='RR'||finalResult=== 'PP' ||finalResult=='SS') {    

        resutText.innerHTML="Empate"
        }else{
            resutText.innerHTML=`${winner[finalResult]} ganhou!`
        }
    
    },2000);
}

optionImages.forEach(img=>{
    img.addEventListener("click",optionHand)
})