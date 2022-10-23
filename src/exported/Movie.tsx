import IconMovieFill0Wght100Grad0Opsz48 from '../components/MovieFill0Wght100Grad0Opsz48'
import IconMovieFill0Wght200Grad0Opsz48 from '../components/MovieFill0Wght200Grad0Opsz48'
import IconMovieFill0Wght300Grad0Opsz48 from '../components/MovieFill0Wght300Grad0Opsz48'
import IconMovieFill0Wght400Grad0Opsz48 from '../components/MovieFill0Wght400Grad0Opsz48'
import IconMovieFill0Wght500Grad0Opsz48 from '../components/MovieFill0Wght500Grad0Opsz48'
import IconMovieFill0Wght600Grad0Opsz48 from '../components/MovieFill0Wght600Grad0Opsz48'
import IconMovieFill0Wght700Grad0Opsz48 from '../components/MovieFill0Wght700Grad0Opsz48'
import IconMovieFill1Wght100Grad0Opsz48 from '../components/MovieFill1Wght100Grad0Opsz48'
import IconMovieFill1Wght200Grad0Opsz48 from '../components/MovieFill1Wght200Grad0Opsz48'
import IconMovieFill1Wght300Grad0Opsz48 from '../components/MovieFill1Wght300Grad0Opsz48'
import IconMovieFill1Wght400Grad0Opsz48 from '../components/MovieFill1Wght400Grad0Opsz48'
import IconMovieFill1Wght500Grad0Opsz48 from '../components/MovieFill1Wght500Grad0Opsz48'
import IconMovieFill1Wght600Grad0Opsz48 from '../components/MovieFill1Wght600Grad0Opsz48'
import IconMovieFill1Wght700Grad0Opsz48 from '../components/MovieFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMovie = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMovieFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMovieFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMovieFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMovieFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMovieFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMovieFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMovieFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMovieFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMovieFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMovieFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMovieFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMovieFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMovieFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMovieFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
