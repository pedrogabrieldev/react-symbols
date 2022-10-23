import IconHeadsetOffFill0Wght100Grad0Opsz48 from '../components/HeadsetOffFill0Wght100Grad0Opsz48'
import IconHeadsetOffFill0Wght200Grad0Opsz48 from '../components/HeadsetOffFill0Wght200Grad0Opsz48'
import IconHeadsetOffFill0Wght300Grad0Opsz48 from '../components/HeadsetOffFill0Wght300Grad0Opsz48'
import IconHeadsetOffFill0Wght400Grad0Opsz48 from '../components/HeadsetOffFill0Wght400Grad0Opsz48'
import IconHeadsetOffFill0Wght500Grad0Opsz48 from '../components/HeadsetOffFill0Wght500Grad0Opsz48'
import IconHeadsetOffFill0Wght600Grad0Opsz48 from '../components/HeadsetOffFill0Wght600Grad0Opsz48'
import IconHeadsetOffFill0Wght700Grad0Opsz48 from '../components/HeadsetOffFill0Wght700Grad0Opsz48'
import IconHeadsetOffFill1Wght100Grad0Opsz48 from '../components/HeadsetOffFill1Wght100Grad0Opsz48'
import IconHeadsetOffFill1Wght200Grad0Opsz48 from '../components/HeadsetOffFill1Wght200Grad0Opsz48'
import IconHeadsetOffFill1Wght300Grad0Opsz48 from '../components/HeadsetOffFill1Wght300Grad0Opsz48'
import IconHeadsetOffFill1Wght400Grad0Opsz48 from '../components/HeadsetOffFill1Wght400Grad0Opsz48'
import IconHeadsetOffFill1Wght500Grad0Opsz48 from '../components/HeadsetOffFill1Wght500Grad0Opsz48'
import IconHeadsetOffFill1Wght600Grad0Opsz48 from '../components/HeadsetOffFill1Wght600Grad0Opsz48'
import IconHeadsetOffFill1Wght700Grad0Opsz48 from '../components/HeadsetOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeadsetOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeadsetOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeadsetOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeadsetOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeadsetOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeadsetOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeadsetOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeadsetOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeadsetOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeadsetOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeadsetOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeadsetOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeadsetOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeadsetOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeadsetOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
