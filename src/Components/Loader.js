import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    font-size:100px;
    margin-top:250px;
`;
//시계 스타일

const Loader = () => (
<Container>
    <span role="img" aria-label="Loading">
        ⏰
    </span>
</Container>
);
//메뉴 변경할때 잠깐 걸리는 로딩시간에 시계모양으로 하겠다

export default Loader;