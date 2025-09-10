import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

  const faqItems = [
    {
      question: "碎色病毒",
      answer: (
        <>
          鬱金香碎色病毒（Tulip breaking virus，TBV），是一種會感染鬱金香及百合屬植物的RNA病毒。
          <br />感染後會影響花朵色素的合成，使原本純色的花瓣出現條紋或斑駁，形成獨特的美麗花紋。
          <br />TBV主要由蚜蟲傳播，除了造成花色變化，還會抑制植株生長、導致種球退化，並可能造成經濟損失。
        </>
      )
    },
    {
      question: "經濟泡沫",
      answer: (
        <>
          當資產價格（像是房子、股票、物品）被炒得像氣球一樣越吹越大，遠超其內在價值。
          <br />一旦大家發現「這東西沒那麼值錢」，或遇到突發事件（政策改變、利率上升），信心崩潰。
          <br />價格就像氣球爆掉一樣，快速下跌，導致資產價值蒸發與經濟動盪。
        </>
      )
    }
  ]
  const cardDetail = allEventsCards.e1636;

  return (
    <>
      {/* 標題區 */}
      <section id="eventTitle">
        <div className="ehead">
          <h2>16</h2>
          <h3>36 鬱金香狂熱</h3>
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
          <p>當人們的投機心理脫離資產的實際價值時，會引發多麼巨大的風險。
            <br />這個故事至今仍被用來警惕投資者，提醒他們在市場上保持理性，避免被非理性的狂熱所驅使。
          </p>
        </div>
      </section>
    </>

  )
}

export default Events