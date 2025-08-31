import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header>
            <nav>
                <button className="btnPause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 21" fill="none">
                        <rect width="19.2325" height="19.2325" transform="translate(0.313568 0.980469)" fill="none" />
                        <rect x="4.64087" y="3.13867" width="3.36568" height="15.386" rx="1.68284" fill="#323232" />
                        <rect x="11.8531" y="3.13867" width="3.36568" height="15.386" rx="1.68284" fill="#323232" />
                    </svg>
                </button>
                <ul className="nav">
                    <li><Link to="/">回到現在</Link></li>
                    <li><Link to="/travel">時空回溯</Link></li>
                    <li><Link to="/events">情報蒐集</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav