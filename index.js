const input = document.getElementById("numofwords");
const Container = document.querySelector(".Container");

const generateWord = (n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; i++){
        const random = (Math.random()*(letters.length-1)).toFixed(0);
        text += letters[random];
    }

    return text;
};

let numofwords;
const generatePara = () => {
    numofwords=Number(input.value);


    const para = document.createElement("p");

    let data ="";

    for (let i = 0; i < numofwords; i++) {
        
        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }
    para.innerText = data;

    para.setAttribute("class", "paras")

    Container.append(para);
};
