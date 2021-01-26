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

    const tickValues = ["SCRUM", "W1D1-1", "W1D2-1", "W1D2-2", "W1D2-3", "W1D2-4", "W1D2-5", "W1D3-1", "W1D3-2", "W1D3-4", "W1D3-5", "W1D3 - Project - Guess-the-number", "W1D4-1", "W1D4 - Project - Kleurentoggle", "W1D5 - Project - Galgje", "W2D1-1", "W2D1-2", "W2D2-1", "W2D2-2", "W2D2-3", "W2D3-1", "W2D3-2", "W2D3-3", "W2D4-1", "W2D4-2", "W2D4-3", "W2D5 - Project - Filmzoeker", "W3D1-1", "W3D1-2", "W3D1-3", "W3D1-4", "W3D2-1", "W3D2-2", "W3D2-3", "W3D3-1", "W3D3-2", "W3D3-3", "W3D3-4", "W3D4-1", "W3D4-2", "W3D5 - Project - Todo-List", "W4D2-1", "W4D2-2", "W4D2-3", "W4D2-4", "W4D3-1", "W4D3-2", "W4D3-3", "W4D3-4", "W4D3-5", "W4D3 - Project - Next-Level CSS", "W5D4-1", "W5D5 - Project - Lil_Playlist", "W6D1-1", "W6D2-1", "W6D2 - Project - Eindopdracht"];

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
                return array.reduce((accumulator, item) => {
                    console.log(item.project)
                    return item.project === accumulator ? null : item.project;
                })
            }

            // const getProject = tickValues => {
            //     for(let i=0; i <= tickValues; i++){
            //         return tickValues[i];
            //     }
            // }

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
                    tickValues={tickValues}
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