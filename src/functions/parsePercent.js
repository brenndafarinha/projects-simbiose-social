function parsePercent(approved, capted) {

    if (approved && capted === 0 || approved === 0 || capted === 0) {
        return "0"
    }

    let percent = ((capted * 100)/approved).toString()
    return percent.substring(0, percent.indexOf('.'))
}

export default parsePercent