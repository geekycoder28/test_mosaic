import React from 'react'
import { Card, Row, Col } from 'antd'

const NewsCard = ({ news, handleClick, index }) => (
  <Card className='news-card' onClick={() => handleClick(index)}>
    <Row>
      <Col span={9}>
        <img
          className='news-card__image'
          src={news.urlToImage || ''}
          alt={news.title || ''}
        />
      </Col>
      <Col span={15}>
        <div className='news-card__content'>{news.content || ''}</div>
        <div>
          <b>Source: {news.source.name || ''}</b>
        </div>
      </Col>
    </Row>
  </Card>
)

export default NewsCard
