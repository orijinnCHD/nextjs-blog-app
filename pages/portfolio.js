import Meta from '@/components/Meta';
import { projects } from '@/projectsData';
import Link from 'next/link';
import React from 'react';
// sur nextjs les routes sont en automatique
// créer votre page avec des noms en minuscule dans le dossier page
// et les routes sont faites
const portfolio = () => {
    return (
        <div>
            <Meta 
            title={"portfolio dev,les tous derniers projets réalisés"}
            description={"ecrire 70 mots"}
            />
            <h2>PORTFOLIO</h2>
            <ul>
                {
                    projects.map((project)=>(
                        <li key={project.id}>
                            <Link href="projects/[id]" as={"projects/" + project.id}>
                                
                                {project.title}<span>➡️</span>
                                
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default portfolio;