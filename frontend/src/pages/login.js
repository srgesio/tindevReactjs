import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./login.css";
import api from "../services/api";

export default function Login({ history }) {
    const [username, setUsername] = useState("");

    async function handleSubmit(e) {
        e.preventDefaut();

        const response = await api.post("/devs", { username });
        console.log(response);
        history.push("/main");
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit" value="Enviar">Enviar</button>

            </form>
        </div>
    );
}