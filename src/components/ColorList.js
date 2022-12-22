import Color from './Color'

const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f }) =>
    <div className="color-list">
        {
            (colors.length === 0) ? <p>There is no color yet. Please add a color.</p> 
            : colors.map(color => 
                <Color key={color.id} 
                    {...color} 
                    onRemove={onRemove}
                    onRate={onRate}
                    />
                )
        }
    </div>

export default ColorList