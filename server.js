var Crawler = require("crawler");
var fs = require('fs'); //!!! added


var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});

var html = "<tr><td class='id' style='display:none;'>79774</td><td class='name'>ОАО ИПР ИНФОРМЭЛЕКТРО</td><td class='city'>Москва</td><td class='ogrn'>1127746371422</td></tr>";
var date = new Date();
// Queue just one URL, with default callback
//c.queue('http://www.arbira.ru');

// Queue a list of URLs
//c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'https://bankrot.fedresurs.ru/Messages.aspx', 
    jQuery: true,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{

             //added - start to read last date
		console.log("http loaded");
               fs.readFile('statusstatus.html', 'utf8', function (err, data) {
  		//if (err) throw err;
  		//console.log("file content",data);
		});

		//end of read


		console.log('Выделенные сообщения', res.$("#ctl00_cphBody_gvMessages").html());
            //console.log('Grabbed', res.$("#ctl00_cphBody_dateFinish").find("td[width='130px']").html());
            fs.appendFileSync('carcardcard.html', res.$("#ctl00_cphBody_gvMessages").html(), encoding='utf8');
            //fs.appendFileSync('statusstatus.html', date);
		fs.writeFile('statusstatus.html', date);
        }
        //done();
    }
}]);

// Queue some HTML code directly without grabbing (mostly for tests)
//c.queue([{
//    html: '<p>This is a <strong>test</strong></p>'
//}]);