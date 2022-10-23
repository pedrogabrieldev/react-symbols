import IconTrailLengthMediumFill0Wght100Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght100Grad0Opsz48'
import IconTrailLengthMediumFill0Wght200Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght200Grad0Opsz48'
import IconTrailLengthMediumFill0Wght300Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght300Grad0Opsz48'
import IconTrailLengthMediumFill0Wght400Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght400Grad0Opsz48'
import IconTrailLengthMediumFill0Wght500Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght500Grad0Opsz48'
import IconTrailLengthMediumFill0Wght600Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght600Grad0Opsz48'
import IconTrailLengthMediumFill0Wght700Grad0Opsz48 from '../components/TrailLengthMediumFill0Wght700Grad0Opsz48'
import IconTrailLengthMediumFill1Wght100Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght100Grad0Opsz48'
import IconTrailLengthMediumFill1Wght200Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght200Grad0Opsz48'
import IconTrailLengthMediumFill1Wght300Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght300Grad0Opsz48'
import IconTrailLengthMediumFill1Wght400Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght400Grad0Opsz48'
import IconTrailLengthMediumFill1Wght500Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght500Grad0Opsz48'
import IconTrailLengthMediumFill1Wght600Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght600Grad0Opsz48'
import IconTrailLengthMediumFill1Wght700Grad0Opsz48 from '../components/TrailLengthMediumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrailLengthMedium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrailLengthMediumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrailLengthMediumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrailLengthMediumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrailLengthMediumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrailLengthMediumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrailLengthMediumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrailLengthMediumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrailLengthMediumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrailLengthMediumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrailLengthMediumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrailLengthMediumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrailLengthMediumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrailLengthMediumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrailLengthMediumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
