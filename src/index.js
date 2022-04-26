
import React from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<div>
  <Card
   name="YouWish" 
   img="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://arweave.net/k8cqGP76VOyFi1lys7mw9RAQTxFNlMwVutHUp7K6j6k?ext=png"
    tel="123" email="femnant@mail.com"/>
  <Card name="Femnant1" img="https://arweave.net/KtF7ZUw8tIPKJCCTsvKL-KqGEPx5WDruf1tjK20qT4E?ext=png" tel="123 432 321" email="richassmf@mail.com"/>
  <Card name="Femnant2" img="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://arweave.net/kqx8Bnvp9XpnmWe5-eTPLgjfKDXbYu4mxRALQvS2Se0?ext=png" tel="321" email="femnant@mail.com"/>
  </div>)

function Card(props) {
  return <div>
     <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>


  </div>
};

