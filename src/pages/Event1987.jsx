import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "程式交易",
            answer: (
                <>
                    程式交易(Program Trading)是指利用電腦程式根據預設條件自動執行股票買賣指令。
                    <br />1980年代華爾街開始流行這種方式，尤其用於「投資組合保險」策略。
                </>
            )
        },
        {
            question: "投資組合保險",
            answer: (
                <>投資組合保險(Portfolio Insurance)
                    <br />一種風險管理策略，目的是在市場下跌時減少損失。
                    <br />當股市下跌到某個程度，程式會自動賣出股票或做空股指期貨。
                    <br />這就像是「止損」機制，但由電腦自動執行，速度極快。
                </>
            )
        },
        {
            question: "熔斷機制",
            answer: (
                <>
                    熔斷機制(Circuit Breaker)是一種金融市場的緊急煞車制度，當股市在短時間內出現劇烈波動時（通常是暴跌），交易所會暫停交易一段時間，讓市場參與者冷靜下來，避免恐慌性拋售擴大損害。
                    <br />熔斷通常分為多個級別，例如美股以標普500指數為基準：
                    <br />第1級：下跌7%，暫停交易15分鐘。
                    <br />第2級：下跌13%，再暫停15分鐘。
                    <br />第3級：下跌20%，當日直接休市
                    

                </>
            )
        },
    ]
    const cardDetail = allEventsCards.e1987;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>19</h2>
                    <h3>87　無人止跌</h3>
                </div>
            </section>

            {/* 內文區 */}
            <section id="eventContent">
                {/* faq box */}
                <div className="tip-box">
                    <Faq items={faqItems} />
                </div>

                <div className="flow">
                    {
                        cardDetail.map((cardData, index) => (
                            <EventCard key={index} data={cardData} />
                        ))
                    }

                </div>
            </section>



            {/* 總結區 */}
            <section id="eventResult" >
                <div className="card">
                    <h4>事件總結</h4>
                    <p>1987年「黑色星期一」揭示了金融市場的脆弱本質——當程式交易失控、恐慌情緒蔓延、監管機制滯後，市場不再由人性主導，而是被演算法推向深淵。
                        <br />技術不是中立的：當演算法主導決策，人類必須理解其邏輯與極限，否則將被自己設計的工具反噬。
                        <br /> 市場需要煞車：熔斷機制的誕生，是對「無限自由交易」的反思。在極端波動中，暫停交易是保護市場理性的必要手段。
                        <br />風險不只來自經濟基本面：心理預期、系統性互動與資訊延遲，都可能成為災難的催化劑。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events