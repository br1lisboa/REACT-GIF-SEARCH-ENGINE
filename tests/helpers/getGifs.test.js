import { getGifs } from "../../src/helpers/getGifs"

describe('Testeando getGif()', () => {

    test('Debe de retornar un arreglo de gif', async () => {

        const gif = await getGifs('One Punch')
        // console.log(gif)
        // con este metodo testeo que el array tengo al menos un index
        expect(gif.length).toBeGreaterThan(0)
        expect(gif[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })

})