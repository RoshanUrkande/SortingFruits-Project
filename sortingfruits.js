let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

function sortFruits(){
    for(i=0;i<fruit.length;i++){

        if(fruit[i]==="🍎"){
            appleShelf.innerHTML += "🍎"
        }else if(fruit[i]=== "🍊"){
           orangeShelf.innerHTML += "🍊"
        }

    }
}
sortFruits()