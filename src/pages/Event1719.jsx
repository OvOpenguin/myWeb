import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "做空",
            answer: (
                <>
                    做空(Short Selling)做空是一種投資策略
                    <br />操作邏輯：預期股票未來下跌，先向券商「借入」股票，高價賣出，等價格變低再買回股票「還給」券商。
                    <br />例子：你預期某股票會從 $100 跌到 $70，先借股票賣出賺$100，等股價跌到 $70 再買回還給券商，利潤就是 $30。
                </>
            )
        },
        {
            question: "軋空",
            answer: (
                <>軋空(short squeeze)是做空的反向懲罰機制
                    <br />做空的人原本預期股價會跌，結果股價反而暴漲，他們只好趕快買回股票止損，這一買又把股價推得更高，形成惡性循環。
                    <br />GME事件即是，散戶集體買進，逼得機構做空者慌張回補，股價短時間暴漲好幾倍。
                </>
            )
        },
        {
            question: "迷因股",
            answer: (
                <>
                    迷因股(Meme Stocks)指那些因在社群媒體上爆紅，而被大量散戶投資者追捧的股票。
                    <br />這是社群文化與金融市場交會的產物，它們的股價不靠財報，而靠網路聲量。
                    迷因股的三大特徵：社群推動、波動劇烈、情緒與文化驅動
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
                    <p>GameStop 軋空事件不只是一次金融市場的異常波動，更是一場由散戶集體意識驅動的社會現象。
                        <br />它揭示了數位時代下資訊傳播的力量、平台制度的脆弱，以及世代間對財富與權力分配的深層不滿。
                        <br />金融市場不再只是機構的遊戲場，而是情緒、文化與科技交織的戰場。
                        <br />在迷因與數據之間，投資行為正逐漸轉化為一種敘事、一種參與感，也是一種對現實秩序的挑戰。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events