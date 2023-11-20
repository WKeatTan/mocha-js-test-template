import { expect } from 'chai'

import LoginService from '@src/services/AuthService'

describe('Login Scenario', () => {
  it('Case Success', () => {
    const loginResponse = LoginService.login({
      username: 'user01',
      password: '123456',
    })

    expect(loginResponse.status).to.equal('success')
  })

  it('Case Fail with wrong username', () => {
    const loginResponse = LoginService.login({
      username: 'user02',
      password: '123456',
    })

    expect(loginResponse.status).to.equal('fail')
  })

  it('Case Fail with wrong password', () => {
    const loginResponse = LoginService.login({
      username: 'user01',
      password: '123457',
    })

    expect(loginResponse.status).to.equal('fail')
  })

  it('Case Fail with wrong username and password', () => {
    const loginResponse = LoginService.login({
      username: 'user02',
      password: '123457',
    })

    expect(loginResponse.status).to.equal('fail')
  })
})
