import IconHeightFill0Wght100Grad0Opsz48 from '../components/HeightFill0Wght100Grad0Opsz48'
import IconHeightFill0Wght200Grad0Opsz48 from '../components/HeightFill0Wght200Grad0Opsz48'
import IconHeightFill0Wght300Grad0Opsz48 from '../components/HeightFill0Wght300Grad0Opsz48'
import IconHeightFill0Wght400Grad0Opsz48 from '../components/HeightFill0Wght400Grad0Opsz48'
import IconHeightFill0Wght500Grad0Opsz48 from '../components/HeightFill0Wght500Grad0Opsz48'
import IconHeightFill0Wght600Grad0Opsz48 from '../components/HeightFill0Wght600Grad0Opsz48'
import IconHeightFill0Wght700Grad0Opsz48 from '../components/HeightFill0Wght700Grad0Opsz48'
import IconHeightFill1Wght100Grad0Opsz48 from '../components/HeightFill1Wght100Grad0Opsz48'
import IconHeightFill1Wght200Grad0Opsz48 from '../components/HeightFill1Wght200Grad0Opsz48'
import IconHeightFill1Wght300Grad0Opsz48 from '../components/HeightFill1Wght300Grad0Opsz48'
import IconHeightFill1Wght400Grad0Opsz48 from '../components/HeightFill1Wght400Grad0Opsz48'
import IconHeightFill1Wght500Grad0Opsz48 from '../components/HeightFill1Wght500Grad0Opsz48'
import IconHeightFill1Wght600Grad0Opsz48 from '../components/HeightFill1Wght600Grad0Opsz48'
import IconHeightFill1Wght700Grad0Opsz48 from '../components/HeightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
