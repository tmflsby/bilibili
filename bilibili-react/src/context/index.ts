import * as React from "react";

const context = {
  picURL: process.env.URL_PREFIX + "/transfer/image",
  videoURL: process.env.URL_PREFIX + "/transfer/mp4"
}

const Context = React.createContext(context)

export default Context
export { context }
