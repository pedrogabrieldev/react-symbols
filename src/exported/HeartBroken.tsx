import IconHeartBrokenFill0Wght100Grad0Opsz48 from '../components/HeartBrokenFill0Wght100Grad0Opsz48'
import IconHeartBrokenFill0Wght200Grad0Opsz48 from '../components/HeartBrokenFill0Wght200Grad0Opsz48'
import IconHeartBrokenFill0Wght300Grad0Opsz48 from '../components/HeartBrokenFill0Wght300Grad0Opsz48'
import IconHeartBrokenFill0Wght400Grad0Opsz48 from '../components/HeartBrokenFill0Wght400Grad0Opsz48'
import IconHeartBrokenFill0Wght500Grad0Opsz48 from '../components/HeartBrokenFill0Wght500Grad0Opsz48'
import IconHeartBrokenFill0Wght600Grad0Opsz48 from '../components/HeartBrokenFill0Wght600Grad0Opsz48'
import IconHeartBrokenFill0Wght700Grad0Opsz48 from '../components/HeartBrokenFill0Wght700Grad0Opsz48'
import IconHeartBrokenFill1Wght100Grad0Opsz48 from '../components/HeartBrokenFill1Wght100Grad0Opsz48'
import IconHeartBrokenFill1Wght200Grad0Opsz48 from '../components/HeartBrokenFill1Wght200Grad0Opsz48'
import IconHeartBrokenFill1Wght300Grad0Opsz48 from '../components/HeartBrokenFill1Wght300Grad0Opsz48'
import IconHeartBrokenFill1Wght400Grad0Opsz48 from '../components/HeartBrokenFill1Wght400Grad0Opsz48'
import IconHeartBrokenFill1Wght500Grad0Opsz48 from '../components/HeartBrokenFill1Wght500Grad0Opsz48'
import IconHeartBrokenFill1Wght600Grad0Opsz48 from '../components/HeartBrokenFill1Wght600Grad0Opsz48'
import IconHeartBrokenFill1Wght700Grad0Opsz48 from '../components/HeartBrokenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeartBroken = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeartBrokenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeartBrokenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeartBrokenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeartBrokenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeartBrokenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeartBrokenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeartBrokenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeartBrokenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeartBrokenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeartBrokenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeartBrokenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeartBrokenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeartBrokenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeartBrokenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
