import { useEffect, useState } from 'react'

type Options = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: string
}

export const useFetch = <DataType = unknown>(
  url: string,
  options?: Options
) => {
  const [data, setData] = useState<DataType | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        }
      }
    }

    fetchData()
  }, [url, options])

  return { data, error }
}
