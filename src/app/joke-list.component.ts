import { Component,
         ViewChild,
         AfterViewInit,
         AfterContentInit,
         ViewChildren,
         QueryList,
         ElementRef,
         ContentChild,
         ContentChildren } from "@angular/core";

import { Joke } from "./joke";
import { JokeComponent } from "./joke.component";

@Component({
  selector: "joke-list",
  templateUrl: "./joke-list.component.html"
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror?",
      "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse?",
      "Mask-a-pony (Mascarpone)"),
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is
      ${this.jokeContentChild}`);
  }

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
