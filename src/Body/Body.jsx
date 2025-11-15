import styles from './Body.module.css';
import { useState } from 'react';
import Preferences from './Preferences/Preferences';
import { difficulties, defaultWeekCount, defaultHoursPerWeek, defaultDifficultiesChosen, topics, defaultTopicsChosen} from '../../constants/constList';

const Body = () => {
    const [weekCount, setWeekCount] = useState(defaultWeekCount);
    const [hoursPerWeek, setHoursPerWeek] = useState(defaultHoursPerWeek);
    const [difficultiesChosen, setDifficultiesChosen] = useState(defaultDifficultiesChosen);
    const [topicsChosen, setTopicsChosen] = useState(defaultTopicsChosen); 

    const handleChange = (newValue, setValue) => {
        setValue(newValue);
    }

    const onChangeTopicsChosen = () => {
        return 0;
    }

    return (
        <>
            <div
               className={styles.container} 
            >
                <Preferences 
                    weekCount = {weekCount} 
                    setWeekCount = {setWeekCount}
                    hoursPerWeek = {hoursPerWeek}
                    setHoursPerWeek = {setHoursPerWeek}
                    difficultiesChosen={difficultiesChosen}
                    setDifficultiesChosen={setDifficultiesChosen}
                    difficulties = {difficulties}
                    topics = {topics}
                    topicsChosen={topicsChosen}
                    setTopicsChosen={setTopicsChosen}
                    onChange = {handleChange}
                    onChangeTopicsChosen = {onChangeTopicsChosen}
                >
                </Preferences>
            </div>
        </>
    )
}

export default Body;