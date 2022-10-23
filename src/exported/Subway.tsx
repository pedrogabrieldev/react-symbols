import IconSubwayFill0Wght100Grad0Opsz48 from '../components/SubwayFill0Wght100Grad0Opsz48'
import IconSubwayFill0Wght200Grad0Opsz48 from '../components/SubwayFill0Wght200Grad0Opsz48'
import IconSubwayFill0Wght300Grad0Opsz48 from '../components/SubwayFill0Wght300Grad0Opsz48'
import IconSubwayFill0Wght400Grad0Opsz48 from '../components/SubwayFill0Wght400Grad0Opsz48'
import IconSubwayFill0Wght500Grad0Opsz48 from '../components/SubwayFill0Wght500Grad0Opsz48'
import IconSubwayFill0Wght600Grad0Opsz48 from '../components/SubwayFill0Wght600Grad0Opsz48'
import IconSubwayFill0Wght700Grad0Opsz48 from '../components/SubwayFill0Wght700Grad0Opsz48'
import IconSubwayFill1Wght100Grad0Opsz48 from '../components/SubwayFill1Wght100Grad0Opsz48'
import IconSubwayFill1Wght200Grad0Opsz48 from '../components/SubwayFill1Wght200Grad0Opsz48'
import IconSubwayFill1Wght300Grad0Opsz48 from '../components/SubwayFill1Wght300Grad0Opsz48'
import IconSubwayFill1Wght400Grad0Opsz48 from '../components/SubwayFill1Wght400Grad0Opsz48'
import IconSubwayFill1Wght500Grad0Opsz48 from '../components/SubwayFill1Wght500Grad0Opsz48'
import IconSubwayFill1Wght600Grad0Opsz48 from '../components/SubwayFill1Wght600Grad0Opsz48'
import IconSubwayFill1Wght700Grad0Opsz48 from '../components/SubwayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubway = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubwayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubwayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubwayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubwayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubwayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubwayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubwayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubwayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubwayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubwayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubwayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubwayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubwayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubwayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
