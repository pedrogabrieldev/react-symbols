import IconPanoramaFill0Wght100Grad0Opsz48 from '../components/PanoramaFill0Wght100Grad0Opsz48'
import IconPanoramaFill0Wght200Grad0Opsz48 from '../components/PanoramaFill0Wght200Grad0Opsz48'
import IconPanoramaFill0Wght300Grad0Opsz48 from '../components/PanoramaFill0Wght300Grad0Opsz48'
import IconPanoramaFill0Wght400Grad0Opsz48 from '../components/PanoramaFill0Wght400Grad0Opsz48'
import IconPanoramaFill0Wght500Grad0Opsz48 from '../components/PanoramaFill0Wght500Grad0Opsz48'
import IconPanoramaFill0Wght600Grad0Opsz48 from '../components/PanoramaFill0Wght600Grad0Opsz48'
import IconPanoramaFill0Wght700Grad0Opsz48 from '../components/PanoramaFill0Wght700Grad0Opsz48'
import IconPanoramaFill1Wght100Grad0Opsz48 from '../components/PanoramaFill1Wght100Grad0Opsz48'
import IconPanoramaFill1Wght200Grad0Opsz48 from '../components/PanoramaFill1Wght200Grad0Opsz48'
import IconPanoramaFill1Wght300Grad0Opsz48 from '../components/PanoramaFill1Wght300Grad0Opsz48'
import IconPanoramaFill1Wght400Grad0Opsz48 from '../components/PanoramaFill1Wght400Grad0Opsz48'
import IconPanoramaFill1Wght500Grad0Opsz48 from '../components/PanoramaFill1Wght500Grad0Opsz48'
import IconPanoramaFill1Wght600Grad0Opsz48 from '../components/PanoramaFill1Wght600Grad0Opsz48'
import IconPanoramaFill1Wght700Grad0Opsz48 from '../components/PanoramaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanorama = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanoramaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanoramaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanoramaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanoramaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanoramaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanoramaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanoramaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanoramaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanoramaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanoramaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanoramaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanoramaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanoramaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanoramaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
