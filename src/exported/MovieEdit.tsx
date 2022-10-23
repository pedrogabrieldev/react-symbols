import IconMovieEditFill0Wght100Grad0Opsz48 from '../components/MovieEditFill0Wght100Grad0Opsz48'
import IconMovieEditFill0Wght200Grad0Opsz48 from '../components/MovieEditFill0Wght200Grad0Opsz48'
import IconMovieEditFill0Wght300Grad0Opsz48 from '../components/MovieEditFill0Wght300Grad0Opsz48'
import IconMovieEditFill0Wght400Grad0Opsz48 from '../components/MovieEditFill0Wght400Grad0Opsz48'
import IconMovieEditFill0Wght500Grad0Opsz48 from '../components/MovieEditFill0Wght500Grad0Opsz48'
import IconMovieEditFill0Wght600Grad0Opsz48 from '../components/MovieEditFill0Wght600Grad0Opsz48'
import IconMovieEditFill0Wght700Grad0Opsz48 from '../components/MovieEditFill0Wght700Grad0Opsz48'
import IconMovieEditFill1Wght100Grad0Opsz48 from '../components/MovieEditFill1Wght100Grad0Opsz48'
import IconMovieEditFill1Wght200Grad0Opsz48 from '../components/MovieEditFill1Wght200Grad0Opsz48'
import IconMovieEditFill1Wght300Grad0Opsz48 from '../components/MovieEditFill1Wght300Grad0Opsz48'
import IconMovieEditFill1Wght400Grad0Opsz48 from '../components/MovieEditFill1Wght400Grad0Opsz48'
import IconMovieEditFill1Wght500Grad0Opsz48 from '../components/MovieEditFill1Wght500Grad0Opsz48'
import IconMovieEditFill1Wght600Grad0Opsz48 from '../components/MovieEditFill1Wght600Grad0Opsz48'
import IconMovieEditFill1Wght700Grad0Opsz48 from '../components/MovieEditFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMovieEdit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMovieEditFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMovieEditFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMovieEditFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMovieEditFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMovieEditFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMovieEditFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMovieEditFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMovieEditFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMovieEditFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMovieEditFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMovieEditFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMovieEditFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMovieEditFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMovieEditFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
