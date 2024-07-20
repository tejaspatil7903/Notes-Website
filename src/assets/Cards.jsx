import React from 'react'
import Card from './Card'

export default function Cards({notes}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
      {notes.map((note) => {
        return <Card key={note.id} note={note}></Card>;
      })}
    </div>
  );
}
