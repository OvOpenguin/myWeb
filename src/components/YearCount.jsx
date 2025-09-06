import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import "../sass/home.scss";



// count 4 加入圖片 下方文字沒有沿用
export default function YearCounter() {
    const [year, setYear] = useState(1636);
    const [eventText, setEventText] = useState("");
    const [bgImage, setBgImage] = useState("./home-select1.jpg");
    const nodeRef = useRef(null);

    // 關鍵年份 & 對應事件 + 背景
    const keyEvents = {
        1636: {
            text: "荷蘭鬱金香泡沫",
            bg: "./hero-bg.png",
        },
        1700: {
            text: "美國大蕭條",
            bg: "./home-select1.jpg",
        },
        1750: {
            text: "網路泡沫破裂",
            bg: "./hero-bg.png",
        },
        1800: {
            text: "金融海嘯",
            bg: "./home-select1.jpg",
        },
        1900: {
            text: "COVID-19 金融動盪",
            bg: "./hero-bg.png",
        },
        2025: {
            text: "大事件",
            bg: "./home-select1.jpg",
        }
    };

    const startYear = 1600;
    const endYear = 2025;

    useEffect(() => {
        let currentYear = startYear;
        let timer;

        function runCounter() {
            timer = setInterval(() => {
                if (currentYear >= endYear) {
                    clearInterval(timer);
                    return; // 結束本次函式執行
                }
                currentYear += 1;
                setYear(currentYear);

                // 如果是關鍵年份 → 暫停 & 顯示事件 + 換背景
                if (keyEvents[currentYear]) {
                    setEventText(keyEvents[currentYear].text);
                    setBgImage(keyEvents[currentYear].bg);
                    clearInterval(timer);
                    setTimeout(runCounter, 2000); // 停 2 秒後繼續
                }
            }, 50); // 控制正數速度
        }

        runCounter();
        return () => clearInterval(timer);
    }, []);

    // 用 animate() 讓數字平滑滾動
    useEffect(() => {
        if (nodeRef.current) {
            const controls = animate(
                parseInt(nodeRef.current.textContent || startYear),
                year,
                {
                    duration: 0.2,
                    onUpdate(value) {
                        nodeRef.current.textContent = Math.floor(value);
                    },
                }
            );
            return () => controls.stop();
        }
    }, [year]);

    return (
        <section id="banner"
            style={{
                backgroundImage: bgImage ? `url(${bgImage})` : "none",
            }}
        >
            {/* 年份 */}
            <div className="count" ref={nodeRef}>
                {startYear}
            </div>

            {/* 事件文字 */}
            {eventText && (
                <motion.div
                    className="event"
                    key={eventText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h4>{eventText}</h4>
                </motion.div>
            )}

        </section>
    );
}
