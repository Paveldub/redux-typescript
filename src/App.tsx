import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./store/hooks/redux"
import { fetchUsers } from "./store/reducers/ActionCreators"

function App() {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(
    (state) => state.UserReducer
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {isLoading && <p>...Loading</p>}
      {error && <p>...Error</p>}

      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
