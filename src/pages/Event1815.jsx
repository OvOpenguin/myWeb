import { useEffect, useState } from 'react';
import Faq from '../components/Faq';
import EventCard from '../components/EventCard';
import { allEventsCards } from '../data/allEventsCards';
import "../sass/event.scss";



const Events = () => {


    const [scrollY, setScrollY] = useState(0);
    // 監聽滾動Y軸
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 清理
    }, []);

    // 視差
    const getParallaxStyle = (
        speedY = 0.5, offsetY = 0,
        speedX = 0, offsetX = 0,
        speedZ = 0, offsetZ = 0,
        fadeSpeed = 0, fadeOffset = 0
    ) => {
        const translateY = (scrollY - offsetY) * speedY;
        const translateX = (scrollY - offsetX) * speedX;
        const scale = Math.max(0.3, Math.min(3.0, 1 + (scrollY - offsetZ) * speedZ)); // 限制縮放範圍
        const opacity = fadeSpeed !== 0
            ? Math.max(0, Math.min(1, 1 + (scrollY - fadeOffset) * fadeSpeed))
            : 1;

        return {
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            opacity: opacity,
        };
    };



    const faqItems = [
        {
            question: "滑鐵盧戰役",
            answer: (
                <>
                    滑鐵盧戰役發生於1815年6月18日，是拿破崙戰爭的最後一場重要戰役，也是法蘭西第一帝國的終結之戰。
                    <br />地點位於比利時布魯塞爾南方的滑鐵盧小鎮。
                    <br />當時拿破崙剛從厄爾巴島逃回法國，重掌政權，企圖重建帝國。
                    <br />英國、普魯士、荷蘭等國組成的「第七次反法同盟」。
                    <br />拿破崙在比利時與英國的威靈頓公爵和普魯士的布呂歇爾元帥正面開打。
                    <br />他原本打算速戰速決，趁聯軍尚未會合先擊潰英軍。
                    <br />但因為地面泥濘延誤進攻、英軍防守頑強、普軍援軍迅速抵達，戰局急轉直下，打到傍晚，法軍全面潰敗。
                    <br />法軍最終潰敗，拿破崙被迫退位，並被流放至大西洋上的聖赫勒拿島，結束其政治與軍事生涯。
                    <br />
                </>
            )
        },
        {
            question: "歐洲第六大帝國",
            answer: (
                <>歐洲第六大帝國的說法，是對羅斯柴爾德家族影響力的一種戲謔式讚嘆——不是官方排名，而是金融圈對他們橫跨歐洲、富可敵國的誇張比喻。
                    <br />
                    <br />實際的歐洲五大帝國：英國帝國、法國帝國、奧地利-哈布斯堡帝國、俄羅斯帝國、普魯士帝國
                </>
            )
        },
    ]
    const cardDetail = allEventsCards.e1815;

    return (
        <>
            {/* 標題區 */}
            <section className="eventTitle">
                <div className="ehead">
                    <h2>18</h2>
                    <h3>15　滑鐵盧密報</h3>
                </div>
            </section>

            {/* 內文區 */}
            <section className="eventContent ec1815">
                {/* faq box */}
                <div className="tip-box">
                    <Faq items={faqItems} />
                </div>

                <div className="flow">
                    <div className='bird'>
                        <img style={getParallaxStyle(0.8, 0, 0, 0)} src="./e1815/pigeon.png" alt="鬱金香" />
                    </div>
                    {
                        cardDetail.map((cardData, index) => (
                            <EventCard key={index} data={cardData} />
                        ))
                    }

                </div>

                <div className='badge'><img style={getParallaxStyle(-0.5, 0)} src="./e1815/badge.png" alt="徽章" /></div>
            </section>



            {/* 總結區 */}
            <section className="eventResult" >
                <div className="eCard">
                    <h4>事件總結</h4>
                    <p>1815年，納坦·羅斯柴爾德在滑鐵盧戰役後，憑藉家族情報網搶先掌握戰果，透過假性拋售引發市場恐慌，再低價掃貨英國公債，成功套利，堪稱金融史上的經典操作。
                        <br />這場事件不只是情報戰，更是心理戰的極致展演。
                        <br />它提醒我們：在資本市場裡，速度與資訊往往比資金本身更具殺傷力。
                        <br />而金融的道德界線，往往不是由法律劃定，而是由誰先知道真相決定。
                    </p>
                </div>
            </section>
        </>

    )
}

export default Events