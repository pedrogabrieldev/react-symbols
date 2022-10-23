import IconHeadsetMicFill0Wght100Grad0Opsz48 from '../components/HeadsetMicFill0Wght100Grad0Opsz48'
import IconHeadsetMicFill0Wght200Grad0Opsz48 from '../components/HeadsetMicFill0Wght200Grad0Opsz48'
import IconHeadsetMicFill0Wght300Grad0Opsz48 from '../components/HeadsetMicFill0Wght300Grad0Opsz48'
import IconHeadsetMicFill0Wght400Grad0Opsz48 from '../components/HeadsetMicFill0Wght400Grad0Opsz48'
import IconHeadsetMicFill0Wght500Grad0Opsz48 from '../components/HeadsetMicFill0Wght500Grad0Opsz48'
import IconHeadsetMicFill0Wght600Grad0Opsz48 from '../components/HeadsetMicFill0Wght600Grad0Opsz48'
import IconHeadsetMicFill0Wght700Grad0Opsz48 from '../components/HeadsetMicFill0Wght700Grad0Opsz48'
import IconHeadsetMicFill1Wght100Grad0Opsz48 from '../components/HeadsetMicFill1Wght100Grad0Opsz48'
import IconHeadsetMicFill1Wght200Grad0Opsz48 from '../components/HeadsetMicFill1Wght200Grad0Opsz48'
import IconHeadsetMicFill1Wght300Grad0Opsz48 from '../components/HeadsetMicFill1Wght300Grad0Opsz48'
import IconHeadsetMicFill1Wght400Grad0Opsz48 from '../components/HeadsetMicFill1Wght400Grad0Opsz48'
import IconHeadsetMicFill1Wght500Grad0Opsz48 from '../components/HeadsetMicFill1Wght500Grad0Opsz48'
import IconHeadsetMicFill1Wght600Grad0Opsz48 from '../components/HeadsetMicFill1Wght600Grad0Opsz48'
import IconHeadsetMicFill1Wght700Grad0Opsz48 from '../components/HeadsetMicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeadsetMic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeadsetMicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeadsetMicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeadsetMicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeadsetMicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeadsetMicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeadsetMicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeadsetMicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeadsetMicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeadsetMicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeadsetMicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeadsetMicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeadsetMicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeadsetMicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeadsetMicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
