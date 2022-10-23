import IconPanoramaHorizontalFill0Wght100Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght100Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght200Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght200Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght300Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght300Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght400Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght400Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght500Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght500Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght600Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght600Grad0Opsz48'
import IconPanoramaHorizontalFill0Wght700Grad0Opsz48 from '../components/PanoramaHorizontalFill0Wght700Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght100Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght100Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght200Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght200Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght300Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght300Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght400Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght400Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght500Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght500Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght600Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght600Grad0Opsz48'
import IconPanoramaHorizontalFill1Wght700Grad0Opsz48 from '../components/PanoramaHorizontalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanoramaHorizontal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanoramaHorizontalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanoramaHorizontalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanoramaHorizontalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanoramaHorizontalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanoramaHorizontalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanoramaHorizontalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanoramaHorizontalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanoramaHorizontalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanoramaHorizontalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanoramaHorizontalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanoramaHorizontalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanoramaHorizontalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanoramaHorizontalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanoramaHorizontalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
