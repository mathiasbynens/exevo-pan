import React, { useState, useEffect } from 'react';
import StatisticsGrid, { ItemsWrapper } from './StatisticsGrid.styled';
import List from '../List';
import { historyEndpoint } from '../../dataEnpoint';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';

export default () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${historyEndpoint}/overallStatistics.json`);
                const data = await response.json();

                setData(data);
                setLoaded(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    console.log(data);

    if (!loaded) return null;
    return (
        <StatisticsGrid>
            <ItemsWrapper className="inner-container">
                <List
                    label="Top 10 Bid"
                    data={data.top10Bid}
                    keyName="currentBid"
                    rowLabel="Bid"
                    format={formatNumberWithCommas}
                />
                <List
                    label="Top 10 Level"
                    data={data.top10Level}
                    keyName="level"
                    rowLabel="Level"
                    format={formatNumberWithCommas}
                />
                <List
                    label="Top 10 Magic Level"
                    data={data.top10Magic}
                    keyName="magic"
                    rowLabel="Magic"
                />
                <List
                    label="Top 10 Distance Fighting"
                    data={data.top10Distance}
                    keyName="distance"
                    rowLabel="Distance"
                />
                <List
                    label="Top 10 Sword Fighting"
                    data={data.top10Sword}
                    keyName="sword"
                    rowLabel="Sword"
                />
                <List
                    label="Top 10 Axe Fighting"
                    data={data.top10Axe}
                    keyName="axe"
                    rowLabel="Axe"
                />
                <List
                    label="Top 10 Club Fighting"
                    data={data.top10Club}
                    keyName="club"
                    rowLabel="Club"
                />
                <List
                    label="Top 10 Fist Fighting"
                    data={data.top10Fist}
                    keyName="fist"
                    rowLabel="Fist"
                />
                <List
                    label="Top 10 Shielding"
                    data={data.top10Shielding}
                    keyName="shielding"
                    rowLabel="Shielding"
                />
                <List
                    label="Top 10 Fishing"
                    data={data.top10Fishing}
                    keyName="fishing"
                    rowLabel="Fishing"
                />
            </ItemsWrapper>
        </StatisticsGrid>
    )
}