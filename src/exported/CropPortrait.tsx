import IconCropPortraitFill0Wght100Grad0Opsz48 from '../components/CropPortraitFill0Wght100Grad0Opsz48'
import IconCropPortraitFill0Wght200Grad0Opsz48 from '../components/CropPortraitFill0Wght200Grad0Opsz48'
import IconCropPortraitFill0Wght300Grad0Opsz48 from '../components/CropPortraitFill0Wght300Grad0Opsz48'
import IconCropPortraitFill0Wght400Grad0Opsz48 from '../components/CropPortraitFill0Wght400Grad0Opsz48'
import IconCropPortraitFill0Wght500Grad0Opsz48 from '../components/CropPortraitFill0Wght500Grad0Opsz48'
import IconCropPortraitFill0Wght600Grad0Opsz48 from '../components/CropPortraitFill0Wght600Grad0Opsz48'
import IconCropPortraitFill0Wght700Grad0Opsz48 from '../components/CropPortraitFill0Wght700Grad0Opsz48'
import IconCropPortraitFill1Wght100Grad0Opsz48 from '../components/CropPortraitFill1Wght100Grad0Opsz48'
import IconCropPortraitFill1Wght200Grad0Opsz48 from '../components/CropPortraitFill1Wght200Grad0Opsz48'
import IconCropPortraitFill1Wght300Grad0Opsz48 from '../components/CropPortraitFill1Wght300Grad0Opsz48'
import IconCropPortraitFill1Wght400Grad0Opsz48 from '../components/CropPortraitFill1Wght400Grad0Opsz48'
import IconCropPortraitFill1Wght500Grad0Opsz48 from '../components/CropPortraitFill1Wght500Grad0Opsz48'
import IconCropPortraitFill1Wght600Grad0Opsz48 from '../components/CropPortraitFill1Wght600Grad0Opsz48'
import IconCropPortraitFill1Wght700Grad0Opsz48 from '../components/CropPortraitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCropPortrait = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCropPortraitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCropPortraitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCropPortraitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCropPortraitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCropPortraitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCropPortraitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCropPortraitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCropPortraitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCropPortraitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCropPortraitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCropPortraitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCropPortraitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCropPortraitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCropPortraitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
