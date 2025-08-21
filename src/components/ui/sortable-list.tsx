import * as React from 'react';
import { cn } from '@/lib/utils';

interface SortableListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  onSort: (data: T[]) => void;
  className?: string;
}

export function SortableList<T>({
  data,
  renderItem,
  onSort,
  className,
}: SortableListProps<T>) {
  const [items, setItems] = React.useState(data);
  const dragItem = React.useRef<number | null>(null);
  const dragOverItem = React.useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;

    const newItems = [...items];
    const draggedItem = newItems.splice(dragItem.current, 1)[0];
    newItems.splice(dragOverItem.current, 0, draggedItem);

    dragItem.current = null;
    dragOverItem.current = null;

    setItems(newItems);
    onSort(newItems);
  };

  React.useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnter={(e) => handleDragEnter(e, index)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => e.preventDefault()}
          className="cursor-move p-2 border rounded-md"
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
