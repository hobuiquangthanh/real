import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./auth.css";
import { useParams } from 'react-router';
import { API_KEY } from "../../../shared/_constant";
import axios from 'axios'

ForgotPassword.propTypes = {

};

function ForgotPassword(props) {
    const [email, setEmail] = useState();
    const [user, setUser] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                window.location = 'http://localhost:3001/login';
            }
            const data = await axios.get(`${API_KEY}/khach_hang/${id}`)
            setEmail(data.data.email)
            console.log(data, 'data')
            localStorage.setItem('auth', JSON.stringify(data.data.khach_hang))
            console.log(user, 'user')
        }
        fetchData();
    }, [])

    const handleForgotPass = (e) => {
        const id = e.target.getAttribute("name");
        console.log(id);
    }

    return (
        <div className="login">
            <div
                className="custom-container"
                id="container"
            >
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Quên Mật Khẩu</h1>
                        <input name="email" type="email" placeholder="Xác Nhận Địa Chỉ Email" onChange={e => setEmail(e.target.value)} />
                        <button className="btn-auth" name={user.id} onClick={handleForgotPass}>Xác Nhận</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <a className="a-admin" href="http://localhost:3000/admin">Quay trở về trang chủ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;