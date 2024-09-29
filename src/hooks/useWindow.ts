const useWindow = () => {
  if (typeof window !== "undefined") {
    return window
  }

  return null
}

export default useWindow
