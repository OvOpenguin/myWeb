import "../sass/home.scss"

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
                        <div className="card-l"><h2>16</h2></div>
                        <div className="card-r">
                                {/* 年分+按鈕 */}
                                <div> 
                                    <h3>36</h3>
                                    <img src="#" alt="回溯鍵" />
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
                        <div className="card-l"><h2>16</h2></div>
                        <div className="card-r">
                                {/* 年分+按鈕 */}
                                <div> 
                                    <h3>36</h3>
                                    <img src="#" alt="回溯鍵" />
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
                        <div className="card-l"><h2>16</h2></div>
                        <div className="card-r">
                                {/* 年分+按鈕 */}
                                <div> 
                                    <h3>36</h3>
                                    <img src="#" alt="回溯鍵" />
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
                    
                </section>






                {/* 隨機選擇區 */}
                <section id="random"></section>
            </main>


        </>
    )
}

export default Home