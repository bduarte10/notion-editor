import Editor from './components/Editor'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center text-zinc-50 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="bg-zinc-800 w-[1100px] mx-auto min-h-[700px] rounded-xl shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4 max-h-[800px] overflow-hidden">
           <Editor/>
        </main>
      </div>
    </div>
  )
}

