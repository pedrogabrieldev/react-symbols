import IconPanoramaVerticalFill0Wght100Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght100Grad0Opsz48'
import IconPanoramaVerticalFill0Wght200Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght200Grad0Opsz48'
import IconPanoramaVerticalFill0Wght300Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght300Grad0Opsz48'
import IconPanoramaVerticalFill0Wght400Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght400Grad0Opsz48'
import IconPanoramaVerticalFill0Wght500Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght500Grad0Opsz48'
import IconPanoramaVerticalFill0Wght600Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght600Grad0Opsz48'
import IconPanoramaVerticalFill0Wght700Grad0Opsz48 from '../components/PanoramaVerticalFill0Wght700Grad0Opsz48'
import IconPanoramaVerticalFill1Wght100Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght100Grad0Opsz48'
import IconPanoramaVerticalFill1Wght200Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght200Grad0Opsz48'
import IconPanoramaVerticalFill1Wght300Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght300Grad0Opsz48'
import IconPanoramaVerticalFill1Wght400Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght400Grad0Opsz48'
import IconPanoramaVerticalFill1Wght500Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght500Grad0Opsz48'
import IconPanoramaVerticalFill1Wght600Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght600Grad0Opsz48'
import IconPanoramaVerticalFill1Wght700Grad0Opsz48 from '../components/PanoramaVerticalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanoramaVertical = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanoramaVerticalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanoramaVerticalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanoramaVerticalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanoramaVerticalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanoramaVerticalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanoramaVerticalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanoramaVerticalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanoramaVerticalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanoramaVerticalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanoramaVerticalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanoramaVerticalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanoramaVerticalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanoramaVerticalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanoramaVerticalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
