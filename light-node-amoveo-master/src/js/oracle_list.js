

var globalB1;

var globalVariable;
            var fullDate;
var firstTimeBool;
var filterText;
var bigL;
var firstTimeBool2;

var globalInputBool;

    var foundCidArray = new Array;

var globalBalDB;

var zHolder;
//                hideBeforeDisplay(l, offsetNumber2, oracle_text)
var global_l;
var global_offsetNumber2;
var global_oracle_text;
var global_oracleSimplified_text;

var globalPositionData;
var acceptConfirmation = document.createElement("div");
    var xyz1 = 1;
var xyz2 = 1;    
//var offsetNumber2;

var abcd = (function() {
    var div = document.createElement("div");
    document.body.appendChild(div);

    var title2 = document.createElement("h3");
    title2.innerHTML = "Raw Contract";
//    div.appendChild(title2);
    glossary.link2(div, "accepting_channel_offer", "how to accept a trade");
    var contract_div = document.createElement("div");
    //div.appendChild(contract_div);



    var title0 = document.createElement("h3");
    title0.innerHTML = "My positions";
    div.appendChild(title0);

//    var title4 = document.createElement("h3");
//    title4.innerHTML = "Provide liquidity (under construction)";




    var title3 = document.createElement("h3");
    title3.innerHTML = "Provide liquidity (under construction)";

    div.appendChild(title3);

    title3.appendChild(br());
   // title3.appendChild(br());
    var newDiv = document.createElement("p");
    newDiv.style.fontWeight = "normal";
    newDiv.innerHTML = "Max risk per bet (VEO): "
    newDiv.style.fontSize = "16px";
    title3.appendChild(newDiv);
 //   var words = text("Max loss per bet: ");
 //       title3.appendChild(text("Max loss per bet: "));

    var LPinput = document.createElement("INPUT");
    LPinput.style.display = "inline";
    var text10 = text(" ");
    text10.style.display = "inline";
    newDiv.appendChild(text10);
    newDiv.appendChild(LPinput);

    var LPGoButton = button_maker2("Go", function() { return liquidityProvision()});
    title3.appendChild(LPGoButton);

    title3.style.display = 'none';
    title3.appendChild(br());
    title3.appendChild(br());
    var successVar = document.createElement("div");
    title3.appendChild(successVar);

    async function liquidityProvision(){

        var maxRisk = Number(LPinput.value);  // * 100000000; lol
        successVar.innerHTML = "<font color=\"green\">LP bot started</font>";

    //    need to pull them from zacks server

    
        var bettingOdds = await rpc.apost(["test", 1], "46.101.185.98", parseInt("8084"));
        console.log("odds are: " + bettingOdds);
        console.log("odds are: " + atob(bettingOdds[3]));
            //Friday, March 4, 2022

            var date_ = atob(bettingOdds[3]);
            console.log(date_[2]);
            var sport = atob(bettingOdds[1]);
            console.log("sport is: " + sport);


        function numberFromWord(){


            console.log(date_[2]);
            var monthDay = date_.split(",")[1];
            var year = date_.split(",")[2];
            console.log("year is " + year);
            console.log("monthday split is " + monthDay.split(" ")[0]);
            var month;
       //     console.log(monthDay.search(" "));
            if (monthDay.split(" ")[1] == "January"){
                month = "01";
            }
        
            if (monthDay.split(" ")[1] == "February"){
                month = "02";
            }
        
            if (monthDay.split(" ")[1] == "March"){
                month = "03";
            }
        
            if (monthDay.split(" ")[1] == "April"){
                month = "04";
            }
        
            if (monthDay.split(" ")[1] == "May"){
                month = "05";
            }
        
            if (monthDay.split(" ")[1] == "June"){
                month = "06";
            }
        
            if (monthDay.split(" ")[1] == "July"){
                month = "07";
            }
        
            if (monthDay.split(" ")[1] == "August"){
                month = "08";
            }
        
            if (monthDay.split(" ")[1] == "September"){
                month = "09";
            }
        
            if (monthDay.split(" ")[1] == "October"){
                month = "10";
            }
        
            if (monthDay.split(" ")[1] == "November"){
                month = "11";
            }
        
            if (monthDay.split(" ")[1] == "December"){
                month = "12";
            }

            var day = monthDay.split(" ")[2];

            if (day < 10){
                day = "0" + day;
            }

            var year = year.substring(1, 5);
            console.log("year: " + year);

            fullDate = month + "/" + day + "/" + year;

            console.log("fulldate is" + fullDate);


        }

        numberFromWord();



        var teamOne;
        var teamTwo;
        var myAmountCalc;
        var theirAmountCalc;



        var bettingOdds = atob(bettingOdds[2]);
        console.log("slice attempt: " + bettingOdds.split(",").slice(19));
        console.log("slice attempt: " + bettingOdds.split(",").slice(19).slice(19));



        console.log("testingodds is: " + bettingOdds.split(",")[1]);
        
        var header

        if (sport == "NBA BASKETBALL"){
            sport = "NBA";
        }

        var i = 1;
        function loopTheOdds(bettingOdds_){

        teamOne = sport + bettingOdds.split(",")[1];
        teamTwo = sport + bettingOdds.split(",")[2];
        console.log("last minus is " + bettingOdds.split(",")[18]);
        var plusOdds = bettingOdds.split(",")[5];
        plusOdds = plusOdds.split("+")[1];

        if ((bettingOdds.split(",")[9]).split("+")[1] > plusOdds){
            plusOdds = (bettingOdds.split(",")[9]).split("+")[1];
        }

        if ((bettingOdds.split(",")[11]).split("+")[1] > plusOdds){
            plusOdds = (bettingOdds.split(",")[11]).split("+")[1];
        }

        if ((bettingOdds.split(",")[13]).split("+")[1] > plusOdds){
            plusOdds = (bettingOdds.split(",")[13]).split("+")[1];
        }

        if ((bettingOdds.split(",")[15]).split("+")[1] > plusOdds){
            plusOdds = (bettingOdds.split(",")[15]).split("+")[1];
        }

        if ((bettingOdds.split(",")[17]).split("+")[1] > plusOdds){
            plusOdds = (bettingOdds.split(",")[17]).split("+")[1];
        }

        console.log("highest plusodds are: " + plusOdds);
//        plusOdds = plusOdds.split(1, plusOdds.length - 1);

        console.log("plusodds is " + (bettingOdds.split(",")[5]).split("+")[1]);


//now do minusOdds


        var minusOdds = bettingOdds.split(",")[6];
        minusOdds = minusOdds.split("-")[1];

        if ((bettingOdds.split(",")[10]).split("-")[1] < minusOdds){
            minusOdds = (bettingOdds.split(",")[10]).split("-")[1];
        }

        if ((bettingOdds.split(",")[12]).split("-")[1] < minusOdds){
            minusOdds = (bettingOdds.split(",")[12]).split("-")[1];
        }

        if ((bettingOdds.split(",")[14]).split("-")[1] < minusOdds){
            minusOdds = (bettingOdds.split(",")[14]).split("-")[1];
        }

        if ((bettingOdds.split(",")[16]).split("-")[1] < minusOdds){
            minusOdds = (bettingOdds.split(",")[16]).split("-")[1];
        }

        console.log("lowest minus is: " + minusOdds);

        var convertedMinus = (minusOdds) / (Number(minusOdds) + Number(100));
        var convertedPlus = Number(100) / (Number(plusOdds) + Number(100));

        console.log("plus: " + convertedPlus + ", minus: " + convertedMinus);
        console.log("plus plus minus is: " +  (Number(convertedPlus) + Number(convertedMinus)));

        var vigNumber = (Number(convertedPlus) + Number(convertedMinus));




        //  7:00p, Cleveland, Philadelphia, NBCS-PH, BSOH, +260, -310, 0.0%, 0.0%, +250, -310, +263, -306, +250, -300, +247, -299, +265, -2717:00p, Atlanta, Washington, NBCS-DC, BSSE, -180, +160, 0.0%, 0.0%, -175, +155, -184, +165, -165, +140, -180, +150, -170, +1667:00p, Indiana, Detroit, BSDET+, BSIN, -150, +130, 0.0%, 0.0%, -145, +125, -139, +126, -150, +130, -152, +127, -132, +1307:30p, Orlando, Toronto, Sportsnet, BSFL, +270, -325, 0.0%, 0.0%, +280, -360, +275, -322, +280, -360, +274, -333, +275, -3047:30p, Milwaukee, Chicago, ESPN, NBCS-CHI, -150, +130, 0.0%, 0.0%, -200, +170, -194, +173, -210, +175, -197, +164, -176, +1728:00p, Utah, New Orleans, SportsNet RM, BSNO, -160, +140, 0.0%, 0.0%, -170, +150, -166, +149, -175, +150, -162, +1408:00p, Minnesota, Oklahoma City, BSN, BSOK, -350, +280, 0.0%, 0.0%, -425, +325, +171, -245, -388, +316, -385, +3509:00p, Houston, Denver, ALT, SportsNet SW, +700, -1100, 0.0%, 0.0%, +700, -1100, +650, -1100, +700, -91010:00p, New York, Phoenix, MSG, ESPN, +220, -260, 0.0%, 0.0%, +245, -305, +240, -290, +220, -228, -, Time/TV
            // 0    1           2               3       4   5       6   7       8   9       10  11      12  13      14  15      16  17      18
        //bettingOdds
        var plusBool;

        //1 is true, 0 is false
        function chooseAmounts(){

            if (plusBool != 1){
                //then its minus
                dcba.myAmount.value = maxRisk;
                dcba.theirAmount.value = maxRisk * (Number(convertedMinus) / (Number(1) - Number(convertedMinus)));
                dcba.above.checked = true;
                dcba.below.checked = false;
            }else{
                //do plus

                dcba.myAmount.value = maxRisk;
                dcba.theirAmount.value = Math.floor(maxRisk * (100/plusOdds));
                dcba.above.checked = false;
                dcba.below.checked = true;
            }
        
        }

        chooseAmounts();


        dcba.whichCoin.value = teamOne;
        dcba.coinPrice.value = teamTwo;
        dcba.maturityDate1.value = fullDate;


        dcba.above.checked = true;
//        dcba.myAmount.value = myAmountCalc;
//        dcba.theirAmount.value = theirAmountCalc;
        i = i+1;

        loopTheOdds(bettingOdds_.slice(18));
        }



        setTimeout(eraseSuccess, 3000);

    }


    function eraseSuccess(){
            successVar.innerHTML = "";
        }

    var positionDownload = button_maker2("Download", function() { return downloadPositions()});
    var positionShow = button_maker2("Show", function() { return showPositions()});
    var positionHide = button_maker2("Hide", function() { return hidePositions()});

    var positionButtonDiv = document.createElement("div");
 //   title0.appendChild(positionButtonDiv);
    //div.appendChild(text("Controls: "));
       title0.appendChild(text(" ")); 
    title0.appendChild(positionShow);
    title0.appendChild(text(" "));
    title0.appendChild(positionHide);
    title0.appendChild(br());

    var newDiv2 = document.createElement("p");
    newDiv2.style.fontWeight = "normal";
    newDiv2.innerHTML = "Sell for how much VEO: "
    newDiv2.style.fontSize = "16px";
    title0.appendChild(newDiv2);
 //   var words = text("Max loss per bet: ");
 //       title3.appendChild(text("Max loss per bet: "));

    var positionsInput = document.createElement("INPUT");
    positionsInput.style.display = "inline";
    var text11 = text(" ");
    text11.style.display = "inline";
    newDiv2.appendChild(text11);
    newDiv2.appendChild(positionsInput);

    var positionsGoButton = button_maker2("Create offer", function() { return doitConcession2(globalBalDB, positionsInput.value)});

    var text12 = text(" ");
    text12.style.display = "inline";
    newDiv2.appendChild(text12);
    newDiv2.appendChild(positionsGoButton);

   // newDiv2.style.display = 'none';
//    title0.appendChild(br());
//    title0.appendChild(br());
    var successVar2 = document.createElement("div");
    newDiv2.appendChild(successVar2);
    successVar2.style.display = 'inline';
    successVar2.innerHTML = "";

    newDiv2.style.display = 'none';



//    title0.appendChild(text(" "));
//    title0.appendChild(positionDownload);
  //  div.appendChild(text(" "));
//    div.appendChild(br());
 //   div.appendChild(br());

    var positionDiv = document.createElement("div");
    div.appendChild(positionDiv);

    var hideOddsButton = button_maker2("Hide", function() { return hideOdds2()});

    var title1 = document.createElement("h3");
    title1.innerHTML = "Odds";
    div.appendChild(title1);
    title1.appendChild(text(" "));
    title1.appendChild(hideOddsButton);
    var offers = document.createElement("div");
    


    var offersLoad = document.createElement("div");
    var offersInput = document.createElement("INPUT");
    var offersButton = button_maker2("Load", function() { return offerInputLoad()});

    var offersButton2 = button_maker2("Bookmark", function() { return offerInputBookmark()});
    var offersButton3 = button_maker2("Testing", function() { return getBookMark()});

//    headers_object.bookmarkText;
    offersLoad.style.display = 'inline';
    offersInput.style.display = 'inline';
    offersButton.style.display = 'inline';

    offersButton2.style.display = 'none';


    offersLoad.innerHTML = "Load offers by contract: ";


    console.log("xyzw: " + (offersInput.value == ""));


//    div.appendChild(br());
//    div.appendChild(br());

    div.appendChild(offersLoad);
    offersLoad.appendChild(offersInput);

    offersLoad.appendChild(text(" "));

    offersLoad.appendChild(offersButton);

    offersLoad.appendChild(text(" "));

    offersLoad.appendChild(offersButton2);
//    offersLoad.appendChild(offersButton3);

//    div.appendChild(br());
//    div.appendChild(br());

    offersLoad.appendChild(offers);
    
    var oracleDoc = document.createElement("h8");
    var t2 = document.createElement("h8");
    var t3;
    var filterbutton = button_maker2("Go", function() { return filter()});
    var resetfilterbutton = button_maker2("Reset", function() { return resetFilter()});
    var loadEventsbutton = button_maker2("Load events", function() { return filter()});

    var title = document.createElement("h3");
    title.innerHTML = "Events";
    div.appendChild(title);

    var optionPresetButton1 = button_maker2("Crypto Options", function() { return PresetFilter("price is more than Midnight")});
    var optionPresetButton2 = button_maker2("Competition", function() { return PresetFilter("will defeat in the competition starting on local time")});
    
   // var nbaPresetButton = button_maker2("NBA", function() { return PresetFilter("nba")});




  //  div.appendChild(br());
  //  div.appendChild(br());
    div.appendChild(text(" "));
    var div2 = document.createElement("div");
    div.appendChild(div2);
    var oracle_filter = document.createElement("INPUT");

    oracle_filter.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
//    event.preventDefault();
    // Trigger the button element with a click
    filter();
   // document.getElementById("filterbutton").click();
          }
        });
    div2.appendChild(text("Custom filter: "));
    div2.appendChild(oracle_filter);
    div2.appendChild(text(" "));
    div2.appendChild(filterbutton);
    div2.appendChild(text(" "));
    div2.appendChild(resetfilterbutton);
    div2.appendChild(text(" "));
    div2.appendChild(loadEventsbutton);

        div2.appendChild(text(" "));
            div2.appendChild(br());
                        div2.appendChild(br());
    div2.appendChild(text("Presets: "));

    div2.appendChild(optionPresetButton1);
    div2.appendChild(text(" "));
        div2.appendChild(optionPresetButton2);
  //  div2.appendChild(text(" "));
  //  div2.appendChild(nbaPresetButton);

    div2.appendChild(br());
    div2.appendChild(br());



    var oracles = document.createElement("div");
    div.appendChild(oracles);
    //oracles.innerHTML = "test";


