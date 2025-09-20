// src/components/ScenarioManager.jsx
import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { scenarios } from '../data/ScenarioData';
import "../sass/test02.scss"


// 選擇題子元件
function Scenario({ data, onNext, decisionPath, onRestart }) {
    const [selected, setSelected] = useState(null); //選擇與否
    const [decisionMade, setDecisionMade] = useState(false);  //決策區塊顯示
    const [truthRevealed, setTruthRevealed] = useState(false); //歷史真相

    // 判斷是否為最終結局
    const isFinalOutcome = !data.decisions || data.decisions.length === 0;

    const handleDecision = () => {
        if (selected !== null) setDecisionMade(true);
    };

    const handleNext = () => {
        const nextId = data.decisions[selected].nextId;
        onNext(nextId, selected);
        setSelected(null);
        setDecisionMade(false);
        setTruthRevealed(false);
    };

    const currentDecision = selected !== null && data.decisions[selected] ? data.decisions[selected] : null;

    return (
        <section className="test">
            {/* 1. 場景標題與內容 - 固定顯示在最上方 */}
            <div className='test-subject'><h3>{data.name}</h3></div>
            <div className='test-content'>
                <p className="description-text">{data.intro}</p>
            </div>

            {/* 2. 決策歷程 - 在起點之後才顯示 */}
            {decisionPath.length > 0 && (
                <div className='decision-history'>
                    <h5>你的決策歷程</h5>
                    {decisionPath.map((pathItem, index) => (
                        <div key={index} className='past-decision'>
                            <p className="path-title">在{pathItem.scenario.name}</p>
                            <p className="path-choice">你選擇了：{pathItem.decision.text}</p>
                            <p className="path-outcome">你的人生：{pathItem.decision.outcome}</p>
                            <p className="path-truth">歷史真相：{pathItem.decision.truth}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* 3. 當前選擇與決策結果 - 根據狀態依序顯示 */}
            <div className='test-other'>
                {/* 顯示選項按鈕 */}
                {!isFinalOutcome && !decisionMade && (
                    <div className='select-box'>
                        <h5>請做出你的選擇</h5>
                        {data.decisions.map((decision, index) => (
                            <div key={index} className='btnBox'>
                                <button
                                    className={`btnSelect ${selected === index ? 'btnSelectActive' : ''}`}
                                    onClick={() => setSelected(index)}
                                >
                                    {decision.text}
                                </button>
                            </div>
                        ))}
                        <br />
                        <button
                            className='check'
                            onClick={handleDecision}
                            disabled={selected === null}
                        >
                            發布決策
                        </button>
                    </div>
                )}

                {/* 顯示決策結果和歷史真相的區塊 */}
                {!isFinalOutcome && decisionMade && currentDecision && (
                    <div className='resultbox'>
                        <div className='release-result'>
                            <h5>決策結果</h5>
                            <div className='outcome'>
                                <p>你選擇了：{currentDecision.text}</p>
                                <p>目前結果：{currentDecision.outcome}</p>
                            </div>
                            {!truthRevealed && (
                                <button className="check btnTruth" onClick={() => setTruthRevealed(true)}>
                                    歷史真相
                                </button>
                            )}
                        </div>

                        {truthRevealed && (
                            <div className='history'>
                                <h5>歷史真相</h5>
                                <div className='outcome'>
                                    <p>{currentDecision.truth}</p>
                                </div>
                                <div className='cross'>
                                    <button className="check" onClick={handleNext}>
                                        {currentDecision.nextId.startsWith('end') ? '查看結局' : '繼續前進'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* 4. 最終結局 - 只在結局出現時顯示 */}
            {isFinalOutcome && (

                <div className='final-result'>
                    <h5>{data.name}</h5>
                    <div className='outcome'>
                        <p>{data.intro}</p>
                    </div>
                    <div className='again'>
                        <button className="check" onClick={onRestart}>
                            🔄 重新選擇
                        </button>
                    </div>

                </div>

            )}

        </section>
    );
}

// 主邏輯元件
function ScenarioManager() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 找出所有「起點」場景
    const startScenarios = scenarios.filter(s => s.id === '1929' || s.id === '1720' || s.id === '1636' || s.id === '2009');

    const [decisionPath, setDecisionPath] = useState([]);  //決策路徑

    // 追蹤當前顯示的場景
    const [currentScenario, setCurrentScenario] = useState(null);

    // 當 URL 參數 id 改變時，更新當前場景
    useEffect(() => {
        const scenarioToDisplay = scenarios.find(s => s.id === id) || startScenarios[0];

        // 當回到「起點」時，清空決策路徑
        if (startScenarios.some(s => s.id === scenarioToDisplay.id)) {
            setDecisionPath([]);
        }

        setCurrentScenario(scenarioToDisplay);
    }, [id]);

    // 處理章節內部的分支跳轉
    // 這裡會傳入 nextId 和選項的索引
    const handleNextScenarioInternal = (nextId, decisionIndex) => {
        // 獲取當前決策的完整資訊
        const currentDecisionData = currentScenario.decisions[decisionIndex];

        // 將決策資訊加入路徑
        setDecisionPath([...decisionPath, {
            scenario: { id: currentScenario.id, name: currentScenario.name, intro: currentScenario.intro },
            decision: currentDecisionData
        }]);

        navigate(`/topic/${nextId}`);
    };

    // 處理章節之間的線性跳轉
    const handleNextChapter = () => {
        // 找出當前場景的原始章節起點ID (e.g., 從 '1929-end-A' 找出 '1929')
        const currentBaseId = currentScenario.id.split('-')[0];

        const currentChapterIndex = startScenarios.findIndex(s => s.id === currentBaseId);

        // 如果找不到起點，則預設回到第一個章節
        if (currentChapterIndex === -1) {
            navigate(`/topic/${startScenarios[0].id}`);
            return;
        }

        const nextChapterIndex = (currentChapterIndex + 1) % startScenarios.length;
        const nextChapterId = startScenarios[nextChapterIndex].id;
        navigate(`/topic/${nextChapterId}`);
    };

    // 處理章節之間的隨機跳轉
    const handleJumpToRandomChapter = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * startScenarios.length);
        } while (startScenarios[randomIndex].id === currentScenario.id);
        const randomChapterId = startScenarios[randomIndex].id;
        navigate(`/topic/${randomChapterId}`);
    };

    // 新增：處理回到章節起點的函式
    const handleRestart = () => {
        const currentBaseId = currentScenario.id.split('-')[0];
        navigate(`/topic/${currentBaseId}`);
    };

    if (!currentScenario) {
        return <div>載入中...</div>;
    }

    // 判斷是否為結局
    const isFinalOutcome = !currentScenario.decisions || currentScenario.decisions.length === 0;

    return (
        <main id='testwrap'>
            <Scenario
                key={currentScenario.id}
                data={currentScenario}
                onNext={handleNextScenarioInternal}
                decisionPath={decisionPath}
                onRestart={handleRestart}
            />
            <section id='box'>
                <button className='check' onClick={handleJumpToRandomChapter}>
                    🎲 隨機跳轉時空
                </button>
                <button className="check" onClick={handleNextChapter}>
                    ⏭️ 回溯下一個時空
                </button>
            </section>
        </main>
    );
}

export default ScenarioManager;