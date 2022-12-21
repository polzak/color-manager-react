import Color from './Color'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {
            (colors.length === 0) ? <p>There is no color yet. Please add a color.</p> 
            : colors.map(color => 
                <Color key={color.id} {...color} />
                )
        }
    </div>

export default ColorList