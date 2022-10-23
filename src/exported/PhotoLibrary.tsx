import IconPhotoLibraryFill0Wght100Grad0Opsz48 from '../components/PhotoLibraryFill0Wght100Grad0Opsz48'
import IconPhotoLibraryFill0Wght200Grad0Opsz48 from '../components/PhotoLibraryFill0Wght200Grad0Opsz48'
import IconPhotoLibraryFill0Wght300Grad0Opsz48 from '../components/PhotoLibraryFill0Wght300Grad0Opsz48'
import IconPhotoLibraryFill0Wght400Grad0Opsz48 from '../components/PhotoLibraryFill0Wght400Grad0Opsz48'
import IconPhotoLibraryFill0Wght500Grad0Opsz48 from '../components/PhotoLibraryFill0Wght500Grad0Opsz48'
import IconPhotoLibraryFill0Wght600Grad0Opsz48 from '../components/PhotoLibraryFill0Wght600Grad0Opsz48'
import IconPhotoLibraryFill0Wght700Grad0Opsz48 from '../components/PhotoLibraryFill0Wght700Grad0Opsz48'
import IconPhotoLibraryFill1Wght100Grad0Opsz48 from '../components/PhotoLibraryFill1Wght100Grad0Opsz48'
import IconPhotoLibraryFill1Wght200Grad0Opsz48 from '../components/PhotoLibraryFill1Wght200Grad0Opsz48'
import IconPhotoLibraryFill1Wght300Grad0Opsz48 from '../components/PhotoLibraryFill1Wght300Grad0Opsz48'
import IconPhotoLibraryFill1Wght400Grad0Opsz48 from '../components/PhotoLibraryFill1Wght400Grad0Opsz48'
import IconPhotoLibraryFill1Wght500Grad0Opsz48 from '../components/PhotoLibraryFill1Wght500Grad0Opsz48'
import IconPhotoLibraryFill1Wght600Grad0Opsz48 from '../components/PhotoLibraryFill1Wght600Grad0Opsz48'
import IconPhotoLibraryFill1Wght700Grad0Opsz48 from '../components/PhotoLibraryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoLibrary = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoLibraryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoLibraryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoLibraryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoLibraryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoLibraryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoLibraryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoLibraryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoLibraryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoLibraryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoLibraryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoLibraryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoLibraryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoLibraryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoLibraryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
