import IconLibraryAddFill0Wght100Grad0Opsz48 from '../components/LibraryAddFill0Wght100Grad0Opsz48'
import IconLibraryAddFill0Wght200Grad0Opsz48 from '../components/LibraryAddFill0Wght200Grad0Opsz48'
import IconLibraryAddFill0Wght300Grad0Opsz48 from '../components/LibraryAddFill0Wght300Grad0Opsz48'
import IconLibraryAddFill0Wght400Grad0Opsz48 from '../components/LibraryAddFill0Wght400Grad0Opsz48'
import IconLibraryAddFill0Wght500Grad0Opsz48 from '../components/LibraryAddFill0Wght500Grad0Opsz48'
import IconLibraryAddFill0Wght600Grad0Opsz48 from '../components/LibraryAddFill0Wght600Grad0Opsz48'
import IconLibraryAddFill0Wght700Grad0Opsz48 from '../components/LibraryAddFill0Wght700Grad0Opsz48'
import IconLibraryAddFill1Wght100Grad0Opsz48 from '../components/LibraryAddFill1Wght100Grad0Opsz48'
import IconLibraryAddFill1Wght200Grad0Opsz48 from '../components/LibraryAddFill1Wght200Grad0Opsz48'
import IconLibraryAddFill1Wght300Grad0Opsz48 from '../components/LibraryAddFill1Wght300Grad0Opsz48'
import IconLibraryAddFill1Wght400Grad0Opsz48 from '../components/LibraryAddFill1Wght400Grad0Opsz48'
import IconLibraryAddFill1Wght500Grad0Opsz48 from '../components/LibraryAddFill1Wght500Grad0Opsz48'
import IconLibraryAddFill1Wght600Grad0Opsz48 from '../components/LibraryAddFill1Wght600Grad0Opsz48'
import IconLibraryAddFill1Wght700Grad0Opsz48 from '../components/LibraryAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLibraryAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLibraryAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLibraryAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLibraryAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLibraryAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLibraryAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLibraryAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLibraryAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLibraryAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLibraryAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLibraryAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLibraryAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLibraryAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLibraryAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLibraryAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
