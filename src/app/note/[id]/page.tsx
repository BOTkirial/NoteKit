"use client"

import QueryClientProviderWrapper from "@appComponents/QueryClientProviderWrapper/QueryClientProviderWrapper";
import { use, useEffect } from "react";
import { useNote } from "src/hooks/note.hooks";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit'
import "./page.css";
import Button from "@component/Button/Button";
import { ShareIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import NoteRequest from "src/requests/note.request";
import useQueryClient from "@hooks/queryClient.hook";
import Notification from "@services/client/Notification";
import { ShareType } from "@entity/SharedNote";
import Modal from "@component/Modal/Modal";
import BasicShareForm from "@appComponents/ShareForm/ShareForm";


interface PropsNotePage {
  params: Promise<{
    id: string;
  }>;
}

const BasicNotePage = (props: PropsNotePage) => {

  const params = use(props.params);
  const note = useNote(Number(params.id));

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Écris quelque chose ici...</p>",
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;



  return (
    <div className="note-page">
      <div className="title">{note.data?.title}</div>

      <Modal title="Partager la note" button={{
        icon: <ShareIcon />,
        text: "Partager la note"
      }}>
        <BasicShareForm />
      </Modal>

      <EditorContent spellCheck={false} editor={editor} />

      <div className="toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "active" : ""}
        >
          P
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
        >
          H1
        </button>
      </div>

    </div>
  )

}

/**
 * Necessary to wrap the component with a queryClientProvider in order to have access to useMutation or useQuery
 * This allows to not wrap the entire app in a QueryClientProvider because we would lose the SSR from next
 */
export default function NotePage(props: any) {
  return (
    <QueryClientProviderWrapper>
      <BasicNotePage {...props} />
    </QueryClientProviderWrapper>
  );
}