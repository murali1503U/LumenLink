import { Sender } from './components/Sender';
import { Receiver } from './components/Receiver';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-container">
    <header>
      <h1>Optical Data Link</h1>
      <p>Transfer data via screen and camera offline</p>
    </header>
    
    <div class="tabs">
      <button id="tab-send" class="tab-btn active">Sender</button>
      <button id="tab-recv" class="tab-btn">Receiver</button>
    </div>

    <main id="main-content">
      <div id="sender-container" class="tab-content active"></div>
      <div id="receiver-container" class="tab-content"></div>
    </main>
  </div>
`;

const tabSend = document.getElementById('tab-send')!;
const tabRecv = document.getElementById('tab-recv')!;
const senderContainer = document.getElementById('sender-container')!;
const receiverContainer = document.getElementById('receiver-container')!;

// Initialize components
new Sender(senderContainer);
new Receiver(receiverContainer);

// Tab switching logic
tabSend.addEventListener('click', () => {
    tabSend.classList.add('active');
    tabRecv.classList.remove('active');
    senderContainer.classList.add('active');
    receiverContainer.classList.remove('active');
});

tabRecv.addEventListener('click', () => {
    tabRecv.classList.add('active');
    tabSend.classList.remove('active');
    receiverContainer.classList.add('active');
    senderContainer.classList.remove('active');
});
