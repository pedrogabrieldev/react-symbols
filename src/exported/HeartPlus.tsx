import IconHeartPlusFill0Wght100Grad0Opsz48 from '../components/HeartPlusFill0Wght100Grad0Opsz48'
import IconHeartPlusFill0Wght200Grad0Opsz48 from '../components/HeartPlusFill0Wght200Grad0Opsz48'
import IconHeartPlusFill0Wght300Grad0Opsz48 from '../components/HeartPlusFill0Wght300Grad0Opsz48'
import IconHeartPlusFill0Wght400Grad0Opsz48 from '../components/HeartPlusFill0Wght400Grad0Opsz48'
import IconHeartPlusFill0Wght500Grad0Opsz48 from '../components/HeartPlusFill0Wght500Grad0Opsz48'
import IconHeartPlusFill0Wght600Grad0Opsz48 from '../components/HeartPlusFill0Wght600Grad0Opsz48'
import IconHeartPlusFill0Wght700Grad0Opsz48 from '../components/HeartPlusFill0Wght700Grad0Opsz48'
import IconHeartPlusFill1Wght100Grad0Opsz48 from '../components/HeartPlusFill1Wght100Grad0Opsz48'
import IconHeartPlusFill1Wght200Grad0Opsz48 from '../components/HeartPlusFill1Wght200Grad0Opsz48'
import IconHeartPlusFill1Wght300Grad0Opsz48 from '../components/HeartPlusFill1Wght300Grad0Opsz48'
import IconHeartPlusFill1Wght400Grad0Opsz48 from '../components/HeartPlusFill1Wght400Grad0Opsz48'
import IconHeartPlusFill1Wght500Grad0Opsz48 from '../components/HeartPlusFill1Wght500Grad0Opsz48'
import IconHeartPlusFill1Wght600Grad0Opsz48 from '../components/HeartPlusFill1Wght600Grad0Opsz48'
import IconHeartPlusFill1Wght700Grad0Opsz48 from '../components/HeartPlusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeartPlus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeartPlusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeartPlusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeartPlusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeartPlusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeartPlusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeartPlusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeartPlusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeartPlusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeartPlusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeartPlusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeartPlusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeartPlusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeartPlusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeartPlusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
