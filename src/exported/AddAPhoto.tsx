import IconAddAPhotoFill0Wght100Grad0Opsz48 from '../components/AddAPhotoFill0Wght100Grad0Opsz48'
import IconAddAPhotoFill0Wght200Grad0Opsz48 from '../components/AddAPhotoFill0Wght200Grad0Opsz48'
import IconAddAPhotoFill0Wght300Grad0Opsz48 from '../components/AddAPhotoFill0Wght300Grad0Opsz48'
import IconAddAPhotoFill0Wght400Grad0Opsz48 from '../components/AddAPhotoFill0Wght400Grad0Opsz48'
import IconAddAPhotoFill0Wght500Grad0Opsz48 from '../components/AddAPhotoFill0Wght500Grad0Opsz48'
import IconAddAPhotoFill0Wght600Grad0Opsz48 from '../components/AddAPhotoFill0Wght600Grad0Opsz48'
import IconAddAPhotoFill0Wght700Grad0Opsz48 from '../components/AddAPhotoFill0Wght700Grad0Opsz48'
import IconAddAPhotoFill1Wght100Grad0Opsz48 from '../components/AddAPhotoFill1Wght100Grad0Opsz48'
import IconAddAPhotoFill1Wght200Grad0Opsz48 from '../components/AddAPhotoFill1Wght200Grad0Opsz48'
import IconAddAPhotoFill1Wght300Grad0Opsz48 from '../components/AddAPhotoFill1Wght300Grad0Opsz48'
import IconAddAPhotoFill1Wght400Grad0Opsz48 from '../components/AddAPhotoFill1Wght400Grad0Opsz48'
import IconAddAPhotoFill1Wght500Grad0Opsz48 from '../components/AddAPhotoFill1Wght500Grad0Opsz48'
import IconAddAPhotoFill1Wght600Grad0Opsz48 from '../components/AddAPhotoFill1Wght600Grad0Opsz48'
import IconAddAPhotoFill1Wght700Grad0Opsz48 from '../components/AddAPhotoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddAPhoto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddAPhotoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddAPhotoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddAPhotoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddAPhotoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddAPhotoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddAPhotoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddAPhotoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddAPhotoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddAPhotoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddAPhotoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddAPhotoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddAPhotoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddAPhotoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddAPhotoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
