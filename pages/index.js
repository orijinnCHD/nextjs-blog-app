import Article from '@/components/Article';
import Meta from '@/components/Meta';
import React from 'react';

const index = ({articles}) => {
// console.log(articles);
  return (
    <div>
      <Meta/>
      <h1>BLOG</h1> 
      <div className="article-list">
          {
            articles && articles.map((article)=>(
              <Article article={article} key={article.id} />
            ))
          }
      </div>
    </div>
  );
};

export default index;

// Executer le code côté serveur
// des données statique :api d'article etc..
// on fait nos fetch  sous le composant qui va le traiter
export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();
  // console.log("rrrr " + articles);
  return{
    props:{
      articles,

    }
  }
}