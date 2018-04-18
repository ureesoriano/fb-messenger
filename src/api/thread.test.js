import * as api from './thread'

// It's not recommended to write a unit test for this.
// It's better to write an integration or e2e test.

describe('#API thread endpoint', () => {
  it('should fetchThreads', () => {
    global.fetch = jest.fn()

    fetch.mockImplementation(
      (params) => Promise.resolve({
        json: () => ({
          data: [],
          params
        })
      })
    )
    api.fetchThreads().then((response) => {
      expect(response.data).toEqual([])
      expect(global.fetch).toBeCalledWith(
        '/mocks/threads.json'
      )
    })
  })
})
