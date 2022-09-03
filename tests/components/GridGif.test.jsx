import { render, screen } from "@testing-library/react"
import { unmountComponentAtNode } from "react-dom"
import { GridGif } from "../../src/components/GridGif"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

// como hacer un mock de nuestor hook?
jest.mock('../../src/hooks/useFetchGifs')


describe('evaluamos el <GridGif />', () => {
  // creo la constante por fuera de los test para poder reciclarla
  const categ = 'One Punch'

  test('debe de mostrar el loading inicial', () => {

    useFetchGifs.mockReturnValue({
      // este objeto que esta aca es lo que yo voy a simular que esta regresando la funcion
      images: [],
      isLoading: true
    })

    // rend
    render(<GridGif categ={categ} />)
    expect(screen.getByText('cargando...'))
    expect(screen.getByText(categ))

  })

  test('debe de mostrar items cuando se cargan las imagenes mediante el UseFetchGifs', () => {

    // son valores ficticios para validar nuestro test
    const gifs = [{
      id: 'ABC',
      title: 'Saitama',
      url: 'https://loquequieras.jpg'
    },
    {
      id: 'ABCD',
      title: 'Goku',
      url: 'https://loquequieras-02.jpg'
    }]

    // creamos el mock
    useFetchGifs.mockReturnValue({
      // este objeto que esta aca es lo que yo voy a simular que esta regresando la funcion
      images: gifs,
      isLoading: false
    })
    // renderizamos el componente
    render(<GridGif categ={categ} />)

    // una vez que tenemos los valores ficticios, el mock, y renderizamos el unmountComponentAtNode, podemos realizar las evaluaciones.
    // screen.debug()  > para ver como se ve nuestro sujeto de pruebas

    // aca haremos las acepciones
    expect(screen.getAllByRole('img').length).toBe(2)

  })

})