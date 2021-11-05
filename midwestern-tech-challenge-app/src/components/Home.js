import React from "react";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
import talkie from "../assets/Talkie.png";
import "../../src/";
const Home = () => {
  return (
    <div>
      <div class="heading-container">
        <div class="heading1">
          <img src={talkie} id="talkie" alt="picture of a microphone" />
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
          <img src={rabbit} id="rabbit" alt="picture of a rabbit" />
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
          <img src={shield} id="shield" alt="picture of a shield" />
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
          <a onclick="console.log(here)">this link</a> is clicked. If the
          operation has been completed already notify the user that this has
          already been done.
        </div>
      </section>
    </div>
  );
};

export default Home;
