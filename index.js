const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");
const generateWord = (n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;++i){
        const random = Math.floor(Math.random() * (letters.length - 1));
        text+=letters[random];
    }
    return text;
}


let numOfwords;
const generatePara = () => {
    numOfwords = Number(input.value);
    const para = document.createElement("p");
    let data="";
    for(let i = 0; i < numOfwords; ++i) {
        const randomNumber = Math.floor(Math.random() * 15);
        data += generateWord(randomNumber);
        data += "   " ;
    }
    
    para.setAttribute("class","paras");
    para.innerText = data; 
    container.appendChild(para);
    input.value = "";
}