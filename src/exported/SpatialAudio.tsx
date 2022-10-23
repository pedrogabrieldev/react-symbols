import IconSpatialAudioFill0Wght100Grad0Opsz48 from '../components/SpatialAudioFill0Wght100Grad0Opsz48'
import IconSpatialAudioFill0Wght200Grad0Opsz48 from '../components/SpatialAudioFill0Wght200Grad0Opsz48'
import IconSpatialAudioFill0Wght300Grad0Opsz48 from '../components/SpatialAudioFill0Wght300Grad0Opsz48'
import IconSpatialAudioFill0Wght400Grad0Opsz48 from '../components/SpatialAudioFill0Wght400Grad0Opsz48'
import IconSpatialAudioFill0Wght500Grad0Opsz48 from '../components/SpatialAudioFill0Wght500Grad0Opsz48'
import IconSpatialAudioFill0Wght600Grad0Opsz48 from '../components/SpatialAudioFill0Wght600Grad0Opsz48'
import IconSpatialAudioFill0Wght700Grad0Opsz48 from '../components/SpatialAudioFill0Wght700Grad0Opsz48'
import IconSpatialAudioFill1Wght100Grad0Opsz48 from '../components/SpatialAudioFill1Wght100Grad0Opsz48'
import IconSpatialAudioFill1Wght200Grad0Opsz48 from '../components/SpatialAudioFill1Wght200Grad0Opsz48'
import IconSpatialAudioFill1Wght300Grad0Opsz48 from '../components/SpatialAudioFill1Wght300Grad0Opsz48'
import IconSpatialAudioFill1Wght400Grad0Opsz48 from '../components/SpatialAudioFill1Wght400Grad0Opsz48'
import IconSpatialAudioFill1Wght500Grad0Opsz48 from '../components/SpatialAudioFill1Wght500Grad0Opsz48'
import IconSpatialAudioFill1Wght600Grad0Opsz48 from '../components/SpatialAudioFill1Wght600Grad0Opsz48'
import IconSpatialAudioFill1Wght700Grad0Opsz48 from '../components/SpatialAudioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpatialAudio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpatialAudioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpatialAudioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpatialAudioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpatialAudioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpatialAudioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpatialAudioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpatialAudioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpatialAudioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpatialAudioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpatialAudioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpatialAudioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpatialAudioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpatialAudioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpatialAudioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
