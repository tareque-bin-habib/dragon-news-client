import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This category have {categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news.id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;