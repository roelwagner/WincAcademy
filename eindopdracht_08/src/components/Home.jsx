import { useSelector } from "react-redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Home = () => {

    const data = useSelector(state => state.data);
    const names = [...new Set(data.map(item => item.name))];

    console.log(names)

    const something = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ];
    
    return (
        <div>
        <VictoryChart 
            domainPadding={20}
            theme={VictoryTheme.grayscale}
            size={names.length}
        >
        <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={4}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryBar 
            data={something}
            x="quarter"
            y="earnings"
            />
        </VictoryChart>
        </div>
    );
}

export default Home;
