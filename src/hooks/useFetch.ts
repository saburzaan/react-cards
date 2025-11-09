import { useState } from 'react'
import { delayFn } from '../helpers/delayFn.ts'

export const useFetch = (callback: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchFn = async (args: any) => {
    try {
      setIsLoading(true)
      setError('')
      await delayFn()

      return await callback(args)

    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetchFn, isLoading, error] as const
}