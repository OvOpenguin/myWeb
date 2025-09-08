import Faq from '../components/Faq';
import "../sass/event.scss";


const Events = () => {

  const faqItems = [
    {
      question: "碎色病毒",
      answer: (
        <>
          1720年
          <br />感染後會影響花朵色素的合成，使原本純色的花瓣出現條紋或斑駁，形成獨特的美麗花紋。
        </>
      )
    },
    {
      question: "泡沫法令",
      answer: (
        <>
            英國政府頒布，除非獲得皇家特許，禁止成立新的股份公司。
          <br/>目的是打擊大量出現的「泡沫公司」（bubble companies），這些公司多半是空殼或詐騙性質，趁南海公司股價暴漲之際混水摸魚。
          <br />一旦大家發現「這東西沒那麼值錢」，或遇到突發事件（政策改變、利率上升），信心崩潰。
          <br />價格就像氣球爆掉一樣，快速下跌，導致資產價值蒸發與經濟動盪。
        </>
      )
    }
  ]



  return (
    <>
      {/* 標題區 */}
      <section id="eventTitle">
        <div className="ehead">
          <h2>17</h2>
          <h3>20 牛頓也瘋狂</h3>
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
              <br />南海公司的誇大宣稱獲得與南美洲貿易的<span>壟斷權</span>，但實際貿易收益微薄。
              <br />董事們誇大未來貿易前景，炒作股價，吸引全民投資。
            </p>
          </div>

          <div className="card">
            <div className="year">17<br />20</div>
            <h4>事件爆發</h4>
            <p>1720年初，南海公司提出「南海計劃」，以股票換取國債，獲政府支持。
              股價從120英鎊飆升至7月的1000英鎊以上，社會各階層瘋狂投入。
              <br />一位鬱金香經銷商因找不到買家無法履行合約，導致市場恐慌。
              <br />人們突然意識到鬱金香的實際價值遠遠低於其市場價格，拋售潮隨之而來。
              <br />一夜之間，鬱金香的價格暴跌，許多人傾家蕩產，經濟陷入混亂。
              <br />鬱金香狂熱的破滅，被視為一個經典的投機泡沫案例。
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