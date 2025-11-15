import styles from './ProblemSet.module.css'
import { useState } from 'react';
import QuestionSummary from './QuestionSummary/QuestionSummary'
import { generateProblemChosenList } from './../../../constants/problemSet';

const ProblemSet = ({ weekCount, hoursPerWeek, difficultiesChosen, topicsChosen }) => {

    const problemChosenList = generateProblemChosenList(weekCount, hoursPerWeek, difficultiesChosen, topicsChosen);
    const problemCount = problemChosenList.length;

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
            </main>
        </>
    )
}

export default ProblemSet