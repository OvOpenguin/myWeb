import { useRef } from 'react';
import { Link } from "react-router-dom"
import '../sass/lists.scss';
import Swiper from '../components/Swiper';
import BackBtnBlack from '../components/BackBtnBlack';
import BackBtnWhite from '../components/BackBtnWhite';
const Lists = () => {
    // useRef 
    const c16Ref = useRef(null);
    const c17Ref = useRef(null);
    const c18Ref = useRef(null);
    const c19Ref = useRef(null);
    const c20Ref = useRef(null);

    // svg

    const handleScrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <>
            <Swiper />
            <section id='lists'>
                <nav>
                    <ul>
                        <li onClick={() => handleScrollTo(c16Ref)}>16xx</li>
                        <li onClick={() => handleScrollTo(c17Ref)}>17xx</li>
                        <li onClick={() => handleScrollTo(c18Ref)}>18xx</li>
                        <li onClick={() => handleScrollTo(c19Ref)}>19xx</li>
                        <li onClick={() => handleScrollTo(c20Ref)}>20xx</li>
                    </ul>
                </nav>

                {/* 西元16XX */}
                <article ref={c16Ref} className="elist">

                    <div className="etitle"><h2 className="t1">16xx</h2></div>

                    <div className="ecard">
                        <div className='elink'>
                            <h3>1636</h3>
                            <Link to="/event1636">
                                <BackBtnBlack />
                            </Link>
                        </div>

                        <div className="content">
                            <h3>鬱金香狂熱</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>

                </article>
                {/* 西元17XX */}
                <article ref={c17Ref} className="elist">

                    <div className="etitle"><h2 className="t2">17xx</h2></div>

                    <div className="ecard">
                        <div className='elink'>
                            <h3>1720</h3>
                            <Link to="/event1720">
                                <BackBtnWhite />
                            </Link>
                        </div>
                        <div className="content">
                            <h3>南海泡沫</h3>
                            <p>英國政府與商人的勾結？
                                <br />是什麼神奇的魔力讓著名科學家艾薩克·牛頓入局？
                                <br />當時最聰明的頭腦，也逃不過人性的弱點。
                                <br />這場金融狂熱讓南海公司股價一飛沖天，人人爭相投入，彷彿只要買進就能一夜致富。
                                <br />理性與貪婪的交鋒，讓英國社會陷入瘋狂的「南海泡沫」，看一位科學巨擘如何在金融風暴中迷失方向。</p>
                        </div>
                    </div>


                </article>
                {/* 西元18XX */}
                <article ref={c18Ref} className="elist">

                    <div className="etitle"><h2 className="t1">18xx</h2></div>

                    <div className="ecard">
                        <h3>1636</h3>
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>
                    <div className="ecard">

                        <h3>1636</h3>

                        {/* 標題內文 */}
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div>
                            <h3>1636</h3>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>

                </article>
                {/* 西元19XX */}
                <article ref={c19Ref} className="elist">

                    <div className="etitle"><h2 className="t2">19xx</h2></div>

                    <div className="ecard">
                        <div className='elink'>
                            <h3>1929</h3>
                            <Link to="/event1929">
                                <BackBtnWhite />
                            </Link>
                        </div>
                        <div className="content">
                            <h3>最後狂歡夜</h3>
                            <p>一場看似永不止息的繁榮，竟在一夕之間崩塌——1929年華爾街股災，讓全美陷入前所未有的經濟深淵。
                                <br />當時股市如脫韁野馬，人人爭相投資，銀行放貸毫不手軟，連家庭主婦都開始炒股。
                                <br />但在「黑色星期二」那天，股價如雪崩般狂跌，投資人哀鴻遍野，無數人一夜破產，美國夢瞬間碎裂。
                                <br />當貪婪的警鐘響起，震撼全球的「大蕭條序章」正式拉開帷幕。</p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div className='elink'>
                            <h3>1997</h3>
                            <Link to="/event1997">
                                <BackBtnWhite />
                            </Link>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>索羅斯狙擊</h3>
                            <p>一位「金融巨鱷」讓整個亞洲貨幣市場瞬間失控——1997年，索羅斯狙擊泰銖，引爆亞洲金融危機。
                                <br />索羅斯主導的量子基金大舉做空泰銖，迫使泰國放棄固定匯率制度，泰銖狂跌，骨牌效應席捲亞洲。
                                <br />國家與資本的正面交鋒，深入了解撼動亞洲金融的「索羅斯風暴」，看一場貨幣戰爭如何改寫區域經濟命運。
                            </p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div>
                            <h3>1636</h3>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>

                </article>
                {/* 西元20XX */}
                <article ref={c20Ref} className="elist">

                    <div className="etitle"><h2 className="t1">20xx</h2></div>

                    <div className="ecard">
                        <div className='elink'>
                            <h3>2021</h3>
                            <Link to="/event2021">
                                <button className="btnBack">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                                        <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#323232" />
                                        <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#323232" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className="content">
                            <h3>GameStop史詩級軋空</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div>
                            <h3>1636</h3>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div>
                            <h3>1636</h3>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>鬱金香狂潮</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>

                </article>
            </section>
        </>


    )
}

export default Lists



