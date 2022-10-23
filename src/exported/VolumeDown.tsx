import IconVolumeDownFill0Wght100Grad0Opsz48 from '../components/VolumeDownFill0Wght100Grad0Opsz48'
import IconVolumeDownFill0Wght200Grad0Opsz48 from '../components/VolumeDownFill0Wght200Grad0Opsz48'
import IconVolumeDownFill0Wght300Grad0Opsz48 from '../components/VolumeDownFill0Wght300Grad0Opsz48'
import IconVolumeDownFill0Wght400Grad0Opsz48 from '../components/VolumeDownFill0Wght400Grad0Opsz48'
import IconVolumeDownFill0Wght500Grad0Opsz48 from '../components/VolumeDownFill0Wght500Grad0Opsz48'
import IconVolumeDownFill0Wght600Grad0Opsz48 from '../components/VolumeDownFill0Wght600Grad0Opsz48'
import IconVolumeDownFill0Wght700Grad0Opsz48 from '../components/VolumeDownFill0Wght700Grad0Opsz48'
import IconVolumeDownFill1Wght100Grad0Opsz48 from '../components/VolumeDownFill1Wght100Grad0Opsz48'
import IconVolumeDownFill1Wght200Grad0Opsz48 from '../components/VolumeDownFill1Wght200Grad0Opsz48'
import IconVolumeDownFill1Wght300Grad0Opsz48 from '../components/VolumeDownFill1Wght300Grad0Opsz48'
import IconVolumeDownFill1Wght400Grad0Opsz48 from '../components/VolumeDownFill1Wght400Grad0Opsz48'
import IconVolumeDownFill1Wght500Grad0Opsz48 from '../components/VolumeDownFill1Wght500Grad0Opsz48'
import IconVolumeDownFill1Wght600Grad0Opsz48 from '../components/VolumeDownFill1Wght600Grad0Opsz48'
import IconVolumeDownFill1Wght700Grad0Opsz48 from '../components/VolumeDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolumeDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolumeDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolumeDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolumeDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolumeDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolumeDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolumeDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolumeDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolumeDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolumeDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolumeDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolumeDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolumeDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolumeDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolumeDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
