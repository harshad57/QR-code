import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [error, setError] = useState(false);

  const generateQR = () => {
    if (text.length > 0) {
      setImgSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div>
        <p>Enter text or url</p>
      </div>
      <div id="fix">
        <input
          type="text"
          placeholder="Enter your URL"
          className={`text ${error ? "error" : ""}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="imgbox">
        {imgSrc && <img src={imgSrc} alt="QR Code" className="img" />}
      </div>
      <div id="fix">
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
    </div>
  );
}

export default App;