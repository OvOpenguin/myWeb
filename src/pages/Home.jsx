import "../sass/home.scss";
import btnBack from '../images/btn-back.svg';

const Home = () => {
    return (
        <>
            <main>
                {/* hero區: 搭配數字+事件切換 */}
                <section id="banner">
                    <div className="title"><h1>2025</h1></div>
                    <div className="event">
                        <p>中美貿易戰</p>
                    </div>
                </section>

                {/* 初始選擇區 */}
                <section id="select">
                    <div className="title"><h2>如果歷史可以重來，你會怎麼做？</h2></div>
                    <div className="btnbox">
                        <button className="btn">直接挑戰</button>
                        <button className="btn">蒐集情報</button>
                    </div>
                </section>

                {/* 事件資訊區: 視差滾動 */}
                <section id="info">
                    <article className="card">
                        <div className="card-l"><h2 className="str1">16</h2></div>
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div>
                                <h3>36</h3>
                                {/* 測試使用btn+svg和img的差別 */}
                                <figure><img src={btnBack} alt="回溯鍵" /></figure>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>鬱金香狂熱</h3>
                                <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                    深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                            </div>
                            {/* 附圖 */}
                            <figure><img src="./info1.png" alt="圖" /></figure>

                        </div>
                    </article>
                    <article className="card">
                        <div className="card-l"><h2 className="str1">17</h2></div>
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div className="yearBtnbox">
                                <h3>82</h3>
                                <button className="btnBack">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                                        <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#323232" />
                                        <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#323232" />
                                    </svg>
                                </button>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>鬱金香狂熱</h3>
                                <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                    深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                            </div>
                            {/* 附圖 */}
                            <figure><img src="./info1.png" alt="圖" /></figure>

                        </div>


                    </article>
                    <article className="card">
                        <div className="card-l"><h2 className="str2">19</h2></div>
                       
                        <div className="card-r-wrap">

                        
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div className="yearBtnbox"> 
                                <h3>36</h3>
                                <button className="btnBack b2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                                        <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#ffffffff" />
                                        <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#ffffffff" />
                                    </svg>
                                </button>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>鬱金香狂熱</h3>
                                <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                    深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                            </div>
                            {/* 附圖 */}
                            <figure><img src="./info1.png" alt="圖" /></figure>

                        </div>
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div className="yearBtnbox"> 
                                <h3>36</h3>
                                <button className="btnBack b2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                                        <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#ffffffff" />
                                        <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#ffffffff" />
                                    </svg>
                                </button>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>鬱金香狂熱</h3>
                                <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                    深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                            </div>
                            {/* 附圖 */}
                            <figure><img src="./info1.png" alt="圖" /></figure>

                        </div>

                        </div>


                    </article>
                </section>



                {/* 隨機選擇區 */}
                <section id="random">
                    <div className="title"><h2>不知道去哪？隨機回溯時空</h2></div>
                </section>
            </main>


        </>
    )
}

export default Home