import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "里弗爾",
            answer: (
                <>
                    里弗爾(法語：livre)是法國在近代以前使用的古代貨幣單位，也常被翻譯為「法鎊」、「利弗爾」或「鋰」。
                    <br />它的名稱源自拉丁語 libra，原本是重量單位「磅」，後來演變為貨幣計量單位。
                    <br />在中世紀與近代早期的法國，貨幣採用1：20：12的進位制度：1里弗爾 = 20蘇(sou)、1蘇 = 12但尼爾(denier)
                    <br />1795年，法國正式廢除里弗爾制度，改用十進制的「法郎」（franc）作為標準貨幣。
                    <br />新舊貨幣的兌換比率為：1法郎 = 1里弗爾3但尼爾
                </>
            )
        },
        {
            question: "價值的稀少理論",
            answer: (
                <> 價值的稀少理論(Theory of Scarcity Value)核心觀點：<b>物品的價值來自其稀少性，而非其本身的材質或用途。</b>
                    <br />勞認為金銀之所以有價值，不是因為它們本身有用，而是因為它們稀少且被社會接受為交換媒介。
                    <br />既然價值來自稀少性，那麼紙幣也可以有價值——只要它的供應受控，且被社會信任。
                    <br />這為他推動紙幣制度提供理論基礎：<b>紙幣不需要金銀支撐，只要稀少且被接受，就能成為貨幣。</b>
                </>
            )
        },
        {
            question: "真實票據學說",
            answer: (
                <>
                    真實票據學說(Real Bills Doctrine)核心觀點：<b>只要票據（如紙幣）是用來支付真實的商品或服務交易，它就是有價值的。</b>
                    <br />勞主張銀行應該只發行與實際經濟活動相對應的票據，避免虛構信用。
                    <br />以防止過度發行紙幣，確保貨幣流通與實體經濟掛鉤。
                    <br />這理論強調：<b>信用貨幣的發行必須有實體經濟支撐</b>，否則將導致通膨與信任崩潰。
                </>
            )
        },
    ]
    const cardDetail = allEventsCards.e1719;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>17</h2>
                    <h3>20　密西西比泡沫</h3>
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
                    <p>約翰·勞的設計初衷是好的：用紙幣與股票制度解決國債、刺激經濟。
                        <br />現代貨幣本質上也是「信任的產物」，但當時的制度、技術與社會條件，還不足以支撐這種信任的規模與穩定性。
                        <br />但政府與勞過度依賴殖民地幻想與股市熱潮，將制度工具變成炒作手段。
                        <br />
                        <br />一旦信任崩潰，整個金融體系如骨牌般倒塌。
                        <br />這場事件不只是金融災難，更是一場關於制度設計、群眾心理與權力運作的深刻寓言。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events