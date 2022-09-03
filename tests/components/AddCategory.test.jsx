import { fireEvent, render, screen } from "@testing-library/react"
import { mockComponent } from "react-dom/test-utils"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testeando componente <AddCategory />', () => {

  test('debe de cambiar el valor de la caja de texto', () => {

    // de esta maner renderizamos el componente para testearlo
    render(<AddCategory onNewCategory={() => { }} />)

    // de esta manera vamos a ver el sujeto de pruebas en la consola
    // screen.debug();

    // de esta manera le asignamos a una constante el elemento que vamos a evaluar
    const input = screen.getByRole('textbox')

    // con este metodo de testyng library disparamos el evento a evaluar
    fireEvent.input(input, { target: { value: 'Saitama' } })
    // screen.debug()
    expect(input.value).toBe('Saitama')

    // De esta manera evaluamos que el input reciba un valor valido
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    // aca estoy simulando que escribi en el input
    const inputValue = 'Saitama'
    // tengo que evaluar la function, que sea llamada, que reciba el input etc
    // con jest.fn() marcamos a nuestra funcion para testing como un mock, es decir una simulacion de nuestra fn
    const onNewCategory = jest.fn()

    // volvemos a levantar nuestro sujeto de pruebas
    render(<AddCategory onNewCategory={onNewCategory} />)

    // una vez que levanto el sujeto, extraigo las referencias que necesito. En este caso el input.
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    // ya teniendo las referencias, disparamos el evento
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    // screen.debug()

    expect(input.value).toBe('')

    // con este metodo evaluamos si la fn fue llamada
    expect(onNewCategory).toHaveBeenCalled()
    // con este metodo evaluamos CUANTAS VECES queremos que sea llamada nuestra fn
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    // con este metodo evaluamos que la funcion haya sido llamada con el mismo valor que el input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)

  })

  test('no debe de llamar el onNwCategory() si el input esta vacio', () => {

    // guardo el mock de la fn
    const onNewCategory = jest.fn()

    // renderizo el componente
    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    // disparo el evento
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)



  })

})
