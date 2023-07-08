/* eslint-disable @next/next/no-img-element */
'use client'

import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
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
lowlight.registerLanguage('css', css)
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
        <FloatingMenu
          className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col gap-1 py-2 px-1'
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent
            return currentLineText === '/'
          }}>
         
          <button
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <img src="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png" alt="bullet list"
              className='w-12 border border-zinc-600 rounded bg-zinc-50'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Bulleted list</span>
              <span className='text-xs text-zinc-400'>Creat a simple bulleted list.</span>
            </div>
          </button>
        
          <button
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            <img src="https://www.notion.so/images/blocks/header.57a7576a.png" alt="heading"
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Heading 1</span>
              <span className='text-xs text-zinc-400'>Big section heading.</span>
            </div>
          </button>
          <button
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            <img src="https://www.notion.so/images/blocks/subheader.9aab4769.png" alt="heading"
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Heading 2</span>
              <span className='text-xs text-zinc-400'>Medium section heading.</span>
            </div>
          </button>
          <button
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            <img src="https://www.notion.so/images/blocks/code.a8b201f4.png" alt="Code block"
              className='w-12 border border-zinc-600 rounded bg-zinc-50'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Code</span>
              <span className='text-xs text-zinc-400'>Capture a code snippet.</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor} >

          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
          >
            <RxFontBold size={16} />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive('italic')}
          >
            <RxFontItalic size={16} />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <RxStrikethrough size={16} />
          </BubbleButton>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            data-active={editor.isActive('code')}
          >
            <RxCode size={16} />
          </BubbleButton>

        </BubbleMenu>
      )}
    </>
  )
}

export default Editor