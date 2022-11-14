const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const lengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const forms=document.querySelector('#forms');


btnCopy.addEventListener('click',async()=>{
const pass=outputElement.value;
if(pass){
await navigator.clipboard.writeText(pass);
alert("Copied to clip board");
}
else{
    alert("please genrate a  password ");
}
});

function generateRandomChar(min,max)
{
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    return generateRandomChar(48,57);
}
function symbolValue(){
    const symbols="!@#$%^&*()_+-=<>?,./";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray=[
    {
        element:numberElement,
        fun: numberValue
    },
    {
        element:capitalElement,
        fun: capitalValue
    },
    {
        element:smallElement,
        fun: smallValue
    },
    {
        element:symbolElement,
        fun: symbolValue
    }

];

forms.addEventListener('submit',(e)=>{
e.preventDefault();
const len=lengthElement.value;

let generatedPassword="";

const funArray=functionArray.filter(({element})=>element.checked);

for(i=0;i<len;i++)
{
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword=generatedPassword+letter;

}
outputElement.value=generatedPassword;
});

