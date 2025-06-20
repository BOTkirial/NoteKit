import "./noteListItem.css";
import { useRouter } from "next/navigation";

interface PropsNoteListItem {
    id: number;
    title: string;
    excerpt: string
}

const NoteListItem = (props: PropsNoteListItem) => {

    const router = useRouter();

    const onClick = async () => {
        router.push(`/note/${props.id}`);
    }

    return (
        <div onClick={onClick} className="note-list-item">
            <div className="title">
                {props.title}
            </div>
            <div className="excerpt">
                {props.excerpt}
            </div>
        </div>
    )

}

export default NoteListItem;