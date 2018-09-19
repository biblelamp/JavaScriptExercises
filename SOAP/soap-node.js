/*
    Before running the code, you need to install two packages:

    npm install xmlhttprequest
    npm install xmldom

    Now you can run the code:

    node soap-node.js
*/ 
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
    xmlhttp.open('POST', url, true, 'uzivatelz1', 'uzivatelz1');

    // build SOAP request
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                //parseXml(xmlhttp.responseText);
            } else {
                console.log("Status (not 200) = " + xmlhttp.status);
                console.log(xmlhttp.responseText);
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

soapRequest('https://217.11.251.201:8443/ta-test-ejb/ZakazkaWebserviceV2',
`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kom="http://kompilovane.webovesluzby.ta.tendersystems.cz/">
   <soapenv:Header/>
   <soapenv:Body>
      <kom:nacistKorenovehoZadavatelePrihlasenehoUzivatele/>
   </soapenv:Body>
</soapenv:Envelope>`);
/*
'https://test.centralni-databaze-dodavatelu.cz/index.php?m=xenorganizations&h=identityprovider&a=server',
`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:soapQCM">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:uzivatelData>
         <token>189f4fe2-b788-4cd2-aeb9-cf7c41f7af90</token>
      </urn:uzivatelData>
   </soapenv:Body>
</soapenv:Envelope>`);
/*
'https://www.ebi.ac.uk/europepmc/webservices/soap', 
    `<?xml version="1.0" encoding="UTF-8"?>
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Header />
    <S:Body>
        <ns4:getReferences xmlns:ns4="http://webservice.cdb.ebi.ac.uk/"
            xmlns:ns2="http://www.scholix.org"
            xmlns:ns3="https://www.europepmc.org/data">
            <id>C7886</id>
            <source>CTX</source>
            <offSet>0</offSet>
            <pageSize>25</pageSize>
            <email>ukpmc-phase3-wp2b---do-not-reply@europepmc.org</email>
        </ns4:getReferences>
    </S:Body>
    </S:Envelope>`);
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
