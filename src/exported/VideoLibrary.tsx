import IconVideoLibraryFill0Wght100Grad0Opsz48 from '../components/VideoLibraryFill0Wght100Grad0Opsz48'
import IconVideoLibraryFill0Wght200Grad0Opsz48 from '../components/VideoLibraryFill0Wght200Grad0Opsz48'
import IconVideoLibraryFill0Wght300Grad0Opsz48 from '../components/VideoLibraryFill0Wght300Grad0Opsz48'
import IconVideoLibraryFill0Wght400Grad0Opsz48 from '../components/VideoLibraryFill0Wght400Grad0Opsz48'
import IconVideoLibraryFill0Wght500Grad0Opsz48 from '../components/VideoLibraryFill0Wght500Grad0Opsz48'
import IconVideoLibraryFill0Wght600Grad0Opsz48 from '../components/VideoLibraryFill0Wght600Grad0Opsz48'
import IconVideoLibraryFill0Wght700Grad0Opsz48 from '../components/VideoLibraryFill0Wght700Grad0Opsz48'
import IconVideoLibraryFill1Wght100Grad0Opsz48 from '../components/VideoLibraryFill1Wght100Grad0Opsz48'
import IconVideoLibraryFill1Wght200Grad0Opsz48 from '../components/VideoLibraryFill1Wght200Grad0Opsz48'
import IconVideoLibraryFill1Wght300Grad0Opsz48 from '../components/VideoLibraryFill1Wght300Grad0Opsz48'
import IconVideoLibraryFill1Wght400Grad0Opsz48 from '../components/VideoLibraryFill1Wght400Grad0Opsz48'
import IconVideoLibraryFill1Wght500Grad0Opsz48 from '../components/VideoLibraryFill1Wght500Grad0Opsz48'
import IconVideoLibraryFill1Wght600Grad0Opsz48 from '../components/VideoLibraryFill1Wght600Grad0Opsz48'
import IconVideoLibraryFill1Wght700Grad0Opsz48 from '../components/VideoLibraryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoLibrary = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoLibraryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoLibraryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoLibraryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoLibraryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoLibraryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoLibraryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoLibraryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoLibraryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoLibraryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoLibraryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoLibraryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoLibraryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoLibraryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoLibraryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
