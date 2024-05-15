
export default function UserInput({onChangeInput, valueUserInput}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>Initial Investment
                <input 
                type="number" 
                value={valueUserInput.initialInvestment} 
                required 
                onChange={(event) => onChangeInput('initialInvestment',event)}/>
                </label>
                </p>
                <p>
                <label>Annual Investment
                <input 
                type="number" 
                value={valueUserInput.annualInvestment} 
                required 
                onChange={(event) => onChangeInput('annualInvestment',event)}/>
                </label>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label>Expected Return
                <input 
                type="number" 
                value={valueUserInput.expectedReturn} 
                required 
                onChange={(event) => onChangeInput('expectedReturn',event)}/>
                </label>
                </p>
                <p>
                <label>Duration
                <input 
                type="number" 
                value={valueUserInput.duration} 
                required 
                onChange={(event) => onChangeInput('duration',event)}/>
                </label>
                </p>
            </div>
        </section>
    )
}