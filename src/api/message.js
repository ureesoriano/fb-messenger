export const fetchConversation = (username) => {

  const filterMessageByUsername = message => {
    return message.from === username || message.to === username
  }

  return (
    fetch('/mocks/messages.js', {
      method: 'get',
    })
    .then(response => response.json())
    .then(messages => {
      return messages.filter(filterMessageByUsername)
    })
  )
}

export const sendMessage = ({ message, to }) => {
  // This is just a fake api to execute an api call
  return fetch('http://jsonplaceholder.typicode.com/comments', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(json => ({
    from: 'you',
    to,
    message,
    time: Date.now(),
    id: Math.random().toString(36).substr(2, 10)
  }))
}
