import IconLocalLibraryFill0Wght100Grad0Opsz48 from '../components/LocalLibraryFill0Wght100Grad0Opsz48'
import IconLocalLibraryFill0Wght200Grad0Opsz48 from '../components/LocalLibraryFill0Wght200Grad0Opsz48'
import IconLocalLibraryFill0Wght300Grad0Opsz48 from '../components/LocalLibraryFill0Wght300Grad0Opsz48'
import IconLocalLibraryFill0Wght400Grad0Opsz48 from '../components/LocalLibraryFill0Wght400Grad0Opsz48'
import IconLocalLibraryFill0Wght500Grad0Opsz48 from '../components/LocalLibraryFill0Wght500Grad0Opsz48'
import IconLocalLibraryFill0Wght600Grad0Opsz48 from '../components/LocalLibraryFill0Wght600Grad0Opsz48'
import IconLocalLibraryFill0Wght700Grad0Opsz48 from '../components/LocalLibraryFill0Wght700Grad0Opsz48'
import IconLocalLibraryFill1Wght100Grad0Opsz48 from '../components/LocalLibraryFill1Wght100Grad0Opsz48'
import IconLocalLibraryFill1Wght200Grad0Opsz48 from '../components/LocalLibraryFill1Wght200Grad0Opsz48'
import IconLocalLibraryFill1Wght300Grad0Opsz48 from '../components/LocalLibraryFill1Wght300Grad0Opsz48'
import IconLocalLibraryFill1Wght400Grad0Opsz48 from '../components/LocalLibraryFill1Wght400Grad0Opsz48'
import IconLocalLibraryFill1Wght500Grad0Opsz48 from '../components/LocalLibraryFill1Wght500Grad0Opsz48'
import IconLocalLibraryFill1Wght600Grad0Opsz48 from '../components/LocalLibraryFill1Wght600Grad0Opsz48'
import IconLocalLibraryFill1Wght700Grad0Opsz48 from '../components/LocalLibraryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalLibrary = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalLibraryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalLibraryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalLibraryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalLibraryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalLibraryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalLibraryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalLibraryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalLibraryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalLibraryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalLibraryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalLibraryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalLibraryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalLibraryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalLibraryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
