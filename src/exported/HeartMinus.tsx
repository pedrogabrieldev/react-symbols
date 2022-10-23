import IconHeartMinusFill0Wght100Grad0Opsz48 from '../components/HeartMinusFill0Wght100Grad0Opsz48'
import IconHeartMinusFill0Wght200Grad0Opsz48 from '../components/HeartMinusFill0Wght200Grad0Opsz48'
import IconHeartMinusFill0Wght300Grad0Opsz48 from '../components/HeartMinusFill0Wght300Grad0Opsz48'
import IconHeartMinusFill0Wght400Grad0Opsz48 from '../components/HeartMinusFill0Wght400Grad0Opsz48'
import IconHeartMinusFill0Wght500Grad0Opsz48 from '../components/HeartMinusFill0Wght500Grad0Opsz48'
import IconHeartMinusFill0Wght600Grad0Opsz48 from '../components/HeartMinusFill0Wght600Grad0Opsz48'
import IconHeartMinusFill0Wght700Grad0Opsz48 from '../components/HeartMinusFill0Wght700Grad0Opsz48'
import IconHeartMinusFill1Wght100Grad0Opsz48 from '../components/HeartMinusFill1Wght100Grad0Opsz48'
import IconHeartMinusFill1Wght200Grad0Opsz48 from '../components/HeartMinusFill1Wght200Grad0Opsz48'
import IconHeartMinusFill1Wght300Grad0Opsz48 from '../components/HeartMinusFill1Wght300Grad0Opsz48'
import IconHeartMinusFill1Wght400Grad0Opsz48 from '../components/HeartMinusFill1Wght400Grad0Opsz48'
import IconHeartMinusFill1Wght500Grad0Opsz48 from '../components/HeartMinusFill1Wght500Grad0Opsz48'
import IconHeartMinusFill1Wght600Grad0Opsz48 from '../components/HeartMinusFill1Wght600Grad0Opsz48'
import IconHeartMinusFill1Wght700Grad0Opsz48 from '../components/HeartMinusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeartMinus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeartMinusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeartMinusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeartMinusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeartMinusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeartMinusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeartMinusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeartMinusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeartMinusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeartMinusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeartMinusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeartMinusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeartMinusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeartMinusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeartMinusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
