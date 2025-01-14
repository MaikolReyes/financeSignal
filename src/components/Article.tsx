import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Article = () => {
    // Obtenemos el `id` de los parámetros de la URL
    const { id } = useParams<{ id: string }>();

    // Obtenemos todos los artículos desde el contexto
    const articles = useContext(ArticlesContext);

    if (!articles || articles.length === 0) {
        return <p className="text-center">Cargando artículo...</p>;
    }
    // Filtramos el artículo que coincide con el `id`
    const article = articles.find((article) => article.id.toString() === id);

    // Si no se encuentra el artículo, mostramos un mensaje
    if (!article) {
        return <p className="text-center">El artículo no existe o no se ha encontrado.</p>;
    }

    // Mostramos el artículo encontrado
    return (
        <div key={article.id} className="flex justify-center flex-col">
            <img src={article.cover} className="w-1/3 mx-auto p-3 rounded-3xl" alt="foto" />
            <div className="card-body w-1/3 mx-auto p-3">
                <h5 className="card-title mb-3">{article.title}</h5>
                <div className="card-text">
                    <BlocksRenderer content={article.contenido} />
                </div>
            </div>
        </div>

    );
};

