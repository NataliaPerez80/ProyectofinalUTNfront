import React from 'react';

const NovedadesItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <div className='textoblog'>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}

export default NovedadesItem;
