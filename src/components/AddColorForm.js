const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="form" onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color name..." 
                required />
            <input ref={input => _color = input}
                type="color"
                required />
            <button>Add Color</button>
        </form>
    )
}

export default AddColorForm