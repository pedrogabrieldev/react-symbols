import IconPanoramaPhotosphereFill0Wght100Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght100Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght200Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght200Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght300Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght300Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght400Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght400Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght500Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght500Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght600Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght600Grad0Opsz48'
import IconPanoramaPhotosphereFill0Wght700Grad0Opsz48 from '../components/PanoramaPhotosphereFill0Wght700Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght100Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght100Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght200Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght200Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght300Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght300Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght400Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght400Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght500Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght500Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght600Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght600Grad0Opsz48'
import IconPanoramaPhotosphereFill1Wght700Grad0Opsz48 from '../components/PanoramaPhotosphereFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanoramaPhotosphere = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanoramaPhotosphereFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanoramaPhotosphereFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanoramaPhotosphereFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanoramaPhotosphereFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanoramaPhotosphereFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanoramaPhotosphereFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanoramaPhotosphereFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanoramaPhotosphereFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanoramaPhotosphereFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanoramaPhotosphereFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanoramaPhotosphereFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanoramaPhotosphereFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanoramaPhotosphereFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanoramaPhotosphereFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
