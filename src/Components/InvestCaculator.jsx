import React ,{ useState } from 'react';
import Header from './Header'
import UserInput from './UserInput'
import ResultTable from './ResultTable'

const defualtInputs = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
}

export default function InvestCaculator() {
    const [userInputs, setUserInput] = useState(defualtInputs)

    function handelUsersInput(userInput, event) {
        const value = parseInt(event.target.value)
        setUserInput((prev) => {
            return {
                ...prev,
                [userInput]: value
            }
        });
    }
    return (
        <>   
        <Header/>
        <UserInput 
        onChangeInput={handelUsersInput} 
        valueUserInput={userInputs}
        />
        <ResultTable userInput={userInputs}/>
        </>
    )
}