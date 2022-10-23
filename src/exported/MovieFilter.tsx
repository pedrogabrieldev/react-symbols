import IconMovieFilterFill0Wght100Grad0Opsz48 from '../components/MovieFilterFill0Wght100Grad0Opsz48'
import IconMovieFilterFill0Wght200Grad0Opsz48 from '../components/MovieFilterFill0Wght200Grad0Opsz48'
import IconMovieFilterFill0Wght300Grad0Opsz48 from '../components/MovieFilterFill0Wght300Grad0Opsz48'
import IconMovieFilterFill0Wght400Grad0Opsz48 from '../components/MovieFilterFill0Wght400Grad0Opsz48'
import IconMovieFilterFill0Wght500Grad0Opsz48 from '../components/MovieFilterFill0Wght500Grad0Opsz48'
import IconMovieFilterFill0Wght600Grad0Opsz48 from '../components/MovieFilterFill0Wght600Grad0Opsz48'
import IconMovieFilterFill0Wght700Grad0Opsz48 from '../components/MovieFilterFill0Wght700Grad0Opsz48'
import IconMovieFilterFill1Wght100Grad0Opsz48 from '../components/MovieFilterFill1Wght100Grad0Opsz48'
import IconMovieFilterFill1Wght200Grad0Opsz48 from '../components/MovieFilterFill1Wght200Grad0Opsz48'
import IconMovieFilterFill1Wght300Grad0Opsz48 from '../components/MovieFilterFill1Wght300Grad0Opsz48'
import IconMovieFilterFill1Wght400Grad0Opsz48 from '../components/MovieFilterFill1Wght400Grad0Opsz48'
import IconMovieFilterFill1Wght500Grad0Opsz48 from '../components/MovieFilterFill1Wght500Grad0Opsz48'
import IconMovieFilterFill1Wght600Grad0Opsz48 from '../components/MovieFilterFill1Wght600Grad0Opsz48'
import IconMovieFilterFill1Wght700Grad0Opsz48 from '../components/MovieFilterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMovieFilter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMovieFilterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMovieFilterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMovieFilterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMovieFilterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMovieFilterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMovieFilterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMovieFilterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMovieFilterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMovieFilterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMovieFilterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMovieFilterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMovieFilterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMovieFilterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMovieFilterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
