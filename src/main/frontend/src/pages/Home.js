import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import "../assets/styles.css";  // 스타일 적용

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <header>
                <h1>당근마켓</h1>
            </header>

            <nav className="navbar">
                <div className="nav-item">홈</div>
                <div className="nav-item">카테고리</div>
                <div className="nav-item">알림</div>
                <div className="nav-item">내 프로필</div>
                <div className="nav-item login-btn">
                    <button onClick={() => setIsModalOpen(true)}>로그인</button>
                </div>
            </nav>

            {/* 로그인 모달 */}
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <footer>
                <p>&copy; 2025 당근마켓</p>
            </footer>
        </div>
    );
};

export default Home;
