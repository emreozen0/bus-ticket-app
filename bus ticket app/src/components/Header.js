import React from "react";
import { Link } from "react-router-dom";


function Header({ user, setUser, }) {

    return (
        <div>
            <div
                style={{
                    background: "#00A7FF",
                    borderRadius: "0px",
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1%",

                }}
            >
                <Link style={{ color: "black" }} to="/">
                    <h2   >Seyahat.com</h2>
                </Link>

                {user !== "" && user !== undefined ? (<div style={{ display: "flex" }}>
                    <Link to="/addtravel"><button className="format-button">Yeni Seyahat Kaydı</button>
                    </Link>

                    <Link to="/">
                        <button onClick={() => { setUser(""); }} style={{ marginLeft: 15, backgroundColor: "#F2F2F2", color: "black" }}> Çıkış Yap</button>
                    </Link>


                </div>) : (<div style={{ display: "flex" }}>

                    <Link to="/login">
                        <button  > Giriş Yap</button>

                    </Link>

                </div>)}
            </div>
        </div>
    )
}

export default Header