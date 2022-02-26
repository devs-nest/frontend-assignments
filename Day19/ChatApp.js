const template = document.createElement('template');
template.innerHTML = `
  <style>
  .chat-app {
		font-family: 'Arial', sans-serif;
		background: rgba(213, 213, 213, 0.7); 
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
	}

	.chat-app img {
		width: 100%;
	}

	.chat-app button {
		cursor: pointer;
		background: #fbdedb;
		color: #000;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
  </style>
  <div class="chat-app">
<img/>
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="first" /></p>
        <p><slot name="second" /></p>
      </div>
      <button id="toggle-info">Hide Functions</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Functions';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Functions';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('chat-app', UserCard);