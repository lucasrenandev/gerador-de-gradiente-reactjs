import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  let [direction] = useState("to top right")
  let [gradient] = useState("")

  useEffect(() => {
    const firstColor = document.getElementById("first-color")
    const secondColor = document.getElementById("second-color")
    const directions = document.querySelectorAll(".directions i")
    const output = document.getElementById("output")
      
    output.value = `linear-gradient(${direction}, ${firstColor.value}, ${secondColor.value})`
    directions.forEach((item) => {
      item.addEventListener("click", function() {
        document.querySelector(".active").classList.remove("active")
        item.classList.add("active")
        direction = item.getAttribute("data-direction")
      })
    })
  }, [])

  function generateGradient() {
    const body = document.getElementById("root")
    const firstColor = document.getElementById("first-color")
    const secondColor = document.getElementById("second-color")
    const output = document.getElementById("output")

    gradient = `linear-gradient(${direction}, ${firstColor.value}, ${secondColor.value})`
    body.style.backgroundImage = gradient
    output.value = gradient
  }

  function copyCode() {
    const output = document.getElementById("output")
    const btnCopy = document.getElementById("btn-copy")

    navigator.clipboard.writeText(output.value)
    btnCopy.classList.add("message")
    setTimeout(() => {
      btnCopy.classList.remove("message")
    }, 2000)
  }

  return (
    <>
      <header>
        <h1>Gerador de Linear Gradiente</h1>
      </header>{/*End header*/}

      <section>
        <div className="left-side">
            <div className="text">
              <h2>Selecione as Cores:</h2>
              <div className="colors">
                <input type="color" defaultValue={"#003757"} id='first-color'/>
                <input type="color" defaultValue={"#001931"} id='second-color'/>
              </div>{/*End colors*/}
            </div>{/*End text*/}

            <h3>Selecione uma direção:</h3>

            <div className="directions">
              <i data-direction="to top" className='bx bx-up-arrow-circle'></i>
              <i data-direction="to top right" className='bx bx-right-top-arrow-circle active'></i>
              <i data-direction="to right" className='bx bx-right-arrow-circle'></i>
              <i data-direction="to bottom right" className='bx bx-right-down-arrow-circle'></i>
              <i data-direction="to bottom" className='bx bx-down-arrow-circle'></i>
              <i data-direction="to bottom left" className='bx bx-left-down-arrow-circle'></i>
              <i data-direction="to left" className='bx bx-left-arrow-circle'></i>
              <i data-direction="to top left" className='bx bx-left-top-arrow-circle'></i>
            </div>{/*End directions*/}

            <button type='button' onClick={generateGradient}>Gerar</button>
        </div>{/*End left side*/}

        <div className="right-side">
          <textarea name="textarea" id='output' cols="30" rows="10"></textarea>
          <button type='button' id='btn-copy' onClick={copyCode}>Copiar</button>
        </div>{/*End right side*/}
      </section>{/*End section*/}
    </>
  )
}