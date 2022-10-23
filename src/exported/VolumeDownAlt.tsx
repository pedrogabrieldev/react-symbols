import IconVolumeDownAltFill0Wght100Grad0Opsz48 from '../components/VolumeDownAltFill0Wght100Grad0Opsz48'
import IconVolumeDownAltFill0Wght200Grad0Opsz48 from '../components/VolumeDownAltFill0Wght200Grad0Opsz48'
import IconVolumeDownAltFill0Wght300Grad0Opsz48 from '../components/VolumeDownAltFill0Wght300Grad0Opsz48'
import IconVolumeDownAltFill0Wght400Grad0Opsz48 from '../components/VolumeDownAltFill0Wght400Grad0Opsz48'
import IconVolumeDownAltFill0Wght500Grad0Opsz48 from '../components/VolumeDownAltFill0Wght500Grad0Opsz48'
import IconVolumeDownAltFill0Wght600Grad0Opsz48 from '../components/VolumeDownAltFill0Wght600Grad0Opsz48'
import IconVolumeDownAltFill0Wght700Grad0Opsz48 from '../components/VolumeDownAltFill0Wght700Grad0Opsz48'
import IconVolumeDownAltFill1Wght100Grad0Opsz48 from '../components/VolumeDownAltFill1Wght100Grad0Opsz48'
import IconVolumeDownAltFill1Wght200Grad0Opsz48 from '../components/VolumeDownAltFill1Wght200Grad0Opsz48'
import IconVolumeDownAltFill1Wght300Grad0Opsz48 from '../components/VolumeDownAltFill1Wght300Grad0Opsz48'
import IconVolumeDownAltFill1Wght400Grad0Opsz48 from '../components/VolumeDownAltFill1Wght400Grad0Opsz48'
import IconVolumeDownAltFill1Wght500Grad0Opsz48 from '../components/VolumeDownAltFill1Wght500Grad0Opsz48'
import IconVolumeDownAltFill1Wght600Grad0Opsz48 from '../components/VolumeDownAltFill1Wght600Grad0Opsz48'
import IconVolumeDownAltFill1Wght700Grad0Opsz48 from '../components/VolumeDownAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolumeDownAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolumeDownAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolumeDownAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolumeDownAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolumeDownAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolumeDownAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolumeDownAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolumeDownAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolumeDownAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolumeDownAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolumeDownAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolumeDownAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolumeDownAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolumeDownAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolumeDownAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
