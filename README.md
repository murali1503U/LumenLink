# LumenLink

**LumenLink** is a fully air-gapped optical data transfer application. It allows you to transmit files from a computer screen directly to a smartphone camera using an animated stream of high-density QR codes. 

No Wi-Fi. No Bluetooth. No pairing. No cables. Just light.

## How It Works

LumenLink solves the problem of cross-device file transfer in strictly isolated or offline environments. 

1. **Fountain Codes:** The file is chopped into thousands of chunks and encoded using a Luby Transform (Raptor) fountain code. 
2. **Optical Transmission:** These chunks are converted into an animated sequence of dense QR codes (Version 40) and blasted on the sender's screen at a highly tuned frame rate.
3. **Robust Decoding:** The smartphone camera records the sequence. Because it uses fountain codes, the receiver doesn't need to catch every single frame in order. It just needs to catch *enough* frames, and it mathematically reconstructs the original file flawlessly.

## Features

- **100% Air-gapped:** Transfer files to highly secure or completely offline devices.
- **Cross-Platform:** The sender is a lightweight web application that runs in any modern browser. The receiver is a native Android app.
- **"Slow is Fast" Physics:** Tuned out-of-the-box for a stable 10 FPS / 2953-byte payload config. This guarantees mathematical phase-alignment with standard 30fps/60fps smartphone cameras, preventing screen tearing and dropped frames even on 144Hz monitors.
- **WASM Accelerated:** Powered by a WebWorker-threaded WebAssembly C++ port of ZXing (`decimen-codec`) for massive parallel decoding.

## Quick Start (Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Web Sender
Start the Vite development server to host the sender UI:
```bash
npm run dev
```

### 3. Build & Run the Android App (Receiver)
Sync the web assets to Capacitor and build the APK:
```bash
npx cap sync android
cd android
./gradlew assembleDebug
```
To install on a connected device via ADB:
```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

## Golden Configuration (Tuning)
For maximum stability on budget Android devices (e.g., Realme C55), the optimal transfer settings are:
- **Layout:** 1 Code (Full Screen)
- **Density:** 2953 bytes (V40)
- **Speed:** 10 FPS
This setup delivers a sustained ~29.5 KB/s (transferring a 5MB file in ~2.75 minutes) with practically zero frame drops. Power users with flagship devices (e.g., Snapdragon processors) can bump the speed to 15 FPS for faster transfers.

## License
[AGPL-3.0-or-later](LICENSE)

## Support
Created by **Murali Adith Krishna Reddy**.
If you find this project useful, consider [buying me a coffee](https://buymeacoffee.com/muraliadithkrishnareddy).
