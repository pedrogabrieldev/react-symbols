import IconLibraryAddCheckFill0Wght100Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght100Grad0Opsz48'
import IconLibraryAddCheckFill0Wght200Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght200Grad0Opsz48'
import IconLibraryAddCheckFill0Wght300Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght300Grad0Opsz48'
import IconLibraryAddCheckFill0Wght400Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght400Grad0Opsz48'
import IconLibraryAddCheckFill0Wght500Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght500Grad0Opsz48'
import IconLibraryAddCheckFill0Wght600Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght600Grad0Opsz48'
import IconLibraryAddCheckFill0Wght700Grad0Opsz48 from '../components/LibraryAddCheckFill0Wght700Grad0Opsz48'
import IconLibraryAddCheckFill1Wght100Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght100Grad0Opsz48'
import IconLibraryAddCheckFill1Wght200Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght200Grad0Opsz48'
import IconLibraryAddCheckFill1Wght300Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght300Grad0Opsz48'
import IconLibraryAddCheckFill1Wght400Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght400Grad0Opsz48'
import IconLibraryAddCheckFill1Wght500Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght500Grad0Opsz48'
import IconLibraryAddCheckFill1Wght600Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght600Grad0Opsz48'
import IconLibraryAddCheckFill1Wght700Grad0Opsz48 from '../components/LibraryAddCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLibraryAddCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLibraryAddCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLibraryAddCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLibraryAddCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLibraryAddCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLibraryAddCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLibraryAddCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLibraryAddCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLibraryAddCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLibraryAddCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLibraryAddCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLibraryAddCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLibraryAddCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLibraryAddCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLibraryAddCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
