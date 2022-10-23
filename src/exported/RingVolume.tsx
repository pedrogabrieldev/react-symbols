import IconRingVolumeFill0Wght100Grad0Opsz48 from '../components/RingVolumeFill0Wght100Grad0Opsz48'
import IconRingVolumeFill0Wght200Grad0Opsz48 from '../components/RingVolumeFill0Wght200Grad0Opsz48'
import IconRingVolumeFill0Wght300Grad0Opsz48 from '../components/RingVolumeFill0Wght300Grad0Opsz48'
import IconRingVolumeFill0Wght400Grad0Opsz48 from '../components/RingVolumeFill0Wght400Grad0Opsz48'
import IconRingVolumeFill0Wght500Grad0Opsz48 from '../components/RingVolumeFill0Wght500Grad0Opsz48'
import IconRingVolumeFill0Wght600Grad0Opsz48 from '../components/RingVolumeFill0Wght600Grad0Opsz48'
import IconRingVolumeFill0Wght700Grad0Opsz48 from '../components/RingVolumeFill0Wght700Grad0Opsz48'
import IconRingVolumeFill1Wght100Grad0Opsz48 from '../components/RingVolumeFill1Wght100Grad0Opsz48'
import IconRingVolumeFill1Wght200Grad0Opsz48 from '../components/RingVolumeFill1Wght200Grad0Opsz48'
import IconRingVolumeFill1Wght300Grad0Opsz48 from '../components/RingVolumeFill1Wght300Grad0Opsz48'
import IconRingVolumeFill1Wght400Grad0Opsz48 from '../components/RingVolumeFill1Wght400Grad0Opsz48'
import IconRingVolumeFill1Wght500Grad0Opsz48 from '../components/RingVolumeFill1Wght500Grad0Opsz48'
import IconRingVolumeFill1Wght600Grad0Opsz48 from '../components/RingVolumeFill1Wght600Grad0Opsz48'
import IconRingVolumeFill1Wght700Grad0Opsz48 from '../components/RingVolumeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRingVolume = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRingVolumeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRingVolumeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRingVolumeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRingVolumeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRingVolumeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRingVolumeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRingVolumeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRingVolumeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRingVolumeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRingVolumeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRingVolumeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRingVolumeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRingVolumeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRingVolumeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
