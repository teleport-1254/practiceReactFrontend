import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // to logout we dont have to send a request to the backend server.
        // we just need to remove token from globel state and localstorage.
        // and we'll be good to go!

        // removing user
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })

        // removing workouts from globel states
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}