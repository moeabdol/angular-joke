import { Component } from "@angular/core";

import { Joke } from "./joke";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  joke: Joke = new Joke("A kid threw a lump of cheddar at me",
    "I though 'That 's not mature'");
}
