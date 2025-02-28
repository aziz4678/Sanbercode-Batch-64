import { useState } from "react"

const Tugas8 = () => {
    const [angka, setAngka] = useState(0)


    const handleTambah = () => {
        setAngka(angka + 1)
    }

    const handleKurang = () => {
        setAngka(angka - 1)
    }
    return (
        <div className="welcome">
            <div className="card">
                <center>
                    <h1>Counter</h1>
                    <hr />
                    <h2>{angka}</h2>

                    <div>
                        <button onClick={handleTambah}>Tambah</button>
                        <button onClick={handleKurang}>Kurang</button>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Tugas8