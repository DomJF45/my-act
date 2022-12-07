import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { nanoid } from 'nanoid'
import { v4 as uuid} from 'uuid';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { cardData } from './cardData';
import GoBack from '../../util/back/GoBack';
import '../../../styles/processes/Values.css';

const itemsFromBackend = [
  { id: uuid(), content: 'First Task' },
  { id: uuid(), content: 'Second Task' }
]

const columnsFromBackend = {
  [uuid()]: {
    name: 'Unsorted',
    items: cardData
  },
  [uuid()]: {
    name: 'Very Important',
    items: []
  },
  [uuid()]: {
    name: 'Important',
    items: []
  },
  [uuid()]: {
    name: 'Not Important',
    items: []
  }
}

const onDragEnd = (result, columns, setColumns) => {
  if(!result.destination) return;
  const { source, destination } = result;

  if(source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
   
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }

}

const CardSort = () => {

  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className='container'>
      <GoBack page={-1} />
    <div
      style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%'
      }}
    >
      
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h2>{column.name}</h2>
              <div style={{margin: 8}}>
              <Droppable droppableId={columnId} key={columnId} >
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                        padding: 4,
                        width: 250,
                        height: 500,
                        overflowY: 'overlay'
                      }}
                      id='value-column'
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable 
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: 'none',
                                    padding: 16,
                                    margin: '0 0 8px 0',
                                    minHeight: '50px',
                                    backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                    color: '#fff',
                                    ...provided.draggableProps.style
                                  }}
                                  
                                >
                                  <h4>{item.value}</h4>
                                  <p>{item.bio}</p>
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
                
              </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>
    </div>
    </div>
  )
}

export default CardSort