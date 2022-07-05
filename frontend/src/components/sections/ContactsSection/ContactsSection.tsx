import { ChangeEvent } from "react";
import { useForm, RegisterOptions } from "react-hook-form";

import styles from "./ContactsSection.module.scss";
import { PHONE } from "@constants";
import { IContactsForm } from "@interfaces/forms/IContactsForm";
import { IOption } from "@interfaces/forms/IOption";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import Button from "@components/ui/Button";
import getPhoneMask from "@helpers/getHponeMask";

const ContactsSection = (): JSX.Element => {
    const {
        register,
        formState: { errors },
        setValue,
        handleSubmit,
    } = useForm<IContactsForm>({ mode: "onBlur" });

    const phoneOptions: RegisterOptions = {
        required: { value: true, message: "Введите номер" },
        minLength: { value: 18, message: "Введите полный номер" },

        onChange: (event: ChangeEvent<HTMLInputElement>): void => {
            const str: string = event.target.value.replace("+7 ", "");
            const newValue: string = str.length === 0 ? "" : "+7 " + getPhoneMask(str);

            setValue("phone", newValue);
        },
    };

    const options: IOption[] = [
        {
            value: "Позвонить по телефону",
            message: "Позвонить по телефону",
        },
        {
            value: "Общение в Telegram ",
            message: "Общение в Telegram ",
        },
        {
            value: "Общение в WhatsApp",
            message: "Общение в WhatsApp",
        },
    ];

    const changeSelectOption = (option: IOption): void => setValue("method", option.value);

    const onSubmit = (data: IContactsForm): void => console.log(data);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <h2>Остались вопросы?</h2>
                    <p>Проконсультируем вас по любым вопросам по тел. <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>{PHONE}</a></p>
                    <p>Либо оставьте заявку, и мы свяжемся с вами удобным для вас способом!</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Input
                        type="text"
                        placeholder={PHONE}
                        {...register("phone", phoneOptions)}
                        message={errors.phone ? errors.phone.message : ""}
                    />
                    <Select
                        {...register("method")}
                        changeHandler={changeSelectOption}
                        options={options}
                        className={styles.select}
                    />
                    <Button color="dark">Отправить заявку</Button>
                </form>
            </div>
            <picture>
                <source srcSet="/images/contacts.webp" type="image/webp" />
                <img
                    className={styles.bg} src="/images/contacts.jpg"
                    alt="Остались вопросы?"
                    width="1800"
                    height="360"
                />
            </picture>
        </section>
    );
};

export default ContactsSection;
