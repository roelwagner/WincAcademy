import { useSelector } from "react-redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import { wincTheme } from "./wincTheme";

const BarChart = () => {

    const data = useSelector(state => state.data);
    const studentProjects = [...new Set(data.map(item => item.project))];
    const projectObjects = [];

    for(let i=0; i < studentProjects.length; i++){
        let test = data.filter(item => item.project === studentProjects[i]);
        projectObjects.push(test)
    }

    console.log(projectObjects)

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
            const newItem = {project: project, difficulty: difficulty};
            newDataArray.push(newItem);
        })
        return newDataArray;
    }
    const getAvgEnjoyment = array => {
        const newDataArray = [];
        array.forEach(item => {
            const project = getProject(item);
            const enjoyment = getAverage(item, "enjoyment");
            const newItem = {project: project, enjoyment: enjoyment};
            newDataArray.push(newItem);
        })
        return newDataArray;
    }
    const avgDifficulty = getAvgDifficulty(projectObjects);
    const avgEnjoyment = getAvgEnjoyment(projectObjects);

    return (
        <div>
            <VictoryChart
                theme={wincTheme}
                domainPadding={6}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={studentProjects}
                    style={{
                        tickLabels: {
                            fontSize: 12,
                            transform: [{ rotate: '90deg'}]
                        }
                    }}
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
                        data={avgDifficulty}
                        x={"project"}
                        y={"difficulty"}
                    />
                    <VictoryBar 
                        data={avgEnjoyment}
                        x={"project"}
                        y={"enjoyment"}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}

export default BarChart;
