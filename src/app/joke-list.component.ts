import { Component } from "@angular/core";

import { Joke } from "./joke";

@Component({
  selector: "joke-list",
  template: `
    <div class="card card-block" *ngFor="let joke of jokes">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <a class="btn btn-primary"
         (click)="joke.toggle()">Tell Me</a>
    </div>
  `
})
export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?",
        "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me",
        "I thought 'That's not very mature'")
    ];
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
