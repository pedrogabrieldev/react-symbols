import IconVolumeOffFill0Wght100Grad0Opsz48 from '../components/VolumeOffFill0Wght100Grad0Opsz48'
import IconVolumeOffFill0Wght200Grad0Opsz48 from '../components/VolumeOffFill0Wght200Grad0Opsz48'
import IconVolumeOffFill0Wght300Grad0Opsz48 from '../components/VolumeOffFill0Wght300Grad0Opsz48'
import IconVolumeOffFill0Wght400Grad0Opsz48 from '../components/VolumeOffFill0Wght400Grad0Opsz48'
import IconVolumeOffFill0Wght500Grad0Opsz48 from '../components/VolumeOffFill0Wght500Grad0Opsz48'
import IconVolumeOffFill0Wght600Grad0Opsz48 from '../components/VolumeOffFill0Wght600Grad0Opsz48'
import IconVolumeOffFill0Wght700Grad0Opsz48 from '../components/VolumeOffFill0Wght700Grad0Opsz48'
import IconVolumeOffFill1Wght100Grad0Opsz48 from '../components/VolumeOffFill1Wght100Grad0Opsz48'
import IconVolumeOffFill1Wght200Grad0Opsz48 from '../components/VolumeOffFill1Wght200Grad0Opsz48'
import IconVolumeOffFill1Wght300Grad0Opsz48 from '../components/VolumeOffFill1Wght300Grad0Opsz48'
import IconVolumeOffFill1Wght400Grad0Opsz48 from '../components/VolumeOffFill1Wght400Grad0Opsz48'
import IconVolumeOffFill1Wght500Grad0Opsz48 from '../components/VolumeOffFill1Wght500Grad0Opsz48'
import IconVolumeOffFill1Wght600Grad0Opsz48 from '../components/VolumeOffFill1Wght600Grad0Opsz48'
import IconVolumeOffFill1Wght700Grad0Opsz48 from '../components/VolumeOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolumeOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolumeOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolumeOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolumeOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolumeOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolumeOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolumeOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolumeOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolumeOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolumeOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolumeOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolumeOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolumeOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolumeOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolumeOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
