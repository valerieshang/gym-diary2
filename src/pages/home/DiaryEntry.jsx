import {useState, useEffect, useRef} from "react";
import Rating from "@mui/material/Rating";

const DiaryEntry = ({data, add}) => {

    const defaultFormData = {
        summary:"",
        currentDate:"",
        activity:"",
        intensityRating:0
    }
    const [formData, setFormData] = useState(defaultFormData);
    const [errorData, setErrorData] = useState({});
    const [activityCharCount, setActivityCharCount] = useState(0);
    const [viewOnly, setViewOnly] = useState(false);

    useEffect(()=>{
        console.log("useEffect callback fn"); // Called when component load or formData state changes
        setActivityCharCount(formData.activity ? formData.activity.length : 0); // if formData.activity is not null, set the length of activity value. Otherwise, set 0.
    
        return () => console.log("component unmount") // Called when Home.jsx component is unmounted
    }, [formData]); // The state defined in the array will be watched. The callback function will be invoked when the watched state changed.

    useEffect(()=>{
        console.log("watch data useEffect", data)
        if(Object.keys(data).length > 0){
            setFormData(data);
            setViewOnly(true);
        }else{        
            
            // We have to set to empty string because null does not effect the value update
            setFormData(defaultFormData);
            setViewOnly(false);
        }
    }, [data])

    const validateData = () => {
        console.log("validate data")
        let newErrorData = {};
        let success = true;
        for(const property in formData){
            // newErrorData[property] = formData[property] ? null : "Cannot be empty"; 

            if(formData[property]){
                newErrorData[property] = null;                
            }else{
                newErrorData[property] = "Cannot be empty";                
                success = false;
            }
        }        
        setErrorData(newErrorData);        
        return success;
    }

    const clearForm = (e) => {
        setFormData(defaultFormData);
        setErrorData({});
    }

    const handleSubmitClick = (e) => {        
        e.preventDefault();
        if(validateData()){
            add(formData);
            clearForm(e);
        }
    }

    const handleInputChange = (e) => { // Event object as argument

        // setFormData is a function provided by useState
        setFormData((prevState) => { // The previous state is passed as first argument

            // Look at the console to understand how the state is dynamically updated
            console.log(`target name: ${e.target.name}`);
            console.log(`target value: ${e.target.value}`);

            // Return a new object to update the state
            return {                
                ...prevState, // Copy previous state into new object 
                [e.target.name]: e.target.value // Dynamically update
            }
        })
    }

    const ratingOnChange = (e, newValue) => {
        setFormData((prevState) => {
            return {
                ...prevState, 
                intensityRating:newValue
            }
        })
    }

    return (
        <div className="basis-4/5 border border-red-500 p-4">
            <form onSubmit={handleSubmitClick}>
                <div className="flex mt-4">
                    <label className="basis-1/5 custom-display-label">Summary</label>
                    <div className="basis-4/5">
                        <input type='text' disabled={viewOnly} name="summary" onChange={handleInputChange} className={`custom-input ${errorData?.summary ? "red-border" : ""} ${viewOnly ? "input-disabled" : ""}`} value={formData.summary} />                            
                        <div className="custom-error">{errorData.summary ? errorData.summary : null}</div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <label className="basis-1/5 custom-display-label">Date</label>
                    <div className="basis-4/5">
                        <input type='date' disabled={viewOnly} name="currentDate" onChange={handleInputChange} className={`custom-input ${errorData?.currentDate ? "red-border" : ""} ${viewOnly ? "input-disabled" : ""}`} value={formData.currentDate} />                            
                        <div className="custom-error">{errorData.currentDate ? errorData.currentDate : null}</div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <label className="basis-1/5 custom-display-label">Activity</label>
                    <div className="basis-4/5">
                        <div className="flex">
                            <textarea name="activity" disabled={viewOnly} onChange={handleInputChange} className={`custom-input ${errorData?.activity ? "red-border" : ""} ${viewOnly ? "input-disabled" : ""}`} value={formData.activity} />              
                            <div className="flex flex-col justify-end text-xs basis-2/12">{activityCharCount} characters</div>
                        </div>
                        <div className="custom-error">{errorData.activity ? errorData.activity : null}</div>
                    </div>
                </div>
                <div className="flex mt-4">
                    <label className="basis-1/5 custom-display-label">Intensity Rating</label>
                    <div className="basis-4/5">
                        <div className="flex">
                            <Rating disabled={viewOnly} value={formData.intensityRating} onChange={ratingOnChange}></Rating>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    {viewOnly ? null : <button className="primary-button">Submit</button>}
                </div>
            </form>
        </div>
    );
}

export default DiaryEntry;
