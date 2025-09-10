import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../json/allEventsCards';
import "../sass/event.scss";


const Events = () => {

  const faqItems = [
    {
      question: "泡沫法令",
      answer: (
        <>
          英國政府頒布，除非獲得皇家特許，禁止成立新的股份公司。
          <br />目的是打擊大量出現的「泡沫公司」（bubble companies），這些公司多半是空殼或詐騙性質，趁南海公司股價暴漲之際混水摸魚。
        </>
      )
    },
    {
      question: "托利黨（Tories）",
      answer: (
        <>
          在17世紀支持查理二世與詹姆士二世。
          <br />南海泡沫後聲望重挫，被輝格黨取代。
          <br />19世紀逐漸演變為保守黨（Conservative Party）
          <br />Tory：原意是愛爾蘭的山賊
        </>
      )
    },
    {
      question: "輝格黨（Whigs）",
      answer: (
        <>
          在1688年「光榮革命」後崛起，推動君主立憲。
          <br />18世紀初至中葉長期掌權，羅伯特·沃波爾成為首位首相。
          <br />19世紀逐漸演變為自由黨(Liberal Party)
          <br /> Whig：原意是蘇格蘭的驅牛人
        </>
      )
    },
  ]
  const cardDetail = allEventsCards.e1720;


  return (
    <>
      {/* 標題區 */}
      <section id="eventTitle">
        <div className="ehead">
          <h2>17</h2>
          <h3>20　南海泡沫</h3>
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
          <p>政府債務 →金融創新：南海公司本質是政府融資工具，非真正貿易公司。
            <br />炒作與貪婪：誇大前景、名人背書、全民投機，形成非理性泡沫。
            <br />制度失靈：政府與公司勾結，立法打擊競爭者，反而加速崩盤。
            <br />人性弱點：牛頓的失敗揭示，即使理性天才也難敵群體狂熱與「踏空焦慮」。
            <br />長期影響：事件重創英國金融市場，股票交易冷卻近一世紀。
          </p>
        </div>
      </section>
    </>

  )
}

export default Events