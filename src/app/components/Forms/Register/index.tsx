import {Controller, useForm } from "react-hook-form";
import {InputField} from "../../InputField/Input.tsx";
import {Space} from "antd";

type FormData = {
    email: string;
    password: string;
};

export const RegisterForm = () => {
    const { register, control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
    
    
    return (
        <Space align="center" direction="vertical" >
            <Controller
                control={control}
                name="email"
                render={({ field }) => (
                    <InputField
                        {...field}
                        placeholder="Адрес эл. почты"
                    />
                    )}
            />
            <Space />
            <Controller
                control={control}
                name="password"
                render={({ field }) => (
                    <InputField
                        {...field}
                        placeholder="Укажите ваш пароль"
                    />
                    )}
            />
        </Space>
    )
}