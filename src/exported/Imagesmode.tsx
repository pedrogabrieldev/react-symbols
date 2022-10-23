import IconImagesmodeFill0Wght100Grad0Opsz48 from '../components/ImagesmodeFill0Wght100Grad0Opsz48'
import IconImagesmodeFill0Wght200Grad0Opsz48 from '../components/ImagesmodeFill0Wght200Grad0Opsz48'
import IconImagesmodeFill0Wght300Grad0Opsz48 from '../components/ImagesmodeFill0Wght300Grad0Opsz48'
import IconImagesmodeFill0Wght400Grad0Opsz48 from '../components/ImagesmodeFill0Wght400Grad0Opsz48'
import IconImagesmodeFill0Wght500Grad0Opsz48 from '../components/ImagesmodeFill0Wght500Grad0Opsz48'
import IconImagesmodeFill0Wght600Grad0Opsz48 from '../components/ImagesmodeFill0Wght600Grad0Opsz48'
import IconImagesmodeFill0Wght700Grad0Opsz48 from '../components/ImagesmodeFill0Wght700Grad0Opsz48'
import IconImagesmodeFill1Wght100Grad0Opsz48 from '../components/ImagesmodeFill1Wght100Grad0Opsz48'
import IconImagesmodeFill1Wght200Grad0Opsz48 from '../components/ImagesmodeFill1Wght200Grad0Opsz48'
import IconImagesmodeFill1Wght300Grad0Opsz48 from '../components/ImagesmodeFill1Wght300Grad0Opsz48'
import IconImagesmodeFill1Wght400Grad0Opsz48 from '../components/ImagesmodeFill1Wght400Grad0Opsz48'
import IconImagesmodeFill1Wght500Grad0Opsz48 from '../components/ImagesmodeFill1Wght500Grad0Opsz48'
import IconImagesmodeFill1Wght600Grad0Opsz48 from '../components/ImagesmodeFill1Wght600Grad0Opsz48'
import IconImagesmodeFill1Wght700Grad0Opsz48 from '../components/ImagesmodeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImagesmode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImagesmodeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImagesmodeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImagesmodeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImagesmodeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImagesmodeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImagesmodeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImagesmodeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImagesmodeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImagesmodeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImagesmodeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImagesmodeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImagesmodeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImagesmodeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImagesmodeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
