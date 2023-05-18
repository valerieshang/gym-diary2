const DiaryHistory = ({ data, setSelectedEntry }) => {

    // This is a functional component within a functional component
    const List = () => {
        return (
            <ul>
                {
                    data.map((d) => {
                        return <li key={d.id} className="text-sm"><a onClick={()=>{handleEntryOnClick(d)}} className="underline cursor-pointer">{d.summary}</a> ({d.currentDate})</li>
                    })
                }
                <li className="text-sm"><a onClick={()=>{handleEntryOnClick({})}} className="underline cursor-pointer">New Entry</a></li>
            </ul>
        );
    }

    const handleEntryOnClick = (entry) => {
        setSelectedEntry(entry);
    }

    return (
        <div className="basis-1/5 border border-blue-500 p-4">
            <div className="font-semibold">Histories</div>
            {
                // This is a conditional rendering
                data.length > 0 ? <List /> : <div className="italic text-sm">No items yet</div>
            }
        </div>
    );
}

export default DiaryHistory;