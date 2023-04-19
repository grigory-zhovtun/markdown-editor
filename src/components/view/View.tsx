import React from 'react';
import styled from 'styled-components';
import {parserTitles} from "../services/parser";

const Wrapper = styled.div`
  height: 80vh;
  width: 400px;
  border: 1px solid black;
`
const TitleH1 = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`
const TitleH2 = styled.div`
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: bold;
`
const TitleH3 = styled.div`
  display: block;
  font-size: 1.17em;
  margin: 1em 0;
  font-weight: bold;
`
const TitleH4 = styled.div`
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`
const TitleH5 = styled.div`
  display: block;
  font-size: 0.83em;
  margin: 1.67em 0;
  font-weight: bold;
`
const TitleH6 = styled.div`
  display: block;
  font-size: 0.67em;
  margin: 2.33em 0;
  font-weight: bold;
`

type ViewPropsType = {
    text: string
}

const View = ({text}: ViewPropsType) => {

    const textSlices = text.split(/\n/).map(line => {
        const getTitle = parserTitles(line)

        switch (getTitle) {
            case 0:
                return (
                    <TitleH1>{line.slice(2)}</TitleH1>
                )
            case 1:
                return (
                    <TitleH2>{line.slice(3)}</TitleH2>
                )
            case 2:
                return (
                    <TitleH3>{line.slice(4)}</TitleH3>
                )
            case 3:
                return (
                    <TitleH4>{line.slice(5)}</TitleH4>
                )
            case 4:
                return (
                    <TitleH5>{line.slice(6)}</TitleH5>
                )
            case 5:
                return (
                    <TitleH6>{line.slice(7)}</TitleH6>
                )
            case -1:
                return (
                    <div>{line}</div>
                )
        }

    })
    return (
        <Wrapper>
            {textSlices}
        </Wrapper>
    );
}

export default View;