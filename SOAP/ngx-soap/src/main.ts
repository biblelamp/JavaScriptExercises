import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {prostredi} from './prostredi/prostredi';

// kvuli nestandardnimu chovani IE je potreba nacist materialize ikony v hlavicce stranky, jinak nedojde k jejich spravnemu zobrazeni
if (document['documentMode']) {
    document.write(`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    `);
}

if (prostredi.verze === 'Produkční') {
    enableProdMode();

    document.write(`
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121432831-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-121432831-1');
        </script>
    `);
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
