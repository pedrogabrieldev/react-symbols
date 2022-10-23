import IconSpatialAudioOffFill0Wght100Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght100Grad0Opsz48'
import IconSpatialAudioOffFill0Wght200Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght200Grad0Opsz48'
import IconSpatialAudioOffFill0Wght300Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght300Grad0Opsz48'
import IconSpatialAudioOffFill0Wght400Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght400Grad0Opsz48'
import IconSpatialAudioOffFill0Wght500Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght500Grad0Opsz48'
import IconSpatialAudioOffFill0Wght600Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght600Grad0Opsz48'
import IconSpatialAudioOffFill0Wght700Grad0Opsz48 from '../components/SpatialAudioOffFill0Wght700Grad0Opsz48'
import IconSpatialAudioOffFill1Wght100Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght100Grad0Opsz48'
import IconSpatialAudioOffFill1Wght200Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght200Grad0Opsz48'
import IconSpatialAudioOffFill1Wght300Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght300Grad0Opsz48'
import IconSpatialAudioOffFill1Wght400Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght400Grad0Opsz48'
import IconSpatialAudioOffFill1Wght500Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght500Grad0Opsz48'
import IconSpatialAudioOffFill1Wght600Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght600Grad0Opsz48'
import IconSpatialAudioOffFill1Wght700Grad0Opsz48 from '../components/SpatialAudioOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpatialAudioOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpatialAudioOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpatialAudioOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpatialAudioOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpatialAudioOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpatialAudioOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpatialAudioOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpatialAudioOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpatialAudioOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpatialAudioOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpatialAudioOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpatialAudioOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpatialAudioOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpatialAudioOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpatialAudioOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
