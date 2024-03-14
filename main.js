const first = document.getElementById('first-ingredient');
const second = document.getElementById('second-ingredient');
const third = document.getElementById('third-ingredient');
const fourth = document.getElementById('fourth-ingredient');
const fifth = document.getElementById('fifth-ingredient');
const sixth = document.getElementById('sixth-ingredient');

const slider = document.getElementById('myRange');
const count_servings = document.getElementById('count-servings');
slider.value = 8;

slider.oninput = function() {
    count_servings.innerHTML = `<b>` + this.value + `<b>` + `<b> Servings:<b>`;
    first.innerHTML = this.value + " croutons";
    second.innerHTML = this.value + " (1-inch) wedges romaine lettuce";
    third.innerHTML = this.value + " (1 ounce) cubes cooked chicken";
    fourth.innerHTML = this.value + " (1/2-inch) cubes Parmesan cheese or to" + "\n" + "taste";
    fifth.innerHTML = this.value + " bamboo toothpicks";
    sixth.innerHTML = this.value + " teaspoons Caesar salad dressing";
}

function goLink(button){

    if(button === 1)
    {
        window.open('https://www.allrecipes.com/recipe/283652/pizza-cupcakes/', '_blank');
    }
    else if(button === 2)
    {
        window.open('https://www.allrecipes.com/recipe/14252/asian-chicken-salad/', '_blank');
    }
    else
    if(button === 3)
    {
        window.open('https://www.allrecipes.com/recipe/74884/twig-salad/', '_blank');
    }
}

