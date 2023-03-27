
//all the variables
let crew=1;
let feul=20;
let food = 50;
let foodPortion = food/10;
let traveld = 5;

//food amount check every key press
function dailyFood()
{
    if(foodPortion>=crew)
    {
        console.log("food for another day")
    }
    else
    {
    console.log("not  to far from starving")   
    };
    if(foodPortion<=-2)
    {
        console.log("you are dead")
    }
}
//listen for key then give info
// Add event listener on keydown
document.addEventListener('keydown', (travel) => 
{
    foodPortion = foodPortion - 1
    feul --
    traveld = traveld + 5
    dailyFood()
    console.log("traveled" + traveld + "and feul left" + feul)
    
}, 
false);

