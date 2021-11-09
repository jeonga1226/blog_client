import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
    ${props => 
        props.hasMarginTop && css `
        margin-top: 1rem;
    `}
    color: ${palette.gray[6]}
    
    /* span 사이 가운데 점 */
    span + span:before {
        color: ${palette.gray[4]};
        padding-left:0.25rem;
        padding-right: 0.25rem;
        content: '\\B7'
    }
`

const SubInfo = ({ publishedDate, hasMarginTop}) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
                <b>
                    신정아 
                </b>
            </span>
            <span> {new Date(publishedDate).toLocaleDateString()} </span>
        </SubInfoBlock>
    )
}

export default SubInfo;