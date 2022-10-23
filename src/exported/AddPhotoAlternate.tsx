import IconAddPhotoAlternateFill0Wght100Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght100Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght200Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght200Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght300Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght300Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght400Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght400Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght500Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght500Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght600Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght600Grad0Opsz48'
import IconAddPhotoAlternateFill0Wght700Grad0Opsz48 from '../components/AddPhotoAlternateFill0Wght700Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght100Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght100Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght200Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght200Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght300Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght300Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght400Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght400Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght500Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght500Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght600Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght600Grad0Opsz48'
import IconAddPhotoAlternateFill1Wght700Grad0Opsz48 from '../components/AddPhotoAlternateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddPhotoAlternate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddPhotoAlternateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddPhotoAlternateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddPhotoAlternateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddPhotoAlternateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddPhotoAlternateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddPhotoAlternateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddPhotoAlternateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddPhotoAlternateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddPhotoAlternateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddPhotoAlternateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddPhotoAlternateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddPhotoAlternateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddPhotoAlternateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddPhotoAlternateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
