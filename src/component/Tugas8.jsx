import { useState, useEffect } from "react";

const Tugas8 = () => {
  const [angka, setAngka] = useState(0);
  const [message, setMessage] = useState(""); 

  const handleTambah = () => {
    setAngka(angka + 1);
  };

  const handleKurang = () => {
    setAngka(angka - 1);
  };

  useEffect(() => {
    if (angka === 0) {
      setMessage("Angka adalah nol");
    } else if (angka > 0) {
      setMessage("Angka bertambah positif!");
    } else {
      setMessage("Angka bertambah negatif!");
    }
  }, [angka]); 

  return (
    <div className="welcome">
      <div className="card">
        <center>
          <h1>Counter</h1>
          <hr />
          <h2>{angka}</h2>
          <p>{message}</p>
          {angka === 0 ? (
            <p>Angka sekarang adalah nol.</p>
          ) : angka > 0 ? (
            <p>Angka positif!</p>
          ) : (
            <p>Angka negatif!</p>
          )}

          <div>
            {angka < 1 ? (
              <button onClick={handleTambah}>Tambah</button>
            ) : (
              <button onClick={handleKurang}>Kurang</button>
            )}
          </div>
        </center>
      </div>
    </div>
  );
};

export default Tugas8;
