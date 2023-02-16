import styled from "@emotion/styled";

export const Item = styled.li`
height: 70px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 60px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

background-color: ${props => {
    if (props.labelItem === ".docx") { return "purple" };
    if (props.labelItem === ".pdf") { return "aqua" };
    if (props.labelItem === ".mp3") { return "yellow" };
    if (props.labelItem === ".psd") { return "pink" };
}};

`