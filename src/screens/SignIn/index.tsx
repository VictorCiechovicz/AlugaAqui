import React, { useState } from 'react'

import Logo from '../../assets/Logo.png'
import Google from '../../assets/Google.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'

import { AntDesign } from '@expo/vector-icons'

import {
  Container,
  Header,
  Image,
  Title,
  Inputs,
  ForgetPassword,
  ForgetPasswordTitle,
  SocialLogin,
  Line,
  SocialLoginTitle,
  Register,
  RegisterTitle,
  SocialMidia,
  GoogleLogo,
  FacebookLogo,
  InstagramLogo,
  FacebookImage,
  GoogleImage,
  InstagramImage,
  UpSide
} from './styled'

import { InputForm } from '../../components/InputForm'
import { Button } from '../../components/Button'

import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { TouchableWithoutFeedback, Keyboard, Text } from 'react-native'

const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail é obrigatório')
    .typeError('Informe apenas palavras.'),
  password: Yup.number()
    .typeError('Informe um valor númerico.')
    .positive('O valor não pode ser nagativo.')
    .required('Senha é obrigatório')
})

interface FormData {
  email: string
  password: string
}

export function SignIn() {


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })


  
  function handleRegister(form: FormData) {
    const data = {
      email: form.email,
      password: form.password
    }
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Image source={Logo} />
          <Title>ALUGAAQUI</Title>
        </Header>
        <Inputs>
          <InputForm
            placeholder="E-mail"
            control={control}
            name="email"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.email && errors.email.message}
          />
          <InputForm
            placeholder="Password"
            control={control}
            name="password"
            keyboardType="numeric"
            error={errors.password && errors.password.message}
            secureTextEntry
          />
          <ForgetPassword>
            <ForgetPasswordTitle> Esqueceu a senha?</ForgetPasswordTitle>
          </ForgetPassword>
        </Inputs>
        <Button title="Log In" onPress={handleSubmit(handleRegister)} />

        <SocialLogin>
          <UpSide>
            <Line />
            <SocialLoginTitle>Ou continue com</SocialLoginTitle>
            <Line />
          </UpSide>

          <SocialMidia>
            <GoogleLogo>
              <GoogleImage source={Google} />
            </GoogleLogo>

            <FacebookLogo>
              <FacebookImage source={Facebook} />
            </FacebookLogo>

            <InstagramLogo>
              <InstagramImage source={Instagram} />
            </InstagramLogo>
          </SocialMidia>
        </SocialLogin>

        <Register>
          <RegisterTitle>
            Não possui uma conta? {''}
            <Text style={{ color: '#EF5F10' }}>Cadastre-se</Text>
          </RegisterTitle>
        </Register>
      </Container>
    </TouchableWithoutFeedback>
  )
}
