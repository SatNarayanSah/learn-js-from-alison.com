const Player = {
  Health: 45,
  Fun: 7,
  play: function () {
    console.log("Playing game");
    this.Fun += 10;
    console.log("Fun:", this.Fun);
  },
  eat: function (food) {
    if (food == "Apple") {
      console.log("Eat Apple");
      this.Health += 10;
      console.log("The pets Healths:", this.Health);
    } else if (food == "Canday") {
      console.log("eat Canday");
      this.Health -= 5;
      this.Fun += 10;
      console.log("Health:", this.Health, "Fun:", this.Fun);
    }
  },
};
console.log(Player);
Player.eat("Canday");
Player.play();
console.log(Player);


// NOTE: Methods declaration:- Function declare as an object property use this Keyword to acces "the current object" and its Property

// Methods are object property that are Functions