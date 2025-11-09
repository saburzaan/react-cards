import { useState } from 'react'
import { delayFn } from '../helpers/delayFn.ts'

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchFn = async (args) => {
    try {
      setIsLoading(true)
      setError('')
      await delayFn()

      return await callback(args)

    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetchFn, isLoading, error]
}