export const Step = ({step}: any) => {
    return(
        
            <ul>
                {step.map((step: any) => (
                    <div>
                        <li>{step.name}
                            <input type="checkbox"/>
                        </li>
                        
                    </div>
                ))}
            </ul>
        
    )
}