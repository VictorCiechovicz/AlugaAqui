import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TextInput`
width: 100%;

padding-left:20px;
padding-top: 12.5px;
padding-bottom: 12.5px;

font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({theme}) => theme.colors.text_dark};
background-color: ${({theme}) => theme.colors.shape};

border-radius: 50px;
border-width:1px;


margin-bottom: 15px;


`;


