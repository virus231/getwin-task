import {Tabs} from 'antd';
import type {TabsProps} from 'antd';

interface Props {
    items: TabsProps['items'];
}

export const MainTabs = (props: Props) => {
    const {items} = props;
    
    const onChange = (key: string) => {
        console.log(key);
    };
    
    return (
        <Tabs defaultActiveKey="2" items={items} onChange={onChange}/>
    )
}

