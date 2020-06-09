import React, { Component } from "react";
import "../Login/login.css";
import LogoText from "../../Images/logo_text.png";
import MainPic from "../../Images/mainPic.png";
import Picture from "../../Images/picture.jpg";
import Picture1 from "../../Images/picture1.jpg";
import Picture2 from "../../Images/picture2.jpg";
import Picture3 from "../../Images/picture3.jpg";
import Picture4 from "../../Images/picture4.jpg";

class Login extends Component {
    render() {
        return (
            <>
                <main className="main">
                    <div className="container">
                        <div className="left-login-container">
                            <div className="lc">
                                <img src={MainPic} alt="MainPicture" />
                                <img
                                    className="main-pic selected"
                                    src={Picture}
                                    alt="pic"
                                />
                                <img
                                    className="main-pic"
                                    src={Picture1}
                                    alt="pic"
                                />
                                <img
                                    className="main-pic"
                                    src={Picture2}
                                    alt="pic"
                                />
                                <img
                                    className="main-pic"
                                    src={Picture3}
                                    alt="pic"
                                />
                                <img
                                    className="main-pic"
                                    src={Picture4}
                                    alt="pic"
                                />
                            </div>
                        </div>

                        <div className="right-login-container">
                            <div className="right-inner-container">
                                <div className="logo">
                                    <img src={LogoText} alt="Logo" />
                                </div>
                                <div className="login-form">
                                    <form action="/">
                                        <input
                                            id="input-id"
                                            type="text"
                                            placeholder="전화번호, 사용자 이름 또는 이메일"
                                        />
                                        <input
                                            id="input-pw"
                                            type="password"
                                            placeholder="비밀번호"
                                        />
                                        <button
                                            className="login-button"
                                            type="submit"
                                        >
                                            로그인
                                        </button>
                                    </form>
                                </div>

                                <div className="or">
                                    <div className="line"></div>
                                    <div>또는</div>
                                    <div className="line"></div>
                                </div>

                                <div className="facebook-login">
                                    <button type="button">
                                        <span className="facebook-icon"></span>
                                        <span>Facebook으로 로그인</span>
                                    </button>
                                </div>

                                <div className="forgetPW">
                                    <a href="/">비밀번호를 잊으셨나요?</a>
                                </div>
                            </div>

                            <div className="sign-in">
                                <div>
                                    <p>계정이 없으신가요?</p>
                                    <a href="/">가입하기</a>
                                </div>
                            </div>

                            <div className="app-down">
                                <div>
                                    <p>앱을 다운로드하세요.</p>
                                    <div>
                                        <span className="apple-download"></span>
                                        <span className="google-download"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer id="footer">
                        <div className="footer-login-container">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/">소개</a>
                                    </li>
                                    <li>
                                        <a href="/">도움말</a>
                                    </li>
                                    <li>
                                        <a href="/">홍보 센터</a>
                                    </li>
                                    <li>
                                        <a href="/">API</a>
                                    </li>
                                    <li>
                                        <a href="/">채용정보</a>
                                    </li>
                                    <li>
                                        <a href="/">개인정보처리방침</a>
                                    </li>
                                    <li>
                                        <a href="/">약관</a>
                                    </li>
                                    <li>
                                        <a href="/">위치</a>
                                    </li>
                                    <li>
                                        <a href="/">인기 계정</a>
                                    </li>
                                    <li>
                                        <a href="/">해시태그</a>
                                    </li>
                                    <li>
                                        <a href="/">언어</a>
                                    </li>
                                </ul>
                                <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                            </nav>
                        </div>
                    </footer>
                </main>
            </>
        );
    }
}

export default Login;
