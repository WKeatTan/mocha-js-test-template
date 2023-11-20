const login = ({ username, password }) => {
  if (username === 'user01' && password === '123456') {
    return {
      status: 'success',
      data: undefined,
    }
  }

  return {
    status: 'fail',
    data: undefined,
  }
}

export default {
  login,
}
