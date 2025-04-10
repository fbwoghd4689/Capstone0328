import React from "react";
import "../assets/styles.css";

function Navbar({ onLoginClick }) {
    return (
        <nav className="navbar">
            <div className="nav-item">홈</div>
            <div className="nav-item">카테고리</div>
            <div className="nav-item">알림</div>
            <div className="nav-item">내 프로필</div>
            <div className="nav-item login-btn">
                <button onClick={onLoginClick} className="login-button">로그인</button>
            </div>

        </nav>
    );
}

export default Navbar;
