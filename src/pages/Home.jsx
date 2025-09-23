import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import YearCounter from "../components/YearCount";
import Fate from "../components/Fate";
import BackBtnBlack from '../components/BackBtnBlack';
import BackBtnWhite from '../components/BackBtnWhite';

import "../sass/home.scss";


const Home = () => {

    const titleRef = useRef(null);

    useEffect(() => {
        const titleEl = titleRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 先移除再加，確保動畫可以重新播放
                    titleEl.classList.remove("active");
                    void titleEl.offsetWidth; // 觸發 reflow
                    titleEl.classList.add("active");
                }
            },
            { threshold: 0.5 }
        );

        if (titleEl) observer.observe(titleEl);

        return () => observer.disconnect();
    }, []);



    return (
        <>
            <main>
                {/* hero區: 搭配數字+事件切換 */}
                <YearCounter />

                {/* 初始選擇區 */}
                <section id="select">
                    <div className="title" ref={titleRef}>
                        <h4>如果歷史可以重來，你會怎麼做？</h4>
                        <div className="spot"></div>
                    </div>

                    <div className="btnbox">
                        <Link to="/test"><button className="btnHome">直接挑戰</button></Link>
                        <Link to="/lists"><button className="btnHome btnlist">蒐集情報</button></Link>
                    </div>
                </section>

                {/* 事件資訊區: 視差滾動 */}
                <section id="info">

                    {/* 卡片簡介區 */}
                    {/* 西元16XX */}
                    <article className="card">
                        <div className="card-l"><h2 className="str1">16</h2></div>
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div className="yearBtnbox">
                                <h3>36</h3>
                                <Link to='/event1636'><BackBtnBlack /></Link>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>鬱金香狂熱</h3>
                                <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                    <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                    <br />一朵花，一場風暴。
                                    <br />當鬱金香球根的價格超越黃金，荷蘭街頭充斥著交易與夢想。期貨制度初現，投機者蜂擁而至，連工匠與農民也賣掉家畜與家具，只為一紙承諾。短短數月，泡沫破裂，票據失效，繁華如夢。
                                    <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。
                                </p>
                            </div>
                            {/* 附圖 */}
                            <figure><img src="./e1636/paint01.jpg" alt="鬱金香泡沫" /></figure>

                        </div>
                    </article>

                    {/* 西元17 */}
                    <article className="card">
                        <div className="card-l"><h2 className="str1">17</h2></div>
                        <div className="card-r">
                            {/* 年分+按鈕 */}
                            <div className="yearBtnbox">
                                <h3>20</h3>
                                <Link to='/event1720'><BackBtnBlack /></Link>
                            </div>
                            {/* 標題內文 */}
                            <div className="content">
                                <h3>南海泡沫</h3>
                                <p>英國政府與商人的勾結？
                                    <br />是什麼神奇的魔力讓著名科學家艾薩克·牛頓入局？
                                    <br />當時最聰明的頭腦，也逃不過人性的弱點。
                                    <br />這場金融狂熱讓南海公司股價一飛沖天，人人爭相投入，彷彿只要買進就能一夜致富。
                                    <br />理性與貪婪的交鋒，深入瞭解這場讓英國社會陷入瘋狂的「南海泡沫」，看一位科學巨擘如何在金融風暴中迷失方向。
                                </p>
                            </div>
                            {/* 附圖 */}
                            <figure className="ro"><img src="./e1720/banner_1.jpg" alt="南海泡沫" /></figure>

                        </div>
                    </article>

                    {/* 西元19 */}
                    <article className="card">

                        <div className="card-l"><h2 className="str2">19</h2></div>

                        {/* 卡片事件2件以上加上一個外層column排列 */}
                        <div className="card-r-wrap">
                            <div className="card-r">
                                {/* 年分+按鈕 */}
                                <div className="yearBtnbox">
                                    <h3>29</h3>
                                    <Link to='/event1929'><BackBtnWhite /></Link>
                                </div>
                                {/* 標題內文 */}
                                <div className="content">
                                    <h3>最後狂歡夜</h3>
                                    <p>一場看似永不止息的繁榮，竟在一夕之間崩塌——1929年華爾街股災，讓整個美國陷入前所未有的經濟深淵。
                                        <br />當時股市如脫韁野馬，人人爭相投資，銀行放貸毫不手軟，連家庭主婦都開始炒股。
                                        <br />但在「黑色星期二」那天，股價如雪崩般狂跌，投資人哀鴻遍野，無數人一夜破產，美國夢瞬間碎裂。
                                        <br />當貪婪的警鐘響起，震撼全球的「大蕭條序章」正式拉開帷幕。</p>
                                </div>
                                {/* 附圖 */}
                                <figure><img src="./e1929/banner2.jpg" alt="經濟大蕭條" /></figure>

                            </div>
                            <div className="card-r">
                                {/* 年分+按鈕 */}
                                <div className="yearBtnbox">
                                    <h3>97</h3>
                                    <Link to='/event1997'><BackBtnWhite /></Link>
                                </div>
                                {/* 標題內文 */}
                                <div className="content">
                                    <h3>索羅斯狙擊</h3>
                                    <p>一位「金融巨鱷」讓整個亞洲貨幣市場瞬間失控——1997年，索羅斯狙擊泰銖，引爆亞洲金融危機。索羅斯主導的量子基金大舉做空泰銖，迫使泰國放棄固定匯率制度，泰銖狂跌，骨牌效應席捲亞洲。
                                        <br />國家與資本的正面交鋒，深入了解撼動亞洲金融的「索羅斯風暴」，看一場貨幣戰爭如何改寫區域經濟命運。
                                    </p>
                                </div>
                                {/* 附圖 */}
                                <figure className="ro"><img src="./e1998/Soros.jpg" alt="索羅斯" /></figure>

                            </div>
                        </div>


                    </article>

                    {/* 按鈕 */}
                    <Link to="/lists"> <button className="btnHome btnMore">更多情報</button></Link>

                </section>

                {/* 隨機選擇區 */}
                <Fate />
            </main>
        </>
    )
}

export default Home