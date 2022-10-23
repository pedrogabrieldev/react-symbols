import IconLibraryBooksFill0Wght100Grad0Opsz48 from '../components/LibraryBooksFill0Wght100Grad0Opsz48'
import IconLibraryBooksFill0Wght200Grad0Opsz48 from '../components/LibraryBooksFill0Wght200Grad0Opsz48'
import IconLibraryBooksFill0Wght300Grad0Opsz48 from '../components/LibraryBooksFill0Wght300Grad0Opsz48'
import IconLibraryBooksFill0Wght400Grad0Opsz48 from '../components/LibraryBooksFill0Wght400Grad0Opsz48'
import IconLibraryBooksFill0Wght500Grad0Opsz48 from '../components/LibraryBooksFill0Wght500Grad0Opsz48'
import IconLibraryBooksFill0Wght600Grad0Opsz48 from '../components/LibraryBooksFill0Wght600Grad0Opsz48'
import IconLibraryBooksFill0Wght700Grad0Opsz48 from '../components/LibraryBooksFill0Wght700Grad0Opsz48'
import IconLibraryBooksFill1Wght100Grad0Opsz48 from '../components/LibraryBooksFill1Wght100Grad0Opsz48'
import IconLibraryBooksFill1Wght200Grad0Opsz48 from '../components/LibraryBooksFill1Wght200Grad0Opsz48'
import IconLibraryBooksFill1Wght300Grad0Opsz48 from '../components/LibraryBooksFill1Wght300Grad0Opsz48'
import IconLibraryBooksFill1Wght400Grad0Opsz48 from '../components/LibraryBooksFill1Wght400Grad0Opsz48'
import IconLibraryBooksFill1Wght500Grad0Opsz48 from '../components/LibraryBooksFill1Wght500Grad0Opsz48'
import IconLibraryBooksFill1Wght600Grad0Opsz48 from '../components/LibraryBooksFill1Wght600Grad0Opsz48'
import IconLibraryBooksFill1Wght700Grad0Opsz48 from '../components/LibraryBooksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLibraryBooks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLibraryBooksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLibraryBooksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLibraryBooksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLibraryBooksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLibraryBooksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLibraryBooksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLibraryBooksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLibraryBooksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLibraryBooksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLibraryBooksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLibraryBooksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLibraryBooksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLibraryBooksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLibraryBooksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
