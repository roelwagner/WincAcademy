import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryTooltip, VictoryLegend, VictoryLabel } from "victory";
import { wincTheme } from "./wincTheme";

const BarGraph = ({ data }) => {

    const getAverage = (array, grade) => {
        return array.reduce((ct, item) => item[grade] + ct , 0) / array.length;
    }
    const getProject = array => {
        return array.reduce((accumulater, element) => {
            return element.project === accumulater ? null : element.project;
        })
    }

    const getAvgDifficulty = array => {
        const newDataArray = [];
        array.forEach(item => {
            const project = getProject(item);
            const difficulty = getAverage(item, "difficulty");
            const newItem = {project: project, difficulty: difficulty, label: project};
            newDataArray.push(newItem);
        })
        return newDataArray;
    }
    const getAvgEnjoyment = array => {
        const newDataArray = [];
        array.forEach(item => {
            const project = getProject(item);
            const enjoyment = getAverage(item, "enjoyment");
            const newItem = {project: project, enjoyment: enjoyment, label: project};
            newDataArray.push(newItem);
        })
        return newDataArray;
    }

    return (
        <div className="barGraph">
            <VictoryChart
                theme={wincTheme}
                domainPadding={10}
                // animate={{ duration: 3000 }}
                width={900}
            >
                <VictoryLegend x={670} y={20}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                    data={[
                    { name: "Moeilijk", symbol: { fill: "rgb(244, 81, 30)"} },
                    { name: "Leuk", symbol: { fill: "rgb(255, 245, 157)" } }
                    ]}
                />
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={data.project}
                    tickLabelComponent={
                        <VictoryLabel 
                            dy={-10}
                            dx={5}
                            angle={-45} 
                            renderInPortal
                            textAnchor="end"
                            style={{
                                fontSize: 10,
                            }}
                            width={10}
                        />
                    }
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={[1,2,3,4,5]}
                />
                <VictoryGroup
                    offset={4}
                >
                    <VictoryBar 
                        labelComponent={
                            <VictoryTooltip />
                        }
                        data={getAvgDifficulty(data)}
                        x={"project"}
                        y={"difficulty"}
                    />
                    <VictoryBar 
                        labelComponent={
                            <VictoryTooltip />
                        }
                        data={getAvgEnjoyment(data)}
                        x={"project"}
                        y={"enjoyment"}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}

export default BarGraph;