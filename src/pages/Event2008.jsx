import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";


const Events = () => {

    const faqItems = [
        {
            question: "次級房貸",
            answer: (
                <>
                    次級房貸(Subprime Mortgage)是提供給「信用評分較低、收入不穩定、無法通過一般銀行審核」的借款人所申請的房屋貸款。
                    <br /><b>金融機構不打算自己承擔風險，而是靠「金融工程」把這些貸款打包成證券（MBS、CDO），再賣給全球投資人。</b>
                    <br />當房價停止上漲，借款人無法再「轉貸」或「賣房還債」。
                    <br />大量次級房貸違約，證券價值暴跌，金融機構資本蒸發。
                    <br />雷曼兄弟、AIG等巨頭中招，引爆2008年金融海嘯。
                </>
            )
        },
        {
            question: "不動產擔保證券",
            answer: (
                <>不動產抵押貸款證券(MBS, Mortgage-Backed Securities)
                    <br />把一堆房貸打包成債券，賣給投資人，讓銀行提前拿到現金。
                    <br />流程：
                    <br />銀行放房貸：民眾向銀行借錢買房，銀行持有這些房貸債權。
                    <br /> 打包成資產池：銀行把成千上萬筆房貸集合起來，形成一個資產池。
                    <br />證券化：銀行或擔保機構將資產池轉化為債券(MBS)。
                    <br />賣給投資人：投資人買下這些債券，定期收取房貸利息作為報酬。
                    <br /><b>MBS 是泡沫的原料，銀行為了打包更多MBS而亂放貸。</b>
                </>
            )
        },
        {
            question: "擔保債務憑證",
            answer: (
                <>
                    擔保債務憑證(CDO, Collateralized Debt Obligation)
                    <br />把一堆債務（如房貸、信用卡債、公司債）打包成資產池， 然後切成不同風險層級的「券次」，賣給不同風險偏好的投資人。
                    <br /><b>CDO 是風險的放大器，把MBS再打包、再分層，讓毒資產更難辨識。</b>
                </>
            )
        },
        {
            question: "AIG",
            answer: (
                <>
                    AIG，全名是 American International Group(美國國際集團)，是一家總部位於紐約的全球性保險與金融服務公司。
                    <br />原本是保險業的巨頭，在2008年金融海嘯中，它旗下的金融產品部門大量販售<b>CDS(信用違約交換)</b>，這是一種像保險的衍生商品。
                    <br />CDS的作用是：如果某個債券違約，AIG就要賠錢給買保險的人。
                    <br />但AIG賣了太多CDS，卻沒準備足夠資本來應付可能的違約。
                    <br />當次級房貸違約潮來襲，CDO等金融商品暴跌，AIG必須賠償數百億美元。
                    <br /><b>2008年9月，美聯儲緊急注資 850億美元 援救AIG，換取近 80%股權。</b>
                </>
            )
        }
    ]
    const cardDetail = allEventsCards.e2008;

    return (
        <>
            {/* 標題區 */}
            <section id="eventTitle">
                <div className="ehead">
                    <h2>20</h2>
                    <h3>08　金融海嘯</h3>
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
                    <p>2008年，一場由次級房貸引爆的金融骨牌效應，讓雷曼兄弟倒下、AIG求援，全球市場陷入恐慌。
                        <br />CDO、MBS、CDS——這些金融工程的縮寫，成了制度失靈的代號。
                        <br />評級機構造假、監管機構失聲、銀行高層免責，整個體系在貪婪與盲信中崩潰。
                        <br />這場災難不是黑天鵝，而是人為錯誤與制度漏洞的集體產物。
                        <br />金融海嘯不只是一次經濟衰退，更是一場對「市場萬能」信仰的終極清算。
                        <br />它提醒我們：當風險被包裝成商品、信任被當作槓桿，資本主義也會自我撞牆。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events