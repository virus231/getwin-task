import _ from 'lodash';
import "./Login.less";
import Benefit from "../../components/Benefit/Benefit.tsx";
import {TabsProps} from "antd";
import {MainTabs} from "../../components/Tabs/Tabs.tsx";
import { Col, Row } from 'antd';
import {RegisterForm} from "../../components/Forms/Register";


const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: `Вход`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Регистрация`,
        children: <RegisterForm/>,
    },
];

export const LoginPage = () => {
    return (
        <Row className="contentWrapper">
            <Col span={12}>
                <div className="descriptionWrapper">
                    <h1>Войти в аккаунт</h1>
                    <p>
                        Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:
                    </p>
                    <ul className="benefitsList">
                        {_.map(["asd", "asd"], (benefit: string) =>
                        <Benefit key={benefit} benefit={benefit}/>)
                    }
                    </ul>
                </div>
            </Col>
            <Col span={12}>
                <div className="formSection">
                    <div className="formColumn">
                        <MainTabs items={tabs} />
                    </div>
                </div>
            </Col>
            {/*<div className="selectWrapper">*/}
            {/*    <LanguagesSelector />*/}
            {/*</div>*/}
        </Row>
    )
}