import { Component } from "@angular/core";

import { Joke } from "./joke";

@Component({
  selector: "joke-list",
  templateUrl: "./joke-list.component.html"
})
export class JokeListComponent {
  jokes: Joke[] = [];

  // constructor() {
  //   this.jokes = [
  //     new Joke("What did the cheese say when it looked in the mirror?",
  //       "Hello-me (Halloumi)"),
  //     new Joke("What kind of cheese do you use to disguise a small horse?",
  //       "Mask-a-pony (Mascarpone)"),
  //     new Joke("A kid threw a lump of cheddar at me",
  //       "I thought 'That's not very mature'")
  //   ];
  // }
  //
  // toggle(joke) {
  //   joke.hide = !joke.hide;
  // }
  //
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }

  addJoke() {
    this.jokes.unshift(
      new Joke("What did the cheese say when it looked in the mirror",
        "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = [];
  }
}
