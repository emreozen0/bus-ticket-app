import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { user,setUser ,  } = useContext(AppContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState( { name: "eozen60@gmail.com", password: "12345" });

    // admin bilgisiyle ekrandan girilen bilgiler uyuşuyorsa giriş yapan fonksiyon
    const Login = details => {
        console.log(details);
        if (admin.name === details.name && admin.password === details.password) {
            setUser({
                name: details.name,
                password: details.password
            });
            navigate('/')


        } else {
            console.log("girmedi", user)
            setError("Kullanıcı Bilgisi Bulunamadı.")
        }
    }
    return (

        <div className='Login'>

            <LoginForm Login={Login} error={error} />

        </div>





    )
}
