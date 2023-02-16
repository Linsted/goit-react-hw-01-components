import data from "data.json";
import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsList } from "./StatisticsList/StatisticsList";
import { Section } from "./Statistics.styled";

export const Statistics = () => {
    return (
        <Section>
            <StatisticsTitle title="Upload Stats" />
            <StatisticsList data ={data}/>
            
        </Section>
)
}


