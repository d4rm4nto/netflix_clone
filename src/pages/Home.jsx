import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='2' title='Now Palying' fetchURL={requests.requestNowplaying} />
            <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='4' title='Lastest' fetchURL={requests.requestLatest} />
        </>
    )
}

export default Home