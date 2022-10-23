import IconFolderSpecialFill0Wght100Grad0Opsz48 from '../components/FolderSpecialFill0Wght100Grad0Opsz48'
import IconFolderSpecialFill0Wght200Grad0Opsz48 from '../components/FolderSpecialFill0Wght200Grad0Opsz48'
import IconFolderSpecialFill0Wght300Grad0Opsz48 from '../components/FolderSpecialFill0Wght300Grad0Opsz48'
import IconFolderSpecialFill0Wght400Grad0Opsz48 from '../components/FolderSpecialFill0Wght400Grad0Opsz48'
import IconFolderSpecialFill0Wght500Grad0Opsz48 from '../components/FolderSpecialFill0Wght500Grad0Opsz48'
import IconFolderSpecialFill0Wght600Grad0Opsz48 from '../components/FolderSpecialFill0Wght600Grad0Opsz48'
import IconFolderSpecialFill0Wght700Grad0Opsz48 from '../components/FolderSpecialFill0Wght700Grad0Opsz48'
import IconFolderSpecialFill1Wght100Grad0Opsz48 from '../components/FolderSpecialFill1Wght100Grad0Opsz48'
import IconFolderSpecialFill1Wght200Grad0Opsz48 from '../components/FolderSpecialFill1Wght200Grad0Opsz48'
import IconFolderSpecialFill1Wght300Grad0Opsz48 from '../components/FolderSpecialFill1Wght300Grad0Opsz48'
import IconFolderSpecialFill1Wght400Grad0Opsz48 from '../components/FolderSpecialFill1Wght400Grad0Opsz48'
import IconFolderSpecialFill1Wght500Grad0Opsz48 from '../components/FolderSpecialFill1Wght500Grad0Opsz48'
import IconFolderSpecialFill1Wght600Grad0Opsz48 from '../components/FolderSpecialFill1Wght600Grad0Opsz48'
import IconFolderSpecialFill1Wght700Grad0Opsz48 from '../components/FolderSpecialFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderSpecial = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderSpecialFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderSpecialFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderSpecialFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderSpecialFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderSpecialFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderSpecialFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderSpecialFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderSpecialFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderSpecialFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderSpecialFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderSpecialFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderSpecialFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderSpecialFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderSpecialFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
