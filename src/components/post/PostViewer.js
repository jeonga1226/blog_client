import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
    margin-top : 4rem;
`

const PostHead = styled.div`
    border-top: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5rem;
        margin: 0
    }
`

const SubInfo = styled.div`
    margin-top: 3rem;
    color: ${palette.gray[6]};

    span + span:before {
        color: ${palette.gray[5]};
        padding-left: 0.25rm;
        padding-right: 0.25rem;
        content: '\\B7';  /*가운데점 문자 */
    }
`
const Tags = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: ${palette.cyan[7]};
        text-decoration: none;
        margin-right: 0.5rem;
        &:hober {
            color: ${palette.cyan[6]};
        }
    }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 404) {
        return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
        }
        return <PostViewerBlock>오류 발생!</PostViewerBlock>;
    }

    console.log("포스트 ?? ",post);
    console.log("로딩 ?? ", loading);


    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (loading || !post) {
        return null;
    }

    const { title, body, publishedDate, tags } = post;

    console.log("포스트 ?? ",post);
    console.log("title ?? ",title);
    console.log("body ?? ",body);

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo>
                    <span>
                        <b>신정아</b>
                    </span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </SubInfo>
                <Tags>
                    {tags.map(tag => (
                        <div className="tag">#{tag}</div>
                    ))}
                </Tags>
            </PostHead>
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    )
}

export default PostViewer;