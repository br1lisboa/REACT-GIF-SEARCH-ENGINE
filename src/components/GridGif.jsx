import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Loading } from './Loading';
import PropTypes from 'prop-types'

export const GridGif = ({ categ }) => {

  const { images, isLoading } = useFetchGifs(categ)

  return (
    <>
      <h3>{categ}</h3>

      {isLoading && <Loading />}

      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image} />
          ))
        }
      </div>
    </>
  )
}

GridGif.propTypes = {
  categ: PropTypes.string.isRequired
}
