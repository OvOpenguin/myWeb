import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "固定匯率",
            answer: (
                <>
                    固定匯率就是一個國家的貨幣匯率被「綁定」在某個特定外幣（通常是美元）上，由政府或中央銀行負責維持穩定。
                    <br />當匯率快要偏離目標時，中央銀行會：(1)用外匯儲備買進或賣出本國貨幣 (2)調整利率，吸引或抑制資金流動
                    <br />優點：匯率穩定、有利貿易與投資信心、抑制通膨。
                    <br />缺點：需要大量外匯儲備、容易被投機者攻擊、無法反映真實市場狀況。
                </>
            )
        },
        {
            question: "浮動匯率",
            answer: (
                <>
                    浮動匯率是指一國貨幣的匯率由市場決定，不由政府固定。 匯率會根據供需、貿易、利率、投資人信心等因素每天變動。
                    <br />如果很多人想買某國貨幣 → 該貨幣升值
                    <br />如果很多人拋售該貨幣 → 該貨幣貶值
                    <br />優點：自動調節貿易失衡、反映真實經濟狀況、不需大量外匯儲備來干預
                    <br />缺點：匯率波動大、影響出口與投資信心、易受市場情緒影響
                </>
            )
        },
        {
            question: "NDF市場",
            answer: (
                <>
                    NDF市場指的是「無本金交割遠期外匯交易市場」（Non-Deliverable Forward, NDF），是一種不需要實際交割外幣的外匯合約交易方式，主要用來對沖匯率風險或進行投機操作。
                    <br />投機者怎麼操作？
                    <br />預測某貨幣會貶值 → 在NDF市場放空(簽約賣出)
                    <br />若預測正確，到期時匯率變動 → 賺取差額
                    <br />投機者透過NDF市場預測「脆弱貨幣」將貶值，大量放空後在匯率崩跌時結算差額，無需交割本金即可獲利。
                </>
            )
        },
        {
            question: "無限量供應美元",
            answer: (
                <>
                    彭淮南擔任台灣中央銀行總裁期間，面對金融市場動盪時所採取的一種「心理戰式」匯率防守策略。
                    <br />這不是指真的無限印鈔，而是透過央行釋放出強烈訊號：只要市場需要美元，央行就會供應。
                    <br />核心目的為：穩定市場信心、阻止恐慌蔓延、嚇阻投機者(他們靠的是「信心崩潰」來獲利)
                    <br />就像一場牌局，央行不一定手上有「無敵牌」，但只要表現得像有，對手就不敢輕舉妄動。
                </>
            )
        },
    ]
    const cardDetail = allEventsCards.e1997;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>19</h2>
                    <h3>97　索羅斯狙擊</h3>
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
                    <p>亞洲國家過度依賴外資、資產泡沫化、固定匯率制度脆弱
                        <br />1997年亞洲金融風暴揭示了表面繁榮背後的結構性脆弱，也提醒我們：金融自由化若缺乏穩健制度與風險意識，將可能引發毀滅性的連鎖反應。
                        <br />在全球化與金融市場高度連動的時代，政策制定者必須兼顧開放與穩健，領導者更需具備前瞻眼光與果斷行動力，才能在風暴來臨前築起真正的防線。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events