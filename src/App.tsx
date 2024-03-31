import {ChangeEvent, useState} from 'react'
import './App.css'

export const App = () => {

    const [selected, setSelected] = useState({
        all: false,
        India: false,
        USA: false,
        France: false
    });

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        let allChecked = false;

        if (!event.target.checked && selected.all) {
            setSelected({ ...selected, all: false, [event.target.name]: false });
        } else {
            const updatedSelections = {...selected, [event.target.name]: event.target.checked};

            allChecked = updatedSelections.India && updatedSelections.USA && updatedSelections.France;
            setSelected({ ...updatedSelections, all: allChecked });
        }
    };

    const selectAll = (event: ChangeEvent<HTMLInputElement>) => {
        setSelected({
            all: event.target.checked,
            India: event.target.checked,
            USA: event.target.checked,
            France: event.target.checked
        });
    };

    return (
        <div className="container">
            <div className="checkbox-container">
                <input className="big-checkbox" type="checkbox" name="all" checked={selected.all} onChange={selectAll}/>
                <label>Select All</label>
            </div>
            <div className="checkbox-container">
                <input className="big-checkbox" type="checkbox" name="India" checked={selected.India}
                       onChange={handleOnChange}/>
                <label>India</label>
            </div>
            <div className="checkbox-container">
                <input className="big-checkbox" type="checkbox" name="USA" checked={selected.USA}
                       onChange={handleOnChange}/>
                <label>USA</label>
            </div>
            <div className="checkbox-container">
                <input className="big-checkbox" type="checkbox" name="France" checked={selected.France}
                       onChange={handleOnChange}/>
                <label>France</label>
            </div>
        </div>
    );
}
