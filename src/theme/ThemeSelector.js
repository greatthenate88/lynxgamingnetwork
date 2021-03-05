import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from './useTheme';
import { getFromLS } from '../utils/storage';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    width: 75%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
`;

const Container = styled.ul`
    display: grid;
    gap: .1rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
`;


export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <Wrapper 
                style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`, 
                color: `${data[_.camelCase(props.theme.name)].colors.text}`, 
                fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>
                <ThemedButton 
                    onClick={ (theme) => themeSwitcher(props.theme) }
                    style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`, 
                    color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`}}>
                    
                </ThemedButton>
            </Wrapper>
        )
    }

    return (
        <div>
            <Container>
            {
                themes.length > 0 && 
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
            }
            </Container>
        </div>
    )
}