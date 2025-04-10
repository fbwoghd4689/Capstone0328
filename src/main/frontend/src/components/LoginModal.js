import React from "react";
import { Link } from "react-router-dom"; // 링크 컴포넌트
import "../assets/styles.css"; // 스타일 적용

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>로그인</h2>
                <form>
                    <label htmlFor="username">아이디</label>
                    <input type="text" id="username" placeholder="아이디" required />

                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" placeholder="비밀번호" required />

                    <button type="submit">로그인</button>
                </form>

                {/* 회원가입 링크 (React Router) */}
                <p>
                    아직 계정이 없으신가요?{" "}
                    <Link to="/signup" className="signup-link">회원가입</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
