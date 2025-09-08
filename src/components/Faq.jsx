import { useEffect } from 'react'
import $ from 'jquery'
import '../sass/faq.scss'


const Faq = ({ items = [] }) => {

    useEffect(() => {
        $('.tip li .tipTitle').on('click', function () {
            $(this).find('.plus-minus-toggle').toggleClass('collapsed');
            $(this).parent().toggleClass('active');
        });
        // jquery一定要加下列這行
        return () => {
            $('.tip li .tipTitle').off("click");
        };

    }, []);

    return (
        <>
            <div className="parent-container">
                <ul className="tip">
                    {items.map((item, index) => (
                        <li key={index}>
                            <h3 className="tipTitle">
                                {item.question}
                                <div className="plus-minus-toggle collapsed"></div>
                            </h3>
                            <div className="tipAnswer">{item.answer}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Faq