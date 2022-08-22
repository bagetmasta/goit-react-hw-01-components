import PropTypes from 'prop-types'; 
import data from "../../data.json";
import { ListItems, StatList, StatisticsContainer, Percentage } from "../Statistics";


export const Statistics = ({ title, stats}) => (
  <StatisticsContainer>
    {title && <h2 className="title">Upload stats</h2>}

    <StatList>
      {data.map(({ id, label, percentage }) => (
        <ListItems key={id}>
          <span className="label">{label}</span>
          <Percentage>{percentage}</Percentage>
        </ListItems>
      ))}
    </StatList>

  </StatisticsContainer>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired
}