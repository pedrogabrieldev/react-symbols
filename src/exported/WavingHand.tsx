import IconWavingHandFill0Wght100Grad0Opsz48 from '../components/WavingHandFill0Wght100Grad0Opsz48'
import IconWavingHandFill0Wght200Grad0Opsz48 from '../components/WavingHandFill0Wght200Grad0Opsz48'
import IconWavingHandFill0Wght300Grad0Opsz48 from '../components/WavingHandFill0Wght300Grad0Opsz48'
import IconWavingHandFill0Wght400Grad0Opsz48 from '../components/WavingHandFill0Wght400Grad0Opsz48'
import IconWavingHandFill0Wght500Grad0Opsz48 from '../components/WavingHandFill0Wght500Grad0Opsz48'
import IconWavingHandFill0Wght600Grad0Opsz48 from '../components/WavingHandFill0Wght600Grad0Opsz48'
import IconWavingHandFill0Wght700Grad0Opsz48 from '../components/WavingHandFill0Wght700Grad0Opsz48'
import IconWavingHandFill1Wght100Grad0Opsz48 from '../components/WavingHandFill1Wght100Grad0Opsz48'
import IconWavingHandFill1Wght200Grad0Opsz48 from '../components/WavingHandFill1Wght200Grad0Opsz48'
import IconWavingHandFill1Wght300Grad0Opsz48 from '../components/WavingHandFill1Wght300Grad0Opsz48'
import IconWavingHandFill1Wght400Grad0Opsz48 from '../components/WavingHandFill1Wght400Grad0Opsz48'
import IconWavingHandFill1Wght500Grad0Opsz48 from '../components/WavingHandFill1Wght500Grad0Opsz48'
import IconWavingHandFill1Wght600Grad0Opsz48 from '../components/WavingHandFill1Wght600Grad0Opsz48'
import IconWavingHandFill1Wght700Grad0Opsz48 from '../components/WavingHandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWavingHand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWavingHandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWavingHandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWavingHandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWavingHandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWavingHandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWavingHandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWavingHandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWavingHandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWavingHandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWavingHandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWavingHandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWavingHandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWavingHandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWavingHandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
