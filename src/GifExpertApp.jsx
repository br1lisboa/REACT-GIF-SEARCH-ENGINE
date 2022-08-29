import { useState } from "react"
import { AddCategory, GridGif } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  //Funcion para agregar una categoria al state
  const onAddCategory = (newCategory) => {
    //Validacion sencilla de NO insertar categorias repetidas
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((categ) => (
          <GridGif
            key={categ}
            categ={categ}
          />
        ))
      }
    </>
  )
}
