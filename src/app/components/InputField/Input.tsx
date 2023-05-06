import type {ChangeEvent, ReactNode} from "react";
import { Input, Tooltip } from 'antd';
import {useRef, useState} from "react";

interface InputFieldProps {
    name: string;
    value: string | number;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    children?: ReactNode;
    error?: string;
    label?: string
    onKeyUp?: () => void;
}

export const InputField = (props: InputFieldProps) => {
    const {name, value, placeholder, onChange, children, error, label, onKeyUp} = props;
    
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordGenerator, setShowPasswordGenerator] = useState<boolean>(false);
    const [fieldIsActive, setFieldIsActive] = useState<boolean>(false);
    
    function applyGeneratedPassword(value: string) {
        if (handleGeneratedPassword && value) { // додано перевірку на null або undefined
            handleGeneratedPassword(value);
        }
        setShowPasswordGenerator(false);
    }
    
    const handleGeneratorButtonRef = useRef<HTMLButtonElement>(null);
    const generatorRef = useRef<HTMLInputElement>(null);

//    useClickOutside(generatorRef, () => setShowPasswordGenerator(false), handleGeneratorButtonRef.current);

    function handleFocus() {
        setFieldIsActive(true);
    }

    function handleBlur() {
        setFieldIsActive(false);
    }
    
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <Input
                size="large"
                bordered
                value={value}
                onChange={(event) => onChange(event, event.target.value)}
                onKeyUp={onKeyUp}
                onFocus={handleFocus}
                onBlur={handleBlur}                
                placeholder={placeholder}
//                prefix={<UserOutlined className="site-form-item-icon" />}
//                suffix={
//                    <Tooltip title="Extra information">
//                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
//                    </Tooltip>
//                  }
            />
        </div>
    )
}