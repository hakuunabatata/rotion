import { Plus } from 'phosphor-react'
import React from 'react'

export const CreatePage: React.FC = () => {
  return (
    <button className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60">
      <Plus className="h-4 w-4" />
      Create new page
    </button>
  )
}
