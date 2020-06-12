import React, { Component } from "react";
import "../Main/main.css";
import Logo from "../../Images/logo_text1.png";
import AvengersLogo from "../../Images/AvengersLogo.jpg";
import More from "../../Images/more.png";
import Marvel from "../../Images/marvel.jpg";
import Dan from "../../Images/Dan.png";
import Comment from "../../Components/comment";

class Main extends Component {
    constructor(props) {
        super(props);
        this.maxComment = 0;
        this.state = {
            users: 0,
            usersList: [],
            comment: "",
            commentList: [],
        };
    }

    CommentHandler = (e) => {
        e.preventDefault();
        this.setState({
            comment: e.target.value,
        });
    };

    CommentButtonHandler = (e) => {
        e.preventDefault();
        this.state.usersList.push(this.state.users++);
        console.log("comment: ", this.state.comment);

        this.state.commentList.push(this.state.comment);
        console.log(this.state.commentList);
        this.setState({
            comment: this.state.comment,
        });
    };

    render() {
        return (
            <>
                <div className="full-container">
                    <div className="nav-container">
                        <nav className="gnb-nav">
                            <div className="nav-size logo">
                                <a href="/">
                                    <img id="logo" src={Logo} alt="logo" />
                                </a>
                            </div>

                            <div className="gnb-search">
                                <div className="serch-box">
                                    <span id="search-icon"></span>
                                    <span id="search-span">검색</span>
                                </div>
                                <input id="search" type="text" placeholder="" />
                            </div>

                            <div className="gnb-menu">
                                <ul>
                                    <li>
                                        <a href="/home">
                                            <span id="home-icon"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/direct">
                                            <span id="direct-icon"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/searchPerson">
                                            <span id="search-person-icon"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feed">
                                            <span id="feed-icon"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/myInfo">
                                            <span id="myinfo-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="main-container">
                        <main className="gnb-main">
                            <div className="left-main-container">
                                <div id="OPF">
                                    <ul className="OPF-items">
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img1" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img2" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img3" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img4" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img5" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img6" src="" alt="" />
                                            </li>
                                        </div>
                                        <div className="gradient-border">
                                            <li>
                                                <img id="items-img7" src="" alt="" />
                                            </li>
                                        </div>
                                    </ul>
                                </div>

                                <div className="FP-container">
                                    <div id="FP">
                                        <div className="FP-info">
                                            <a href="/">
                                                <img id="feedimg" src={AvengersLogo} alt="myPicture" />
                                            </a>
                                            <span>Marvel</span>
                                            <a href="/">
                                                <img id="more" src={More} alt="more" />
                                            </a>
                                        </div>

                                        <div className="FP-Pic">
                                            <img id="feedPic" src={Marvel} alt="feedPicture" />
                                        </div>

                                        <div className="FP-like-container">
                                            <div className="FP-like">
                                                <section className="FP-icon">
                                                    <a href="/feed">
                                                        <span id="feed-icon"></span>
                                                    </a>
                                                    <a href="/comment">
                                                        <span id="comment-icon"></span>
                                                    </a>
                                                    <a href="/direct">
                                                        <span id="direct-icon"></span>
                                                    </a>
                                                    <a href="/share">
                                                        <span id="share-icon"></span>
                                                    </a>
                                                </section>

                                                <section className="FP-likeCount">
                                                    <button type="button">
                                                        <p>좋아요 100개</p>
                                                    </button>
                                                </section>

                                                <div className="FP-commentView">
                                                    <div className="comment">
                                                        {this.state.usersList.map((count, index) => {
                                                            return (
                                                                <div className="comment-arange" key={index}>
                                                                    <a className="user" href="/">
                                                                        user
                                                                        {count}
                                                                    </a>
                                                                    &nbsp; &nbsp;
                                                                    {this.state.commentList.map((comment, index) => {
                                                                        return (
                                                                            <span className="comment-span" key={index}>
                                                                                {comment}
                                                                            </span>
                                                                        );
                                                                    })}
                                                                    <button className="deleteComment" type="button">
                                                                        삭제
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                <div className="FP-time">
                                                    <div>
                                                        <a href="/">
                                                            <time dateTime="">1일전</time>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="FP-comment-container">
                                            <section className="FP-comment">
                                                <div className="FP-comment-div">
                                                    <form action="/">
                                                        <textarea onChange={this.CommentHandler} id="FP-textarea" aria-label="댓글 달기" placeholder="댓글 달기..."></textarea>
                                                        <button onClick={this.CommentButtonHandler} id="comment-submit" type="button">
                                                            게시
                                                        </button>
                                                    </form>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-main-container">
                                <div id="MF">
                                    <a href="/">
                                        <img id="profile" src={Dan} alt="myPicture" />
                                    </a>
                                    <span>Dong Kyoung</span>
                                </div>

                                <div id="RD">
                                    <div>회원님을 위한 추천</div>
                                    <a href="/">
                                        <div>모두 보기</div>
                                    </a>
                                </div>

                                <div id="Follow">
                                    <div className="follow-detail">
                                        <a href="/">
                                            <img src={Dan} alt="myPicture" />
                                        </a>
                                        <div className="follow-aside">
                                            <a href="/">Dong Kyoung</a>
                                            <div>회원님을 팔로우합니다</div>
                                        </div>
                                    </div>
                                </div>

                                <footer id="footer">
                                    <div className="footer-main-container">
                                        <ul>
                                            <li>소개</li>
                                            <li>도움말</li>
                                            <li>홍보 센터</li>
                                            <li>API</li>
                                            <li>채용 정보</li>
                                            <li>개인정보처리방침</li>
                                            <li>약관</li>
                                            <li>위치</li>
                                            <li>인기 계정</li>
                                            <li>해시태그</li>
                                            <span>언어</span>
                                        </ul>
                                    </div>

                                    <div className="instargram-right">© 2020 INSTAGRAM FROM FACEBOOK</div>
                                </footer>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
