import React from 'react';
import Styled from 'styled-components'
import NewsItem from './NewsItem';

const NewListBlock = Styled.div`
    box-sizing: border-box;
    padding-bottom : 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width : 768px){
        width: 100%;
        padding-left:1rem;
        pdding-right: 1rem;
    };
`
const sampleAricle = {
    title: '제목',
    description:'내용',
    url : 'https://www.google.com',
    urlToImage : 'https://via.placeholder.com/160'
};

const NewsList = () => {

    return (
        <NewListBlock>
            <NewsItem> artivle={sampleAricle}</NewsItem>
            <NewsItem> artivle={sampleAricle}</NewsItem>
            <NewsItem> artivle={sampleAricle}</NewsItem>
            <NewsItem> artivle={sampleAricle}</NewsItem>
            <NewsItem> artivle={sampleAricle}</NewsItem>
        </NewListBlock>
    );
};

export default NewsList;