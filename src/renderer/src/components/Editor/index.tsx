import Document from '@tiptap/extension-document'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

export const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ document: false }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none'
      }),
      Document.extend({
        content: 'heading block*'
      })
    ],
    content: '<h1>Back-End</h1><p>Esse é um documento que explica backend</p>',
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert prose-headings:mt-0'
      }
    }
  })

  return <EditorContent className="w-[65ch]" editor={editor} />
}
