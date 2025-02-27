function Tugas7(props) {
    return (
        <div className="welcome">
            <div className="card">
                <h1>Data diri peserta kelas ReactJS</h1>
                <hr />
                <ul>
                    <li>
                        <b>Nama lengkap :</b> {props.name}
                    </li>
                    <li>
                        <b>Email :</b> {props.email}
                    </li>
                    <li>
                        <b>Batch Pelatihan :</b> {props.batch}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tugas7