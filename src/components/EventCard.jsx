
const EventCard = ({ data }) => {
    
    if(!data){
        return null;
    }
    
    return (
        <div className="card">
            {/* 判斷資料是否存在，如果沒有就不顯示 */}
            {data.year && <div className="year" dangerouslySetInnerHTML={{ __html: data.year }}></div>}
            {data.heading && <h4>{data.heading}</h4>}
            {data.content && <p>{data.content}</p>}
        </div>
    );
};

export default EventCard;