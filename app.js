const initialprice = document.querySelector("#initial-price");
const stockQty = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#Current-price");
const ShowButton = document.querySelector("#show-button");
const outputEl = document.querySelector("#output");


function calculateProfitAndLoss(initial,Quantity,current)
{  
    if(initial > 0 && Quantity > 0  && current>0)
    {
    
         if(current>initial)
         {
            var profit= (current-initial) * Quantity;
            var profitpercentage = ((profit/initial) * 100).toFixed(2);
            showMessage(`Hey the Profit is ${profit} and the percentage is ${profitpercentage}% 🥳🥳🥳🥳🥳`);
            outputEl.style.color="green";
    
        }
        else if (current <initial)
        {
            var loss= (initial- current) * Quantity;
            var losspercentage = ((loss/initial) *100).toFixed(2);
            showMessage(`Hey the loss is ${loss} and the percentage is ${losspercentage}% 😢😢😢😢😢`);
            outputEl.style.color="red";
        }
        else 
        {
            showMessage(`no pain no gain and no gain no pain 😐😐😐😐😐`);
            outputEl.style.color="#4B5563";
        }
    }
    else{
        outputEl.innerText ="please fill all the fields...";
        // showMessage(`please fill all the fields...`);
        outputEl.style.color="#B45309";   
    }

}


function showMessage(message)
{
   outputEl.innerText = message;
}


ShowButton.addEventListener("click", () => {

        var ip = Number(initialprice.value);
        var Qty = Number(stockQty.value);
        var currpr =Number( currentPrice.value);


    // calculateProfitAndLoss(Number(initialprice.value) , Number(stockQty.value), Number( currentPrice.value));
    
     calculateProfitAndLoss(ip,Qty,currpr);
});
