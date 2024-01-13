var quotes = [
    {
        quo: "You miss 100% of the shots you don't take.",
        au: '--Wayne Gretzy'
    }
    ,
    {
        quo: "Resentment is like drinking poison and waiting for your enemies to die.",
        au: '--Nelson Mandela'
    }
    ,
    {
        quo: "It's not what happens to you, but how you react to it that matters."

        ,
        au: '--Epictetus'
    }
    ,
    {
        quo: "Do not take life too seriously. You will not get out alive.",
        au: '--Elbert Hubbard'
    }
    ,
    {
        quo: "The best revenge is massive success.",
        au: '--Frank Sinatra'
    }

];

function getTheQuotes(){

var x= Math.floor(Math.random()*quotes.length);
document.getElementById("quo").innerHTML=quotes[x].quo;
document.getElementById("au").innerHTML=quotes[x].au;


}


 