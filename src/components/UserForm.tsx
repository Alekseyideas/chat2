import React from 'react';
import { useForm } from '../hooks/useForm';
import { BACKEND } from '../utils/config';
import styled from 'styled-components';
import validator from 'validator';
import { Input, Button } from './ui';
import StoreAction from '../store/StoreAction';
import { Store } from '../store';
import socket from '../utils/socket';
import axios from 'axios';
import { MESSAGES } from '../utils/messages';
import { useCookies } from 'react-cookie';
import { InfoModal } from './InfoModal';

const field1 = 'name';
const field2 = 'email';
const field3 = 'phone';

export const UserForm: React.FC = () => {
  const { form, onChangeHandler, updateForm } = useForm({
    [field1]: {
      value: '',
    },
    [field2]: {
      value: '',
    },
    [field3]: {
      value: '',
    },
  });
  const { store, dispatch } = React.useContext(Store);
  const Action = new StoreAction(dispatch);

  const [cookies, setCookie] = useCookies(['utoken']);

  const submitHandler = () => {
    if (!store.pass) {
      Action.openModal({
        title: 'Помилка',
        message: 'Кімнати для цього семінару не знайдено',
      });
    }

    const name = form[field1].value;
    const phone = form[field3].value;
    const email = form[field2].value;

    if (!name)
      return updateForm(field1, {
        value: '',
        errorText: MESSAGES.req,
      });

    const nameArr = name.split(' ');
    console.log(nameArr[1]);
    if (
      nameArr.length === 1 ||
      !nameArr[1] ||
      (nameArr[1] && !nameArr[1].length)
    ) {
      return updateForm(field1, {
        value: form[field1].value,
        errorText: MESSAGES.false_fio,
      });
    }
    if (!email)
      return updateForm(field2, {
        value: '',
        errorText: MESSAGES.req,
      });

    if (!phone)
      return updateForm(field3, {
        value: '',
        errorText: MESSAGES.req,
      });

    const name_test = name.replace(/\s+/g, '');

    if (validator.isAlpha(name_test, 'uk-UA')) {
      console.log('name ok');
    } else {
      return updateForm(field1, {
        value: '',
        errorText: MESSAGES.false_fio,
      });
    }

    if (phone.length === 12 && validator.isInt(phone)) {
      console.log('phone ok');
    } else {
      return updateForm(field3, {
        value: '',
        errorText: MESSAGES.false_phone,
      });
    }

    if (validator.isEmail(email)) {
      console.log('email ok');
    } else {
      return updateForm(field2, {
        value: '',
        errorText: MESSAGES.false_email,
      });
    }

    //console.log('name:', form[field1].value);
    //console.log('email:', form[field2].value);
    //console.log('phone:', form[field3].value);

    (async () => {
      const obj = {
        roomId: store.roomId,
        atoken: store.atoken,
        userName: name,
        email: email,
        phone: phone,
        utoken: cookies.utoken,
        adtoken: cookies.utoken,
      };
      //const alogin = await axios.post(`/rooms/`, obj);
      const alogin = await axios.post(`${BACKEND}/reguser/`, obj);

      //console.log("res", alogin);
      if (alogin.data.result === 404) {
        return alert('Ошибка, пользователь уже существует');
      } else {
        setCookie('utoken', alogin.data.utoken, { path: '/' });
        obj.utoken = alogin.data.utoken;
        obj.adtoken = alogin.data.utoken;
        socket.emit('ROOM:JOIN', obj);
        Action.setUrl(alogin.data.url);
        const { data } = await axios.request({
          method: 'get',
          headers: {
            'X-ACCESS-TOKEN': alogin.data.utoken,
          },
          url: `${BACKEND}/rooms/${obj.roomId}`,
        });

        //console.log('data: ', data);
        Action.setData(data);
        Action.setUser({
          id: new Date().getTime(),
          name: alogin.data.name,
        });
        return true;
      }
    })();
  };

  return (
    <WrapperS>
      <TitleS>Введіть ваші дані </TitleS>
      <FormS onSubmit={submitHandler}>
        <InputWrapperS>
          <Input
            label="Ім`я Прізвище"
            name={field1}
            value={form[field1].value}
            onChange={onChangeHandler}
            errorText={form[field1].errorText}
          />
          <Input
            label="E-mail"
            type="email"
            name={field2}
            value={form[field2].value}
            onChange={onChangeHandler}
            errorText={form[field2].errorText}
          />
          <Input
            label="Номер телефону"
            name={field3}
            type="tel"
            value={form[field3].value}
            onChange={onChangeHandler}
            errorText={form[field3].errorText}
          />
          <Button
            title="Реєстрація"
            onClick={submitHandler}
            style={{ marginTop: '30px' }}
          />
        </InputWrapperS>
      </FormS>
      <InfoModal />
    </WrapperS>
  );
};

const WrapperS = styled.div`
  /*display: block;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const FormS = styled.form`
  display: block;
  width: 100%;
  max-width: 400px;
`;

const TitleS = styled.h2`
  font-size: 16px;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0;
`;

const InputWrapperS = styled.div`
  display: block;

  & > div {
    margin-top: 20px;
  }
`;
