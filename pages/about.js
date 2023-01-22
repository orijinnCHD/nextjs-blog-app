import Meta from '@/components/Meta';
import React from 'react';
// sur nextjs les routes sont en automatique
// créer votre page avec des noms en minuscule dans le dossier page
// et les routes sont faites
const about = () => {
    return (
        <div>
            <Meta/>
            <h2>ABOUT</h2>
        </div>
    );
};

export default about;