import { path } from '@/config';
import { projects } from '@/projectsData';
import Image from 'next/image';
import Link from 'next/link';


const project = ({project}) => {
    return (
        <div className="project">
            <h1>{project.title}</h1>
            <span>{project.date}</span>
            <p>{project.infos}</p>
            {/* {path+project.img} */}
            <Image src={path+project.img} alt={project.title} width={400} height={250}/>
            <Link href="/portfolio">
                Revenir aux projets
            </Link>
        </div>
    );
};

export default project;






export const getStaticProps = (context)=>{
    const filtered = projects.filter((project)=>project.id == context.params.id);
    if(filtered.length > 0)
        return{
            props:{
                project:filtered[0],
            }
        }
}



export const getStaticPaths =()=>{
    // ce n'est pas la même adresse que celle de getstatic props
    // on a retiré la barre du 8 qui permet le chargement totale des donnée sans les id

    const ids =projects.map((project)=>(
        project.id
    ))
    console.log("-----------ids--------------------");
    console.log(ids);
    const paths = ids.map((id)=>({params:{id:id.toString()}}));
    console.log("-----------paths--------------------");
    console.log(paths);
    return{
        paths,
        fallback:false,
    }
}