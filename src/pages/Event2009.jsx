import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "比特幣",
            answer: (
                <>
                    比特幣（Bitcoin，縮寫：BTC）被稱為「數位黃金」，具有：
                    <br /><b>去中心化：</b>不受任何政府、銀行或機構控制。
                    <br /><b>稀缺性：</b>總發行量被程式碼限制在2,100萬枚，其總量不會無限增加，避免通膨。每4年比特幣的挖礦獎勵會減半，形成稀缺性。最近一次減半發生於 2024 年 4 月，獎勵從 6.25 BTC 降至 3.125 BTC。
                    <br /><b>可分割性：</b>最小單位為 0.00000001 BTC，稱為1聰(satoshi)。
                    <br /><b>匿名性與透明性：</b>交易記錄公開在區塊鏈上，但不揭露身份。
                    <br /><b>全球性與流動性：</b>沒有國界限制，可以在全球範圍內進行交易。
                </>
            )
        },
        {
            question: "區塊鏈",
            answer: (
                <>區塊鏈(Blockchain)是一種去中心化的分散式帳本技術，用來安全地記錄交易資料。
                    <br />每個區塊都包含一批交易紀錄，並與前一個區塊透過加密方式連結。
                    <br />是一種讓人們在不需要信任彼此的情況下，仍能安全交易與協作的技術
                    <br /><b>不可竄改：</b>每個區塊都包含前一區塊的加密雜湊值，一旦寫入就難以更改。
                    <br /><b>去中心化：</b>資料由全球節點共同維護，無單一控制者。
                    <br /><b>透明性：</b>所有交易公開可查，人人可驗證。
                    <br /><b>安全性：</b>透過密碼學與共識機制確保資料真實性。
                    <br /><b>抗雙重支付</b>：防止同一筆資產被重複使用。

                </>
            )
        },
        {
            question: "工作量證明(PoW)",
            answer: (
                <>
                    工作量證明(Proof of Work, PoW)是一種區塊鏈的共識機制，用來確保交易的真實性與網路安全。
                    <br />核心邏輯：參與者(礦工)必須完成一項困難但可驗證的計算任務(挖礦)，才能獲得記帳權並新增區塊。
                    <br /><b>挖礦 = 解謎 + 記帳 + 拿獎勵</b>
                    <br />在 PoW 機制下，挖礦的流程可以簡化為三個步驟：
                    <br />解謎：礦工不斷嘗試不同的nonce(隨機數)，直到找到一個讓雜湊值符合條件。
                    <br />記帳：成功者獲得權利，把一批交易打包成區塊，加入區塊鏈。
                    <br />拿獎勵：系統發放新產出的比特幣作為獎勵，這就是「挖到礦」的瞬間。
                    <br />這個過程完全沒有捷徑，只能靠<b>算力</b>硬幹
                </>
            )
        },
        {
            question: "去中心化",
            answer: (
                <>
                    去中心化(Decentralization)指的是一個系統或網路的運作，不依賴單一中央機構，而是由多個獨立個體或節點共同維護與決策。
                    <br />換句話說，它不是「沒人管」，而是「大家一起管」。
                    <br /><b>區塊鏈：</b>每筆交易都記錄在全球節點上，無法竄改
                    <br /><b>共識機制：</b>如 PoW、PoS，確保資料真實性
                    <br /><b>P2P 架構：</b>點對點連線，無需中介伺服器
                    <br /><b>開源程式碼：</b>任何人都能參與、審查、貢獻
                </>
            )
        },
    ]
    const cardDetail = allEventsCards.e2009;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>20</h2>
                    <h3>09　比特幣(Bitcoin)崛起</h3>
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
                    <p>比特幣不是一夜爆紅的投資工具，而是對「貨幣、信任、權力」的重新定義。
                        <br />從中本聰的匿名，到創世區塊的發佈，再到披薩交易的實用性，比特幣的每一步都蘊含深意。
                        <br /> 它挑戰了我們對金融的既定認知，也開啟了去中心化經濟的可能性。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events