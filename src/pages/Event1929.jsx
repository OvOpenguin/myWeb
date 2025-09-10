import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

  const faqItems = [
    {
      question: "咆哮的二十年代",
      answer: (
        <>
          咆哮年代（Roaring Twenties），指西元1920年至1929年的西方世界，特別是以美國為主的時期。
          <br />這是一個經濟繁榮、社會變革、文化活躍的時期。
          <br />期間出現了以爵士樂為代表的新藝術、現代女性崛起、工業化浪潮，以及大眾消費的蓬勃發展，最終因1929年的經濟大蕭條而結束。
        </>
      )
    },
    {
      question: "緊急銀行法",
      answer: (
        <>
          緊急銀行法(Emergency Banking Act)
          <br />羅斯福上任後第一個通過的法案，象徵新政正式啟動。
          <br />立即暫停全國銀行營業進行審查，只允許健全銀行重開，迅速穩定金融體系。
          <br />成功遏止擠兌潮，恢復民眾對銀行的信心。
        </>
      )
    },
    {
      question: "國家工業復興法",
      answer: (
        <>
          國家工業復興法(National Industrial Recovery Act, NIRA)
          <br />新政中最全面干預市場的法案，涵蓋工業、勞工與公共建設。
          <br />成立公共工程管理局（PWA），大規模興建基礎設施，創造數百萬個就業機會。
          <br />鼓勵企業協調價格與工資，試圖穩定市場秩序。
          <br /> 賦予工人集體談判權利，提升勞工地位。
          <br />後來被最高法院裁定違憲，但它開啟了政府介入經濟的先河，影響深遠。
        </>
      )
    },
  ]
  const cardDetail = allEventsCards.e1929;

  return (
    <>
      {/* 標題區 */}
      <section id="eventTitle">
        <div className="ehead">
          <h2>19</h2>
          <h3>29　最後狂歡夜</h3>
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
          <p>資產幻象：1920年代工業擴張與消費文化興盛。
            <br />群體狂熱：樂觀情緒下，人們相信股市只漲不跌，導致盲目投資。
            <br />監管真空：政府放任市場，低利率環境，槓桿投資盛行。
            <br />連鎖反應：股市崩盤引發銀行擠兌、企業倒閉與失業激增，消費與投資同步凍結，經濟陷入惡性循環。
            <br />制度重塑：羅斯福新政推動社會保障、金融改革與公共建設，雖經波折，最終在戰爭動員下全面復甦，奠定現代美國經濟治理架構。
            <br />
            <br />1929年經濟大蕭條揭示了市場理性的不可靠性與制度設計的脆弱性，當群體情緒與投機心理凌駕理性，金融創新便可能成為泡沫的燃料。
            <br />這場危機迫使美國政府從放任市場轉向積極干預，催生社會保障與金融監管制度，成為制度重建的起點。
            <br />歷史似乎總在重演，每一次泡沫背後，都潛藏著熟悉的人性與結構性錯誤，值得深思與警惕。
          </p>
        </div>
      </section>
    </>

  )
}

export default Events