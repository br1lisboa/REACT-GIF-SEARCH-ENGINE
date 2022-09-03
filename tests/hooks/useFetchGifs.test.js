import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('TESTEANDO CUSTOM HOOK USEFETCHGIFS', () => {

    test('debe de regresar el estado inicial', () => {
        // 1 - Importamos el sujeto de prueba, en este caso un hook.
        //     como vemos, requiere de un callback, donde ira nuestro renderHook.
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        // console.log(result)
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBe(true)

    })

    test('debe de retornar un arreglo de img y el isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))

        // acausaremos el waitFor, de testingLibrary, que nos servira para esperar que el hook haga algo, y luego evaluarlo
        // el waitFor, tiene un callback donde le indicamos que espere determinado tiempo para determinada accion
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        )

        // luego podemos hacer el destruc de result, y las asepciones correspondientes
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBe(false)

    })

})