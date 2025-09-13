import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "南北戰爭",
            answer: (
                <>
                    南北戰爭是美國在1861至1865年間爆發的內戰，北方主張廢除奴隸制度，南方則為維護奴隸制而脫離聯邦。
                    <br />最終北方勝利，奴隸制度被廢除，美國重新統一。
                    <br />戰爭歷時四年，遍及美國東部與南部，造成超過60萬人死亡，是美國歷史上最慘烈的軍事衝突。
                </>
            )
        },
        {
            question: "金銀硬幣",
            answer: (
                <>根據1792年《鑄幣法案》，美國採用雙金屬本位(bimetallism)，黃金與白銀皆為法定貨幣。
                    <br />鑄幣局負責生產硬幣，但流通量有限，且在戰爭或經濟動盪時常被囤積或出口。
                    <br />美國憲法原文未明確授權聯邦政府發行紙幣，只允許「鑄造硬幣」。
                </>
            )
        },
        {
            question: "綠背券",
            answer: (
                <>
                    美國政府在南北戰爭期間，為籌措軍費而發行的一種不兌換黃金的紙幣。
                    <br /><b>綠背券純粹依賴政府信用，正是現代貨幣的雛形。</b>
                    <br />可以說，我們每天用的錢，就是綠背券的後代。
                </>
            )
        },
        {
            question: "金本位",
            answer: (
                <>
                    金本位是一種貨幣制度，指的是一國的貨幣價值與黃金掛鉤，政府承諾紙幣可以按固定比率兌換成黃金。
                    <br /> <b>貨幣的發行量受到黃金儲備的限制</b>，目的是維持物價穩定與國際匯率的可預測性。
                    <br />金本位在19世紀至20世紀初廣泛使用，但在經濟大蕭條與戰爭期間逐漸被放棄，因為它限制了政府應對危機的貨幣政策彈性
                    <br /><b>目前已無任何國家使用金本位制度</b>
                    <br />而是採用<b>法定貨幣制度(Fiat Money)</b>，貨幣價值由政府信用與中央銀行政策支撐，而非黃金儲備。黃金仍是重要的外匯儲備資產，但不再直接決定貨幣價值。
                </>
            )
        },
        {
            question: "聯邦準備制度",
            answer: (
                <>
                    美國聯邦準備制度(Federal Reserve System，簡稱 Fed)
                    <br />是美國的中央銀行體系，成立於1913年，目的是穩定金融市場、避免銀行危機。
                    <br />它負責制定與執行貨幣政策，調控利率、管理通膨、促進就業，並監管銀行系統。
                    <br />Fed 由總部「聯邦準備理事會」與12個地區性準備銀行組成，<b>具有高度獨立性，不受總統或國會直接干預。</b>
                </>
            )
        },

    ]
    const cardDetail = allEventsCards.e1864;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>18</h2>
                    <h3>64　綠背風雲</h3>
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
                    <p>在南北戰爭的財政絕境中，林肯選擇不向銀行屈服，而是由政府親自發行綠背券，一種無息、無金屬儲備的紙幣，撐起整場戰爭的經濟命脈。
                        <br /> 這場貨幣制度的突破，雖然引發通膨與制度爭議，卻成功避免國家陷入高利貸泥沼，也首次讓美國政府掌握貨幣主權。
                        <br />綠背券事件不只是財政操作，更是一場關於民主、制度與人性的試煉—
                        <br />它提醒我們，在危機時刻，制度的彈性與政治的膽識，往往比金銀更能撐起一個國家的未來。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events