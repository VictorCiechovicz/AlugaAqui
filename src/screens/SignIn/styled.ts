import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container=styled.View`
flex: 1;
padding-left: 25px;
padding-right:25px;
`;

export const Header =styled.View`
align-items: center;
margin-top:${RFValue(50)}px;

`;

export const Image = styled.Image`
width: ${RFValue(100)}px;
height: ${RFValue(100)}px;


`;

export const Title= styled.Text`
color: ${({theme})=>theme.colors.text_dark};
font-family: ${({theme})=> theme.fonts.bold};
font-size: ${RFValue(36)}px;
`;

export const Inputs = styled.View`
width: 100%;
margin-top: 40px;
margin-bottom: 40px;

align-items: flex-end;


`;

export const ForgetPassword = styled.TouchableOpacity``;

export const ForgetPasswordTitle = styled.Text`

color: ${({theme})=>theme.colors.text_dark};
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(14)}px;

`;

export const SocialLogin = styled.View`
align-items: center;
`;


export const UpSide = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;


margin-top: 40px;
margin-bottom:40px;
`;

export const Line = styled.View`
width: 70px;
height: 1px;
background-color: ${({theme})=>theme.colors.primary};
`;

export const SocialLoginTitle = styled.Text`
color: ${({theme})=>theme.colors.text_dark};
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(14)}px;
`;

export const SocialMidia= styled.View`

flex-direction:row;


margin-bottom: 40px;
`;

export const Register= styled.TouchableOpacity`
align-items: center;
`;



export const RegisterTitle = styled.Text`
color: ${({theme})=>theme.colors.text_dark};
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(14)}px;
`;


export const  GoogleLogo= styled.TouchableOpacity`
margin-right: 10px;
`; 

export const GoogleImage= styled.Image`
width: ${RFValue(25)}px;
height: ${RFValue(25)}px;



`; 


export const FacebookLogo= styled.TouchableOpacity`
margin-right: 10px;
`; 

export const FacebookImage= styled.Image`
width: ${RFValue(25)}px;
height: ${RFValue(25)}px;
`; 

export const InstagramLogo= styled.TouchableOpacity``; 
export const InstagramImage= styled.Image`
width: ${RFValue(25)}px;
height: ${RFValue(25)}px;


`; 
