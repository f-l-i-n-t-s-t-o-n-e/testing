function headers_main() {
    const urlParams = new URLSearchParams(window.location.search);
    var mode = urlParams.get('mode');
    //console.log(mode);
    if (mode == "test") {
        mode = "test";
        server_port.value = "3010";
        console.log(server_ip.value);
        if (server_ip.value == "") {
            server_ip.value = "127.0.0.1";
        }
    } else if (mode == "testnet") {
        mode = "testnet";
        server_port.value = "8070";
        if (server_ip.value == "") {
            server_ip.value = "159.89.87.58";
        }
    } else {
        mode = "production";
        server_port.value = "8080";
        if (server_ip.value == "") {
            server_ip.value = "159.89.87.58";
        }
    }
    console.log(mode);
    //var mode = "test";
    //var mode = "testnet";
    var forks;
    var tempvar3;
    var tempvar4;
    var retarget_frequency;
    var top_header;
    var headers_db = {};//store valid headers by hash
    var INITIAL_DIFFICULTY;
    var headers_batch = 5000;
    if (mode == "test") {
	//INITIAL_DIFFICULTY = 2500;
	INITIAL_DIFFICULTY = 10;
	retarget_frequency = 12;
	forks = {two: 0, four: 0,//retarget_frequency,
                 seven:40, twenty_nine:0};
	top_header = 0;
    } else if (mode == "testnet") {
	INITIAL_DIFFICULTY = 2500;
	retarget_frequency = 12;
	forks = {two: 0, four: retarget_frequency, seven:40, twenty_nine:0};
        top_header = ["header",10000,"PzAka1LatHpj7zhwY098sM9XaE4Vv+stjmUMWB21Md8=","9169gcVs1KQ/Kvcf0bRkeZfsjAjQ56kdlrwr3auML7Y=","JMgF+lUkTB2r37qrGG1B2SiS2h/bjdUO72jItcXdXLY=",304286457,6159,0,"AAAAAAAAAAAAFtXjnSwuMUTSTMmhbVNcvjZY3xZXv08=",230706923204,746];
        write_header(top_header, 21003884);

        //top_header = ["header",10932,"9tbLYW739Zw6/9FGUKpOJvemE+B1gtuHVLfWgdkBxGk=","XRLDP/0XKIvdNHTCj6iq34rmnh8X1Z1n++aqWY2GnOU=","ogV1t76d8+gLhOvJMU/Fx5S0z41KT4PDhPbCYROTXlE=",315668237,2500,0,"AAAAAAAAAAAAOP8UeJxxD4DZQEahh3OQkKcQ2tbHFuU=",249808154332,746]
        //write_header(top_header, 1);
	//top_header = ["header",50,"avmTCvhW62I5b1ZKW/k+hN5VkDTRBUfNOML1IbDeBEM=","HtCW+xejEr+hVx9EU/YWqjkToHfB65LznX/7kYY1qYc=","/nky29gffL519fIShxYtlGYrSl/VvYYSw0Qk2F/+Q4k=",283297347,4861,0,"AAAAAAAAAAAAoAC51HYeqD+RjyH1Ew1tdebVT3/BD6g=",1006239072,746];
	//write_header(top_header, 713104);
    } else {
	INITIAL_DIFFICULTY = 8844;
	retarget_frequency = 2000;
	forks = {two: 9000, four: 26900, seven:28135, twenty_nine:104600};
	//top_header = 0;
        //top_header = ["header",75963,"Hlp6dHOmI8MLSKoszxuU840fqrlm/5yuqJR92Idg9oU=","hudw3ucSvaEsFwH+zlxOUZ7KC0MNdnTimhWk6OPfQN8=","KJc9pvOIj7867XK/u7WL71gNQLNMn5pA+dUATaGrxuw=",453614702,13227,3,"AAAAAAAAAAAAp97vT1xPju+8EwiRULi0U/gliqEAAAA=",1656017740603758477312,5982];
        //top_header = ["header", 115963, "eMIChQ5lvwYTBsmuU+PSGfJ+yk7JHmUiDmJ05PWlUiY=", "rGvO+mDwjUMXhuM2SVZjhEoEBg8mhYcooUAHWgHG/TY=", "87WiCyA+8TwizOcBK1A543qwcjJ/REG8A449miIMDio=", 709357581, 13175, 3, "AAAAAAAAAAAAE+LxcAx88O3ofi2qtCeQshzdqA0AAAA=", 2.3261311366047874e+21, 5982];

        //write_header(top_header, 656722944829204);
        //write_header(top_header, 670203372402906);
//        write_header(top_header, 781489233254590);
    console.log("getItem header null?: "+ (localStorage.getItem("header") == null));
        if (localStorage.getItem("header") != null){
  //      write_header(JSON.parse(localStorage.getItem("header")),JSON.parse(localStorage.getItem("ewah")))
        tempvar3 = window.localStorage.getItem("header");
        console.log("tempvar3 is" + JSON.parse(tempvar3));
        var temparray = new Array();
        temparray.push(JSON.parse(tempvar3));
        top_header = JSON.parse(tempvar3);

        tempvar4 = localStorage.getItem("ewah");

        console.log("tempvar3 array is"+ temparray[0]);
        console.log("tempvar4 is: "+ Number(tempvar4));
        console.log("topheader is" + top_header);      
//            write_header(top_header, 781489233254590);     
            write_header(JSON.parse(tempvar3), Number(tempvar4));     

        }else{

        top_header = ["header", 130700, "yClicPvrQ4Ul5sk4hbsrJ62drzli1tue/mf8TYW2dZU=", "Dq6o8Xg3qiUVzMpzXkKijFtlhFd66KQlw2qiN8x37KI=", "bZM+MzTkULo4gzZ8hBlZLqTfWDmvxCnSL684GZSFCn8=", 803559907, 13378, 3, "AAAAAAAAAAAAB4P1tQgLilI01L0VFKSUOcygSIIAAAA=", 2.3808044578490653e+21, 5982];

            write_header(top_header, 781489233254590);            
        }

//to find the ewah headers_object.read_ewah(hash(headers_object.serialize(headers_object.top())));
    }
    
    //var top_header = 0;//stores the valid header with the most accumulated work.
    //var top_hash = hash(serialize_header(top_header));
    //headers_db[top_hash] = top_header;
    
    var top_diff = 0;//accumulative difficulty of top
    if(configure["more_headers_button"]){

        
        var button = button_maker2("sync with network", function() {
            wallet_text.innerHTML = "Downloading blockchain data";
            return more_headers();
        });
        document.body.appendChild(button);
    }
        /*
    wallet_text = document.createElement("p");
    wallet_text.innerHTML = JSON.stringify([["height", 0], ["total work", 0]]);
    document.body.appendChild(wallet_text);
    */
    var wallet_text = document.createElement("div");
    wallet_text.innerHTML = "Downloading blockchain data";
    document.body.appendChild(wallet_text);



    var wallet_text2= document.createElement("div");
    wallet_text2.innerHTML = "";

    var wallet_text3= document.createElement("div");
    wallet_text3.innerHTML = "Send VEO ";
    wallet_text3.style.display = 'block';
    wallet_text3.style.fontWeight = 'bold';

    document.body.appendChild(wallet_text3);
    wallet_text3.appendChild(br());
    wallet_text3.appendChild(br());


    var addressInput = document.createElement("INPUT");
    
    var amountInput = document.createElement("INPUT");



    var receivingAddressText= document.createElement("div");
    var sendingAmountText= document.createElement("div");

    var spaceText= document.createElement("div");


    receivingAddressText = text("Address: ");
    sendingAmountText = text(" Amount: ");
    spaceText = text(" ");

    receivingAddressText.style.fontWeight = 'normal';
    sendingAmountText.style.fontWeight = 'normal';


    wallet_text3.appendChild(receivingAddressText);
    addressInput.style.display = 'inline';

    wallet_text3.appendChild(addressInput);
//    wallet_text3.appendChild(br());

    wallet_text3.appendChild(sendingAmountText);
    amountInput.style.display = 'inline';

    wallet_text3.appendChild(amountInput);

    wallet_text3.appendChild(br());
   wallet_text3.appendChild(br());

    var spendButton = button_maker2("Send", function() { return send2()});
    spendButton.style.display = 'inline';


 //   wallet_text3.appendChild(spaceText);

    wallet_text3.appendChild(spendButton);

   // wallet_


    async function send2(){
        var to = parse_address(addressInput.value);
        var from = keys.pub();
        var amount = Math.round(parseFloat(amountInput.value, 10)* token_units());
        if("veo" == "veo"){
            var tx = await spend_tx.amake_tx(to, from, amount);
            var stx = keys.sign(tx);
            var msg = await apost_txs([stx]);
            console.log(msg);
        } else {

            /*
            var ma = await rpc.apost(["account", keys.pub()]);
            var V = JSON.parse(selector.value);
            var cid = V[0];
            var type = parseInt(V[1]);
            var sk = sub_accounts.key(keys.pub(), cid, type);
            var sk = btoa(array_to_string(sk));
            var balances_db = tabs.balances_db;
            console.log(sk);
            console.log(balances_db);
            if(balances_db[sk] &&
               balances_db[sk].limit){
                amount = Math.floor(
                    amount /
                        balances_db[sk].limit);
            };
            var Nonce = ma[2] + 1;
            var fee = 152050;
            var tx = ["sub_spend_tx",
                      keys.pub(),
                      Nonce,
                      fee, to, amount,
                      cid, type];
            var stx = keys.sign(tx);
            var msg = await apost_txs([stx]);
            display.innerHTML = msg;
            */

        };
    };

//    document.body.appendChild(wallet_text2);
//    document.body.appendChild(wallet_text3);



//    wallet_text.appendChild(text("dsfsfddf"));

    //more_headers()
    function write_header(header, ewah) {
        var acc_difficulty = header[9];
        if ((acc_difficulty > top_diff) || ((mode == "test")&&((top_header == 0) || (header[1] > top_header[1])))) {
            top_diff = acc_difficulty;
            top_header = header;
            wallet_text.innerHTML = "Current height: " + header[1];
            wallet_text.appendChild(br());
                                    wallet_text.appendChild(br());

        }
        h = hash(serialize_header(header));
        headers_db[h] = [header, ewah];
    }
    function read_ewah(hash) {
	if (headers_db[hash]) {
	    return headers_db[hash][1];
	} else { return  undefined; }
    }
    function read_header(hash) {
	if (headers_db[hash]) {
	    return headers_db[hash][0];
	} else { return  undefined; }
    }
    function list_to_uint8(l) {
        var array = new Uint8Array(l.length);
        for (var i=0; i<l.length; i++) {
            a[i] = l[i];
        }
        return array;
    }
    function pair2sci(x, b) {
        return (256 * x) + b;
    }
        //calculate X. ad 1 for every zero bit starting from the beginning of the h. Stop as soon as you reach a non-zero bit.
        // calculate B. take the next 8 bits from h after calculating x, and interpret it as an integer.
        //return pair2sci(X, B);
    function difficulty_should_be(NextHeader, hash) {
        var header = read_header(hash);//headers_db[hash];
        if ( header == undefined ) {
            //console.log(headers_db);
            //console.log(hash);
            console.log(header);
            console.log("received an orphan header");
            return "unknown parent";
        } else {
            var Diff = header[6];
            var RF = retarget_frequency; //constants:retarget_frequency();
            var height = header[1];
            //var x = height % RF;//fork
	    if (height > forks.four) {
		x = height % Math.floor(RF / 2);
	    } else {
		x = height % RF;
	    }
	    var PrevEWAH = read_ewah(hash);
	    var EWAH = calc_ewah(NextHeader, header, PrevEWAH);
	    if (height > forks.seven)  {
		return [new_target(header, EWAH), EWAH];
		//console.log("working here");
		//return 0;
	    } else if ( ( x == 0 ) && (! (height < 10) )) {
                return [difficulty_should_be2(header), EWAH];
            } else {
		return [Diff, EWAH]; }
        }
    }
    function new_target(header, EWAH0) {
	//console.log(EWAH0);
	var EWAH = bigInt.max(EWAH0, 1);
	var diff = header[6];
	var hashes = sci2int(diff);
	var estimate = bigInt.max(1, hashes.times(hashrate_converter()).divide(EWAH)).toJSNumber();
	//console.log("estimate is ");
	//console.log(estimate);//1670
	//console.log("EWAH is ");
	//console.log(EWAH);//1670
	//console.log("diff is ");
	//console.log(diff);//1670
	var P = header[10];
	var UL = Math.floor(P * 6 / 4);
	var LL = Math.floor(P * 3 / 4);
	var ND = diff;
	if (estimate > UL) {
	    ND = pow_recalculate(diff, UL, estimate);
	} else if (estimate < LL) {
	    ND = pow_recalculate(diff, LL, estimate);
	}
	//console.log(ND);//1
	return Math.max(ND, INITIAL_DIFFICULTY);
    }
    function retarget2(header, n, ts) {
	//console.log(JSON.stringify(header));
        var t = header[5];
        ts.push(t);
        //var height = header[1];
        //if ((height == 0) || (n == 0)) {
        if (n == 0) {
            return {"header":header, "times":ts};
        }
        else {
            var prev_hash = string_to_array(atob(header[2]));
            var prev_header = read_header(prev_hash);//headers_db[prev_hash];
            return retarget2(prev_header, n-1, ts);
        }
    }
    function median(l) {
        l.sort(function(a, b) {return a - b;});
        var half = Math.floor(l.length / 2);
        return l[half];
    }
    function difficulty_should_be2(header) {
        var period = header[10];
        var f = Math.floor(retarget_frequency / 2); //constants:retarget frequencey is 2000
        var a1 = retarget2(header, f - 1, []);
        var times1 = a1.times;
        var header2000 = a1.header;
        var a2 = retarget2(header2000, f - 1, []);
        var times2 = a2.times;
        var m1 = median((times1).reverse().slice(1));
        var m10 = median((times1).reverse().slice(0));
        var m2 = median((times2).reverse());//628500
        var tbig = m1 - m2;
        var t0 = Math.floor(tbig / f);//limit to 700 seconds
	var t = Math.min(t0, Math.floor(period * 7 / 6));//upper limit of 16.66% decrease in difficulty.
	var old_diff = header2000[6];
        var nt = pow_recalculate(
            old_diff,
            period,
            Math.max(1, t));//current estimated block time
        var done = Math.max(nt, INITIAL_DIFFICULTY);
        return done;//initial difficulty
    }
    function pow_recalculate(oldDiff, t, bottom) {
        var old = sci2int(oldDiff);
	var n = old.times(t).divide(bottom);
        //var n = Math.max(1, Math.floor(( old * t ) / bottom));
        //var n = Math.max(1, Math.floor(( old / bottom) * t));
	
        var d = int2sci(n);
        return Math.max(1, d);
    }
    function log2(x) {
	if (x.eq(0)) { return 1; }
	else if (x.eq(1)) { return 1; }
        //if (x == 1) { return 1; }
        else { return 1 + log2(x.divide(2))}
        //else { return 1 + log2(Math.floor(x / 2))}
    }
    function exponent(a, b) {//a is type bigint. b is an int.
        if (b == 0) { return bigInt(1); }
        else if (b == 1) { return a; }
        else if ((b % 2) == 0) {return exponent(a.times(a), Math.floor(b / 2)); }
        else {return a.times(exponent(a, b-1)); }
    }
    function sci2int(x) {
        function pair2int(l) {
            var b = l.pop();
            var a = l.pop();
            var c = exponent(bigInt(2), a);//c is a bigint
	    return c.times((256 + b)).divide(256);
            //return Math.floor((c * (256 + b)) / 256);
        }
        function sci2pair(i) {
            var a = Math.floor(i / 256);
            var b = i % 256;
            return [a, b];
        }
        return pair2int(sci2pair(x));
    }
    function int2sci(x) {
        function pair2sci(l) {
            var b = l.pop();
            var a = l.pop();
            return (256 * a) + b;
        }
        function int2pair(x) {
            var a = log2(x) - 1;
            var c = exponent(bigInt(2), a);
	    var b = x.times(256).divide(c).minus(256).toJSNumber();
            //var b = Math.floor((x * 256) / c) - 256;
            return [a, b];
        }
        return pair2sci(int2pair(x));
    }
    function check_pow(header) {
        //calculate Data, a serialized version of this header where the nonce is 0.
        var height = header[1];
        //if (height < 1) { return [true, 1000000]; }
        if (height < 1) { return [true, 1]; }
        else {
            var prev_hash = string_to_array(atob(header[2]));
            var diff0L = difficulty_should_be(header, prev_hash);
	    var diff0 = diff0L[0];
	    var EWAH = diff0L[1];
            var diff = header[6];
            if (diff == diff0) {
                var nonce = atob(header[8]);
                var data = JSON.parse(JSON.stringify(header));
                data[8] = btoa(array_to_string(integer_to_array(0, 32)));
                var s1 = serialize_header(data);
                var h1 = hash(hash(s1));
		var foo, h2, I;
		if (height > (forks.two - 1)) {
		    var nonce2 = nonce.slice(-23),
		    foo = h1.concat(string_to_array(nonce2));
		    //console.log(foo);
		    //console.log(nonce2);
                    h2 = hash(foo);
                    I = newhash2integer(h2);
		} else {
                    foo = h1.concat(
			integer_to_array(diff, 2)).concat(
                            string_to_array(nonce));
                    h2 = hash(foo);
                    I = hash2integer(h2);
		}
                return [I > diff, EWAH];
            } else {
                console.log("bad diff");
                console.log(diff);//from server
                console.log(diff0);
                return [false, 0];
            }
        }
    }
    //function hashrate_converter() { return 1048576; }
    function hashrate_converter() { return 1024; }
    function calc_ewah(header, prev_header, prev_ewah0) {
	var prev_ewah = bigInt.max(1, prev_ewah0);
	//console.log("prev_ewah: ");
	//console.log((prev_ewah).toJSNumber());
	var DT = header[5] - prev_header[5];
	//maybe check that the header's time is in the past.
	var Hashrate0 = bigInt.max(bigInt(1),
				   bigInt(hashrate_converter()).times(sci2int(prev_header[6])).divide(DT));
	var N = 20;
	var Converter = prev_ewah.times(1024000);
	var EWAH2 = Converter.times((N - 1)).divide(prev_ewah);
	var EWAH0 = (Converter.divide(Hashrate0)).add(EWAH2);
	var ewah = Converter.times(N).divide(EWAH0).toJSNumber();
	/*
	console.log("header number");
	console.log(JSON.stringify(header[1]));
	console.log("prev_ewah: ");
	console.log(prev_ewah0);// should be 1, is 1000000
	console.log(prev_ewah.toJSNumber());// should be 1, is 1000000
	console.log("dt: ");
	console.log(DT);
	console.log("hashrate0: ");
	console.log(Hashrate0.toJSNumber());
	console.log("ewah0: ");
	console.log(EWAH0.toJSNumber());//should be 20480000, is 1024019456000
	console.log("ewah: ");
	console.log(ewah);//should be 1, is 19
	*/
	
	//var Hashrate0 = Math.floor(Math.max(1, hashrate_converter() * sci2int(prev_header[6]) / DT));
	//var Hashrate = Math.min(Hashrate0, prev_ewah * 4);
	//var N = 20;
	//var ewah = Math.floor((Hashrate + ((N - 1) * prev_ewah)) / N);
	return ewah;
    }
    function absorb_headers(h) {
	//console.log(JSON.stringify(h[1]));
        var get_more = false;
        for (var i = 1; i < h.length; i++ ) {
            var bl = check_pow(h[i]);
	    var b = bl[0];
	    var ewah = bl[1];
            if ( b ) {
                var header = h[i];
                var height = header[1];
                var header_hash = hash(serialize_header(header));
		//var ewah = 1000000;
                if ( height == 0 ) {
                    header[9] = 0;//accumulative difficulty
                } else {
                    var prev_hash = string_to_array(atob(header[2]));
                    var prev_header = read_header(prev_hash);//headers_db[prev_hash];
                    prev_ac = prev_header[9];
                    diff = header[6];
                    //var ac = sci2int(diff) / 10000000000;
                    var ac = sci2int(diff);
                    header[9] = prev_ac + ac - 1;
                }
                if (!(header_hash in headers_db)) {
                    get_more = true;
                }
                write_header(header, ewah);
                
                if (height > 200000){
                pushblockslocal(header, ewah);
                }    
            }
                
            else {
                console.log("bad header");
                console.log(JSON.stringify(h[i])); }
        }
        if (get_more) { more_headers(); }
        else {
            keys.update_balance();
            
            wallet_text.innerHTML = "Current height: " + top_header[1];
                        wallet_text.appendChild(br());
                        wallet_text.appendChild(br());

        }
    }
    function more_headers() {
        var n;
        if ( top_header == 0 ) {
            n = 0;
        } else {
            n = top_header[1];
        }
        rpc.post(["headers", headers_batch + 1, n], absorb_headers);
    }
    function serialize_header(x) {
        var height = x[1]; //4 bytes
        var prev_hash = atob(x[2]); //bin
        var trees_hash = atob(x[3]); //bin
        var txs_proof_hash = atob(x[4]); //bin
        var time = x[5]; //4 bytes
        var difficulty = x[6]; // 3 bytes
        var version = x[7]; // 2 bytes
        var nonce = atob(x[8]); // 32 bytes
        var period = x[10];
        var y = string_to_array(prev_hash);
        return y.concat(
            integer_to_array(height, 4)).concat(
                integer_to_array(time, 5)).concat(
                    integer_to_array(version, 2)).concat(
                        string_to_array(trees_hash)).concat(
                            string_to_array(txs_proof_hash)).concat(
                                integer_to_array(difficulty, 2)).concat(
                                    string_to_array(nonce)).concat(
                                        integer_to_array(period, 2));
    }
    function hash_test() {
        console.log(hash([1,4,6,1,2,3,4,4]));
        var z = integer_to_array(1000, 4);
        var s = array_to_string(z);
        var a = atob("AAAD6A==");
        var g = string_to_array(a);
        var f = string_to_array(s);
        console.log(JSON.stringify(a));
        console.log(JSON.stringify(s));
        console.log(JSON.stringify(g));
        console.log(JSON.stringify(f));
        console.log(JSON.stringify(hash(g)));
        console.log(JSON.stringify(hash(f)));
    }
    function header_test() {
        rpc.post(["headers", 10, 0], header_test2);
    }
    function header_test2(hl) {
        console.log(hl);
        absorb_headers(hl);
    }
    function on_height_change(callback) {
        var h = top_header[1];
        return on_height_change2(h, callback);
    }
    function on_height_change2(h, callback) {
        var h2 = top_header[1];
        if (h2 > h) {
            return callback();
        }
        return setTimeout(function() { return on_height_change2(h, callback), 1000});
    }
    //test();
    function test() {
        console.log(sci2int(2000));//should be 232
        console.log(int2sci(2000));//should be 2804
        console.log(sci2int(int2sci(2000)));// should be 2000
    }

    function pushblockslocal(header, ewah) {
   // console.log("pushtolocal check");
   // console.log((keys.keys_internal().getPrivate("hex")));
    
//    window.localStorage.setItem("header", keys.keys_internal().getPrivate("hex"));
    
    window.localStorage.setItem("header", JSON.stringify(header));

    window.localStorage.setItem("ewah", JSON.stringify(ewah));

    }


        return {more_headers: more_headers,
                sci2int: sci2int,
                serialize: serialize_header,
                top: (function() { return top_header; }),
                db: headers_db,
                read_ewah: read_ewah,
                on_height_change: on_height_change,
                forks: forks, wallet_text: wallet_text, wallet_text3: wallet_text3};
}
var headers_object = headers_main();

headers_object.more_headers();
//main2();


    function clearblockslocal() {
   // console.log("pushtolocal check");
   // console.log((keys.keys_internal().getPrivate("hex")));
    
//    window.localStorage.setItem("header", keys.keys_internal().getPrivate("hex"));
    
    window.localStorage.removeItem("header");

    window.localStorage.removeItem("ewah");

    }