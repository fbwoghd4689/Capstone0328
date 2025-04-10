import React, { useState } from "react";
import "../assets/styles.css";

function SignUp() {
    const [formData, setFormData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: parseInt(formData.id), // 사용자가 직접 입력한 ID
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone
                })
            });

            if (!response.ok) {
                throw new Error("회원가입 실패");
            }

            const result = await response.json();
            alert("회원가입 성공!");
            console.log("서버 응답:", result);
        } catch (error) {
            console.error("에러:", error);
            alert("회원가입 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="id"
                        placeholder="아이디"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="사용자 이름"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="이메일"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호 확인"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="전화번호"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
