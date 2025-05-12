"use client";

import FormNewNote from "@appComponents/FormNewNote/FormNewNote";
import NoteList from "@appComponents/NoteList/NoteList";
import Modal, { ModalRef } from "@component/Modal/Modal";
import { useRef } from "react";

const Home = () => {

  const refModal = useRef<ModalRef>(null);

  return (
    <div className="main">
        <h1>Favoris</h1>
        <Modal ref={refModal} title="Créer une note">
          <FormNewNote onSuccess={() => refModal.current ? refModal.current.close() : null } />
        </Modal>
        <h1>Notes</h1>
        <NoteList />
    </div>
  );

}

export default Home;
