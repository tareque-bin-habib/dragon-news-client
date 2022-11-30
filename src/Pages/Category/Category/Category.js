import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>This category have {news.length} news</h2>
        </div>
    );
};

export default Category;