//    rpc.default_explorer(["oracle_list"], function(X) {
//        console.log("oracle_list attempt:");
//        console.log(JSON.stringify(X));
//        var l = X.slice(1);
//        offers.innerHTML = "";
//        console.log("right before display_oracles(l)");
//        display_oracles(l);
//    });





function offerInputBookmark(){

    var _cid = offersInput.value;
    
    if (_cid == ''){
        console.log("cant do that sorry");
    }else{

    var oracleText = globalB1;
    
    console.log("oracleText is: " + oracleText);

    //check length of existing database

    var bnonce = window.localStorage.getItem("bookmarknonce");

    if (bnonce == null){
        bnonce = 0;
    }

    bnonce = Number(bnonce) + Number(1);

    window.localStorage.setItem("bookmarkData1," + keys.pub() + "," + bnonce, _cid);
    window.localStorage.setItem("bookmarkData2," + keys.pub() + "," + bnonce, oracleText);

    console.log("bookmark troubleshooting: " + "bookmarkData1," + keys.pub() + "," + bnonce);
    console.log("bookmark troubleshooting2: " + "bookmarkData2," + keys.pub() + "," + bnonce);



//    window.localStorage.setItem(_cid, "bookmarkData1," + keys.pub() + "," + bnonce);
//    window.localStorage.setItem(oracleText, "bookmarkData2," + keys.pub() + "," + bnonce);

    window.localStorage.setItem("bookmarknonce", bnonce);

  //  setTimeout(getBookMark(), 3000);

    }
}


function pullbm(){

    let _key1_ = "bookmarkData1," + keys.pub() + "," + 6;
    let retrieved1 = window.localStorage.getItem(_key1_);
    console.log(retrieved1);
}

function getBookMark(){

    headers_object.bookmarkText2.innerHTML = "";



//    var _nonce = 55;
    var i;

    var bmnonce = window.localStorage.getItem("bookmarknonce");


    for (let i = 1; i < 1000; i++) {
    





    var _nonce = i;

    var _key1 = "bookmarkData1," + keys.pub() + "," + _nonce;
    var _key2 = "bookmarkData2," + keys.pub() + "," + _nonce;

    let retrieved1 = window.localStorage.getItem(_key1);
    let retrieved2 = window.localStorage.getItem(_key2);
    
    console.log("retrieved1 is: " + retrieved1);
    console.log("retrieved1 is2: " + retrieved2);

    if (retrieved1 == null){
 //       i = 1000;

        if (i == 1){
            headers_object.bookmarkText.innerHTML = "";
        }else{
            headers_object.bookmarkText.innerHTML = "Bookmarks"
        }

//        retrieved1 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

    }

    if (retrieved2 == null){
 //       i = 1000;
//        retrieved2 = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        
    }



    if (i < 1000){

    var _div1 = document.createElement("div");
    var _div2 = document.createElement("div");
    var _div3 = document.createElement("div");
    var _div4 = document.createElement("div");


    var _div0 = document.createElement("div");
    var _divnegativeone = document.createElement("div");

    _div0 = text("Contract: ");
    _divnegativeone = text("Event: ");

//    _div1 = text(retrieved1);
    _div2 = text(retrieved2);
    _div3 = text(" | ");
    _div4 = text(" | ");

    _div2.style.fontWeight = 'normal';
    _div3.style.fontWeight = 'normal';
    _div4.style.fontWeight = 'normal';


    _div0.style.fontWeight = 'normal';
    _divnegativeone.style.fontWeight = 'normal';

    headers_object.bookmarkText2.appendChild(br());
//    headers_object.bookmarkText.appendChild(br());

//    var a = document.createElement("a");
    var divTruncate = retrieved1.slice(0,5)+     "..." + retrieved1.slice(retrieved1.length - Number (4), retrieved1.length);
//    a.innerHTML = divTruncate;


    _div1 = text(divTruncate);
    _div1.style.fontWeight = 'normal';


    console.log("retrieved1 is: " + retrieved1);
    var bookmarkbutton = button_maker2("Load market", function() { return loadBookmark(retrieved1) });

//    a.target = "_blank";
//    a.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_);


    if (i == 1){
    

  //      headers_object.bookmarkText2.appendChild(br());
        
    }


    headers_object.bookmarkText2.appendChild(_div0);

    headers_object.bookmarkText2.appendChild(_div1);

    headers_object.bookmarkText2.appendChild(_div3);

    headers_object.bookmarkText2.appendChild(_divnegativeone);

    headers_object.bookmarkText2.appendChild(_div2);

     headers_object.bookmarkText2.appendChild(_div4);

      headers_object.bookmarkText2.appendChild(bookmarkbutton);

//    headers_object.bookmarkText.appendChild(br());

    console.log("xxx i is: " + i);

    console.log(retrieved1, retrieved2, i);


    }


}




}


//getBookMark();


async function loadBookmark(_contract){
    console.log("contract is: " + _contract);


    offersInput.value = _contract;
    await offerInputLoad()
    hideAccountManagement();
    showTradeExplorer();

}



var displayOraclesNumber = 0;
//firstTimeBool = 1;
//xxxxxxxx



