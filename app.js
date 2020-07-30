let textarea = document.getElementById("IdText");
let result = document.getElementById("IdResult");
let select =document.getElementById("IdSelect");

textarea.addEventListener("input",()=>{

    showResult();
});
select.addEventListener("change",()=>{
    showResult();

});
function showResult(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value);

    }else{

        result.value = window.btoa(textarea.value);
    }
}