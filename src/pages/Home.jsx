import "../sass/home.scss"

const Home = () => {
    return (
        <>
            <main>
                {/* hero區: 搭配數字+事件切換 */}
                <section id="banner">
                    <div className="title"><h1>2025</h1></div>
                    <div className="event">
                        <p>中美貿易戰</p>
                    </div>
                </section>

                {/* 初始選擇區 */}
                <section id="select">
                    <div className="title"><h2>如果歷史可以重來，你會怎麼做？</h2></div>
                    <div className="btnbox">
                        <button className="btn">直接挑戰</button>
                        <button className="btn">蒐集情報</button>
                    </div>
                </section>

                {/* 事件資訊區: 視差滾動 */}
                <section id="info"></section>

                {/* 隨機選擇區 */}
                <section id="random"></section>
            </main>


        </>
    )
}

export default Home