async function display_oracles(l) {


                    console.log("showing h1" + l);
                    console.log(firstTimeBool);

            if (firstTimeBool != 1){
                                oracles.innerHTML = "";
                                firstTimeBool = 1;
                            }

            var Oracle;
            var oracle_text;
            var z;
            var t__;
                    div.appendChild(oracleDoc);
                    //oracleDoc.innerHTML = "testing";
                    if (JSON.stringify(l) == "[]") {
                            cidArray.length = 0;
                            foundCidArray.length = 0;

                        return 0;


                    } else {
                        var h = l[0];
                        console.log("showing h12: " + h[5]);
                        //console.log("this is h");
                        //console.log(JSON.stringify(h));
                        console.log("here is h3: "+ h);

                        console.log("here is el: "+ JSON.stringify(h));

                        async function oraclePull (h){
            //            var Oracle = await rpc.apost(["oracle", h[1]]);
            
var placeholder;

    if(h[3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
        placeholder = h[5];
    }else{
        placeholder = h[3];
    }
    var offsetNumber2;

  //  if h[]

  console.log("placeholder is: " + placeholder);


  //          if (displayOraclesNumber != 1){
            z = await rpc.apost(["read", 3, placeholder], get_ip(), parseInt("8090"));
console.log("zee1 is: " + z);
            zHolder = z;
//            displayOraclesNumber = 1;
    //        }

            console.log("XYXY is ");

            console.log("zee is: " + atob(zHolder[1]));

            Oracle = zHolder;
            oracle_text = atob(zHolder[1]);
//            }
          //  oraclePull(h);
            console.log("oracle_text zee is: " + oracle_text);
            console.log("zee is: " + zHolder);

//        await rpc.apost(["oracle", h[1]], async function(Oracle) {
                //rpc.post(["oracle", h], function(Oracle) {
                if(Oracle == "error") {
                    console.log("non existant oracle.");
                } else {
                    console.log(JSON.stringify(Oracle));
        //            console.log(atob(Oracle[1]));
        //            var oracle_text = atob(Oracle[1]);
                    //determine if it is bitcoin put or call
                    console.log(oracle_text.search("as reported by Close price as of "));
                    console.log(oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));

                    if (( (oracle_text.search("bitcoin price is more than ") == 0) || (oracle_text.search("bitcoin price is less than ") == 0)) && (oracle_text.search("as reported by Close price as of ") >= 33) && (oracle_text.search("as reported by Close price as of ") <= 35) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") >= 77) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") <= 79)) {
                        console.log("oracle text success");
                        console.log();
                            var price = oracle_text.slice(26,33);
                            console.log(price);
                            console.log("price testing");
                            console.log(price[price.length-1] == " ");
                            console.log(price[price.length]);
                            if ((price[1] == "$") && (price[0] == " ") && (price[price.length-1] == " ")){
                            console.log(price.slice(2,price.length-1));
                            console.log(price.search(" "));

                            var coinPrice = price.slice(2,price.length-1);


                            console.log("date testing");

                            console.log(oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/")));
                            var dateValue = oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));
                            
                            console.log(dateValue.slice(0,3));
                            if ((dateValue.slice(0,3) == "Jul") || (dateValue.slice(0,3) == "Aug") || (dateValue.slice(0,3) == "Sep") || (dateValue.slice(0,3) == "Oct") ){
                                    console.log("success!");
                                    console.log(oracle_text.slice(17,21));
                            var callorput;

                            if (oracle_text.slice(17,21) == "more"){

                            callorput =  "call";
                            
                            } else if (oracle_text.slice(17,21) == "less"){
                                callorput = "put";
                            }

                            t2 = text("Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ");
                            t3 = "Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ";
                            }
                            }
                            
                    }else{

                 //       console.log("splitting text " + oracle_text.split(";"));
          //       console.log("splitting text0 " + oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length));
         //        console.log("splitting text1" + (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ));
                      //      console.log("splitting text " + (oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length) ));
                        console.log("oracletextis " + oracle_text);    
            if (oracle_text.search(";") < 0 ){

                        t2 = text(oracle_text);
                          t3 = oracle_text;  
                      }else{

                        console.log("splitting0: " + oracle_text.split(";")[5]);
                        console.log("splitting01: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        
                        var offsetNumber;
                        if (" return opposite of previous output" == oracle_text.split(";")[5]){
                            offsetNumber = Number(2);
                        }else{
                            offsetNumber = Number(1);
                        }


                        if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (price of Y is more than X as of Z as reported by W)") && (oracle_text.split(";")[0] == "W = https://www.coinmarketcap.com historical data daily close price") && (oracle_text.split(";")[4] == " return (price of Y is more than X as of Z as reported by W)")) {
                                console.log("splitting")
                      //        var coinName = oracle_text.split(";")[2].substring(6,3) ;
                                var coinPrice = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinName = oracle_text.split(";")[2].substring(5, oracle_text.split(";")[2].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length);
                                offsetNumber2 = 1;
 
                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);
//flipping for perspective of user
                                if (offsetNumber == Number(1)){
                                t2 = text(coinName + " price is more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }

                                if (offsetNumber == Number(2)){
                                t2 = text(coinName + " price is not more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }



                                t3 =  "The price of " + coinName + " is more than "+ coinPrice + " at Midnight " + n1 + "GMT "; // Jul 15 2020 GMT; 
                                    
                        }else{
                                console.log("1maturity is" + (oracle_text.split(";")[0].substring(5, 0) == " W = "));
                                console.log("1maturiy is" + oracle_text.split(";")[0].substring(5, 0));

                                console.log("1maturiy is" + " Z (in MM/DD/YYYY) = ");

                        console.log("splitting1: " + oracle_text.split(";")[5]);
                        console.log("splitting11: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        console.log("splitting11 offsetNumber is " + offsetNumber);
                        console.log("splitting111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Team W defeated Team X in the game that started on date Z (in local time))")  );
                        console.log("splitting1111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber]));

                        console.log("splitting14 is" + ( (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") ));


                            if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))") && (oracle_text.split(";")[4] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))")) {

                        console.log("splitting2: " + oracle_text.split(";")[5]);
                        console.log("splitting22: " + (" return opposite of previous output" == oracle_text.split(";")[5]));

                                offsetNumber2 = 1;
                                var team1 = oracle_text.split(";")[0].substring(4, oracle_text.split(";")[0].length);
                                var team2 = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(22, oracle_text.split(";")[3].length);


                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);


//flipping this so it's from the perspective of the user
                                if (offsetNumber == Number(1)) {
                                t2 = text(team1 + " will defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }
//was coinMaturity
                                if (offsetNumber == Number(2)) {
                                t2 = text(team1 + " will not defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }


                             //   }
                                t3 =  team1 + " will defeat " + team2 + " in the competition starting on " + coinMaturity + " (local time) ";



                            }else{




                        t2 = text(oracle_text);
                          t3 = oracle_text;   
                                }



                                            }

//                                offsetNumber2 = 0;

                                                        }
                        
}
                    

                    console.log("xxxy this is t" + t2.outerHTML);
                    console.log(t2);
                    console.log((t3.split(" ")));
                                            console.log((t3.split(" "))[0]);
                    console.log(t2[0]);


                    console.log("xyzxyz button2: " + l[0]);

                    console.log("xyzxyz button: " + l[0][5]);
                    
                    console.log("xxyx first t2 is: " + oracle_text);

                    var temp_t2 = t2.outerHTML;

                    var cidHolder;

                    if (l[0][3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") {
                        cidHolder = l[0][5];
                    }

                    if (l[0][5] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") {
                        cidHolder = l[0][3];
                    }


                    console.log("xyzxyz button3: " + cidHolder);



                    //return loadBookmark(_contract)

    //                var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text, temp_t2) });


                    var button = button_maker2("See Odds", function() { return loadBookmark(cidHolder) });


                    //adding some space
                    console.log("firstTimeBool: " + firstTimeBool);
                    console.log(filterText === undefined);
                    if (filterText === undefined){

                    oracles.appendChild(t2);
                    oracles.appendChild(text(" "));
                    oracles.appendChild(button);
                    oracles.appendChild(br());

                    
                    }else{

                        //check if strings match
                        console.log("filter text is: " + filterText);
                        //start slicing filterText
                        var increment2;
                        increment2 = 0;
                        var increment;
                        ;
                        var lengthSplit = (filterText.split(" ")).length;
                        console.log(lengthSplit);

                //    for (i = 0; i < cars.length; i++) {
                //    text += cars[i] + "<br>";
                //    }



                        for (increment = 0; increment < lengthSplit; increment++ ){;
                        
                        if (t3.search((filterText.split(" "))[increment]) < 0){

                            increment2 = increment2 + 1;

                        }
}

                        //make increment2 1 as well if a cid has already been used.
//                        cidArray.toString()
                        console.log("indexOf check: " + cidArray.length);
                        console.log("indexOf check3: " + cidHolder);
                        console.log("indexOf check2: " + cidArray.indexOf(cidHolder));


                        if (cidArray.indexOf(cidHolder) != "-1"){

                            if (foundCidArray.indexOf(cidHolder) != "-1"){

                                increment2  = increment2 + 1;

                            }else{

                            foundCidArray.push(cidHolder);
                            
                            }

                        }


                        if (increment2 < 1) {
                        oracles.appendChild(t2);
                        oracles.appendChild(button);
                        oracles.appendChild(br());
                        }

                    }

                };
               // firstTimeBool = 1;

    //        });
                display_oracles(l.slice(1));
                displayOraclesNumber = 1;
                

//                cidArray.length = 0;
//                foundCidArray.length = 0;


        };

    oraclePull(h);

    }
    


    };



//calculate what you need then execute the function
async function display_oracles2(l, _placeholder1, _placeholder2) {


                    console.log("showing h1" + l);
                    console.log(firstTimeBool);

            if (firstTimeBool != 1){
                                oracles.innerHTML = "";
                                firstTimeBool = 1;
                            }

            var Oracle;
            var oracle_text;
            var z;
            var t__;
                    div.appendChild(oracleDoc);
                    //oracleDoc.innerHTML = "testing";
                    if (JSON.stringify(l) == "[]") {
                        return 0;
                    } else {
                        var h = l;
                        console.log("showing h12: " + h[5]);
                        //console.log("this is h");
                        //console.log(JSON.stringify(h));
                        console.log("here is h3: "+ h);

                        console.log("here is el: "+ JSON.stringify(l));

                        async function oraclePull (h, _placeholder1, _placeholder2){
            //            var Oracle = await rpc.apost(["oracle", h[1]]);
            
var placeholder;

    if(_placeholder1 == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
        placeholder = _placeholder2;
    }else{
        placeholder = _placeholder1;
    }
    var offsetNumber2;

  //  if h[]

  console.log("placeholder is: " + placeholder);


  //          if (displayOraclesNumber != 1){
            z = await rpc.apost(["read", 3, placeholder], get_ip(), parseInt("8090"));
                    console.log("zee1 is: " + z);
            zHolder = z;
//            displayOraclesNumber = 1;
    //        }

            console.log("XYXY is ");

            console.log("zee is: " + atob(zHolder[1]));

            Oracle = zHolder;
            oracle_text = atob(zHolder[1]);
//            }
          //  oraclePull(h);
            console.log("oracle_text zee is: " + oracle_text);
            console.log("zee is: " + zHolder);

//        await rpc.apost(["oracle", h[1]], async function(Oracle) {
                //rpc.post(["oracle", h], function(Oracle) {
                if(Oracle == "error") {
                    console.log("non existant oracle.");
                } else {
                    console.log(JSON.stringify(Oracle));
        //            console.log(atob(Oracle[1]));
        //            var oracle_text = atob(Oracle[1]);
                    //determine if it is bitcoin put or call
                    console.log(oracle_text.search("as reported by Close price as of "));
                    console.log(oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));

                    if (( (oracle_text.search("bitcoin price is more than ") == 0) || (oracle_text.search("bitcoin price is less than ") == 0)) && (oracle_text.search("as reported by Close price as of ") >= 33) && (oracle_text.search("as reported by Close price as of ") <= 35) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") >= 77) && (oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/") <= 79)) {
                        console.log("oracle text success");
                        console.log();
                            var price = oracle_text.slice(26,33);
                            console.log(price);
                            console.log("price testing");
                            console.log(price[price.length-1] == " ");
                            console.log(price[price.length]);
                            if ((price[1] == "$") && (price[0] == " ") && (price[price.length-1] == " ")){
                            console.log(price.slice(2,price.length-1));
                            console.log(price.search(" "));

                            var coinPrice = price.slice(2,price.length-1);


                            console.log("date testing");

                            console.log(oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/")));
                            var dateValue = oracle_text.slice(oracle_text.search("as reported by Close price as of ")+("as reported by Close price as of ").length,oracle_text.search(" on https://coinmarketcap.com/currencies/bitcoin/historical-data/"));
                            
                            console.log(dateValue.slice(0,3));
                            if ((dateValue.slice(0,3) == "Jul") || (dateValue.slice(0,3) == "Aug") || (dateValue.slice(0,3) == "Sep") || (dateValue.slice(0,3) == "Oct") ){
                                    console.log("success!");
                                    console.log(oracle_text.slice(17,21));
                            var callorput;

                            if (oracle_text.slice(17,21) == "more"){

                            callorput =  "call";
                            
                            } else if (oracle_text.slice(17,21) == "less"){
                                callorput = "put";
                            }

                            t2 = text("Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ");
                            t3 = "Bitcoin ".concat(callorput)+ " option | Strike: $"+ coinPrice+" | Maturity: Midnight "+dateValue+" GMT | ";
                            }
                            }
                            
                    }else{

                 //       console.log("splitting text " + oracle_text.split(";"));
          //       console.log("splitting text0 " + oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length));
         //        console.log("splitting text1" + (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ));
                      //      console.log("splitting text " + (oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length) ));
                        console.log("oracletextis " + oracle_text);    
            if (oracle_text.search(";") < 0 ){

                        t2 = text(oracle_text);
                          t3 = oracle_text;  
                      }else{

                        console.log("splitting0: " + oracle_text.split(";")[5]);
                        console.log("splitting01: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        
                        var offsetNumber;
                        if (" return opposite of previous output" == oracle_text.split(";")[5]){
                            offsetNumber = Number(2);
                        }else{
                            offsetNumber = Number(1);
                        }


                        if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (price of Y is more than X as of Z as reported by W)") && (oracle_text.split(";")[0] == "W = https://www.coinmarketcap.com historical data daily close price") && (oracle_text.split(";")[4] == " return (price of Y is more than X as of Z as reported by W)")) {
                                console.log("splitting")
                      //        var coinName = oracle_text.split(";")[2].substring(6,3) ;
                                var coinPrice = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinName = oracle_text.split(";")[2].substring(5, oracle_text.split(";")[2].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(21, oracle_text.split(";")[3].length);
                                offsetNumber2 = 1;
 
                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);
//flipping for perspective of user
                                if (offsetNumber == Number(1)){
                                t2 = text(coinName + " price is more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }

                                if (offsetNumber == Number(2)){
                                t2 = text(coinName + " price is not more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }



                                t3 =  "The price of " + coinName + " is more than "+ coinPrice + " at Midnight " + n1 + "GMT "; // Jul 15 2020 GMT; 
                                    
                        }else{
                                console.log("1maturity is" + (oracle_text.split(";")[0].substring(5, 0) == " W = "));
                                console.log("1maturiy is" + oracle_text.split(";")[0].substring(5, 0));

                                console.log("1maturiy is" + " Z (in MM/DD/YYYY) = ");

                        console.log("splitting1: " + oracle_text.split(";")[5]);
                        console.log("splitting11: " + (" return opposite of previous output" == oracle_text.split(";")[5]));
                        console.log("splitting11 offsetNumber is " + offsetNumber);
                        console.log("splitting111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Team W defeated Team X in the game that started on date Z (in local time))")  );
                        console.log("splitting1111 is" + (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber]));

                        console.log("splitting14 is" + ( (oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") ));


                            if ((oracle_text.split(";")[3].substring(21, 0) == " Z (in MM/DD/YYYY) = " ) && (oracle_text.split(";")[2].substring(5, 0) == " Y = ") && (oracle_text.split(";")[0].substring(4, 0) == "W = ") && (oracle_text.split(";")[1].substring(5, 0) == " X = ") && (oracle_text.split(";")[oracle_text.split(";").length - offsetNumber] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))") && (oracle_text.split(";")[4] == " return (Competitor W defeated Competitor X in the competition that started on date Z (in local time))")) {

                        console.log("splitting2: " + oracle_text.split(";")[5]);
                        console.log("splitting22: " + (" return opposite of previous output" == oracle_text.split(";")[5]));

                                offsetNumber2 = 1;
                                var team1 = oracle_text.split(";")[0].substring(4, oracle_text.split(";")[0].length);
                                var team2 = oracle_text.split(";")[1].substring(5, oracle_text.split(";")[1].length);
                                var coinMaturity = oracle_text.split(";")[3].substring(22, oracle_text.split(";")[3].length);


                                var d1 = new Date(coinMaturity);
                                var n1 = d1.toString();

                                n1 = n1.substring(16,4);

                                                              console.log("here is d1: " + n1[Number(n1.length) - Number(1)]);
                                console.log("here is d1 2" + n1);  
                                if (n1[n1.length -1] == " "){
                                    n1 = n1.substring(n1.length -1, 0);
                                }
                                console.log("this is a date format" + n1);


//flipping this so it's from the perspective of the user
                                if (offsetNumber == Number(1)) {
                                t2 = text(team1 + " will defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }
//was coinMaturity
                                if (offsetNumber == Number(2)) {
                                t2 = text(team1 + " will not defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }


                             //   }
                                t3 =  team1 + " will defeat " + team2 + " in the competition starting on " + coinMaturity + " (local time) ";



                            }else{




                        t2 = text(oracle_text);
                          t3 = oracle_text;   
                                }



                                            }

//                                offsetNumber2 = 0;

                                                        }
                        
}
                    

                    console.log("xxxy this is t" + t2.outerHTML);
                    console.log(t2);
                    console.log((t3.split(" ")));
                                            console.log((t3.split(" "))[0]);
                    console.log(t2[0]);
                    console.log("xyzxyz button: " + h);
                    console.log("xxyx first t2 is: " + oracle_text);

                    var temp_t2 = t2.outerHTML;
//                    var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text, temp_t2) });
                 return hideBeforeDisplay3(l, offsetNumber2, oracle_text, temp_t2);


                    //adding some space
                    console.log("firstTimeBool: " + firstTimeBool);
                    console.log(filterText === undefined);
                    if (filterText === undefined){

//                    oracles.appendChild(t2);
//                    oracles.appendChild(text(" "));
//                    oracles.appendChild(button);
//                    oracles.appendChild(br());

                    
                    }else{

                        //check if strings match
                        console.log("filter text is: " + filterText);
                        //start slicing filterText
                        var increment2;
                        increment2 = 0;
                        var increment;
                        ;
                        var lengthSplit = (filterText.split(" ")).length;
                        console.log(lengthSplit);

                //    for (i = 0; i < cars.length; i++) {
                //    text += cars[i] + "<br>";
                //    }

                        for (increment = 0; increment < lengthSplit; increment++ ){;
                        
                        if (t3.search((filterText.split(" "))[increment]) < 0){

                            increment2 = increment2 + 1;

                        }
}
                        if (increment2 < 1) {
//                        oracles.appendChild(t2);
//                        oracles.appendChild(button);
//                        oracles.appendChild(br());
                        }

                    }

                };
               // firstTimeBool = 1;

    //        });
//                display_oracles(l.slice(1));
                displayOraclesNumber = 1;
   console.log("through");     
        };

    oraclePull(h, _placeholder1, _placeholder2);
console.log("through");
    }
    };






    async function offerInputLoad(){

        // the server stores trades based on market id which is a function of what is being traded for what in the swap offer.
        // so we cover two cases: VEO & Type 1 are being traded and VEO & Type 2 are being traded.
 
        if (offersInput.value == ''){

        }else{

        hideOdds();
        var mid1_;
        var mid2_;

        var veoCID = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
        var subCID = offersInput.value;

        mid1_ = new_market.mid(offersInput.value, veoCID, 1, 0);
        mid2_ = new_market.mid(offersInput.value, veoCID, 2, 0);

        console.log("offersInput value is: " + offersInput.value);
        console.log("mids are: " + mid1_ + " " + mid2_);


//now we need to construct l then start calling display oracles
// here is what one looks like ["market",1,"ETxn0LRZlJALWplG8YxYt0j92mQ9+PdKNBZlp/hrQ6M=","0hXzpa20rOZpJzDq8UvCvFCQkqjPjdkWRGl3cRPvO2c=",2,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",0,0];

    var input1 = new Array;
    input1.push("market");
    input1.push(mid1_);

    input1.push(veoCID);
    input1.push(0);

    input1.push(offersInput.value);
    input1.push(1);

    input1.push(0);
    var newJSON1 = Object.assign({}, input1);

    console.log(newJSON1);

    console.log(newJSON1[5]);
    console.log(input1[5]);


// ["market",1,"pqxNEAbT+KNRmZ3GSeJcUJW1AEefv0pt+LIf2EwGWXs=","0hXzpa20rOZpJzDq8UvCvFCQkqjPjdkWRGl3cRPvO2c=",1,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",0,0]
    await display_oracles2(JSON.stringify(newJSON1), subCID, veoCID);

    var input2 = new Array;
    input2.push("market");
    input2.push(mid2_);

    input2.push(veoCID);
    input2.push(0);

    input2.push(offersInput.value);
    input2.push(2);

    input2.push(0);

    var newJSON2 = Object.assign({}, input2);

//    console.log(JSON.stringify(input2));

    await display_oracles2(JSON.stringify(newJSON2), subCID, veoCID);

    globalInputBool = 0;
       
    offersButton2.style.display = 'inline';
    }

}



    async function hideBeforeDisplay3(h, offsetNumber2_, t2_, t3_){
    //    hideOdds();
        console.log("through2");

       display_oracle_2(h, offsetNumber2_, t2_, t3_);
    
    }


    async function hideBeforeDisplay2(){
        hideOdds();
        
        display_oracle(global_l, global_offsetNumber2, global_oracle_text, global_oracleSimplified_text);
    
    }


    async function hideBeforeDisplay(h, offsetNumber2_, t2_, t3_){
        hideOdds();
        


        offersInput.value = "";
    global_l = h;
    global_offsetNumber2 = offsetNumber2_;
    global_oracle_text = t2_;
    global_oracleSimplified_text = t3_;



        display_oracle(h, offsetNumber2_, t2_, t3_);
    

    }
    async function display_oracle(h, offsetNumber2_, t2_, t3_) {
    //    console.log(JSON.stringify([Buys, Sells]));
    //    var l = Buys.concat(Sells.slice(1));
    //    console.log("this is l:");
   //     console.log(l);


 //                   z = await rpc.apost(["read", 3, h[3]], get_ip(), parseInt("8090"));
 //           console.log("z is: " + atob(z[1]));
        console.log("whatsh: " + h[0]);
   //     console.log("whatsh2: " + h[4][1])
        var m = h[0];



//        var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
//            console.log("FIRST L IS: " + JSON.stringify(l));
//            console.log("FIRST SLICE IS" + l.slice(1)[0]);
//            l = l.slice(1);
//            console.log("SECOND SLICE IS: " + l.slice(1));

  //      rpc.default_explorer(["get_offers", l], function(l2) {
 //           console.log("here are the offers   " + JSON.stringify(l2));
 //           console.log(JSON.stringify(l2));
 //           offers.innerHTML = "";
 //           bigL = l2.slice(1);
//            console.log("xyzxyz: " + l[0]);
  //          console.log("L is display oracle" + bigL);
        //    firstTimeBool2 = 0;
            return display_offers(m, offsetNumber2_, t2_, t3_);
    //        display_oracle(h.slice(1));

  //      });
    };


    async function display_oracle_2(h, offsetNumber2_, t2_, t3_) {
    //    console.log(JSON.stringify([Buys, Sells]));
    //    var l = Buys.concat(Sells.slice(1));
    //    console.log("this is l:");
   //     console.log(l);


 //                   z = await rpc.apost(["read", 3, h[3]], get_ip(), parseInt("8090"));
 //           console.log("z is: " + atob(z[1]));
        console.log("whatsh: " + h[0]);

        var m = h;
//        var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
//            console.log("FIRST L IS: " + JSON.stringify(l));
//            console.log("FIRST SLICE IS" + l.slice(1)[0]);
//            l = l.slice(1);
//            console.log("SECOND SLICE IS: " + l.slice(1));

  //      rpc.default_explorer(["get_offers", l], function(l2) {
 //           console.log("here are the offers   " + JSON.stringify(l2));
 //           console.log(JSON.stringify(l2));
 //           offers.innerHTML = "";
 //           bigL = l2.slice(1);
 //           console.log("xyzxyz: " + l[0]);
  //          console.log("L is display oracle" + bigL);
        //    firstTimeBool2 = 0;
            return display_offersLoad(m, offsetNumber2_, t2_, t3_);
    //        display_oracle(h.slice(1));

  //      });
    };


//var globalPositionData;

    function display_positions2(balances_db2_){
         //   var l = window.localStorage.getItem("positionData"+keys.pub());
        if (JSON.stringify(balances_db2_) == "[]") {
            return 0;
        }else{



         console.log("RRRR display_positions2: " + Object.keys(balances_db2_)    );   




         var key1 = Object.keys(balances_db2_);
         var x = 0

 
        var tempKey;
        var tempDiv = document.createElement('div');
        positionDiv.appendChild(tempDiv);


        do {
        var key = key1[x];

               var tempBalDB;


         console.log("RRRR display_positions21: " + JSON.stringify(balances_db2));
         console.log("RRRR display_positions211: " + JSON.stringify(balances_db2[1]));

         console.log("RRRR display_positions22: " + JSON.stringify(balances_db2_[key]));

         var wat = balances_db2_[key];
         var bal_ = balances_db2_[key].bal;
         var type_ = balances_db2_[key].type;
         var cid_ = balances_db2_[key].cid;
         var oracle_ = balances_db2_[key].string;
    
         console.log("inside display_positions" + (type_ == 2));

         //basically if ur the first one to do it, dont do it
                if (type_ == Number(1)){
                    type_ = "True";
                }
                if (type_ == 2){
                    type_ = "False";
                }

        console.log("inside display_positions2: " + type_);

        //        positionDiv.appendChild(br());


    //            positionDiv.appendChild(text("Settlement:"));
    //            positionDiv.appendChild(text(" "));

//now we loop through the tempvar2 object
              //  for (let j = 0,  j < tempvar2.length, j++) {


//next find where the CID is stored 
        if (cid_ == undefined){
            x = x + 1;
            internalNonce = internalNonce + 1;
        }else{

                if (internalNonce != 0){
    //            positionDiv.appendChild(br());
        //        positionDiv.appendChild(br());
                }


            var a = document.createElement("a");
            var cidTruncate = cid_.slice(0,5)+ "..." + cid_.slice(cid_.length - Number (4), cid_.length);
            a.innerHTML = cidTruncate;
            a.target = "_blank";
            a.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_);


         //       positionDiv.appendChild(ctcButton);
        //        positionDiv.appendChild(br());


                tempDiv.appendChild(text("Contract: "));
                tempDiv.appendChild(a);

                var firstThing = text(" | ");
                tempDiv.appendChild(firstThing);                

                firstThing.appendChild(text("Balance: "));
                firstThing.appendChild(text(Number(bal_ / 100000000).toPrecision(3)));

                firstThing.appendChild(text(" | "));                
                firstThing.appendChild(text("Type: "));


                firstThing.appendChild(text(type_));
                

                console.log("balances_db2_ data: " + JSON.stringify(balances_db2_[key]));

                console.log("balance db slicing: " +JSON.stringify(balances_db2_) );
      //          console.log("balance db slicing: " +JSON.stringify(balances_db2.slice(1)));



                    var json_data = balances_db2_;
                    var result1 = [];

                    for(var i in json_data)
                        result1.push([i, json_data [i]]);

                    console.log("result1 is: " + result1);

                    console.log(JSON.stringify(json_data[1]));


                tempKey = key;
                globalDB = balances_db2_[key];
                console.log("Wat is: " + JSON.stringify(wat));


                testList[key] = balances_db2_[key];
                testListNonce[x] = key;


                let bdk = balances_db2_[key];
                let testList2 = testList;
                let testListNonce2 = testListNonce;
                let x2 = x;

                var button = button_maker2("Concede", function() { doitConcession(bdk)});

                var button2 = button_maker2("Sell", function() { doitConcession3(testList2, testListNonce2, x2, bdk) });


                console.log("testlist is: " + JSON.stringify(testList));

                console.log("testlist is: " + JSON.stringify(testListNonce[1]));


                button.title = "0.05% rebate for lost bets";
                button2.title = "create an offer to sell your position for VEO" + JSON.stringify(balances_db2_[key]);
                firstThing.appendChild(text(" "));                
                firstThing.appendChild(button);

                firstThing.appendChild(text(" "));                
                firstThing.appendChild(button2);

 
                firstThing.appendChild(br());

//                positionDiv.appendChild(text("Reward: "));
//                positionDiv.appendChild(text(Number(((Number(theirStake))/100000000).toPrecision(3))));
                
                internalNonce = internalNonce + 1;
                x = x + 1;
            }


}
  while(x < key1.length);
                //            display_positions2(balances_db2_.slice(1));
  

                      
    }
balances_db2 = {};
}

var testList = {};
var testListNonce = {};


function testListTest(){

    testList['test'] = "123";
    testList['test2'] = "456";
    console.log(testList);

}

//testListTest();

var globalDB;

function doitConcession3(testList_, testListNonce_, x_, a_){

    newDiv2.style.display = 'block';
    globalBalDB = a_;

//    console.log("doit3: " + JSON.stringify(testList_));
//    console.log("doit3: " + JSON.stringify(testListNonce_));
//    console.log("doit3: " + JSON.stringify(x_));
    console.log("doit4: " + JSON.stringify(a_));

}


function concedeDefeat(){

}

    function display_positions(l,n){
         //   var l = window.localStorage.getItem("positionData"+keys.pub());

       // var 
         var y = n;


         console.log("split positions");
         // console.log(JSON.stringify(l));


         var tempvar = "[" + l + "]";
  //      console.log("tempvar is " + (tempvar == undefined));
                 if (JSON.parse(tempvar)[n] == undefined) {
            return 0; 
        } else {


            //now check if its on chain

        var temparray = new Array();
        temparray.push(tempvar);

        // console.log("tempvar testing: " + (tempvar));
      //  console.log("tempvar  testing1: " + JSON.parse(tempvar)[15]);
        console.log("tempvar  testing2: " + atob(JSON.parse(tempvar)[n][1][23]));

                console.log("tempvar  testing2: " + JSON.parse(tempvar)[0][1][16]);
                console.log("tempvar  testing3: " + JSON.parse(tempvar)[0][1]);
     //           console.log("tempvar  testing3: " + JSON.parse(tempvar)[0][2][1][5]);
       // console.log("tempvar array testing2: " + temparray[1]);
        //100000000
         var oracleLanguage = atob(JSON.parse(tempvar)[n][1][23]);
         var myStake = JSON.parse(tempvar)[n][2][1][5];
         var theirStake = JSON.parse(tempvar)[n][2][1][4];

         var ctcButton = button_maker2("Settle early (if you won)", function() { return settleEarly() });
         //need to find CID
        var CID = JSON.parse(tempvar)[n][1][16];

        merkle.request_proof("channels", CID, function(c) {
            console.log("channel is ");
            console.log(c);
            if ((c == "empty") || (c == "fail")) {
                console.log("that channel does not exist. Maybe you haven't synced with the network, or maybe it is already closed, or maybe it never existed");
              //  display_positions(window.localStorage.getItem("positionData"+keys.pub()), y + 1);
               // internalNonce = 0;
                return 0;
            };
         console.log("inside display_positions");

         //basically if ur the first one to do it, dont do it

                if (internalNonce != 0){
                positionDiv.appendChild(br());
                positionDiv.appendChild(br());
                }

        //        positionDiv.appendChild(br());


                positionDiv.appendChild(text("Settlement:"));
                positionDiv.appendChild(text(" "));

//now we loop through the tempvar2 object
              //  for (let j = 0,  j < tempvar2.length, j++) {


//next find where the CID is stored

if (tempvar2 != "[[-6]]"){
            let i = 1;
            do {
              //  if (JSON.parse(tempvar)[n][1][16] == tempvar){
                console.log("ntext is tempvar: " +JSON.parse(tempvar)[n][1][16])
             //   console.log("i is : " + i + " while ntext is tempvar2: " + JSON.stringify(JSON.parse(tempvar2)[0][i][4][1][4]))



                if( ('"' + JSON.parse(tempvar)[n][1][16]+ '"') == JSON.stringify(JSON.parse(tempvar2)[0][i][4][1][4])) {
                var tempStorage = JSON.stringify(JSON.parse(tempvar2)[0][i]);



                positionDiv.appendChild(text(" "));
                var settleEarlyButton = button_maker2("Settle early (if you lost)", function() { return settleEarly(tempStorage)});
                positionDiv.appendChild(settleEarlyButton);

                positionDiv.appendChild(text(" "));

                }
                i=Number(i)+Number(1);

                //} while (i < ( Number(JSON.parse(tempvar2).length) + Number(2)) );
            } while (i < ( Number(JSON.parse(tempvar2)[0].length)) );

//}
}



         //       positionDiv.appendChild(ctcButton);
                positionDiv.appendChild(br());
                positionDiv.appendChild(text("Event: "));
                positionDiv.appendChild(text(oracleLanguage));
                positionDiv.appendChild(br());                

                positionDiv.appendChild(text("Risk: "));
                positionDiv.appendChild(text(Number(myStake / 100000000).toPrecision(3)));
                

 
                positionDiv.appendChild(br());

                positionDiv.appendChild(text("Reward: "));
                positionDiv.appendChild(text(Number(((Number(theirStake))/100000000).toPrecision(3))));
                
                internalNonce = internalNonce + 1;


         //       positionDiv.appendChild(br());


             //   positionDiv.appendChild(text("afsdfdf"));
  

            })   
                            display_positions(window.localStorage.getItem("positionData"+keys.pub()), y + 1);
  

                }

                      
    }

 async function display_offers(l, offsetNumber2_, t2_, t3_) {




        console.log("TESTING" + l);
     //   bigL = l;
    //    console.log("L is "+ bigL);
        console.log("displaying offers");
            var m = l[0];
            var z = await rpc.apost(["read", l[2]], get_ip(), parseInt("8090"));
            console.log("Z ORDERS 0.5 ARE: " + JSON.stringify(z[1][7]));
            console.log("Z ORDERS ARE: " + JSON.stringify(z));
            var orders = z[1][7];
            console.log("Z ORDERS 2 ARE: " + orders);
  //          console.log("Z ORDERS 2.5 ARE: " + z[1][7].slice(1));
            orders = orders.slice(1);
            console.log("Z ORDERS 3 ARE: " + JSON.stringify(orders));
            var orders2 = orders.slice(1);
            console.log("Z ORDERS 4 ARE: " + JSON.stringify(orders2));
        if (JSON.stringify(l) == "[]") {
            return 0;
        } else {
            var h = l;
   //         var t = document.createElement("div");
            var type;
//            if (h[9] == 1) {
            if (1 == 1) {
                type = "binary";
            //    price = h[3];
                return display_offers2(orders, l, type, offsetNumber2_, t2_, t3_, " or ", "");
            } 

         /*   else if (h[9] == 2) {
                var oid = h[2];
                type = "scalar"
                oracle_limit(oid, function(oracle_max) {
                    console.log("oracle_list callback");
                    console.log(oracle_max);
                    var direction = h[4];
                    if (direction == 2) {
                        price = (1023 - h[3]) * oracle_max / 1023;
                    } else if (direction == 1) {
                        price = h[3] * oracle_max / 1023;
                    } else {
                        console.log("fail");
                        return 0
                    };
                    return display_offers2(l, h, t, type, price, " veo/stablecoin or ", " stablecoin/veo;");
                });
            }  */

             else {
                console.log(h[9]);
                console.log("contract type not supported.");
            }
        }
    };

 async function display_offersLoad(l, offsetNumber2_, t2_, t3_) {




        console.log("TESTING" + l);
     //   bigL = l;
    //    console.log("L is "+ bigL);
        console.log("displaying offers" + JSON.parse(l)[1]);
        l = JSON.parse(l);
            var m = l;
            var z = await rpc.apost(["read", l[1]], get_ip(), parseInt("8090"));
            console.log("Z ORDERS 0.5 ARE: " + JSON.stringify(z[1][7]));
            console.log("Z ORDERS ARE: " + JSON.stringify(z));
            var orders = z[1][7];
            console.log("Z ORDERS 2 ARE: " + orders);
  //          console.log("Z ORDERS 2.5 ARE: " + z[1][7].slice(1));
            orders = orders.slice(1);
            console.log("Z ORDERS 3 ARE: " + JSON.stringify(orders));
            var orders2 = orders.slice(1);
            console.log("Z ORDERS 4 ARE: " + JSON.stringify(orders2));
        if (JSON.stringify(l) == "[]") {
            return 0;
        } else {
            var h = l;
   //         var t = document.createElement("div");
            var type;
//            if (h[9] == 1) {
            if (1 == 1) {
                type = "binary";
            //    price = h[3];
                return display_offers2Load(orders, l, type, offsetNumber2_, t2_, t3_, " or ", "");
            } 

         /*   else if (h[9] == 2) {
                var oid = h[2];
                type = "scalar"
                oracle_limit(oid, function(oracle_max) {
                    console.log("oracle_list callback");
                    console.log(oracle_max);
                    var direction = h[4];
                    if (direction == 2) {
                        price = (1023 - h[3]) * oracle_max / 1023;
                    } else if (direction == 1) {
                        price = h[3] * oracle_max / 1023;
                    } else {
                        console.log("fail");
                        return 0
                    };
                    return display_offers2(l, h, t, type, price, " veo/stablecoin or ", " stablecoin/veo;");
                });
            }  */

             else {
                console.log(h[9]);
                console.log("contract type not supported.");
            }
        }
    };


    async function display_offers2Load(orders, l, type, offsetNumber2_, t2_, t3_, d1message, d2message) {

        if (JSON.stringify(orders) == "[]") {
            xyz2 = 1;
            return 0;
        }else{


        var direction;
            var t = document.createElement("div");
        var m = l;
        console.log("mdisplayoffers2 is: " + (m[5] == 0));
        console.log("mdisplayoffers2 is: " + JSON.stringify(m));




    //    console.log()
        console.log("mdisplayoffers3 is type 1: " + type1 +" type2: " + type2);


        var order = orders[0];
        var Maximum = 4294967295;
        var price = order[1] / Maximum;
        var amount = order[2];
        var tid = order[3];
        swapOffer = await trade_details2(tid);
        var swapOffer2 = swapOffer;
        console.log("THIS IS T4: " + swapOffer[1][5]);
        console.log("SWAPOFFER IS: " + swapOffer);
        console.log("SWAPOFFER IS 2: " +swapOffer[1][8])
        console.log("tid is: " + tid);

        var type1 = swapOffer[1][5];
        var type2 = swapOffer[1][8];

        //type1 is what you gain if you accept, type2 is what you lose if you accept

        var newDirection;
        if ((type1 == 1) && (type2 == 0)){
            newDirection = "the result is true";
        }
        if ((type1 == 0) && (type2 == 2)){
            newDirection = "the result is true";
        }


        if ((type1 == 2) && (type2 == 0)){
            newDirection = "the result is false";
        }
        if ((type1 == 0) && (type2 == 1)){
            newDirection = "the result is false";
        }




        var amountGain = swapOffer[1][9];
        var amountLose = swapOffer[1][6];

        var amountSwapped = false;
        var amountSwapped2;

        if (type1 != 0){
           amountGain = swapOffer[1][6];
           amountLose = swapOffer[1][9]; 
           amountSwapped2 = true;

        }
// if not 0, then it means sell veo and buy subcurrency
        console.log("xxxx: " + offsetNumber2_);
        console.log("xxxx swap bool: " + amountSwapped2);
        console.log("xxxx t2 is :" + (t2_.search("competition") != "-1"));


            //offsetnumber2 being 1 means it is a preformatted question
            //lets just figure out what it is given

            //      you gain veo + lose type 1 = you bet on false
    //              you gain type 2 + lose veo = you bet on false
    
    //              you gain type 1 + lose veo = you bet on true
    //              you gain veo and lose type 2 = you bet on true
            //
            //
            //

            if (offsetNumber2_ == 1) {
                direction = "the result is true";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo increases";
                return 0;
            }

            if (offsetNumber2_ == undefined) {
                direction = "the result is false";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo decreases";
                return 0;
            }
        


        
//        var text = "bet type: ".concat(type).concat("; price = ").concat(price.toFixed(5)).concat(d1message).concat((1/price).toFixed(5)).concat(d2message).concat(" you win if ").concat(direction).concat("; they pay = ").concat(s2c(h[7])).concat("; you pay = ").concat(s2c(h[8])).concat("; expires: ").concat(h[5]);
  
           direction = newDirection;

          offers.style.display = "inline";
          
          console.log("amount1Gain is " + s2c(amountGain));
          console.log("amount1Lose is " + s2c(amountLose));


          var probLanguage = " | Implied Probability: ";

          if (amountSwapped2 == true){
          var implProb = (Number(100) - 100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";
          console.log("bbbb " + implProb);
            }else{

            var implProb = (100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";

            }



          if (amountSwapped2 !=true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                if((s2c(amountGain) - s2c(amountLose)) > s2c(amountLose)){
                 
                 console.log("ZZZZ")   
                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ((s2c(amountGain) - s2c(amountLose)) <= s2c(amountLose)){

                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


            if (amountSwapped2 ==true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                
                if( (s2c(amountLose) > (s2c(amountGain) - s2c(amountLose)) ) ){
                 
                 console.log("ZZZZ")   
                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ( (s2c(amountLose) <= (s2c(amountGain) - s2c(amountLose)) ) ){

                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


//           amountGain = swapOffer[1][9];
//           amountLose = swapOffer[1][6]; 

/*
          if (direction == "the result is false"){
                implProb = ((100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain))))).toPrecision(3) + "%"
                    }
*/       

        //for debugging
//        var idStuff = "type: "+type1 + "/" + type2 + " | amounts: " + swapOffer[1][6] + "/" + swapOffer[1][9] ;

        var idStuff = "";


        if (amountSwapped2 != true){
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountLose).toPrecision(3))).concat(" | ").concat(idStuff);
        } else {
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountGain).toPrecision(3))).concat(" | ").concat(idStuff);
        }

  //      var text.appendChild("asdfs");


        console.log("xyz2 is " + xyz2);
        if (globalInputBool != 1 && xyz2 != 0){
       //     var cid_1 = m[2];

        var cid_1;
   //         var xyz1;
            var a1 = document.createElement("a");
      
            var b1 = document.createElement("a");

            console.log("XXXX t3 is " + t3_);
            
            b1.innerHTML = t3_;
        
            if (m[2] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[4];
            }else if (m[4] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[2];
            }else{
                cid_1 = "unsupported swap type";
            }
        
            var cidTruncate1 = cid_1.slice(0,5)+ "..." + cid_1.slice(cid_1.length - Number (4), cid_1.length);
            a1.innerHTML = cidTruncate1;
            a1.target = "_blank";
            a1.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_1);
            xyz2 = 0;
            var text2 = document.createElement("div");
            var text3 = document.createElement("div");

    //        acceptConfirmation.innerHTML = "asdsad";
            acceptConfirmation.style.display = "inline";
            var spacing = document.createElement("div");
            spacing.innerHTML = " ";
            spacing.style.display = "inline";
//            var text2 = "Contract: ";
            text2.innerHTML = "Contract: ";
            text3.innerHTML = "Event: ";
            b1.style.display = "inline";
    //        text3.style.display = "inline";


                globalB1 = t3_;

            text2.style.textIndent = "50px";
            text3.style.textIndent = "50px";

            offers.appendChild(br());

            offers.appendChild(br());

            offers.appendChild(text2);
            text2.appendChild(a1);
            text2.appendChild(spacing);
            text2.appendChild(acceptConfirmation);

            offers.appendChild(text3);
            text3.appendChild(b1);
            offers.appendChild(br());
        //    offers.appendChild(br());
       //     offers.appendChild(br());
        globalInputBool = 1;
        }

       // xyz1 = 0

        t.innerHTML = text;
        

            t.style.display = "inline";



        if (type1 == type2){
        t.innerHTML = "Unsupported format - trade hidden";
        offers.appendChild(t);
        offers.appendChild(br());
        }else{


        offers.appendChild(t);
        console.log("PPPP button h: " + swapOffer);
        console.log("PPPP button type: " + type);

        var button = button_maker2("Accept trade", function() { viewTrading(swapOffer2) });
//        var button = button_maker2("Accept trade", function() { swap_viewer3.view(swapOffer2) });


        button.style.display = "inline";



   //     offers.appendChild(text(" "));
        offers.appendChild(button);
        offers.appendChild(br());

    }
        display_offers2Load(orders.slice(1), l, type, offsetNumber2_, t2_, d1message, d2message);


    }

 //   globalInputBool = 1;
};



    async function display_offers2(orders, l, type, offsetNumber2_, t2_, t3_, d1message, d2message) {

        if (JSON.stringify(orders) == "[]") {
            xyz1 = 1;
            return 0;
        }else{


        var direction;
            var t = document.createElement("div");
        var m = l;
        console.log("mdisplayoffers2 is: " + m[2]);
        console.log("mdisplayoffers2 is: " + m);
        var type1 = m[4];
        var type2 = m[6];

        //type1 is what you gain if you accept, type2 is what you lose if you accept

        var newDirection;
        if ((type1 == 1) && (type2 == 0)){
            newDirection = "the result is true";
        }
        if ((type1 == 0) && (type2 == 2)){
            newDirection = "the result is true";
        }


        if ((type1 == 2) && (type2 == 0)){
            newDirection = "the result is false";
        }
        if ((type1 == 0) && (type2 == 1)){
            newDirection = "the result is false";
        }



    //    console.log()
        console.log("mdisplayoffers3 is type 1: " + type1 +" type2: " + type2);


        var order = orders[0];
        var Maximum = 4294967295;
        var price = order[1] / Maximum;
        var amount = order[2];
        var tid = order[3];
        swapOffer = await trade_details2(tid);
        var swapOffer2 = swapOffer;
        console.log("THIS IS T4: " + swapOffer[1][6]);
        console.log("SWAPOFFER IS: " + swapOffer);
        console.log("tid is: " + tid);
        var amountGain = swapOffer[1][9];
        var amountLose = swapOffer[1][6];

        var amountSwapped = false;
        var amountSwapped2;

        if (type1 != 0){
           amountGain = swapOffer[1][6];
           amountLose = swapOffer[1][9]; 
           amountSwapped2 = true;

        }
// if not 0, then it means sell veo and buy subcurrency
        console.log("xxxx: " + offsetNumber2_);
        console.log("xxxx swap bool: " + amountSwapped2);
        console.log("xxxx t2 is :" + (t2_.search("competition") != "-1"));


            //offsetnumber2 being 1 means it is a preformatted question
            //lets just figure out what it is given

            //      you gain veo + lose type 1 = you bet on false
    //              you gain type 2 + lose veo = you bet on false
    
    //              you gain type 1 + lose veo = you bet on true
    //              you gain veo and lose type 2 = you bet on true
            //
            //
            //

            if (offsetNumber2_ == 1) {
                direction = "the result is true";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo increases";
                return 0;
            }

            if (offsetNumber2_ == undefined) {
                direction = "the result is false";
            } else if (type == "scalar") {
                direction = "the price of stablecoin measured in veo decreases";
                return 0;
            }
        

        
//        var text = "bet type: ".concat(type).concat("; price = ").concat(price.toFixed(5)).concat(d1message).concat((1/price).toFixed(5)).concat(d2message).concat(" you win if ").concat(direction).concat("; they pay = ").concat(s2c(h[7])).concat("; you pay = ").concat(s2c(h[8])).concat("; expires: ").concat(h[5]);
  
           direction = newDirection;

          offers.style.display = "inline";
          
          console.log("amount1Gain is " + s2c(amountGain));
          console.log("amount1Lose is " + s2c(amountLose));


          var probLanguage = " | Implied Probability: ";

          if (amountSwapped2 == true){
          var implProb = (Number(100) - 100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";
          console.log("bbbb " + implProb);
            }else{

            var implProb = (100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)))).toPrecision(3) + "%";

            }



          if (amountSwapped2 !=true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                if((s2c(amountGain) - s2c(amountLose)) > s2c(amountLose)){
                 
                 console.log("ZZZZ")   
                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ((s2c(amountGain) - s2c(amountLose)) <= s2c(amountLose)){

                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


            if (amountSwapped2 ==true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                
                if( (s2c(amountLose) > (s2c(amountGain) - s2c(amountLose)) ) ){
                 
                 console.log("ZZZZ")   
                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(4);


                }
            
            if ( (s2c(amountLose) <= (s2c(amountGain) - s2c(amountLose)) ) ){

                 var percentage = (s2c(amountLose) / (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(4);

            }
            


            }

          }


//           amountGain = swapOffer[1][9];
//           amountLose = swapOffer[1][6]; 

/*
          if (direction == "the result is false"){
                implProb = ((100*((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain))))).toPrecision(3) + "%"
                    }
*/       

        //for debugging
//        var idStuff = "type: "+type1 + "/" + type2 + " | amounts: " + swapOffer[1][6] + "/" + swapOffer[1][9] ;

        var idStuff = "";


        if (amountSwapped2 != true){
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountLose).toPrecision(3))).concat(" | ").concat(idStuff);
        } else {
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountGain).toPrecision(3))).concat(" | ").concat(idStuff);
        }

  //      var text.appendChild("asdfs");


        console.log("xyz1 is " + xyz1);
        if (xyz1 != 0){
       //     var cid_1 = m[2];

        var cid_1;
   //         var xyz1;
            var a1 = document.createElement("a");
      
            var b1 = document.createElement("a");

            console.log("XXXX t3 is " + t3_);
            
            b1.innerHTML = t3_;
        
            if (m[3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[5];
            }else if (m[5] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
                cid_1 = m[3];
            }else{
                cid_1 = "unsupported swap type";
            }
        

            offersInput.value = cid_1;

            var cidTruncate1 = cid_1.slice(0,5)+ "..." + cid_1.slice(cid_1.length - Number (4), cid_1.length);
            a1.innerHTML = cidTruncate1;
            a1.target = "_blank";
            a1.href = "http://159.89.87.58:8080/explorers/contract_explorer.html?cid=".concat(cid_1);
            xyz1 = 0;
            var text2 = document.createElement("div");
            var text3 = document.createElement("div");

    //        acceptConfirmation.innerHTML = "asdsad";
            acceptConfirmation.style.display = "inline";
            var spacing = document.createElement("div");
            spacing.innerHTML = " ";
            spacing.style.display = "inline";
//            var text2 = "Contract: ";
            text2.innerHTML = "Contract: ";
            text3.innerHTML = "Event: ";
            b1.style.display = "inline";

            globalB1 = t3_;
    //        text3.style.display = "inline";

            text2.style.textIndent = "50px";
            text3.style.textIndent = "50px";

            offers.appendChild(br());

            offers.appendChild(br());

            offers.appendChild(text2);
            text2.appendChild(a1);
            text2.appendChild(spacing);
            text2.appendChild(acceptConfirmation);

            offers.appendChild(text3);
            text3.appendChild(b1);
            offers.appendChild(br());
        //    offers.appendChild(br());
       //     offers.appendChild(br());

        }

       // xyz1 = 0

        t.innerHTML = text;
        

            t.style.display = "inline";



        if (type1 == type2){
        t.innerHTML = "Unsupported format - trade hidden";
        offers.appendChild(t);
        offers.appendChild(br());
        }else{


        offers.appendChild(t);
        console.log("PPPP button h: " + swapOffer);
        console.log("PPPP button type: " + type);

        var button = button_maker2("Accept trade", function() { viewTrading(swapOffer2) });
//        var button = button_maker2("Accept trade", function() { swap_viewer3.view(swapOffer2) });


        button.style.display = "inline";



   //     offers.appendChild(text(" "));
        offers.appendChild(button);
        offers.appendChild(br());

    }
        display_offers2(orders.slice(1), l, type, offsetNumber2_, t2_, d1message, d2message);

        offersButton2.style.display = 'inline';
    }
};



        async function trade_details2(tid){
        //if it is your own swap offer, then make a cancel offer button. todo.
        var t = await rpc.apost(["read", 2, tid], get_ip(), parseInt("8090"));
        console.log("THIS IS T: " + JSON.stringify(t));
        console.log("THIS IS T2: " + t[1][6]);
        console.log("THIS IS T3: " + t[1][9]);

        return(t);
//        swap_viewer.offer(JSON.stringify(t));
//        swap_viewer.view();
    };

    function plus_encode(s) {
        if (s == "") { return ""; }
        var h = s[0];
        if (h == "+") { h = "%2B"; }
        return h.concat(plus_encode(s.slice(1)));
    };


    function display_contract(h, type) {
        var CID = h[1];
        rpc.default_explorer(["get_offer_contract", CID], function(C) {
            var copy_contract_link = document.createElement("div");
            var contract_type = type;
            console.log(JSON.stringify(h));
            console.log(JSON.stringify(C));
            console.log(JSON.stringify(C[1]));
            globalChannelOffer = C[1];
            console.log("broadcasting C")
            console.log(C);
            console.log("trying to broadcast the offer");


            //pull position data
            //if it isnt there make sure its handled correctly
            console.log(window.localStorage.getItem("positionData"+keys.pub()));
            
            console.log("localstorage is: " + (window.localStorage.getItem("positionData"+keys.pub())) == null);


            if (window.localStorage.getItem("positionData"+keys.pub()) != null){

                var arr2 = new Array();
               // var positionData

                arr2.push(window.localStorage.getItem("positionData"+keys.pub()));
                arr2.push(JSON.stringify(C[1]));

                console.log("existing array is"+ arr2);
                window.localStorage.setItem("positionData"+keys.pub(), arr2);

                console.log("positionData is 1st" + window.localStorage.getItem("positionData"+keys.pub()));


            }else{
                var arr = new Array();

                console.log("stringified C1 part 2 is" + C[1]);
                console.log("stringified C1 is" + JSON.stringify(C[1]));
                console.log("stringified to string is  " + '"' + JSON.stringify(C[1])+'"' );
                console.log("stringified to string2 is  " + JSON.parse(JSON.stringify(C[1])) );
                arr.push(JSON.stringify(C[1]));
                console.log("array is:" + arr);
                    window.localStorage.setItem("positionData"+keys.pub(), JSON.stringify(C[1]));
            //    window.localStorage.setItem("positionData"+keys.pub(), '"' + JSON.stringify(C[1])+'"');
                console.log("positionData is  " + window.localStorage.getItem("positionData"+keys.pub()));

            }







            CBA.cp_start();

            keys.update_balance();
            


            //append

            //overwrite

           // localstorage.setitem
/*
            var oid = plus_encode(h[2]);
            var UL = C[1][1][18];
            var LL = C[1][1][19];
            F = function(X){
                var Y = parseInt(X) / 100000000;
                return(Y.toFixed(8));
            };
            //var direction = C[1][2][1][2];//either 1 or 2.
            var direction = C[1][1][1];//either 1 or 2.
            var d_string;
            if (direction == 1) {
                d_string = "false";
            } else if (direction == 2) {
                d_string = "true";
            } else {
                console.log(JSON.stringify(C[1][2][1]));
                console.log(direction);
                console.log("badly formed contract offer");
                return(0);
            }
        //    contract_div.innerHTML = JSON.stringify(C[1]);
            var our_amount = F(C[1][2][1][5]);
            var their_amount = F(C[1][2][1][4]);
            var oracle_height = C[1][3][2];
            console.log("c1 one: ");
            console.log(C[1]);
            console.log("c1 two: ");
            JSON.stringify(C[1]);
        //    copy_contract_link.innerHTML = "<a href=".concat("\"/otc_derivatives.html?auto_fill=").concat(contract_type).concat("&oracle=").concat(oid).concat("&our_amount=").concat(our_amount).concat("&their_amount=").concat(their_amount).concat("&oracle_height=").concat(oracle_height).concat("&bet_direction=").concat(d_string).concat("&upper_limit=").concat(UL).concat("&lower_limit=").concat(LL).concat("\" onclick=\"javascript:event.target.port=8080\"").concat(">open this contract in the contract-editor</a>");
        //    contract_div.appendChild(copy_contract_link);
        //    contract_div.appendChild(br());
            //console.log(JSON.stringify(C[1])); */
        });
    };

    return {div2: div2, title1: title1, oracle_filter: oracle_filter, title: title, title0: title0, positionDiv: positionDiv, offersLoad: offersLoad, offersButton2: offersButton2, offersInput: offersInput, offerInputLoad: offerInputLoad, display_positions: display_positions, oracle_filter: oracle_filter, oracleDoc: oracleDoc, title:title, oracles: oracles, t2: t2, offers: offers, oracle_list_pull: (function() { return oracle_list_pull; }), display_oracles: display_oracles, display_oracle: display_oracle, display_offers: display_offers, display_positions2: display_positions2, hideBeforeDisplay2: hideBeforeDisplay2, title3: title3, newDiv2: newDiv2, successVar2: successVar2, positionsInput: positionsInput, getBookMark: getBookMark, pullbm: pullbm};

})();
console.log("trying to display positions");


function populateInput(){

    var queryStore = window.location.search;
    queryStore = queryStore.substring(1,queryStore.length);

    abcd.offersInput.value = queryStore;
}


populateInput();

function runInputCheck(){
    if (abcd.offersInput.value == ""){

    }else{
        abcd.offerInputLoad();
    }
}

runInputCheck();


function focusOracleFilter(){
    abcd.oracle_filter.focus();
//    abcd.oracle_filter.select();

}

focusOracleFilter();

    var cidArray = new Array;

    async function filter(){
        console.log(abcd.oracle_filter.value);
        filterText = abcd.oracle_filter.value;

        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("xxxx here is l: " + JSON.stringify(l));

        
 
        
        var cidHolder_;

        console.log("xxxx here is l2: " + l[1][5]);
        console.log("xxxx here is l23: " + l.length);
        console.log("xxxx here is l234: " + JSON.stringify(l));


        var actualLength = Number(l.length) - Number(1);

        
        for (let i = 1; i < l.length; i++) {


        //xyzwww
        if (l[i][3] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            cidHolder_ = l[i][5];
        }

        if (l[i][5] == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            cidHolder_ = l[i][3];
        }




            cidArray.push(cidHolder_);
            console.log("cidholder is2: " + cidArray);
            console.log("cidholder is3: " + cidArray.indexOf("iPguye5rdK5p2p26LUoKmyhiP1fvZFPck16nkklqUDM="));
            console.log(cidArray.toString());
        }

        l = l.slice(1);

        myStopFunction();
        await abcd.display_oracles(l);
  //      myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }




//    filter();

   async function resetFilter(){
                console.log(abcd.oracle_filter.value);
        filterText = undefined;


        abcd.oracle_filter.value = "";
        filter();
        
        /*
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        await abcd.display_oracles(l);
    
            */
    //    myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }
//resetFilter();


   async function loadEvents(){
                console.log(abcd.oracle_filter.value);
        filterText = undefined;
        abcd.oracle_filter.value = "";
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        await abcd.display_oracles(l);
    //    myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }

   async function PresetFilter(x){

        console.log(abcd.oracle_filter.value);
        filterText = x;
        abcd.oracle_filter.value = x;
        filter();


        /*
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        abcd.display_oracles(l);

        */

   //     myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }


    function removeStorage(){
        window.localStorage.removeItem("positionData" + keys.pub());
        console.log("positionData in local storage removed");
    }

var tempvar2;

async function showPositions(){
        myStopFunction();

        abcd.positionDiv.innerHTML = "";
        internalNonce = 0;

        console.log("KEYSPUB IS: " + keys.pub());
            const response = await rpc.apost(["account", keys.pub()], get_ip(), 8091);
            if(response == "error") {
                //display.innerHTML = "<h3>load a key with funds.</h3>";
            } else {
             var sub_accs = response[1][3].slice(1);
             var liquidity_shares = response[1][4].slice(1);
            //    display.innerHTML = "";
            }
                    //TODO figure out which subcurrencies we own in each contract. each subcurrency goes into the selector seperately.

            console.log(JSON.stringify(response));
            console.log(response[1][3].slice(1));

        //    console.log("RRRR sub accs is:" + sub_accs);

            contracts_to_subs_(sub_accs, [], function(sub_accs2){
                load_balances_(
                    sub_accs2, liquidity_shares, "<h4>your balances in each subcurrency</h4>",
                    function(){
                        show_balances_();
                    });
            });



 /* 


                            //var p2p_url = url(8090, "159.89.87.58");
                            var p2p_msg2 = ["read", 2, keys.pub()];
                            rpc.default_explorer(p2p_msg2, function(X){
                                console.log("sent message to p2p server.");
                                console.log(JSON.stringify(X))
                                //        var positionCTC = X;

//push it to an array                    

                tempvar2 = "[" + JSON.stringify(X) + "]";
            //    var arr0 = new Array();
                //arr0.push(tempvar2);

                //arr0.push(window.localStorage.getItem("positionData"+keys.pub()));


                console.log(tempvar2);
        if( tempvar2 != "[[-6]]"){
        console.log("positionCTC is " + JSON.stringify(JSON.parse(tempvar2)[0][1][4][1][4]));
        console.log("entire ctc is " + JSON.parse(tempvar2)[0][1]);
        //create ctc object first
      //  abcd.storeCTC local.
}



//        abcd.display_positions(window.localStorage.getItem("positionData"+keys.pub()),Number(0));

});
*/
}

    var tab_builder2 = [];
    var balances_db2 = {};
    var update_frequency2 = 0;//1000 * 60 * 10;//by default don't re-check the same balance if it has been less than 10 minutes.
    var loaded_into_selector2 = {};

    function show_balances_() {
        var sub_keys = Object.keys(balances_db2);
        var s = "";
//        balances.innerHTML = "";
        for(var i = 0; i<sub_keys.length; i++){
            var sa = balances_db2[sub_keys[i]];
            if(sa && sa.string){
                var s = sa.string;
                //console.log(s);
                if(!(loaded_into_selector2[sub_keys[i]])){
                    loaded_into_selector2[sub_keys[i]] = true;
        //            console.log("RRRR sa is: " + JSON.stringify(balances_db2));
                    var option = document.createElement("option");
                    option.innerHTML = s;
                    option.value = JSON.stringify([sa.cid, sa.type]);
                    for (var j = 0; j<tab_builder2.length; j++){
                        if((!("swap" === tab_builder2[j][0])) ||
                           (! (0 === sa.type))){
                        tabs[tab_builder2[j][0]].
                            selector.appendChild(
                                option.cloneNode(
                                    true));
                        };
                    };
                };
            };
        };
                console.log("lol41");

    };


    function load_balances_(accs, ls, s, callback) {
        console.log("RRRR load balances is: " + accs);
        var sub1 = accs.map(function(acc){
            //console.log(JSON.stringify(acc));
            var sk = sub_accounts.key(keys.pub(), acc[0], acc[1]);
            var sk2 = btoa(array_to_string(sk));
            return({sub_key:sk2,
                    cid: acc[0],
                    type: acc[1]
                   });
        });
        var sub2 = ls.map(function(mid){
            var sk = sub_accounts.key(keys.pub(), mid, 0);
            var sk2 = btoa(array_to_string(sk));
            return({sub_key:sk2,
                    cid: mid,
                    type: 0});
        });
        var subs = sub1.concat(sub2);
//        console.log("RRRR lb2 subs is: " + JSON.stringify(subs));
        return(lb2_(subs, callback));
    }

    function contracts_to_subs_(contracts, R, callback) {
        if(contracts.length < 1){
            return(callback(R));
        };
        var many_types = 2;
        contracts_to_subs2_(contracts[0], 1, many_types, [], function(subs){
            return(contracts_to_subs_(
                contracts.slice(1),
                R.concat(subs),
                callback));
        });
        console.log("RRRR contracts_to_subs is: " + contracts); 
    };

    function contracts_to_subs2_(CID, N, L, R, callback) {
        if(N>L){
            return(callback(R));
        };
                return(contracts_to_subs2_(CID, N+1, L, R.concat([[CID, N]]), callback));
    };

    async function lb2_(subs, callback){
        if(subs.length == 0){
            console.log("RRRR callback lb2 is: " + JSON.stringify(balances_db2));
            abcd.display_positions2(balances_db2);
            return(callback());
        };
        async function callback2(){
        //    setTimeout(function(){
                return(lb2_(subs.slice(1), callback));
        //    }, 200);
        };


        var sub = subs[0];
        var sk = sub.sub_key;


// /*
        if(balances_db2[sk] &&
           balances_db2[sk].time &&
           ((Date.now() - balances_db2[sk].time) <
            update_frequency2)){

            return(callback2());
            //return(lb2(subs.slice(1), callback));
            //don't update.
        };
        if(!balances_db2[sk]){
            balances_db2[sk] = {};
        };


        balances_db2[sk].time = Date.now();
// */

        console.log("lol3 1");
        let sa = await sub_accounts.arpc(sk);
        console.log("lol3sa " + sa);

        var balance = 0;
        if(sa && (sa[0] === "sub_acc")){
            balance = sa[1];
        };
        if(balance < 10001){
            //do we need to erase it, if it exists?
//            balances_db2[sk].time = Date.now()*2;
            //return(lb2(subs.slice(1), callback));
            return(callback2());
        };


        balances_db2[sk].bal = balance;
        balances_db2[sk].type = sub.type;
        balances_db2[sk].cid = sub.cid;


        if(sub.type == 0) {//its a market
            //build the string. load it in balances_db.
            
    /*
            var mid = sub.cid;
            var s = "market: "
                .concat(mid)
                .concat(" balance : ")
                .concat((balance / token_units()).toString());
            balances_db2[sk].string = s;
            show_balances_();
    */

            return(callback2());
            //return(lb2(subs.slice(1), callback));
        };
        //a subcurrency then
    //    let oracle_text = await rpc.apost(["read", 3, sub.cid], get_ip(), 8090);

        oracle_text = "lol";
        console.log("lol2");
//        balances_db2[sk].oracleLanguage = oracle_text;
        var s = "";
        if(sub.type == 2){
            s = s.concat("inverse ");
        };
        if(oracle_text &&(!(oracle_text == 0))){

            /*
            var ot1 = atob(oracle_text[1]);
            if(is_ticker_format_(ot1)){
                var ticker = decode_ticker(ot1);
                var limit = coll_limit(ot1);
                balances_db2[sk].limit = limit;
                var ticker_symbol = symbol(ot1);
                balances_db2[sk].ticker_symbol = "v".concat(ticker_symbol);
                s = s.concat("ticker: v")
                    .concat(ticker);
                if(sub.type === 1){
                    s = s
                        .concat(" balance: ")
                        .concat((balance * limit / token_units()).toString())
                        .concat(" v")
                        .concat(ticker_symbol);
                } else {
                    s = s
                        .concat(" balance: ")
                        .concat((balance/token_units()).toString());
                };
            } else if (oracle_text[0] === "contract"){
                */

       /*-record(contract, 
        {cid, source = <<0:256>>, 
         source_type = 0, choose_address_timeout,
         oracle_start_height, blockchain,
         amount, ticker, date, trade_id, now
         }).*/

         /*
                var trade_direction;
                if(sub.type === 2){
                    trade_direction = "buying VEO. Spending ";
                } else {
                    trade_direction = "selling VEO. Buying ";
                };
                console.log(balance);
                console.log(sa);
                s = ""
                    .concat(trade_direction)
                    .concat(atob(oracle_text[7]))
                    .concat(" of ")
                    .concat(atob(oracle_text[8]))
                    .concat(" on blockchain ")
                    .concat(atob(oracle_text[6]))
                    .concat(" by date ")
                    .concat(atob(oracle_text[9]))
                    .concat(". balance: ")
                    .concat((balance/token_units()).toString());
            } else {
                if(ot1.length > 64){
                    ot1 = ot1.slice(0, 64)
                        .concat("...");
                };
                s = s.concat("oracle text: ")
                    .concat(ot1)
                    .concat("contract: ")
                    .concat(sub.cid)
                    .concat(" balance: ")
                    .concat((balance/token_units()).toString());
            };
            */


        } else {
//            s = s
//                .concat("contract: ")
//                .concat(sub.cid)
//                .concat(" balance: ")
//                .concat((balance/token_units()).toString());
        };
 //       balances_db2[sk].string = s;
 //       console.log("RRRR BALANCES DB2 IS: " + JSON.stringify(balances_db2));

        console.log("lol4");
        show_balances_();

        //}, get_ip(), 8090);
        //};
        return(callback2());
        
    };


    const ticker_regex = /W = ((qtrade\.io)|(coinmarketcap\.com)|(coinpaprika\.com)); T = [\d|:|\-| ]*China Standard Time \(GMT\+8\); ticker = [(a-z)(A-Z)]*; return\(the price of ticker at time T according to website W\) \* \d*/;
    const stablecoin_0 = /standard\s+stablecoin\s+0\s*;\s*ticker_path\s*=\s*\[(\w+\s*,\s*)*\w+\s*\]\s*;\s*website_path\s*=\s*\[([^,\]]+,\s*)[^,\]]+\]\s*;\s*time\s*=[^;]+;\s*price\s*=\s*\d+\s*;\s*for\(i=0; i<website_path\.length; i\+\+\)\{\s*price \*= \(the price of ticker_path\[i\] in ticker_path\[i\+1\] according to website\[i\]\)\s*\};\s*scale\s*=\s*\d+\s*;\s*return\(price\s*\*\s*scale\);/;

    function is_ticker_format_(x) {
        var b = (ticker_regex.test(x) ||
                 stablecoin_0.test(x));
        if(!(b)){
            //console.log(x);
        };
        return(b);
    };


    async function viewTrading(offer){
        console.log("IIII offer is: "+ offer);
        var X = offer;
        var Y = swaps.unpack(X);
        var now = headers_object.top()[1];
        
        var contract1, contract2;
        console.log("XXXX offer is: " + offer);
        console.log(JSON.stringify(Y));
        var original_limit_order_size = Y.parts;
        var available_to_match;





        //var TID = hash.doit(65 bytes of pubkey, then 32 bytes of salt)
//        var TID = btoa(array_to_string(hash(
//            string_to_array(
//                atob(Y.acc1))
//                .concat(string_to_array(
//                    atob(Y.salt))))));
        var TID = swaps.id_maker(Y.acc1, Y.salt);
        console.log("XXXX TID is: " + TID);
        var trade = await rpc.apost(["trades", TID])
        console.log("XXXX trade is: " + trade);
        if(trade === 0){
            available_to_match = original_limit_order_size;
        } else {
            available_to_match = original_limit_order_size - trade[2];
        };
        
       var A1 = Math.round(Y.amount1 * available_to_match / original_limit_order_size) / token_units();
//        var A2 = Math.round(Y.amount2 * available_to_match / original_limit_order_size) / token_units();
        var q = A1.toString();
        
        if(Y.cid1 == btoa(array_to_string(integer_to_array(0, 32)))){
            contract1 = "veo";
            console.log("XXXX veo is1: " + contract1);
        }else{
                //contract1 = Y.cid1
                //    .concat(" type ")
                //    .concat(Y.type1);
            contract1 = await contract_text2(
                Y.cid1, Y.type1);

            console.log("XXXX veo is2: " + contract1);
        }
        
        if(Y.cid2 == btoa(array_to_string(integer_to_array(0, 32)))){
            //currency 2 is the kind that you need to send. So this is the only type you could ever need to make the contract for.
            contract2 = "veo";
            console.log("XXXX veo2 is1: " + contract2);
        //    update_display(Y, now, contract1, contract2, available_to_match, original_limit_order_size);
            return(view2Trading([], X, Y, original_limit_order_size, available_to_match, q));
        }else{
            contract2 = await contract_text2(
                Y.cid2, Y.type2);

            console.log("XXXX veo2 is2: " + contract2);
        }
//        update_display(Y, now, contract1, contract2, available_to_match, original_limit_order_size);
        console.log("amount to make contracts");
            maybe_make_contracts2(Y.cid2, [], function(txs){
            console.log("made contracts");
            
            view2Trading(txs, X, Y, original_limit_order_size, available_to_match, q);
        });
        //});
    };



    function view2Trading(txs, X, Y, original_limit_order_size, available_to_match, q_) {
        //txs is the new_contracts parts.
        //swap_txs is the contract_use_txs
            var amount_to_match = Math.round(parseFloat(q_, 10) * token_units());
            if(!amount_to_match){
        //        display.innerHTML =
        //            "<p>You need to choose how much you want to buy</p>";
                return(0);
            }
            var A1 = Math.round(Y.amount1 * available_to_match / original_limit_order_size);
            if (amount_to_match > A1){
       //         display.innerHTML =
        //            "<p> that is more than everything that is available to buy. There is only "
        //            .concat(A1.toString())
        //            .concat(" available, so you cannot buy ")
        //            .concat(amount_to_match.toString())
        //            .concat("</p>")
        //            .concat("");
                return(0);
            };
            

            var matched_parts = Math.round(available_to_match * amount_to_match / A1);
            var signed_offer = X;
                    console.log("XXXX view2Tradin signed_offer is: " + signed_offer);            

            swaps.make_tx(signed_offer, matched_parts, async function(swap_txs){
               
                txs = txs.concat(swap_txs);

                var tx = await multi_tx.amake(txs);
                console.log(JSON.stringify(tx));
                var stx = keys.sign(tx);
                console.log("signed tx: " + JSON.stringify(stx));
                //need this
                var response = await apost_txs([stx]);



                console.log("response is: " + response);
           //     display.innerHTML = response;

                

                //need this
                
                if(!(response === "server rejected the tx")){
                    if(Y.type1 === 0){//only if you are paying veo for a subcurrency that is priced in veo.
                        var offer99 = swaps.accept_99(Y);
                        var signed_offer = swaps.pack(offer99);
                        var response = await rpc.apost(
                            ["add", signed_offer, 0],
                            get_ip(), 8090);
                        console.log(JSON.stringify(offer99));
                        console.log(response);
                    };
                };

                
                changeStatus4();
                keys.update_balance();


            });
     

    

    };

    function changeStatus4(){
            acceptConfirmation.innerHTML = "<font color=\"green\">    Trade offer accepted!</font>";

                function changeStatus3(){
                acceptConfirmation.innerHTML = "";
                abcd.hideBeforeDisplay2();
                }

                setTimeout(changeStatus3, 5000)        
    }



    async function contract_text2(cid, type) {
        var contract = await rpc.apost(
            ["read", 3, cid], default_ip(), 8090);
        console.log(JSON.stringify(contract));
        if((contract[0] === "scalar") &&
           (contract[6] === 0) &&//priced in veo
           (contract[3] === 1)//binary contract
          ){
            var win_string;
            if(type === 1){
                win_string = "veo if this is true: "
            } else {
                win_string = "veo if this is false: "
            }
            return(win_string
                   .concat(atob(contract[1])));
        } else {
            var s = "contract: "
                .concat(cid)
                .concat(" type: ")
                .concat(type);
            return(s);
        };

    };


    async function maybe_make_contracts2(cid, Txs, callback) {
        console.log("XXXX cid is: " + cid);
        if(cid == "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="){
            return(callback(Txs));
        };
        var Contract = await merkle.arequest_proof("contracts", cid);
        console.log("XXXX contract is: " + Contract);
        if(!(Contract === "empty")){
            return(callback(Txs));
        console.log("XXXX callback is: ");
        }
        var z = await rpc.apost(["read", 3, cid], explore_swap_offer.ip_get, 8090);

        console.log("XXXX Z is: " + z);        
        if(z[0] == "scalar"){
            console.log("is scalar ");
            //{Text, Height, MaxPrice, Now}
            var tx = new_scalar_contract.make_tx(atob(z[1]), parseInt(z[3]), z[5], parseInt(z[6]));
                    console.log("XXXX tx is: " + tx);
            return(maybe_make_contracts2(tx[5], [tx].concat(Txs), callback));
            
        } else if (z[0] === "contract"){
                    console.log("XXXX elseif is: ");
            //contract hash is not in the buy_veo_contract.
            var oracle_start_height = z[5];
            var blockchain = z[6];
            var amount = z[7];
            var ticker = z[8];
            var date = z[9];
            var TID = z[10];
            var address_timeout = z[4];
            var reusable_settings = buy_veo_contract.reusable_settings(oracle_start_height, blockchain, amount, ticker, date);
            var settings = buy_veo_contract.settings(reusable_settings, address_timeout, 1, TID);
            var contract1bytes = buy_veo_contract.contract1bytes(settings);
            var contract_hash = btoa(array_to_string(hash(contract1bytes)));
            var tx = buy_veo_contract.new_contract_tx(contract_hash);
                    console.log("XXXX elseif tx is: " + tx);
            return(maybe_make_contracts2(tx[5], [tx].concat(Txs), callback));
        } else {
            display.innerHTML =
                "<p>You need to teach the server about this contract before you can bet on it. Use the teach scalar contract tool. </p>";
            return(0);
        };
    };


function hidePositions(){
    abcd.positionDiv.innerHTML = "";
}

function downloadPositions(){
download(window.localStorage.getItem("positionData"+keys.pub()), "My Position Data", "text/plain");

}

function hideOdds(){
    console.log("hiding odds");
    abcd.offers.innerHTML = "";
//    abcd.offersInput.value = "";
}

function hideOdds2(){
    console.log("hiding odds");
    abcd.offers.innerHTML = "";
    abcd.offersInput.value = "";

        abcd.offersButton2.style.display = 'none';
}

function returnOracleLanguage(x){

            rpc.default_explorer(["oracle", x, ], function(Oracle) {

            console.log("channel is ");
            console.log("oracleIs  " + Oracle);
            if (c == "empty") {
                console.log("that channel does not exist. Maybe you haven't synced with the network, or maybe it is already closed, or maybe it never existed");
                return 0;
            };
         console.log("inside display_positions");

            }); 
}

function settleEarly(x){
    
    console.log("tryna settle early ")
    console.log("settle early x is " + JSON.parse(x).length)
    var sctc = keys.sign(JSON.parse(x)[4]);

    //here is where we broadcast it. we need to figure out how to get sctc.
    return rpc.post(["txs", [-6, sctc]], function(x) {
        //console.log(x);
        console.log( "trying to broadcast this channel team close");
        //  return wait_till_closed(db);
    });
    console.log(x);

}


function hideTradeExplorer(){
    //here is how to construct it
    //keys.bal_div.style.display = 'none'
    abcd.title0.style.display = 'none';
    abcd.positionDiv.style.display = 'none';
    abcd.title1.style.display = 'none';
    abcd.offers.style.display = 'none';
    abcd.title.style.display = 'none';
    abcd.oracle_filter.style.display = 'none';
    abcd.oracles.style.display = 'none';
    abcd.div2.style.display = 'none';

    abcd.offersLoad.style.display = 'none';



}
// inline

function showTradeExplorer(){
    //here is how to construct it
    //keys.bal_div.style.display = 'none'
    abcd.title0.style.display = 'block';
    abcd.positionDiv.style.display = 'block';
    abcd.title1.style.display = 'block';
    abcd.offers.style.display = 'inline';
    abcd.title.style.display = 'block';
    abcd.oracle_filter.style.display = 'inline';
    abcd.oracles.style.display = 'block';
    abcd.div2.style.display = 'block';

    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

    abcd.offersLoad.style.display = 'inline';

}

function hideCreateABet(){
    dcba.div.style.display = 'none';

}

function showCreateABet(){
    dcba.div.style.display = 'block';
    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

//    keys.c

//    copy_address_button: copy_address_button, set_key_button: set_key_button, download_key_button: download_key_button, file_selector: file_selector
    


}

function hideAccountManagement(){
    keys.div.style.display  = 'none';
    keys.bal_div.style.display = 'block';

    headers_object.wallet_text.style.display = 'none';
//    keys.bal_div.style.display = 'block';

    headers_object.wallet_text3.style.display = 'none';
    headers_object.bookmarkText.style.display = 'none';


}

function showAccountManagement(){
    hideTradeExplorer();
    hideCreateABet();
//    await abcd.getBookMark();
    keys.div.style.display  = 'block';

    headers_object.wallet_text.style.display = 'block';

    keys.pub_div.style.display = 'block';

    keys.copy_address_button.style.display = 'inline';
    keys.set_key_button.style.display = 'inline';
    keys.download_key_button.style.display = 'inline';
    keys.file_selector.style.display = 'inline';


    headers_object.wallet_text3.style.display = 'block';

    headers_object.bookmarkText.style.display = 'block';

    
}



function accountManagement(){
    hideTradeExplorer();
    hideCreateABet();
    hideProvideLiquidity();
    showAccountManagement();
    console.log("firsttimecheck is " + (abc == null));
}

function createABet(){
    hideTradeExplorer();
    hideAccountManagement();
    hideProvideLiquidity();
    showCreateABet();
    // Do stuff


}

function tradeExplorer(){
    hideCreateABet();
    hideAccountManagement();
    hideProvideLiquidity();
    showTradeExplorer();

}

function liquidityProvider(){
    hideCreateABet();
    hideAccountManagement();
    hideTradeExplorer();

    keys.div.style.display = 'block';
    keys.bal_div.style.display = 'block';
    keys.pub_div.style.display = 'none';

    keys.copy_address_button.style.display = 'none';
    keys.set_key_button.style.display = 'none';
    keys.download_key_button.style.display = 'none';
    keys.file_selector.style.display = 'none';

    abcd.title3.style.display = 'block';
//    abcd.div.appendChild(title1);


}

function hideProvideLiquidity(){
        abcd.title3.style.display = 'none';
}
var abc = window.localStorage.getItem("placeholder");
console.log("firsttimecheck is: " + abc == "null");

//hideCreateABet();
//determine first time?
function firstTime(){
console.log("in first time");
if (abc == null){
showAccountManagement();
}else{
tradeExplorer();
}
}

firstTime();

//abcd.oracle_list_pull();


var internalNonce;

//internalNonce = 0;
abcd.getBookMark();