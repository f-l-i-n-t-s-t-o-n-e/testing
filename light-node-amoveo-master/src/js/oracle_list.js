
var firstTimeBool;
var filterText;
var bigL;
var firstTimeBool2;

var globalPositionData;
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
    title0.appendChild(text(" "));
    title0.appendChild(positionDownload);
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
                                t2 = text(coinName + " price is not more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
                    //            t__ = t2;
                                }

                                if (offsetNumber == Number(2)){
                                t2 = text(coinName + " price is more than "+ coinPrice + " at Midnight " + n1 + " GMT ");
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
                                t2 = text(team1 + " will not defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
                                t__ = t2;
                                }
//was coinMaturity
                                if (offsetNumber == Number(2)) {
                                t2 = text(team1 + " will defeat " + team2 + " in the competition starting on " + n1 + " (local time) ");
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
                    

                    console.log("xxxy this is t");
                    console.log(t3);
                    console.log((t3.split(" ")));
                                            console.log((t3.split(" "))[0]);
                    console.log(t2[0]);
                    console.log("xyzxyz button: " + h);
                    console.log("xxyx first t2 is: " + oracle_text);
                    var button = button_maker2("See Odds", function() { return hideBeforeDisplay(l, offsetNumber2, oracle_text) });
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



    async function hideBeforeDisplay(h, offsetNumber2_, t2_){
        hideOdds();
        display_oracle(h, offsetNumber2_, t2_);
    }
    async function display_oracle(h, offsetNumber2_, t2_) {
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
            return display_offers(m, offsetNumber2_, t2_);
    //        display_oracle(h.slice(1));

  //      });
    };

//var globalPositionData;


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

 async function display_offers(l, offsetNumber2_, t2_) {




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
                return display_offers2(orders, l, type, offsetNumber2_, t2_, " or ", "");
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
    async function display_offers2(orders, l, type, offsetNumber2_, t2_, d1message, d2message) {

        if (JSON.stringify(orders) == "[]") {
            return 0;
        }else{


        var direction;
            var t = document.createElement("div");
        var m = l;
        console.log("mdisplayoffers2 is: " + m);
        var type1 = m[4];
        var type2 = m[6];
    //    console.log()


        var order = orders[0];
        var Maximum = 4294967295;
        var price = order[1] / Maximum;
        var amount = order[2];
        var tid = order[3];
        swapOffer = await trade_details2(tid);
        console.log("THIS IS T4: " + swapOffer[1][6]);
        console.log("SWAPOFFER IS: " + swapOffer);
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



          if (amountSwapped !=true){
            //if sports match is confirmed
            if (t2_.search("competition") != "-1") {
                if((s2c(amountGain) - s2c(amountLose)) > s2c(amountLose)){
                 
                 console.log("ZZZZ")   
                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = Number(-100) + Number(10000)/(Number(100)*(Number(1)-percentage));
                 console.log("ZZZZ: " + "-"+x.toPrecision(3)); 
                 var probLanguage = " | Betting odds: ";
                implProb = "-"+x.toPrecision(3);


                }
            
            if ((s2c(amountGain) - s2c(amountLose)) <= s2c(amountLose)){

                 var percentage = ((s2c(amountGain) - s2c(amountLose) )/ (s2c(amountGain)));
                 var x = (Number(100)*(Number(1)/percentage)) - Number(100);
                 console.log("GGGG" + "+"+x.toPrecision(3));
                 var probLanguage = " | Betting odds: ";
                 implProb = "+"+x.toPrecision(3);

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

        if (amountSwapped2 != true){
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountGain) - s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountLose).toPrecision(3))).concat(" | ");
        } else {
        var text = "You win if "+direction+ probLanguage.concat(implProb).concat(" | Risk: ").concat(Number((s2c(amountLose)).toPrecision(3))).concat(" ")+"| Profit: ".concat(Number(s2c(amountGain).toPrecision(3))).concat(" | ");
        }



        t.innerHTML = text;
        

            t.style.display = "inline";


        offers.appendChild(t);
        var button = button_maker2("Accept trade", function() { display_contract(h, type) });
        button.style.display = "inline";



   //     offers.appendChild(text(" "));
        offers.appendChild(button);
        offers.appendChild(br());
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

    return {div2: div2, title1: title1, oracle_filter: oracle_filter, title: title, title0: title0, positionDiv: positionDiv, display_positions: display_positions, oracle_filter: oracle_filter, oracleDoc: oracleDoc, title:title, oracles: oracles, t2: t2, offers: offers, oracle_list_pull: (function() { return oracle_list_pull; }), display_oracles: display_oracles, display_oracle: display_oracle, display_offers: display_offers};

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
        abcd.display_oracles(l);

    }

   async function resetFilter(){
                console.log(abcd.oracle_filter.value);
        filterText = undefined;
        abcd.oracle_filter.value = "";
        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);
        abcd.display_oracles(l);

    }
resetFilter();

   async function PresetFilter(x){

        console.log(abcd.oracle_filter.value);
        filterText = x;
        abcd.oracle_filter.value = x;

        firstTimeBool = 0;

        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);
        abcd.display_oracles(l);

    }


    function removeStorage(){
        window.localStorage.removeItem("positionData" + keys.pub());
        console.log("positionData in local storage removed");
    }

var tempvar2;

function showPositions(){
        abcd.positionDiv.innerHTML = "";
        internalNonce = 0;


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
        abcd.display_positions(window.localStorage.getItem("positionData"+keys.pub()),Number(0));

});

}


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
}

function hideCreateABet(){
    dcba.div.style.display = 'none';

}

function showCreateABet(){
    dcba.div.style.display = 'block';
    
}

function createABet(){
    hideTradeExplorer();
    showCreateABet();
    // Do stuff


}

function tradeExplorer(){
    hideCreateABet();
    showTradeExplorer();

}

//hideCreateABet();
tradeExplorer();

//abcd.oracle_list_pull();


var internalNonce;

//internalNonce = 0;
