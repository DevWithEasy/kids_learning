// DragPreview.js
import { usePreview } from 'react-dnd-preview'

const MyPreview = () => {
    const preview = usePreview()
    if (!preview.display) {
        return null
    }
    const { itemType, item, style } = preview;
    return <div className="md:hidden w-12 h-12 p-2 flex justify-center items-center bg-green-100 text-2xl rounded-full shadow-md hover:cursor-move md:w-16 md:h-16 md:text-3xl" style={style}>{item?.letter}</div>
}

export default MyPreview;
