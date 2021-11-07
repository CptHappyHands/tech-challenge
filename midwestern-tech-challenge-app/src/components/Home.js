import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
import talkie from "../assets/Talkie.png";
import logo from "../assets/logo.png";
import "../../src/";
import { Link } from "react-router-dom";
import { useState } from "react";
// import removeDupes from "../actions";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const removeDupes = () => {
    let array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
    let array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
    let comboArray = array1.concat(array2);
    let newArray = [];
    for (let i = 0; i < comboArray.length; i++) {
      if (!newArray.includes(comboArray[i])) {
        newArray.push(comboArray[i]);
      }
    }
    setClicked(true);
    console.log(newArray);
    // if (setClicked !== true) {
    //   alert(newArray);
    //   setClicked(true);
    // } else {
    //   console.log("You've already clicked this!");
    // }
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} class="Logo" alt="Midwesterns Logo" />
          </Link>
          <Link to="/contact" class="contact">
            contact
          </Link>
        </nav>
      </header>
      <div class="heading-container">
        <div class="heading1">
          <img src={talkie} id="talkie" alt="microphone" />
          <div class="heading-title">Heading Two</div>
          <div class="heading-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              animi modi voluptates sed nemo mollitia vitae corrupti maiores.
              Sapiente commodi ad expedita, vero minus iure quos. Quia delectus
              aliquid officia.
            </p>
          </div>
          <div class="btn-holder">
            <button>Learn More</button>
          </div>
        </div>
        <div class="heading2">
          <img src={rabbit} id="rabbit" alt="rabbit" />
          <div class="heading-title">Heading Two</div>
          <div class="heading-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              animi modi voluptates sed nemo mollitia vitae corrupti maiores.
              Sapiente commodi ad expedita, vero minus iure quos. Quia delectus
              aliquid officia.
            </p>
          </div>
          <div class="btn-holder">
            <button>Learn More</button>
          </div>
        </div>
        <div class="heading3">
          <img src={shield} id="shield" alt="shield" />
          <div class="heading-title">Heading Two</div>
          <div class="heading-info">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              animi modi voluptates sed nemo mollitia vitae corrupti maiores.
              Sapiente commodi ad expedita, vero minus iure quos. Quia delectus
              aliquid officia.
            </p>
          </div>
          <div class="btn-holder">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <section class="page-bottom">
        <div class="bottom-title">
          <h1>Heading One</h1>
        </div>
        <div class="hr">
          <hr />
        </div>
        <div class="bottom-text">
          Remove the duplicates in 2 Javascript objects and output the list of
          distinct names in an unordered list when
          <a
            href="#"
            onClick={
              clicked
                ? alert(
                    "Sorry, you can't click this again (see console for the answer)"
                  )
                : removeDupes
            }
          >
            this link
          </a>
          is clicked. If the operation has been completed already notify the
          user that this has already been done
        </div>
      </section>
    </div>
  );
};

export default Home;
