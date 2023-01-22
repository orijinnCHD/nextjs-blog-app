import Link from 'next/link';
import React from 'react';

const Article = ({article}) => {
    return (
        // c'est la route vers le dossier "pages/article" le fichier [id].js
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div className="article">
                <h3>{article.title}➡️</h3>
                <p>{article.body}</p>
            </div>
        </Link>
    );
};

export default Article;