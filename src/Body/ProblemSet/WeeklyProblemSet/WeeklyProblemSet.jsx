import styles from './WeeklyProblemSet.module.css'
import { useState } from 'react'
import { getLabelColorFromDifficulty, getProblemCompletedCount } from '../../../../constants/problemSet'
import TopicTag from '../TopicTag/TopicTag'
import { generateWeeklyProblemSets } from '../../../../constants/problemSet'
import ProgressBar from '../ProgressBar/ProgressBar'

const ProblemCard = ({ problem, problemIndex, completed, onProblemCompletion }) => {

    const handleCompletionClicked = () => {
        const newIsCompleted = !completed;
        onProblemCompletion && onProblemCompletion(problem, newIsCompleted);   
    }

    const ProblemDifficultyStyles = {
        color: getLabelColorFromDifficulty.get(problem.difficulty),
    }

    const TopicTagStyles = { 
        margin: '0 0 0 1rem',
    }

    return (
        <>
            <div
                className = {`${styles['problem-card-container']} ${completed && styles['problem-card-container-completed']}`}
            >
                <span
                    className = {`${styles['problem-card-index']}`}
                >
                    {problemIndex}
                </span>
                <div
                    className = {`${styles['problem-info-container']}`}
                > 
                    <a
                        className = {`${styles['problem-name']}`}
                        href = {problem.source}
                        target = "_blank"
                    >
                        {problem.name}
                    </a>
                    <div
                        className = {`${styles['problem-other-info']}`}
                    >
                        <span
                            style = {ProblemDifficultyStyles}
                            className = {`${styles['problem-difficulty']}`}
                        >
                            {problem.difficulty}
                        </span>
                        <span
                            className = {`${styles['problem-time']}`}
                        >
                            {problem.timeTaken} mins
                        </span>
                        <TopicTag
                            topicName = {problem.topic}
                            style = {TopicTagStyles}
                        >
                        </TopicTag>
                    </div>
                </div>
                <div
                    className = {`${styles['completion-button']} ${completed && styles['completion-button-completed']}`}
                    onClick = {handleCompletionClicked}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        aria-hidden="true" 
                    >
                        <path 
                            strokeLcap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        >
                        </path>
                    </svg>
                </div>
            </div>
        </>
    )
}
 
const WeekProblemList = ({ weeklyProblems, weekIndex, onProblemCompletion }) => {
    const [isExpanding, setIsExpanding] = useState(false);

    const onChangeExpandingState = () => {
        const newIsExpanding = !isExpanding;
        setIsExpanding(newIsExpanding);
    }

    const problemCount = weeklyProblems.length;
    const problemCompletedCount = getProblemCompletedCount(weeklyProblems);

    const isWeekCompleted = problemCount === problemCompletedCount;

    return (
        <div
            className = {`${styles['week-container']}`}
        >
            <button
                className = {`${styles['week-button']} ${isExpanding && styles['week-button-expand']}`}
                onClick = {onChangeExpandingState}
            >
                <div
                    className = {`${styles['week-button-children']}`}
                >
                    <h2
                        className = {`${styles['week-number-header']}`}
                    >
                        Week {weekIndex}
                    </h2>
                    {isWeekCompleted && 
                    <div
                        className = {`${styles['week-completed-tag']}`}
                    >
                        COMPLETED
                    </div>
                    }
                </div>
                <div
                    className = {`${styles['week-button-children']}`}
                >
                    <div
                        className = {`${styles['week-problem-count']} ${isWeekCompleted && styles['week-problem-count-completed']}`}
                    >
                        {problemCompletedCount} / {problemCount}
                    </div>
                    <ProgressBar
                        className = {`${styles['week-progress-bar']}`}
                        currentValue = {problemCompletedCount}
                        maxValue = {problemCount}
                    >
                    </ProgressBar>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke= 'grey'
                        aria-hidden="true" 
                        className = {`${styles['expand-button']}`}
                    >
                        {isExpanding ? 
                            <path 
                                strokeLinecap="round" 
                                strokelinejoin="round" 
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                            >
                            </path> : 
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" d="M19 9l-7 7-7-7"
                            >
                            </path>
                        }
                    </svg>
                </div>
            </button>
            {isExpanding && weeklyProblems.map((problem, problemIndex) => {
                return (
                    <ProblemCard
                        problem = {problem}
                        problemIndex = {problemIndex + 1}
                        completed = {problem.isCompleted}
                        onProblemCompletion = {onProblemCompletion}
                    >
                    </ProblemCard>
                )
            })}
        </div>
    )
}

const WeeklyProblemSet = ({ problemChosenList, onProblemCompletion, weekCount, hoursPerWeek, difficultiesChosen }) => {

    const weeklyProblemSet = generateWeeklyProblemSets(problemChosenList, weekCount, hoursPerWeek, difficultiesChosen);

    return (
        <div
            className = {`${styles.container}`}
        >
            {weeklyProblemSet.map((weeklyProblems, weekIndex) => {
                return <WeekProblemList
                    key = {weekIndex + 1}
                    weeklyProblems = {weeklyProblems}
                    weekIndex = {weekIndex + 1}
                    onProblemCompletion = {onProblemCompletion}
                >
                </WeekProblemList>
            })}
        </div>
    )
}

export default WeeklyProblemSet