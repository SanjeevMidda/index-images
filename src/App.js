import "./index.css";
import Image from "./components/Image";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({
    one: 2,
    two: 4,
    three: 5,
    four: 3,
    five: 1,
  });

  console.log(position);
  return (
    <div className="App">
      <div className="imageContainer">
        <Image
          text="one"
          index={position.one}
          title="one"
          setPosition={() => {
            setPosition({
              one: 5,
              two: 4,
              three: 3,
              four: 2,
              five: 1,
            });
          }}
        />
        <Image
          text="two"
          index={position.two}
          title="two"
          setPosition={() =>
            setPosition({
              one: 4,
              two: 5,
              three: 3,
              four: 2,
              five: 1,
            })
          }
        />
        <Image
          text="three"
          index={position.three}
          title="three"
          setPosition={() =>
            setPosition({
              one: 2,
              two: 4,
              three: 5,
              four: 3,
              five: 1,
            })
          }
        />
        <Image
          text="four"
          index={position.four}
          title="four"
          setPosition={() =>
            setPosition({
              one: 1,
              two: 2,
              three: 4,
              four: 5,
              five: 3,
            })
          }
        />
        <Image
          text="five"
          index={position.five}
          title="five"
          setPosition={() =>
            setPosition({
              one: 1,
              two: 2,
              three: 3,
              four: 4,
              five: 5,
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
