import IconVolumeUpFill0Wght100Grad0Opsz48 from '../components/VolumeUpFill0Wght100Grad0Opsz48'
import IconVolumeUpFill0Wght200Grad0Opsz48 from '../components/VolumeUpFill0Wght200Grad0Opsz48'
import IconVolumeUpFill0Wght300Grad0Opsz48 from '../components/VolumeUpFill0Wght300Grad0Opsz48'
import IconVolumeUpFill0Wght400Grad0Opsz48 from '../components/VolumeUpFill0Wght400Grad0Opsz48'
import IconVolumeUpFill0Wght500Grad0Opsz48 from '../components/VolumeUpFill0Wght500Grad0Opsz48'
import IconVolumeUpFill0Wght600Grad0Opsz48 from '../components/VolumeUpFill0Wght600Grad0Opsz48'
import IconVolumeUpFill0Wght700Grad0Opsz48 from '../components/VolumeUpFill0Wght700Grad0Opsz48'
import IconVolumeUpFill1Wght100Grad0Opsz48 from '../components/VolumeUpFill1Wght100Grad0Opsz48'
import IconVolumeUpFill1Wght200Grad0Opsz48 from '../components/VolumeUpFill1Wght200Grad0Opsz48'
import IconVolumeUpFill1Wght300Grad0Opsz48 from '../components/VolumeUpFill1Wght300Grad0Opsz48'
import IconVolumeUpFill1Wght400Grad0Opsz48 from '../components/VolumeUpFill1Wght400Grad0Opsz48'
import IconVolumeUpFill1Wght500Grad0Opsz48 from '../components/VolumeUpFill1Wght500Grad0Opsz48'
import IconVolumeUpFill1Wght600Grad0Opsz48 from '../components/VolumeUpFill1Wght600Grad0Opsz48'
import IconVolumeUpFill1Wght700Grad0Opsz48 from '../components/VolumeUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolumeUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolumeUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolumeUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolumeUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolumeUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolumeUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolumeUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolumeUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolumeUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolumeUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolumeUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolumeUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolumeUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolumeUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolumeUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
