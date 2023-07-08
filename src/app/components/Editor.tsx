'use client'

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { initialContent } from '../initialContent'
import 'highlight.js/styles/tokyo-night-dark.css'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode
 } from 'react-icons/rx'
import BubbleButton from './BubbleButton'



lowlight.registerLanguage('html', html)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })
  return (
    <>
      <EditorContent
        className="max-w-[700px] max-h-[800px] overflow-y-auto mx-auto py-16 prose prose-invert prose-violet"
        editor={editor} />
      {editor && (
        <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor} >
        <BubbleButton>
          <RxFontBold size={16} />
        </BubbleButton>

        <BubbleButton>
          <RxFontItalic size={16} />
        </BubbleButton>

        <BubbleButton>
          <RxStrikethrough size={16} />
        </BubbleButton>

        <BubbleButton>
          <RxCode size={16} />
        </BubbleButton>
        
        </BubbleMenu>
      )}
    </>
  )
}

export default Editor