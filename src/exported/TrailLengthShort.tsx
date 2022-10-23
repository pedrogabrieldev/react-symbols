import IconTrailLengthShortFill0Wght100Grad0Opsz48 from '../components/TrailLengthShortFill0Wght100Grad0Opsz48'
import IconTrailLengthShortFill0Wght200Grad0Opsz48 from '../components/TrailLengthShortFill0Wght200Grad0Opsz48'
import IconTrailLengthShortFill0Wght300Grad0Opsz48 from '../components/TrailLengthShortFill0Wght300Grad0Opsz48'
import IconTrailLengthShortFill0Wght400Grad0Opsz48 from '../components/TrailLengthShortFill0Wght400Grad0Opsz48'
import IconTrailLengthShortFill0Wght500Grad0Opsz48 from '../components/TrailLengthShortFill0Wght500Grad0Opsz48'
import IconTrailLengthShortFill0Wght600Grad0Opsz48 from '../components/TrailLengthShortFill0Wght600Grad0Opsz48'
import IconTrailLengthShortFill0Wght700Grad0Opsz48 from '../components/TrailLengthShortFill0Wght700Grad0Opsz48'
import IconTrailLengthShortFill1Wght100Grad0Opsz48 from '../components/TrailLengthShortFill1Wght100Grad0Opsz48'
import IconTrailLengthShortFill1Wght200Grad0Opsz48 from '../components/TrailLengthShortFill1Wght200Grad0Opsz48'
import IconTrailLengthShortFill1Wght300Grad0Opsz48 from '../components/TrailLengthShortFill1Wght300Grad0Opsz48'
import IconTrailLengthShortFill1Wght400Grad0Opsz48 from '../components/TrailLengthShortFill1Wght400Grad0Opsz48'
import IconTrailLengthShortFill1Wght500Grad0Opsz48 from '../components/TrailLengthShortFill1Wght500Grad0Opsz48'
import IconTrailLengthShortFill1Wght600Grad0Opsz48 from '../components/TrailLengthShortFill1Wght600Grad0Opsz48'
import IconTrailLengthShortFill1Wght700Grad0Opsz48 from '../components/TrailLengthShortFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrailLengthShort = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrailLengthShortFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrailLengthShortFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrailLengthShortFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrailLengthShortFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrailLengthShortFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrailLengthShortFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrailLengthShortFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrailLengthShortFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrailLengthShortFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrailLengthShortFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrailLengthShortFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrailLengthShortFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrailLengthShortFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrailLengthShortFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
