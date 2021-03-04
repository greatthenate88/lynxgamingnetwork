import React from 'react'
import styled from 'styled-components'
import ContactUs from './ContactUs';



const CustomList = styled.ul`
    display:flex;
    list-style:none;
    flex-flow: row wrap;
    justify-content:space-around;
    padding-top:10px;
`;

const RandoListPart = styled.a`
    color:black;
    padding-left: 130px;
    padding-right:130px;
    padding-top:15px;
    &:hover {
        color:darkslategray;
    }
`;

export const FooterList = (props) => {
    return (
    <div className="FooterText">
    
        <CustomList>
            <ContactUs/>
        </CustomList>

    </div>
    );
    }
export default FooterList;