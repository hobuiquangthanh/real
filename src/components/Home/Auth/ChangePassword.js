import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./auth.css";
import { useParams } from 'react-router';
import { API_KEY } from "../../../shared/_constant";
import axios from 'axios'

ChangePassword.propTypes = {

};

function ChangePassword(props) {
    const [password, setPassword] = React.useState();
    const [oldPassword, setOldPassword] = React.useState();
    const [newPassword, setNewPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const [user, setUser] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                window.location = 'http://localhost:3001/login';
            }
            const data = await axios.get(`${API_KEY}/khach_hang/${id}`)
            setUser(data.data.khach_hang)
            setPassword(data.data.khach_hang.mat_khau)
            console.log(data, 'data')
            localStorage.setItem('auth', JSON.stringify(data.data.khach_hang))
            console.log(user, 'user')
        }
        fetchData();
    }, [])

    const handleOldPassChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPassChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPassChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleUpdatePassClick = (e) => {
        const id = e.target.getAttribute("name");
        console.log(id);

        if (id) {
            if (oldPassword === password) {
                if (newPassword === password) {
                    alert("Mật Khẩu Mới Của Bạn Trùng Với Mật Khẩu Cũ!")
                    console.log("Mật Khẩu Mới Của Bạn Trùng Với Mật Khẩu Cũ!");
                    return;
                } else {
                    if (!newPassword && !confirmPassword) {
                        alert("Mật Khẩu Không Được Để Trống")
                        console.log("Mật Khẩu Không Được Để Trống");
                        return;
                    } else {
                        if (newPassword === confirmPassword && (newPassword).length >= 6) {
                            // setPassword(newPassword);
                            // console.log(password);

                            const postData = {
                                mat_khau: newPassword,
                            };

                            var form_data = new FormData();

                            for (var key in postData) {
                                form_data.append(key, postData[key]);
                            }

                            if (window.confirm("Mật khẩu của bạn sẽ đổi!")) {
                                axios.post(API_KEY + '/khach_hang/' + id + '?_method=put', form_data)
                                    .then(res => {
                                        console.log(res.data);
                                    })
                            }
                        } else {
                            alert("Nhập Sai Mật Khẩu Mới Và Mật Khẩu Phải Trên 6 Kí Tự!")
                            console.log("Nhập Sai Mật Khẩu Mới Và Mật Khẩu Phải Trên 6 Kí Tự!")
                        }
                    }
                }
            } else {
                alert("Nhập Sai Mật Khẩu Cũ!")
                console.log("Nhập Sai Mật Khẩu Cũ!")
            }
        }
    }

    return (
        <div className="login">
            <div
                className="custom-container"
                id="container"
            >
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Đổi Mật Khẩu</h1>
                        <input name="oldPassword" type="password" onChange={handleOldPassChange} placeholder="Mật Khẩu Cũ" />
                        <input name="newPassword" type="password" onChange={handleNewPassChange} placeholder="Mật Khẩu Mới" />
                        <input name="confirmPassword" type="password" onChange={handleConfirmPassChange} placeholder="Nhập Lại Mật Khẩu" />
                        <button className="btn-auth" name={user.id} onClick={handleUpdatePassClick}>Đổi Mật Khẩu</button>
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

export default ChangePassword;