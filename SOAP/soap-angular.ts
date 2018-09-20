    private getMessage(xml: string, tagname: string): string {
        var result = null;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, 'text/xml');
        Array.from(xmlDoc.getElementsByTagName(tagname)).forEach(function (item) {
            result = item.firstChild.nodeValue.toString();
        });
        return result;
    }

    private soapRequest(uri: string, body: string) {
        this.http.post(uri, body)
        .subscribe(
            value => {
                console.log("POST call successful value returned in body",
                    value);
            },
            error => {
                console.log("POST call in error", error); // must read later https://learn.javascript.ru/json
                var headers = JSON.parse(JSON.stringify(error));
                var errors = JSON.parse(JSON.stringify(headers['error']));
                console.log(errors['text']);
                console.log(this.getMessage(errors['text'], 'faultstring'));
                console.log(this.getMessage(errors['text'], 'message'));
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }
