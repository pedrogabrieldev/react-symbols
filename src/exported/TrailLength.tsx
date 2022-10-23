import IconTrailLengthFill0Wght100Grad0Opsz48 from '../components/TrailLengthFill0Wght100Grad0Opsz48'
import IconTrailLengthFill0Wght200Grad0Opsz48 from '../components/TrailLengthFill0Wght200Grad0Opsz48'
import IconTrailLengthFill0Wght300Grad0Opsz48 from '../components/TrailLengthFill0Wght300Grad0Opsz48'
import IconTrailLengthFill0Wght400Grad0Opsz48 from '../components/TrailLengthFill0Wght400Grad0Opsz48'
import IconTrailLengthFill0Wght500Grad0Opsz48 from '../components/TrailLengthFill0Wght500Grad0Opsz48'
import IconTrailLengthFill0Wght600Grad0Opsz48 from '../components/TrailLengthFill0Wght600Grad0Opsz48'
import IconTrailLengthFill0Wght700Grad0Opsz48 from '../components/TrailLengthFill0Wght700Grad0Opsz48'
import IconTrailLengthFill1Wght100Grad0Opsz48 from '../components/TrailLengthFill1Wght100Grad0Opsz48'
import IconTrailLengthFill1Wght200Grad0Opsz48 from '../components/TrailLengthFill1Wght200Grad0Opsz48'
import IconTrailLengthFill1Wght300Grad0Opsz48 from '../components/TrailLengthFill1Wght300Grad0Opsz48'
import IconTrailLengthFill1Wght400Grad0Opsz48 from '../components/TrailLengthFill1Wght400Grad0Opsz48'
import IconTrailLengthFill1Wght500Grad0Opsz48 from '../components/TrailLengthFill1Wght500Grad0Opsz48'
import IconTrailLengthFill1Wght600Grad0Opsz48 from '../components/TrailLengthFill1Wght600Grad0Opsz48'
import IconTrailLengthFill1Wght700Grad0Opsz48 from '../components/TrailLengthFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrailLength = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrailLengthFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrailLengthFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrailLengthFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrailLengthFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrailLengthFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrailLengthFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrailLengthFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrailLengthFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrailLengthFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrailLengthFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrailLengthFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrailLengthFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrailLengthFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrailLengthFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
