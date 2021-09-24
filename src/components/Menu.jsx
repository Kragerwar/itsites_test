import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {Menu, Popup, List, Button, Image, Input} from 'semantic-ui-react';
import Sort from "../containers/Sort";

const CartComponents = ({image, title, id, removeFromCart}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)} color={"red"}>Видалити</Button>
            </List.Content>
            <Image size='mini' src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item>
            <img src='https://pngimg.com/uploads/book/book_PNG51027.png'/>
        </Menu.Item>
        <Menu.Item
            name='Каталог книг'>Каталог книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Sort/>
            <Menu.Item name='Всього'>Всього: &nbsp; <b>{totalPrice}</b>&nbsp;грн.</Menu.Item>
            <Popup
                trigger={
                    <Menu.Item
                        name='Корзина'>Корзина: &nbsp; <b>{count}</b></Menu.Item>}
                content={items.map(book => (
                    <CartComponents key={book.id} {...book}/>
                ))}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;