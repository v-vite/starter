import "./style.css";
import { setupCounter } from "./counter.ts";
import vLogo from "./v.svg";
import viteLogo from "./vite.svg";

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
	app.innerHTML = `
  <div>
    <a href="https://vlang.io" target="_blank">
      <img src="${vLogo}" class="logo v" alt="V logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo vite" alt="Vite logo" />
    </a>
    <h1><a href="https://vlang.io">V</a> + <a href="https://vitejs.dev">Vite</a> = <a href="https://github.com/v-vite/v-vite">V-Vite</a></h1>
    <p>The seamless bridge between <a href="https://github.com/vlang/v">V</a> and <a href="https://github.com/vitejs/vite">Vite.js</a>.</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the V and Vite logos to learn more
    </p>
  </div>
`;
}

const counter = document.querySelector<HTMLButtonElement>("#counter");
if (counter) {
	setupCounter(counter);
}
