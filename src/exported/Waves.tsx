import IconWavesFill0Wght100Grad0Opsz48 from '../components/WavesFill0Wght100Grad0Opsz48'
import IconWavesFill0Wght200Grad0Opsz48 from '../components/WavesFill0Wght200Grad0Opsz48'
import IconWavesFill0Wght300Grad0Opsz48 from '../components/WavesFill0Wght300Grad0Opsz48'
import IconWavesFill0Wght400Grad0Opsz48 from '../components/WavesFill0Wght400Grad0Opsz48'
import IconWavesFill0Wght500Grad0Opsz48 from '../components/WavesFill0Wght500Grad0Opsz48'
import IconWavesFill0Wght600Grad0Opsz48 from '../components/WavesFill0Wght600Grad0Opsz48'
import IconWavesFill0Wght700Grad0Opsz48 from '../components/WavesFill0Wght700Grad0Opsz48'
import IconWavesFill1Wght100Grad0Opsz48 from '../components/WavesFill1Wght100Grad0Opsz48'
import IconWavesFill1Wght200Grad0Opsz48 from '../components/WavesFill1Wght200Grad0Opsz48'
import IconWavesFill1Wght300Grad0Opsz48 from '../components/WavesFill1Wght300Grad0Opsz48'
import IconWavesFill1Wght400Grad0Opsz48 from '../components/WavesFill1Wght400Grad0Opsz48'
import IconWavesFill1Wght500Grad0Opsz48 from '../components/WavesFill1Wght500Grad0Opsz48'
import IconWavesFill1Wght600Grad0Opsz48 from '../components/WavesFill1Wght600Grad0Opsz48'
import IconWavesFill1Wght700Grad0Opsz48 from '../components/WavesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWaves = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWavesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWavesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWavesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWavesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWavesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWavesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWavesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWavesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWavesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWavesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWavesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWavesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWavesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWavesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
