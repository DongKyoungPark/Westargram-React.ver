import React, { Component, createRef } from "react";
import "../Main/main.css";
import AvengersLogo from "../../Images/AvengersLogo.jpg";
import More from "../../Images/more.png";
import Marvel from "../../Images/marvel.jpg";
import Dan from "../../Images/Dan.png";
import Navigation from "../../Components/navigation";
// import Comment from "../../Components/comment";

class Main extends Component {
    constructor(props) {
        super(props);
        this.maxComment = 0;
        this.state = {
            users: 0,
            usersList: [],
            comment: "",
            commentList: [],
            likeBtnState: false,
            likeIcon: "feed-icon-dislike",
            likeCount: 0,
        };
        this.inputText = createRef();
    }

    CommentHandler = (e) => {
        e.preventDefault();
        this.setState({
            comment: e.target.value,
        });
    };

    CommentButtonHandler = (e) => {
        let usersCount = this.state.users;
        if (this.state.comment === "") {
            return alert("댓글을 입력하세요.");
        } else {
            this.state.usersList.push(usersCount++);
            this.state.commentList.push(this.state.comment);
            this.setState({
                users: usersCount,
                comment: "",
            });
        }
    };

    PressEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.CommentButtonHandler();
            this.inputText.current.focus();
        }
    };

    DeleteComment = (userNum) => {
        console.log(this.state.users);
        console.log(this.state.users !== userNum);
        // this.setState({ commentList: this.commentList.filter(this.state.users !== userNum) });
    };

    likeBtnHandler = (e) => {
        e.preventDefault();
        this.state.likeBtnState = !this.state.likeBtnState;

        if (this.state.likeBtnState) {
            if (this.state.likeCount <= 0) {
                this.state.likeCount = 0;
            } else {
                this.state.likeCount--;
                this.setState({ likeIcon: "feed-icon-dislike" });
            }
        } else {
            this.state.likeCount++;
            this.setState({ likeIcon: "feed-icon-like" });
        }
    };

    render() {
        const { users, usersList, comment, commentList, likeBtnState, likeIcon, likeCount } = this.state;
        const { CommentHandler, CommentButtonHandler, PressEnter, DeleteComment, likeBtnHandler, inputText } = this;

        // console.log("comment: ", this.state.comment);
        // console.log("commentList :", this.state.commentList);
        return (
            <>
                <div className="full-container">
                    <Navigation />
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
                                                    <span onClick={likeBtnHandler} id={likeIcon}></span>
                                                    <span id="comment-icon"></span>
                                                    <span id="direct-icon"></span>
                                                    <span id="share-icon"></span>
                                                </section>
                                                <section className="FP-likeCount">
                                                    <button type="button">
                                                        <p>좋아요 {likeCount}개</p>
                                                    </button>
                                                </section>
                                                {/* <Comment commentList={this.state.commentList} deleteComment={this.DeleteComment} /> */}
                                                <div className="FP-commentView">
                                                    <div className="comment">
                                                        {commentList.map((comment, userNum) => {
                                                            return (
                                                                <div className="comment-arange" key={userNum}>
                                                                    <a className="user" href="/">
                                                                        user
                                                                        {userNum}
                                                                    </a>
                                                                    &nbsp; &nbsp;
                                                                    <span className="comment-span">{comment}</span>
                                                                    <button onClick={DeleteComment} className="deleteComment" type="button">
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
                                                    <form action="#">
                                                        <input
                                                            ref={inputText}
                                                            value={comment}
                                                            onChange={CommentHandler}
                                                            onKeyPress={PressEnter}
                                                            id="FP-input"
                                                            placeholder="댓글 달기..."
                                                        ></input>
                                                        <button onClick={CommentButtonHandler} id="comment-submit" type="button">
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
