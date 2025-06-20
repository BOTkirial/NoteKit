
"use client"

import QueryClientProviderWrapper from "@appComponents/QueryClientProviderWrapper/QueryClientProviderWrapper";
import List from "@component/List/List";
import { useNotes } from "src/hooks/note.hooks";
import "./noteList.css";
import NoteListItem from "./NoteListItem";
import Modal from "@component/Modal/Modal";
import FormNewNote from "@appComponents/FormNewNote/FormNewNote";

const BasicNoteList = () => {

  const notes = useNotes();

  return (
    <div className="note-list">
      <h1>Liste des notes</h1>
      <Modal>
        <FormNewNote />
      </Modal>
      <List xGap={12}>
        {
          notes.data !== undefined && notes.data.map(n =>
            <NoteListItem key={ n.id } id={n.id} title={n.title} excerpt={n.excerpt} />
          )
        }
      </List>
    </div>
  )

}

/**
 * Necessary to wrap the component with a queryClientProvider in order to have access to useMutation or useQuery
 * This allows to not wrap the entire app in a QueryClientProvider because we would lose the SSR from next
 */
export default function NoteList(props: any) {
  return (
    <QueryClientProviderWrapper>
      <BasicNoteList {...props} />
    </QueryClientProviderWrapper>
  );
}
