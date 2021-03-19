/*
let getParagraphs=document.getElementsByTagName("p");

let sumUp=""
for( var i=0;i<getParagraphs.length;i++){
    sumUp+=getParagraphs[i].outerText;
}
*/
/*
let getParagraphs=document.getElementsByTagName("p");
var getBody=[];


for( var i=0;i<4;i++){
    getBody.push(getParagraphs[i].innerHTML);
}

var bodyText=$('body').html();

chrome.runtime.sendMessage({"type": 1,"data":getBody,"all_body":bodyText}, function(response) {
    console.log(response.data);
    var re = new RegExp("\\w+");
    var save;
    for( var i=0;i<4;i++){
        save=re.test(response.data[i][0]);
        
            getParagraphs[i].innerHTML=getParagraphs[i].textContent.replace(/response.data[i][0]/gi,"sdfdsfsd");
        
        //getParagraphs[i].innerHTML=response.data[i];
       // console.log([getParagraphs[i].innerHTML,response.data[i]]);
    }
   // $("body").html();
    
  });

  $(document).on("click", function(event){
    //var getData=$(event.target.dataset.idGet).html();
    //console.log(getData.length,getData);
    
    if(event.target.className=="tooltip detect-text" ){
        //if(getData.length<30){
            chrome.runtime.sendMessage({"type": 2,"data":event.target.outerText+" "+document.title}, function(response) {
                console.log(response);
                $(event.target.dataset.idGet).append("<br/>"+response.data);
            });
        //}
    }
})
https://en.wikipedia.org/wiki/Emperor_of_China -660
 https://freestyleacademy.rocks/Digital_Media/examples/index.php?f=Mouse_Following_Div_On_Hover
*/



let getParagraphs = document.getElementsByTagName("p");
var getBody = [];


for (var i = 0; i < 4; i++) {
    getBody.push(getParagraphs[i].innerHTML);
}

var bodyText = $('body').html();

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
}, false);


chrome.runtime.sendMessage({ "type": 1, "data": getBody, "all_body": bodyText }, function(response) {
    console.log(response);

    var context = document.querySelectorAll("p");

    console.log(response.data.length);
    if (response.data.length < 700) {
        for (var i = 0; i < getParagraphs.length; i++) {
            var instance = new Mark(context[i]);
            for (var j = 0; j < response.data.length; j++) {
                instance.mark(response.data[j][0], {
                    "separateWordSearch": false,
                    "acrossElements": true,
                    accuracy: "exactly",
                    element: "stropsy",
                    className: "stropsy-element-" + j
                });
            }
        }
    } else {
        for (var i = 0; i < 4; i++) {
            var instance = new Mark(context[i]);
            for (var j = 0; j < response.data.length; j++) {
                instance.mark(response.data[j][0], {
                    "separateWordSearch": false,
                    "acrossElements": true,
                    accuracy: "exactly",
                    element: "stropsy",
                    className: "stropsy-element-" + j
                });
            }
        }
    }
});


var btn = document.createElement("stropsy-popup");
btn.innerHTML = ` <div class="content-stropsy all-stropsy-content-from-popup">
  <div class="title_stropsy all-stropsy-content-from-popup" id="stropsy-3edwwx" style="font-family: sans-serif !important;font-size: 26px !important;"></div>
  <div class="stropsy-desc-word all-stropsy-content-from-popup" id="stropsy-d2ex2a1223" style="
  font-family: sans-serif !important;
  font-size: 16px !important;
  color: #444 !important;
  font-weight: 400 !important ;
  letter-spacing: -.013em !important;
  line-height: 1.43 !important;"></div>
  </div>`;
