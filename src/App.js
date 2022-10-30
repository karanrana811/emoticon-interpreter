import "./styles.css";
import React, { useState } from "react";

// var name = "Karan";
var userName = "Visitor";

export default function App() {
  const emojiDictionary = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "🪔": "diwali",
    "🌈": "rainbow",
    "✨": "sparkles",
    "🕉️": "om",
    "😉": "wink",
    "👀": "eyes",
    "🎁": "gift",
    "🤯": "mindblown",
    "🎈": "balloon",
    "👓": "sunglasses",
    "💎": "diamond",
    "🧂": "salt",
    "🍻": "beer",
    "🍄": "mushroom"
  };
  var emojiKeys = Object.keys(emojiDictionary);
  // var emojiValues = Object.values(emojiDictionary);
  var [userInput, setUserInput] = useState("");
  // const [meaning, setMeaning] = useState("");

  // function onClickHandler() {
  //   console.log("Button Clicked!");
  //   setLikeCounter(likeCounter + 1);
  //   console.log(likeCounter);
  // }
  function onChangeHandler(event) {
    var input = event.target.value;
    var userInput = emojiDictionary[input];
    if (userInput === undefined) {
      userInput = "We do not have this in our database.";
    }
    setUserInput(userInput);
  }

  function emojiClickHandler(item) {
    console.log("emoji clicked " + item);
    var userInput = emojiDictionary[item];
    setUserInput(userInput);
  }

  return (
    <div className="App">
      <h1 className="header1">Welcome {userName}</h1>
      <h2>Emoji-Interpreter</h2>
      <hr />
      <input placeholder="Emoji Here" onChange={onChangeHandler}></input>
      <br />
      <br />
      <div>Meaning: {userInput}</div>
      <div>
        <ul>
          {emojiKeys.map((item) => {
            return (
              <li key={item} onClick={() => emojiClickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
