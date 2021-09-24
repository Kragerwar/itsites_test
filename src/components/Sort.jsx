import React from 'react'
import {Menu, Dropdown, Input} from 'semantic-ui-react'

export const Sort = ({setSort, sortBy, setSearchQuery, searchQuery}) => {

    return (
        <Menu text>
            <Dropdown item text='Сортування'>
                <Dropdown.Menu>
                    <Dropdown.Item
                        active={sortBy === 'all'}
                        onClick={setSort.bind(this, 'all')}>
                        Всi</Dropdown.Item>
                    <Dropdown.Item
                        active={sortBy === 'price_high'}
                        onClick={setSort.bind(this, 'price_high')}>
                        Ціна(дорогі)
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={sortBy === 'price_low'}
                        onClick={setSort.bind(this, 'price_low')}>
                        Ціна(дешеві)
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={sortBy === 'author'}
                        onClick={setSort.bind(this, 'author')}>
                        Автор
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={sortBy === 'number_of_pages'}
                        onClick={setSort.bind(this, 'number_of_pages')}>
                        Кіл. сторінок
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={sortBy === 'year_of_publication'}
                        onClick={setSort.bind(this, 'year_of_publication')}>
                        Рік публ.(новіші)
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
            <Input icon='search'
                   onChange={e => setSearchQuery(e.target.value)}
                   value={searchQuery}
                   placeholder='Search...' />
        </Menu.Item>
        </Menu>
    );
};

