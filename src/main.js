// SCSS
import './scss/main.scss';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom JS
import './js/app.js';

// App HTML
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Sundaygrow!</h1>
    <div class="card">
      <button id="counter" type="button">Click Me</button>
    </div>
    <p class="read-the-docs">
      Your project is ready.
    </p>
  </div>
`;

// Example counter function
import { setupCounter } from './counter.js';
setupCounter(document.querySelector('#counter'));

console.log('Sundaygrow Project Loaded!');
