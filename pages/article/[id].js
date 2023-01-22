import Meta from '@/components/Meta';
import Link from 'next/link';

// article en minuscule
// id est une page qu'on connait pas d'avance qui sera charger en fonction de id de article
const article = ({article}) => {
    return (
        <div className="article-page">
            <Meta title={article.title}/>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <Link href="/">revenir à l{"'"}acceuil</Link>
        </div>
    );
};

export default article;
// getStaticProps et getStaticPaths ne marchent ensemble


// la gestion des données par id
// getStaticProps : fonction côté serveur qui permet de charger les données qu'on veut
// pour voir le console log: localhost:3000/article/"id"
export const getStaticProps =async(context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();
  // console.log("rrrr " + articles);
  return{
    props:{
      article,

    },
  };
};

// on recupére le chemin de l'ensemble des données de api
export const getStaticPaths =async(context)=>{
    // ce n'est pas la même adresse que celle de getstatic props
    // on a retiré la barre du 8 qui permet le chargement totale des donnée sans les id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();
    const ids =articles.map((article)=>(
        article.id
    ))
    const paths = ids.map((id)=>({params:{id:id.toString()}}));
    return{
        paths,
        fallback:false,
    }
}
