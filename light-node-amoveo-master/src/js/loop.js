var loop_start_height;
var globalnonce = 0;
var loop_finish_height;

var localBool;


async function runtheloop(){

    async function refresh(){
        console.log("in refresh and ip is: "+ get_ip());
        var port = "8090";
        var l = await rpc.apost(["markets"], get_ip(), parseInt(port));
        console.log("here is l: " + l);
        l = l.slice(1);

    //    temp_div.innerHTML = "<h3>available markets</h3>";
        console.log("oracle_list attempt:");
      console.log(JSON.stringify(l));
  //      var l = Y.slice(1);
        abcd.display_oracles(l);


}
 //           var z = await rpc.apost(["read", m[2]], s_ip.value, parseInt(s_port.value));
 //           var orders = z[1][7];
 //           console.log(JSON.stringify(orders));
 //           orders = orders.slice(1);

//rpc.default_explorer(["oracle_list"], function(Y) {

//    });


refresh();


console.log("refreshing blocks");
headers_object.more_headers();
console.log("refreshing oracle list");
   //     abcd.oracles.innerHTML = "";           

firstTimeBool = 0;



//abcd.display_positions(window.localStorage.getItem("positionData"+keys.pub()));


console.log("seeing if we can update balance");
console.log(keys.pub());
console.log("privkey");
console.log(localStorage.getItem('privkey'));

if (keys.pub().length > 0){
	console.log("updating balance");
//	keys.update_balance();
//	keys.update_pubkey();
}
//console.log("refreshing blocks");

}


setInterval(async function(){ runtheloop() }, 1000*10)

//setInterval(console.log(globalBalance), 150*30);


function copyToClipboard(text) {
    var selected = false;
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    if (document.getSelection().rangeCount > 0) {
        selected = document.getSelection().getRangeAt(0)
    }
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};


    async function refreshMarkets(){
    var l = await rpc.apost(["markets"], get_ip(), parseInt("8090"));
    console.log(l);

    }