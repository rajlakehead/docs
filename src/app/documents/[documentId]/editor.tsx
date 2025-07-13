"use client";
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TableKit } from '@tiptap/extension-table'
import ImageResize from "tiptap-extension-resize-image"
import Image from '@tiptap/extension-image'



import StarterKit from '@tiptap/starter-kit'


const Editor = () => {
    const editor = useEditor({
    editorProps: {
        attributes: {
            style: "padding-left: 56px; padding-right: 56px;",
            class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pb-10 cursor-text"

        },

    },
    extensions: [StarterKit, 
        TaskItem.configure({nested: true}), 
        TaskList,
        TableKit,
        Image,
        ImageResize
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return (
    <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
        <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
                <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default Editor;