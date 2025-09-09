import Faq from '../components/Faq';
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
          <br/>南海泡沫後聲望重挫，被輝格黨取代。
          <br/>19世紀逐漸演變為保守黨（Conservative Party）
          <br/>Tory：原意是愛爾蘭的山賊
        </>
      )
    },
     {
      question: "輝格黨（Whigs）",
      answer: (
        <>
          在1688年「光榮革命」後崛起，推動君主立憲。
          <br/>18世紀初至中葉長期掌權，羅伯特·沃波爾成為首位首相。
          <br/>19世紀逐漸演變為自由黨(Liberal Party)
          <br/> Whig：原意是蘇格蘭的驅牛人
        </>
      )
    },
  ]



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
          <div className="card">
            <div className="year">17<br />11</div>
            <h4>事件背景</h4>
            <p>英國政府的債務危機
              <br />西班牙王位繼承戰爭（1701–1714）讓英國政府背負巨額債務。
              為了減輕財政壓力，政府在1711年支持成立「南海公司」，以債轉股方式處理國債。
              <br />1713–1718年：壟斷奴隸貿易與擴張，簽訂《烏得勒支和約》，南海公司取得西班牙美洲奴隸貿易權。
            </p>
          </div>

          <div className="card">
            <div className="year">17<br />20</div>
            <h4>事件爆發</h4>
            <p>1720年初，南海公司提出「南海計劃」，以股票換取國債，獲政府支持。
              股價從120英鎊飆升至7月的1000英鎊以上，社會各階層瘋狂投入，期間出現各家未經授權的泡沫公司。
              <br />1720年6月政府通過<span>《泡沫法令》</span>
              <br />原意是穩定市場，卻引發恐慌，投資者開始質疑南海公司。
              <br /><span className='em'>1720年7至9月：泡沫破裂</span>，外資率先拋售，股價迅速下跌，12月跌至124英鎊。
            </p>
          </div>

          <div className="card">
            <div className="year">17<br />21</div>
            <h4>事件後續</h4>
            <p>南海泡沫爆破後，揭露出南海公司與政府高層之間的大規模賄賂與利益輸送。
              <br />多名<span>托利黨(Tories)</span>官員，被發現收受南海公司股票作為「酬庸」，托利黨的政治聲望重挫。
              <br /><span>輝格黨(Whigs)</span>政治家羅伯特·沃波爾（Robert Walpole）崛起，主導對受害股民的部分賠償與債務重組。輝格黨也因此取代托利黨，長期主導英國政局。
              <br />未來數十年內，英國對新設股份公司採取極度保守與審慎態度。股市活動萎縮，直到19世紀中葉才逐漸恢復活力。

            </p>
          </div>

          <div className="card">
            <div className="year"></div>
            <h4>名人軼事</h4>
            <p>英國著名科學家艾薩克·牛頓參與了南海公司股票的投資。
              <br />他最初以相對低價買入股票，並在股價上漲後理性地獲利出場。
              <br />然而，隨著股價持續飆升，他感到錯失更大獲利機會，於是重新投入大量資金。
              <br />不久後，泡沫破裂，牛頓損失慘重，據估計約為£20,000，相當於他多年積蓄。
              <br />這段經歷讓牛頓深感挫敗，並留下著名的感嘆：
              <br /><span>「我能計算天體的運行，但無法預測人性的瘋狂。」</span>
              <br />這句話成為金融史上對投機心理與群體行為的深刻警示。
            </p>
          </div>


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