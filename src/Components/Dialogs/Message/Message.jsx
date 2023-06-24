const Message = (props) => {
  return (
    <div to={props.id.toString()}>{props.message}</div>
  )
}

export default Message