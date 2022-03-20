
var globalVariable;

var firstTimeBool;
var filterText;
var bigL;
var firstTimeBool2;

//                hideBeforeDisplay(l, offsetNumber2, oracle_text)
var global_l;
var global_offsetNumber2;
var global_oracle_text;
var global_oracleSimplified_text;

var globalPositionData;
var acceptConfirmation = document.createElement("div");
    var xyz1 = 1;
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
//    title0.appendChild(text(" "));
//    title0.appendChild(positionDownload);
  //  div.appendChild(text(" "));
//    div.appendChild(br());
 //   div.appendChild(br());

    var positionDiv = document.createElement("div");
    div.appendChild(positionDiv);

    var hideOddsButton = button_maker2("Hide", function() { return hideOdds()});

    var title1 = document.createElement("h3");
    title1.innerHTML = "Odds";
    div.appendChild(title1);
    title1.appendChild(text(" "));
    title1.appendChild(hideOddsButton);
    var offers = document.createElement("div");
    
    div.appendChild(offers);
    
    var oracleDoc = document.createElement("h8");
    var t2 = document.createElement("h8");
    var t3;
    var filterbutton = button_maker2("Go", function() { return filter()});
    var resetfilterbutton = button_maker2("Reset", function() { return resetFilter()});
    var loadEventsbutton = button_maker2("Load events", function() { return loadEvents()});

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

//firstTimeBool = 1;
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
            return 0;
        } else {
            var h = l[0];
            console.log("showing h12: " + h[5]);
            //console.log("this is h");
            //console.log(JSON.stringify(h));
            console.log("here is h3: "+ h);

            console.log("here is el: "+ l[0]);

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
            z = await rpc.apost(["read", 3, placeholder], get_ip(), parseInt("8090"));
            

            console.log("zee is: " + atob(z[1]));

            Oracle = z;
            oracle_text = atob(z[1]);
//            }
          //  oraclePull(h);
            console.log("oracle_text zee is: " + oracle_text);
            console.log("zee is: " + z);

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
                    var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text, temp_t2) });
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
        };

    oraclePull(h);

    }
    };



    async function hideBeforeDisplay2(){
        hideOdds();
        
        display_oracle(global_l, global_offsetNumber2, global_oracle_text, global_oracleSimplified_text);
    }


    async function hideBeforeDisplay(h, offsetNumber2_, t2_, t3_){
        hideOdds();
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

        var m = h[0];
        var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
            console.log("FIRST L IS: " + JSON.stringify(l));
            console.log("FIRST SLICE IS" + l.slice(1)[0]);
            l = l.slice(1);
            console.log("SECOND SLICE IS: " + l.slice(1));

  //      rpc.default_explorer(["get_offers", l], function(l2) {
 //           console.log("here are the offers   " + JSON.stringify(l2));
 //           console.log(JSON.stringify(l2));
 //           offers.innerHTML = "";
 //           bigL = l2.slice(1);
            console.log("xyzxyz: " + l[0]);
  //          console.log("L is display oracle" + bigL);
        //    firstTimeBool2 = 0;
            return display_offers(m, offsetNumber2_, t2_, t3_);
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
        do {
        var key = key1[x];

         console.log("RRRR display_positions21: " + JSON.stringify(balances_db2));

         console.log("RRRR display_positions22: " + JSON.stringify(balances_db2_[key]));   
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


                positionDiv.appendChild(text("Contract: "));
                positionDiv.appendChild(a);
                positionDiv.appendChild(text(" | "));                

                positionDiv.appendChild(text("Balance: "));
                positionDiv.appendChild(text(Number(bal_ / 100000000).toPrecision(3)));

                positionDiv.appendChild(text(" | "));                
                positionDiv.appendChild(text("Type: "));


                positionDiv.appendChild(text(type_));
                
                var button = button_maker2("Concede", function() { doitConcession(balances_db2_[key]) });

                button.title = "0.05% rebate for lost bets";
                positionDiv.appendChild(text(" "));                
                positionDiv.appendChild(button);

 
                positionDiv.appendChild(br());

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
        var idStuff = "type: "+type1 + "/" + type2 + " | amounts: " + swapOffer[1][6] + "/" + swapOffer[1][9] ;
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
    //        text3.style.display = "inline";

            text2.style.textIndent = "50px";
            text3.style.textIndent = "50px";


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

    return {div2: div2, title1: title1, oracle_filter: oracle_filter, title: title, title0: title0, positionDiv: positionDiv, display_positions: display_positions, oracle_filter: oracle_filter, oracleDoc: oracleDoc, title:title, oracles: oracles, t2: t2, offers: offers, oracle_list_pull: (function() { return oracle_list_pull; }), display_oracles: display_oracles, display_oracle: display_oracle, display_offers: display_offers, display_positions2: display_positions2, hideBeforeDisplay2: hideBeforeDisplay2};

})();
console.log("trying to display positions");






    async function filter(){
        console.log(abcd.oracle_filter.value);
        filterText = abcd.oracle_filter.value;

        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
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
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        await abcd.display_oracles(l);
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

        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

        myStopFunction();
        abcd.display_oracles(l);
   //     myInterval = setInterval(async function(){ runtheloop() }, 1000*10);
    }


    function removeStorage(){
        window.localStorage.removeItem("positionData" + keys.pub());
        console.log("positionData in local storage removed");
    }

var tempvar2;

async function showPositions(){


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

                
        //        changeStatus4();
                keys.update_balance();


            });
     

    

    };

    function changeStatus4(){
            acceptConfirmation.innerHTML = "<font color=\"green\">success!</font>";

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
}


function showTradeExplorer(){
    //here is how to construct it
    //keys.bal_div.style.display = 'none'
    abcd.title0.style.display = 'block';
    abcd.positionDiv.style.display = 'block';
    abcd.title1.style.display = 'block';
    abcd.offers.style.display = 'block';
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
}

function showAccountManagement(){
    hideTradeExplorer();
    hideCreateABet();
    keys.div.style.display  = 'block';

    headers_object.wallet_text.style.display = 'block';

    keys.pub_div.style.display = 'block';

    keys.copy_address_button.style.display = 'inline';
    keys.set_key_button.style.display = 'inline';
    keys.download_key_button.style.display = 'inline';
    keys.file_selector.style.display = 'inline';

    
}



function accountManagement(){
    hideTradeExplorer();
    hideCreateABet();
    showAccountManagement();
    console.log("firsttimecheck is " + (abc == null));
}

function createABet(){
    hideTradeExplorer();
    hideAccountManagement();
    showCreateABet();
    // Do stuff


}

function tradeExplorer(){
    hideCreateABet();
    hideAccountManagement();
    showTradeExplorer();

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
