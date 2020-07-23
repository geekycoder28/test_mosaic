import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { Layout, Row, Col, Pagination, Input, Spin } from 'antd'

import { listNewsRequest, reorderRequest, getSourcesRequest } from 'modules/news/actions'
import {
  selectSources,
  selectNewsList,
  selectTotalListSize,
  selectPage,
  selectLoading,
} from 'modules/news/selectors'
import { NewsCard, Detail } from 'components'

const { Sider, Content } = Layout
const { Search } = Input

const NewsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [source, setSource] = useState('')

  const dispatch = useDispatch()
  const sources = useSelector(selectSources)
  const listNews = useSelector(selectNewsList)
  const totalResults = useSelector(selectTotalListSize)
  const page = useSelector(selectPage)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    setSelectedIndex(0)
    dispatch(listNewsRequest({ page: 1, search, source }))
  }, [dispatch, search, source])

  useEffect(() => {
    dispatch(getSourcesRequest())
  }, [dispatch])

  const handlePage = (value) => {
    setSelectedIndex(0)
    dispatch(listNewsRequest({ page: value, search }))
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const handleSearch = (value) => {
    setSource('')
    setSearch(value)
  }

  const handleDetail = (index) => {
    setSelectedIndex(index)
  }

  const handleFilterSource = (id) => {
    setSource(id)
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const data = reorder(
      listNews,
      result.source.index,
      result.destination.index,
    )

    dispatch(reorderRequest(data))
  }

  return (
    <Layout className='layout'>
      <Sider width={400} className='layout__sider'>
        <Spin spinning={loading}>
          <Row className='layout__sider-search-box'>
            <Col span={24}>
              <Search onSearch={handleSearch} enterButton />
            </Col>
          </Row>
          <Row className='layout__sider-card'>
            <Col span={24}>
              <Row>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId='droppable'>
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {listNews &&
                          listNews.length > 0 &&
                          listNews.map((item, index) => (
                            <Draggable
                              key={item.url}
                              draggableId={item.url}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Col key={index}>
                                    <NewsCard
                                      news={item}
                                      handleClick={handleDetail}
                                      index={index}
                                    />
                                  </Col>
                                </div>
                              )}
                            </Draggable>
                          ))}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                {totalResults && (
                  <Pagination
                    total={totalResults}
                    onChange={handlePage}
                    current={page}
                    pageSize={10}
                    showSizeChanger={false}
                  />
                )}
              </Row>
            </Col>
          </Row>
        </Spin>
      </Sider>
      <Content>
        {listNews && listNews.length > 0 && (
          <Detail news={listNews[selectedIndex]} sources={sources} onFilterSource={handleFilterSource} />
        )}
      </Content>
    </Layout>
  )
}

export default NewsPage
