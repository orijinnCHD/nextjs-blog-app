import Head from 'next/head';
import React from 'react';

const Meta = ({title,description}) => {
    return (
        // balise qui permet de mettre les donéne dans le header
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
    );
};

// si on lui passe pas de props
// par default ils peuvent passe cela
//example la page "About"
Meta.defaultProps = {
    title:"le blog Dev, pour les passionnés du web",
    description:"Apprendre et comprendre le développement javascript,react..."
}

export default Meta;