import { useRef } from 'react'

export const HooksApp = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.select()
    console.log(inputRef.current?.value)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-8 mt-5">
            <h3>Focus screen</h3>
            <input
              ref={inputRef}
              autoFocus
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-12 mt-3">
            <div onClick={handleClick} className="btn btn-light">
              Input focus
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HooksApp
