import IconVolumeMuteFill0Wght100Grad0Opsz48 from '../components/VolumeMuteFill0Wght100Grad0Opsz48'
import IconVolumeMuteFill0Wght200Grad0Opsz48 from '../components/VolumeMuteFill0Wght200Grad0Opsz48'
import IconVolumeMuteFill0Wght300Grad0Opsz48 from '../components/VolumeMuteFill0Wght300Grad0Opsz48'
import IconVolumeMuteFill0Wght400Grad0Opsz48 from '../components/VolumeMuteFill0Wght400Grad0Opsz48'
import IconVolumeMuteFill0Wght500Grad0Opsz48 from '../components/VolumeMuteFill0Wght500Grad0Opsz48'
import IconVolumeMuteFill0Wght600Grad0Opsz48 from '../components/VolumeMuteFill0Wght600Grad0Opsz48'
import IconVolumeMuteFill0Wght700Grad0Opsz48 from '../components/VolumeMuteFill0Wght700Grad0Opsz48'
import IconVolumeMuteFill1Wght100Grad0Opsz48 from '../components/VolumeMuteFill1Wght100Grad0Opsz48'
import IconVolumeMuteFill1Wght200Grad0Opsz48 from '../components/VolumeMuteFill1Wght200Grad0Opsz48'
import IconVolumeMuteFill1Wght300Grad0Opsz48 from '../components/VolumeMuteFill1Wght300Grad0Opsz48'
import IconVolumeMuteFill1Wght400Grad0Opsz48 from '../components/VolumeMuteFill1Wght400Grad0Opsz48'
import IconVolumeMuteFill1Wght500Grad0Opsz48 from '../components/VolumeMuteFill1Wght500Grad0Opsz48'
import IconVolumeMuteFill1Wght600Grad0Opsz48 from '../components/VolumeMuteFill1Wght600Grad0Opsz48'
import IconVolumeMuteFill1Wght700Grad0Opsz48 from '../components/VolumeMuteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVolumeMute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVolumeMuteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVolumeMuteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVolumeMuteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVolumeMuteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVolumeMuteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVolumeMuteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVolumeMuteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVolumeMuteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVolumeMuteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVolumeMuteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVolumeMuteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVolumeMuteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVolumeMuteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVolumeMuteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
