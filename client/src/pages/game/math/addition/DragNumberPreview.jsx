import { usePreview } from 'react-dnd-preview'

const DragNumberPreview = () => {
    const preview = usePreview()
    if (!preview.display) {
        return null
    }
    const { itemType, item, style } = preview;
    return <div className="md:hidden w-12 h-12 p-2 flex justify-center items-center text-2xl rounded-full shadow-md hover:cursor-move md:w-16 md:h-16" style={style}>
        <img 
            src={item?.image}
            className='w-12 h-12 md:w-16 md:h-16'
        />
    </div>
};

export default DragNumberPreview;