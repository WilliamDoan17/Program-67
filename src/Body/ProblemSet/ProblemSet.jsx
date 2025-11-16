import styles from './ProblemSet.module.css'
import { useState, useEffect } from 'react';
import QuestionSummary from './QuestionSummary/QuestionSummary'
import { generateProblemChosenList, generateWeeklyProblemSets, problemList } from './../../../constants/problemSet';
import WeeklyProblemSet from './WeeklyProblemSet/WeeklyProblemSet';

const ProblemSet = ({ weekCount, hoursPerWeek, difficultiesChosen, topicsChosen }) => {

    const [problemChosenList, setProblemChosenList] = useState(() => {
        return generateProblemChosenList(weekCount, hoursPerWeek, difficultiesChosen, topicsChosen)
    });

    const problemCount = problemChosenList.length;

    useEffect(() => {
        const newProblemChosenList = generateProblemChosenList(
            weekCount, 
            hoursPerWeek, 
            difficultiesChosen, 
            topicsChosen
        );
        setProblemChosenList(newProblemChosenList);
    }, [weekCount, hoursPerWeek, difficultiesChosen, topicsChosen]);
    
    const handleProblemCompletion = (problem, newIsCompleted) => {    
        const problemInList = problemList.find(p => p.name === problem.name);
        if (problemInList) {
            problemInList.isCompleted = newIsCompleted;
        }
        
        // Update problemChosenList with new object (independent)
        setProblemChosenList(prevList => 
            prevList.map(p => 
                p.name === problem.name 
                    ? { ...p, isCompleted: newIsCompleted } // New object
                    : p
            )
        );
        localStorage.setItem('problemList', JSON.stringify(problemList));
    }
                              

    return (
        <>
            <main
                className = {`${styles.container}`}
            >
                <h1
                    className = {`${styles['problem-set-header']}`}
                >
                    Practice with {problemCount} questions
                </h1>
                <p
                    className = {`${styles['problem-set-intro']}`}
                >
                    Customize LeetCode study plan according to your needs. You are recommended to work on the questions in order.
                </p>
                <QuestionSummary
                    totalTime = {weekCount * hoursPerWeek}
                    problemChosenList = {problemChosenList}
                    topicsChosen = {topicsChosen}
                    difficultiesChosen = {difficultiesChosen}
                >   
                </QuestionSummary>
                <WeeklyProblemSet
                    problemChosenList = {problemChosenList}
                    onProblemCompletion = {handleProblemCompletion}
                    weekCount = {weekCount}
                    hoursPerWeek = {hoursPerWeek}
                    difficultiesChosen= {difficultiesChosen}
                >
                </WeeklyProblemSet>
            </main>
        </>
    )
}

export default ProblemSet