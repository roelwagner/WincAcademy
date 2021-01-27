import {    VictoryBar, 
            VictoryChart, 
            VictoryAxis, 
            VictoryGroup, 
            VictoryTooltip, 
            VictoryLegend, 
            VictoryLabel,
            VictoryLine, } from "victory";
import { wincTheme } from "./wincTheme";

const Chart = ({ data, multipleStudents, difficult, fun, bargraph, }) => {

    const activeData = array => {
        const test =  array.map(element => element.filter(item => item.active === true))
        return test;
    }

    const getRightData = () =>{
        if(multipleStudents === true){
            const getAverage = (array, grade) => {
                return array.reduce((accumulator, item) => item[grade] + accumulator , 0) / array.length;
            }
            const getProject = array => {
                return [...new Set(array.map(item => item.project))][0];
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

            const difficulty = getAvgDifficulty(activeData(data));
            const enjoyment = getAvgEnjoyment(activeData(data));
            const dataObject = {difficulty: difficulty, enjoyment: enjoyment}
            return dataObject;
        } else {
            const difficulty = data.map(item => {
                return {project: item.project, difficulty: item.difficulty, label: item.project}
            })
            const enjoyment = data.map(item => {
                return {project: item.project, enjoyment: item.enjoyment, label: item.project}
            })

            const dataObject = {difficulty: difficulty, enjoyment: enjoyment}
            return dataObject;
        }
    }
    
    const getTickValues = input => {
        if(input[0][0]){
            return [...new Set(input.map(item => item.project))];
        }else{
            return input.project
        }
    }

    return (
        <div className="chart">
            <VictoryChart
                domainPadding={10}
                // animate={{ duration: 1000 }}
                width={900}
                theme={wincTheme}
            >
                <VictoryLegend x={670} y={0}
                    title="Legenda"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: {fontSize: 14 } }}
                    data={[
                    { name: "Moeilijk", symbol: { fill: "#F4511E" } },
                    { name: "Leuk", symbol: { fill: "#FFF59D" } }
                    ]}
                />
                <VictoryAxis
                    tickValues={getTickValues(data)}
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
                    tickFormat={[1,2,3,4,5]}
                />
                {bargraph ? <VictoryGroup 
                        offset={4}
                    >
                    {difficult ? <VictoryBar 
                        labelComponent={
                            <VictoryTooltip 
                            data={getRightData().difficulty}
                            />
                        }
                        data={getRightData().difficulty}
                        // data={[0, ...getRightData().difficulty]}
                        x={"project"}
                        y={"difficulty"}
                        style={{
                            data: { fill: "#F4511E" }
                        }}
                    /> : null}
                    {fun ? <VictoryBar 
                        labelComponent={
                            <VictoryTooltip />
                        }
                        data={getRightData().enjoyment}
                        // data={[0, ...getRightData().enjoyment]}
                        x={"project"}
                        y={"enjoyment"}
                        style={{
                            data: { fill: "#FFF59D" }
                        }}
                    /> : null}
                </VictoryGroup> :
                <VictoryGroup 
                    offset={4}
                >
                    {difficult ? <VictoryLine 
                        labelComponent={
                            <VictoryTooltip />
                        }
                        data={getRightData().difficulty}
                        x={"project"}
                        y={"difficulty"}
                    /> : null}
                    {fun ? <VictoryLine
                        labelComponent={
                            <VictoryTooltip />
                        }
                        data={getRightData().enjoyment}
                        x={"project"}
                        y={"enjoyment"}
                    /> : null}
                </VictoryGroup>}
            </VictoryChart>
        </div>
    );
}

export default Chart;