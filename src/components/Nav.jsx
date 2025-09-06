import $ from 'jquery'
import { useEffect } from 'react'
import { Link } from "react-router-dom"



const Nav = () => {

    // // jquery 須放在useEffect內使用
    useEffect(() => {
        $(".hamburger").on("click", function () {
            $(this).toggleClass("is-active");
            $(".menu").toggleClass("show");
        });

        // 清除事件，避免重複綁定
        return () => {
            $(".hamburger").off("click");
        };
    }, []);


    return (
        <header>
            <nav>
                <button className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
                        <path
                            d="M15.1913 16.1673L2.46588 27.6519C1.38593 28.6255 0 27.4466 0 25.4837V2.51451C0 0.554783 1.38393 -0.627274 2.46588 0.349478L15.1913 11.8341C15.4369 12.0522 15.6411 12.3675 15.7832 12.748C15.9252 13.1285 16 13.5607 16 14.0007C16 14.4407 15.9252 14.8728 15.7832 15.2533C15.6411 15.6338 15.4369 15.9491 15.1913 16.1673V16.1673Z"
                            fill="#323232" />
                    </svg>
                </button>
                <ul className="menu">
                    <li><Link to="/">回到現在</Link></li>
                    <li><Link to="/travel">時空回溯</Link></li>
                    <li><Link to="/events">情報蒐集</Link></li>
                    <li><Link to="/test">時空測試</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav