import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { DolarWidget } from "./DolarWidget";


export const Navbar = () => {

    // const menuItems = [
    //     { href: "/", label: "Ultimas Noticias" },
    //     { href: "/finances", label: "Finanzas" },
    //     { href: "/technology", label: "Tecnología" },
    //     { href: "/cryptocurrencies", label: "Criptomonedas" },
    // ]

    const sharedClasses = "nav-link text-white font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base";

    const articles = useContext(ArticlesContext);

    // Extraer categorías únicas
    const uniqueCategories = Array.from(
        new Map(articles.map(({ category }) => [category?.name, category])).values()
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-md z-10 bg-blue-600">

                <div className="container-fluid p-0 mobile:items-center large-desktop:h-12 desktop:h-12">

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center" >
                            <li className="nav-item dropdown-item">
                                <Link to={''} className={`${sharedClasses}`}>Ultimas Noticias</Link>
                            </li>

                            {uniqueCategories.sort().map(({ id, name }) => (
                                <li className="nav-item dropdown-item" key={id}>
                                    <Link className={`${sharedClasses}`} to={`/category/${name}`}>{name}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
            <DolarWidget />
        </>
    )
}