import PropTypes from "prop-types";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import { List } from "./StatisticsList.styled"
import { Item } from "../StatisticsItem/StatisticsItem.styled";


export const StatisticsList = ({data}) => {
    console.log(data)
    return (<List>{data.map(item =>
    <Item key={item.id} labelItem={item.label}>
        < StatisticsItem
            label={item.label}
            percentage={item.percentage}
        />
        </Item>)}
    </List>)
}

StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired}).isRequired,).isRequired
}