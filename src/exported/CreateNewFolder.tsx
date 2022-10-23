import IconCreateNewFolderFill0Wght100Grad0Opsz48 from '../components/CreateNewFolderFill0Wght100Grad0Opsz48'
import IconCreateNewFolderFill0Wght200Grad0Opsz48 from '../components/CreateNewFolderFill0Wght200Grad0Opsz48'
import IconCreateNewFolderFill0Wght300Grad0Opsz48 from '../components/CreateNewFolderFill0Wght300Grad0Opsz48'
import IconCreateNewFolderFill0Wght400Grad0Opsz48 from '../components/CreateNewFolderFill0Wght400Grad0Opsz48'
import IconCreateNewFolderFill0Wght500Grad0Opsz48 from '../components/CreateNewFolderFill0Wght500Grad0Opsz48'
import IconCreateNewFolderFill0Wght600Grad0Opsz48 from '../components/CreateNewFolderFill0Wght600Grad0Opsz48'
import IconCreateNewFolderFill0Wght700Grad0Opsz48 from '../components/CreateNewFolderFill0Wght700Grad0Opsz48'
import IconCreateNewFolderFill1Wght100Grad0Opsz48 from '../components/CreateNewFolderFill1Wght100Grad0Opsz48'
import IconCreateNewFolderFill1Wght200Grad0Opsz48 from '../components/CreateNewFolderFill1Wght200Grad0Opsz48'
import IconCreateNewFolderFill1Wght300Grad0Opsz48 from '../components/CreateNewFolderFill1Wght300Grad0Opsz48'
import IconCreateNewFolderFill1Wght400Grad0Opsz48 from '../components/CreateNewFolderFill1Wght400Grad0Opsz48'
import IconCreateNewFolderFill1Wght500Grad0Opsz48 from '../components/CreateNewFolderFill1Wght500Grad0Opsz48'
import IconCreateNewFolderFill1Wght600Grad0Opsz48 from '../components/CreateNewFolderFill1Wght600Grad0Opsz48'
import IconCreateNewFolderFill1Wght700Grad0Opsz48 from '../components/CreateNewFolderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCreateNewFolder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCreateNewFolderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCreateNewFolderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCreateNewFolderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCreateNewFolderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCreateNewFolderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCreateNewFolderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCreateNewFolderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCreateNewFolderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCreateNewFolderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCreateNewFolderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCreateNewFolderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCreateNewFolderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCreateNewFolderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCreateNewFolderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
