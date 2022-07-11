import styled, { css } from "styled-components";
import { COLOR } from "../../utils/theme";
import { Box } from "../layout/Box";

export const Title = styled.h1`
    color: ${COLOR.dark};
`
interface TextProps {
    bold?: boolean;
}

export const Text = styled(Box)<TextProps>`
    color: ${COLOR.text};
    ${props => props.bold && css`font-weight: bold;`}
`

