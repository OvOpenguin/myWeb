import "../sass/event.scss";

const Events = () => {
  return (
    <>
      {/* 標題區 */}
      <section id="eventTitle">
        <div className="ehead">
          <h2>16</h2>
          <h3>36 鬱金香狂潮</h3>
        </div>
      </section>

      {/* 內文區 */}
      <section id="eventContent">
        <div className="tip">
          <div className="t1">碎色病毒</div>
          <div className="t1">經濟泡沫</div>
        </div>
        <div className="flow">
          <div className="card">
            <div className="year">16<br />36</div>
            <h4>事件背景</h4>
            <p>發生在17世紀荷蘭的黃金時代。
              <br />這場狂熱的起源是鬱金香。
              <br />鬱金香原本是一種從土耳其傳入的異國花卉，在荷蘭迅速成為社會地位和財富的象徵。
              <br />人們開始不惜重金收藏稀有品種，特別是那些帶有<span>碎色病毒</span>、花瓣上呈現火焰般條紋的品種。
              <br />隨需求不斷增加，鬱金香價格以驚人的速度飆升。</p>
          </div>

          <div className="card">
            <div className="year">16<br />37</div>
            <h4>事件爆發</h4>
            <p>這場瘋狂的投機最終在
              <br /><span>1637年2月崩潰</span>
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
          <p>當人們的投機心理脫離資產的實際價值時，會引發多麼巨大的風險。
            <br/>這個故事至今仍被用來警惕投資者，提醒他們在市場上保持理性，避免被非理性的狂熱所驅使。
          </p>
        </div>
      </section>
    </>

  )
}

export default Events