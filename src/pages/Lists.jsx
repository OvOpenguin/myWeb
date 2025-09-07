import { useRef } from 'react';
import { Link } from "react-router-dom"
import '../sass/lists.scss';

const Lists = () => {
    // useRef 
    const c16Ref = useRef(null);
    const c17Ref = useRef(null);
    const c18Ref = useRef(null);
    const c19Ref = useRef(null);
    const c20Ref = useRef(null);

    const handleScrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <>
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
                            <Link to="/events">
                                <button className="btnBack">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                                        <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#323232" />
                                        <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#323232" />
                                    </svg>
                                </button>
                            </Link>
                        </div>

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
                {/* 西元17XX */}
                <article ref={c17Ref} className="elist">

                    <div className="etitle"><h2 className="t2">17xx</h2></div>

                    <div className="ecard">
                        <h3>1720</h3>
                        <div className="content">
                            <h3>牛頓也瘋狂</h3>
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
                        <h3>1920</h3>
                        <div className="content">
                            <h3>最後狂歡夜</h3>
                            <p>歷史上最離奇的泡沫經濟，一朵鬱金香的價格竟然能買下一棟豪宅？
                                <br />不只是花市的瘋狂，更是人性與資本的鏡像。
                                <br />深入了解這場讓整個荷蘭為之瘋狂的「鬱金香狂熱」，看小小花卉如何引發一場席捲全國的金融風暴。</p>
                        </div>
                    </div>
                    <div className="ecard">
                        {/* 年分+按鈕 */}
                        <div>
                            <h3>1997</h3>
                        </div>
                        {/* 標題內文 */}
                        <div className="content">
                            <h3>索羅斯狙擊</h3>
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
                {/* 西元20XX */}
                <article ref={c20Ref} className="elist">

                    <div className="etitle"><h2 className="t1">20xx</h2></div>

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



