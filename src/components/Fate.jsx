import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { scenarios } from '../json/ScenarioData';

import "../sass/home.scss";


function RandomTopicSelector() {
    // 將初始狀態設為 null
    const [currentScenario, setCurrentScenario] = useState(null);
    const [isSelecting, setIsSelecting] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        // 遍歷所有圖片的 URL
        scenarios.forEach(topic => {
            const img = new Image();
            img.src = topic.image;
        });
    }, []); // 傳入空陣列，確保這段程式碼只在元件初次渲染時執行一次


    const handleStartSelect = () => {
        if (isSelecting) return;
        setIsSelecting(true);

        let count = 0;
        const maxSwitch = 15;

        const switchInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * scenarios.length);
            setCurrentScenario(scenarios[randomIndex]);
            count++;

            if (count >= maxSwitch) {
                clearInterval(switchInterval);
                setIsSelecting(false);
            }
        }, 100);

        intervalRef.current = switchInterval;
    };

    return (

        <section id='random'>
            <div className="title"><h4>不知道去哪？隨機回溯時空，改寫歷史。</h4></div>
            {/* <h4>{isSelecting ? '正在選題中...' : '隨機選題'}</h4> */}


            <div className='tv'
                style={{
                    backgroundColor: currentScenario ? 'transparent' : 'black',
                }}
            >
                {/* 只有在有圖片資料時才渲染 img 標籤 */}
                {currentScenario && (
                    <img
                        src={currentScenario.image}
                        alt={currentScenario.name}
                    />
                )}

                <button
                    onClick={handleStartSelect}
                    disabled={isSelecting}
                    className='rewind'
                >
                    {isSelecting ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                            <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#ffffffff" />
                            <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#ffffffff" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 19" fill="none">
                            <path d="M12.2342 10.5694L20.4148 18.0775C21.109 18.714 22 17.9433 22 16.6601V1.64387C22 0.362691 21.1103 -0.410082 20.4148 0.228472L12.2342 7.73657C12.0763 7.87918 11.945 8.08531 11.8537 8.33406C11.7624 8.58282 11.7143 8.86534 11.7143 9.15298C11.7143 9.44063 11.7624 9.72315 11.8537 9.97191C11.945 10.2207 12.0763 10.4268 12.2342 10.5694Z" fill="#FFD600" />
                            <path d="M1.30564 10.5694L9.48623 18.0775C10.1805 18.714 11.0714 17.9433 11.0714 16.6601V1.64387C11.0714 0.362691 10.1818 -0.410082 9.48623 0.228472L1.30564 7.73657C1.14771 7.87918 1.01644 8.08531 0.925128 8.33406C0.833821 8.58282 0.785728 8.86534 0.785728 9.15298C0.785728 9.44063 0.833821 9.72315 0.925128 9.97191C1.01644 10.2207 1.14771 10.4268 1.30564 10.5694Z" fill="#FFD600" />
                        </svg>
                    }
                </button>
            </div>

            {currentScenario && !isSelecting && (
                <>
                    <Link to={`/topic/${currentScenario.id}`}>
                        <p className='specific'>前往：{currentScenario.name}</p>
                    </Link>
                </>
            )}

            <p className='specific'>
                {isSelecting ? '回溯中...' : null }
            </p>


        </section>

    );
}

export default RandomTopicSelector;