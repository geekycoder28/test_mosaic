import React from 'react'
import { Card, Row, Col } from 'antd'
import moment from 'moment'

const Detail = ({ news, sources, onFilterSource }) => {
  const source = (sources || []).find(source => {
    if (!news.source) return false
    return source.id === news.source.id
  })

  return (
    <Card className='detail-card' title={news.title}>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <img
                className='detail-card__image'
                src={news.urlToImage}
                alt={news.title}
              />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
            <Col span={24}>
              <b>{news.author && <div>Author: {news.author}</div>}</b>
            </Col>
            <Col span={24}>
              <b>{news.source.name && <div>Source: {news.source.name}</div>}</b>
            </Col>
            {source && (
              <Col span={24}>
                <div onClick={() => onFilterSource(source.id)}><strong>URL:</strong> {source.url}</div>
              </Col>
            )}
            <Col span={24}>
              <div>{news.description && news.description}</div>
            </Col>
            <Col span={24}>
              {news.url && (
                <a href={news.url} target='_blank' rel='noopener noreferrer'>
                  {news.url}
                </a>
              )}
            </Col>
            <Col span={24}>
              Created:{' '}
              {news.publishedAt &&
                moment(news.publishedAt).format('YYYY-MM-DD hh:mm')}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Detail
