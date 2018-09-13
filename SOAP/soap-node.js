const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const DOMParser = require('xmldom').DOMParser;

function parseXml(text) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, "text/xml");
    Array.from(xmlDoc.getElementsByTagName("reference")).forEach(function (item) {
        console.log('Title: ', item.childNodes[3].childNodes[0].nodeValue);
    });

}

function soapRequest(url, payload) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', url, true);

    // build SOAP request
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                //parseXml(xmlhttp.responseText);
            } else {
                console.log("Status (not 200) = " + xmlhttp.status);
            }
        } else {
            console.log("readyState (not 4) = " + xmlhttp.readyState);
        }
        //console.log(xmlhttp.statusText);
        // NOTE: problem with certificate
        // https://stackoverflow.com/questions/14262986/node-js-hostname-ip-doesnt-match-certificates-altnames
        // resolve in linux so:
        // $ export NODE_TLS_REJECT_UNAUTHORIZED="0"
    }

    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(payload);
}

soapRequest('https://test.centralni-databaze-dodavatelu.cz/index.php?m=xenorganizations&h=identityprovider&a=server',
`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:soapQCM">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:uzivatelData>
         <token>5709e2f5-017c-4324-9f80-a834f49b0823</token>
      </urn:uzivatelData>
   </soapenv:Body>
</soapenv:Envelope>`);
/*
'http://www.dataaccess.com/webservicesserver/numberconversion.wso', 
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
   <soapenv:Header/>
   <soapenv:Body>
      <web:NumberToDollars>
         <web:dNum>12</web:dNum>
      </web:NumberToDollars>
   </soapenv:Body>
</soapenv:Envelope>`);
*/
