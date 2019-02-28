import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemon',
    template: `
        <div>
            <h1>{{nom}}</h1>
            <img src="https://i2.cdscdn.com/pdt2/9/2/0/1/400x400/auc2009253466920/rw/dessin-de-pikachu-pokemon-dimensions-33-x-48-c.jpg" />
        </div>
    `,
})
export class PokemonComponent implements OnInit  {
    nom: string;

    constructor() { }

    ngOnInit() {
    }
}
