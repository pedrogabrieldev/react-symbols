import IconCropLandscapeFill0Wght100Grad0Opsz48 from '../components/CropLandscapeFill0Wght100Grad0Opsz48'
import IconCropLandscapeFill0Wght200Grad0Opsz48 from '../components/CropLandscapeFill0Wght200Grad0Opsz48'
import IconCropLandscapeFill0Wght300Grad0Opsz48 from '../components/CropLandscapeFill0Wght300Grad0Opsz48'
import IconCropLandscapeFill0Wght400Grad0Opsz48 from '../components/CropLandscapeFill0Wght400Grad0Opsz48'
import IconCropLandscapeFill0Wght500Grad0Opsz48 from '../components/CropLandscapeFill0Wght500Grad0Opsz48'
import IconCropLandscapeFill0Wght600Grad0Opsz48 from '../components/CropLandscapeFill0Wght600Grad0Opsz48'
import IconCropLandscapeFill0Wght700Grad0Opsz48 from '../components/CropLandscapeFill0Wght700Grad0Opsz48'
import IconCropLandscapeFill1Wght100Grad0Opsz48 from '../components/CropLandscapeFill1Wght100Grad0Opsz48'
import IconCropLandscapeFill1Wght200Grad0Opsz48 from '../components/CropLandscapeFill1Wght200Grad0Opsz48'
import IconCropLandscapeFill1Wght300Grad0Opsz48 from '../components/CropLandscapeFill1Wght300Grad0Opsz48'
import IconCropLandscapeFill1Wght400Grad0Opsz48 from '../components/CropLandscapeFill1Wght400Grad0Opsz48'
import IconCropLandscapeFill1Wght500Grad0Opsz48 from '../components/CropLandscapeFill1Wght500Grad0Opsz48'
import IconCropLandscapeFill1Wght600Grad0Opsz48 from '../components/CropLandscapeFill1Wght600Grad0Opsz48'
import IconCropLandscapeFill1Wght700Grad0Opsz48 from '../components/CropLandscapeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCropLandscape = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropLandscapeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropLandscapeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropLandscapeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropLandscapeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropLandscapeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropLandscapeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropLandscapeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropLandscapeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropLandscapeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropLandscapeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropLandscapeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropLandscapeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropLandscapeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropLandscapeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
