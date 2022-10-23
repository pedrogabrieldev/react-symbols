import IconPanoramaWideAngleFill0Wght100Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght100Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght200Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght200Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght300Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght300Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght400Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght400Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght500Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght500Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght600Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght600Grad0Opsz48'
import IconPanoramaWideAngleFill0Wght700Grad0Opsz48 from '../components/PanoramaWideAngleFill0Wght700Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght100Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght100Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght200Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght200Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght300Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght300Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght400Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght400Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght500Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght500Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght600Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght600Grad0Opsz48'
import IconPanoramaWideAngleFill1Wght700Grad0Opsz48 from '../components/PanoramaWideAngleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPanoramaWideAngle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPanoramaWideAngleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPanoramaWideAngleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPanoramaWideAngleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPanoramaWideAngleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPanoramaWideAngleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPanoramaWideAngleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPanoramaWideAngleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPanoramaWideAngleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPanoramaWideAngleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPanoramaWideAngleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPanoramaWideAngleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPanoramaWideAngleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPanoramaWideAngleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPanoramaWideAngleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
