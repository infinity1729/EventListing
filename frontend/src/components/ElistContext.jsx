import React, {useState, createContext} from "react";

export const ElistContext = createContext();

export const ListProvider = props => {
    const [Elist, setElist] = useState([
        {
            "category": "Coding Club",
            "name": "new",
            "uid": 32,
            "description": "wdkml,",
            "scheduled_status": "yet to scheduled",
            "venue": "Yoga room",
            "start_date": "2022-11-11",
            "end_date": "2022-11-12",
            "status": "active"
        },
        
    ]);

    return (
        <ElistContext.Provider value={[Elist, setElist]}>
            {props.children}
        </ElistContext.Provider>
    );
}