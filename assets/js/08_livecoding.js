// const ages = [40,35,26,26,25,24,24,22,23,21,21,20]
// let moyenne = 0
// let total = 0
// ages.forEach(element => {
//     total += element;
// });
// moyenne = total/ages.length;
// console.log(moyenne);

let max_char = 200;     // Changer le nombre de caractères max dans le résultat


let inputhtml = document.getElementById("text_html");
// let inputcss = document.getElementById("text_css");
let result = document.getElementById("live");

document.getElementById("count").innerHTML = max_char;


let loading = document.getElementById('gif');               // Gif de chargement quand focus sur le textarea

inputhtml.onfocus = () => {
    loading.style.visibility = "visible";
}
inputhtml.onblur = () => {
    loading.style.visibility = "hidden";
}

// inputcss.onfocus = () => {
//     loading.style.visibility = "visible";
// }
// inputcss.onblur = () => {
//     loading.style.visibility = "hidden";
// }


inputhtml.onkeyup = inputhtml.onkeypress = function(){
    document.getElementById("live").innerHTML = this.value;

    let countdown = max_char - result.textContent.length;                                                           // Décompte
    document.getElementById("count").innerHTML =  countdown;

    let progress_percent = 100*result.textContent.length/max_char;
    // document.getElementById("progress").innerHTML = progress_percent.toString()+'%';                            //Affiche dans la barre le progress%

    if (countdown==0){                                                                                             // Douille compteur en bas et pas en haut
        inputhtml.setAttribute("maxlength",inputhtml.value.length);
    } else {
        inputhtml.setAttribute("maxlength",'');
    }

    document.getElementById("progress").style.width = progress_percent.toString()+'%';                              //Change la width avec le %
    // document.getElementById("progress").style.setProperty("width", progress_percent2.toString() ,"important");   //Autre façon de faire


    if (progress_percent<8){
        document.getElementById("progress").style.setProperty('background-color', "#18DC54");                       //Fonctionne comme style.backgroundColor
    } else if (progress_percent>=8 && progress_percent<16){
        document.getElementById("progress").style.backgroundColor = "#59df49";
    } else if (progress_percent>=16 && progress_percent<25){
        document.getElementById("progress").style.backgroundColor = "#7de23e";
    } else if (progress_percent>=25 && progress_percent<33){
        document.getElementById("progress").style.backgroundColor = "#9be435";
    } else if (progress_percent>=33 && progress_percent<42){
        document.getElementById("progress").style.backgroundColor = "#b6e62f";
    } else if (progress_percent>=42 && progress_percent<50){
        document.getElementById("progress").style.backgroundColor = "#c9da19";
    } else if (progress_percent>=50 && progress_percent<59){
        document.getElementById("progress").style.backgroundColor = "#dace04";
    } else if (progress_percent>=59 && progress_percent<67){
        document.getElementById("progress").style.backgroundColor = "#e8c100";
    } else if (progress_percent>=67 && progress_percent<76){
        document.getElementById("progress").style.backgroundColor = "#f1a300";
    } else if (progress_percent>=76 && progress_percent<84){
        document.getElementById("progress").style.backgroundColor = "#f88100";
    } else if (progress_percent>=84 && progress_percent<92){
        document.getElementById("progress").style.backgroundColor = "#fd5800";
    } else {
        document.getElementById("progress").style.backgroundColor = "#FF0000";
    }


    // switch (progress_percent){
    //     case 0:
    //         document.getElementById("progress").style.setProperty('background-color', "#18DC54");
    //         break; 
    //     case 8:
    //         document.getElementById("progress").style.backgroundColor = "#59df49";
    //         break;
    //     case 16:
    //         document.getElementById("progress").style.backgroundColor = "#7de23e";
    //         break;
    //     case 25:
    //         document.getElementById("progress").style.backgroundColor = "#9be435";
    //         break;
    //     case 33:
    //         document.getElementById("progress").style.backgroundColor = "#b6e62f";
    //         break;
    //     case 42:
    //         document.getElementById("progress").style.backgroundColor = "#c9da19";
    //         break;
    //     case 50:
    //         document.getElementById("progress").style.backgroundColor = "#dace04";
    //         break;
    //     case 59:
    //         document.getElementById("progress").style.backgroundColor = "#e8c100";
    //         break;
    //     case 67:
    //         document.getElementById("progress").style.backgroundColor = "#f1a300";
    //         break;
    //     case 76:
    //         document.getElementById("progress").style.backgroundColor = "#f88100";
    //         break;
    //     case 84:
    //         document.getElementById("progress").style.backgroundColor = "#fd5800";
    //         break;
    //     case 92:
    //         document.getElementById("progress").style.backgroundColor = "#FF0000";
    //         break;
    // }


}

function boldifiant(){                      //Boutons bold, italic, underline
    inputhtml.value += "<b></b>";
}
function italifiant(){
    inputhtml.value += "<i></i>";
}
function souslignifiant(){
    inputhtml.value += "<i></i>";
}
// function colors(){
//     document.getElementByClassName("colorz").style.visibility = "visible";
// }