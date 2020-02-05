import React, { useState } from "react";
import { List, Avatar, Button } from "antd";
import KoisLink from './../common/buttonlink';

export default function () {
    const data = [
        { title: "Ant Design Title 1" },
        { title: "Ant Design Title 2" },
        { title: "Ant Design Title 3" },
        { title: "Ant Design Title 4" }
    ];

    return (
        <>
            <KoisLink {...{ title: "Dodaj zahtevek", link: '/new/task', icon: 'plus' }} />
            <hr />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://cdn0.iconfinder.com/data/icons/education-gamification/1000/Task_Complete-512.png" />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </>
    );
}