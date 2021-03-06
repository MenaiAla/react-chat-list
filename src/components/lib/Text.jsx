import React from "react"
import PropTypes from "prop-types"

const Text = ({ content, classes }) => {
    return <p className={classes}>{content}</p>
}

const TextDefault = (props) => {
    let defaultClasses = "tracking-wide"
    return renderText(props, defaultClasses)
}

const renderText = (props, defaultClasses) => {
    const { classes } = props
    return <Text {...props} classes={defaultClasses + " " + classes} />
}

Text.propTypes = {
    content: PropTypes.string.isRequired,
    classes: PropTypes.string

}

export default TextDefault