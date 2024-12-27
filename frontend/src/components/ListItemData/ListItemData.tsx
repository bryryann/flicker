import { convertApiDate } from "../../utils/helpers";
import "./style.css";

interface ListItemDataProps {
    title: string;
    id: number;
    releaseDate: string;
}

const ListItemData: React.FC<ListItemDataProps> = (props) => {
    return (
        <div className="item-data-div">
            <p className="title">{props.title}</p>
            <p className="id">{props.id}</p>
            <p className="release">
                {convertApiDate(props.releaseDate)}
            </p>
        </div>
    );
}

export default ListItemData;
