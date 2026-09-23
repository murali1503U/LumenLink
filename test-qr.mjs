import QRCode from 'qrcode';
const bytes = new Uint8Array(2900);
bytes.fill(0x41);
QRCode.toString([{ data: bytes, mode: 'byte' }], { type: 'terminal', errorCorrectionLevel: 'L', maskPattern: 4 })
  .then(res => console.log("Success! len: " + res.length))
  .catch(console.error);