//document.body.appendChild(btn);
//btn.style.display = "none";
//https://api.dictionaryapi.dev/api/v2/entries/en_US/aglutinogen
//https: //stackoverflow.com/questions/33863807/youtube-data-api-v3-using-javascript
$(document).on("click", function(event) {
    //var getData=$(event.target.dataset.idGet).html();
    console.log(event);

    if (event.target.nodeName == "STROPSY" || event.target.nodeName == "STROPSY-POPUP") {
        if (event.target.nodeName == "STROPSY") {
            $("stropsy-popup").remove();
            event.target.innerHTML = event.target.innerHTML + "<stropsy-popup>" + btn.innerHTML + "</stropsy-popup>";

            btn.style.display = "inline";
            $(".title_stropsy").html("<div class='image_read-stropsy all-stropsy-content-from-popup'></div>" + event.target.innerText);



            chrome.runtime.sendMessage({ "type": 2, "data": event.target.outerText + " site:wikipedia.org" }, function(response) {
                console.log(response, response.data);

                $("#stropsy-d2ex2a1223").html(response.data.items[0].snippet + `<a href='" + response.data.items[0].link + "'>read more</a><br/>
                <ul class="tiles_pages all-stropsy-content-from-popup" style="list-style-type:none;list-style-image:none;display: inline-flex;">
                <li class="list-tiles all-stropsy-content-from-popup" style="margin-right: 12px;" onclick="accesTab(1)">Pages</li>
                <li class="list-tiles  all-stropsy-content-from-popup" style="margin-right: 12px;" onclick="accesTab(2)">Images</li>
                <li class="list-tiles  all-stropsy-content-from-popup" style="margin-right: 12px;" onclick="accesTab(3)">Videos</li>
                <li class="list-tiles  all-stropsy-content-from-popup" style="margin-right: 12px;" onclick="accesTab(4)">News</li>
                <li class="list-tiles all-stropsy-content-from-popup" style="margin-right: 12px;" onclick="accesTab(5)">Tweetes</li>
                </ul>
                <div class="content-display-data  all-stropsy-content-from-popup"> <ul class='add-data-to-href  all-stropsy-content-from-popup'></ul></div>
               
         `);
                for (var i = 1; i < response.data.items.length; i++) {
                    $(".add-data-to-href").append("<li class='link-popup' style='margin-bottom:0px!important;'><a href='" + response.data.items[i].link + "'>" + response.data.items[i].htmlTitle + "</a></li>");
                }
                $(".image_read-stropsy").html("<img src='" + response.data.items[0].pagemap.cse_image[0].src + "' width='100%' height='200px'/>");
            });

        }
    } else {
        if (event.target.nodeName != "STROPSY-POPUP") {
            if (event.target.classList[1] != "all-stropsy-content-from-popup") {
                $("stropsy-popup").remove();
            }
        }
    }
})


function snapSelectionToWord() {
    var sel;

    text = window.getSelection().toString();
    return text;
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


//salvez textul venit de la highltat cuvinte
var textuBIG;

$(document).ready(function() {
    function tweetButtonClick() {
        let selectedText = document.getSelection().toString();
        /*window.open(
          "https://twitter.com/intent/tweet?url=https://www.linkedin.com/in/harsha-vardhan-ch-245197bb/&text=" +
            selectedText
        );*/
        console.log("This is your selected text: ", selectedText);
    }

    const textSelectionTooltipContainer = document.createElement("div");
    textSelectionTooltipContainer.setAttribute(
        "id",
        "textSelectionTooltipContainer"
    );
    textSelectionTooltipContainer.innerHTML = `<button id="textShareTwitterBtn_analyse">Analyse</button><button id="textShareTwitterBtn">Search</button>`;
    const bodyElement = document.getElementsByTagName("BODY")[0];

    $("body").on("click", "#textShareTwitterBtn", tweetButtonClick);

    bodyElement.addEventListener("mouseup", function(e) {
        var textu = document.getSelection().toString();
        if (!textu.length) {
            textSelectionTooltipContainer.remove();
        }
    });



    var save_span_ID = "";

    function putbetweenTags() {
        var selection = document.getSelection();
        var selection_text = selection.toString();

        var span = document.createElement('SPAN');
        span.textContent = selection_text;
        span.id = "id_1" + makeid(6);
        save_span_ID = span.id;
        var range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
    }

    function highlight(text) {
        var inputText = document.getSelection().toString();
        var innerHTML2 = inputText;
        //var i = 0;
        for (var i = 0; i < text.data.length; i++) {
            var index = innerHTML2.indexOf(text.data[i]);
            // console.log(text.data[i]);
            if (index >= 0) {

                innerHTML2 = innerHTML2.substring(0, index) + "<stropsy data-markjs='true' class='stropsy-element-14111'>" +
                    innerHTML2.substring(index, index + text.data[i].length) +
                    "</stropsy>" + innerHTML2.substring(index + text.data[i].length, innerHTML2.length);
                //   console.log(innerHTML2);
                document.getElementById(save_span_ID).innerHTML = innerHTML2;
            }
        }
    }




    document.getElementsByTagName("BODY")[0].addEventListener("mouseup", function(e) {
        var getPopup = document.getElementById("textSelectionTooltipContainer");
        let textu = document.getSelection().toString();
        let matchu = /\r|\n/.exec(textu);
        if (getPopup == null) {
            if (textu.length && !matchu) {
                let range = document.getSelection().getRangeAt(0);
                rect = range.getBoundingClientRect();
                scrollPosition = $(window).scrollTop();
                containerTop = scrollPosition + rect.top - 50 + "px";
                containerLeft = rect.left + rect.width / 2 - 50 + "px";
                textSelectionTooltipContainer.style.transform =
                    "translate3d(" + containerLeft + "," + containerTop + "," + "0px)";
                bodyElement.appendChild(textSelectionTooltipContainer);
                textuBIG = textu;
            }
        } else {
            $("#textShareTwitterBtn_analyse").on("click", function(e) {
                console.log(textuBIG);
                chrome.runtime.sendMessage({ "type": 3, "data": textuBIG }, function(response) {
                    console.log(response, textuBIG);
                    putbetweenTags();
                    highlight(response);
                });
            });
        }
    });


});