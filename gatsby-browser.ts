import ReactDOM from "react-dom/client"

import "./src/styles/main.scss"

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}
