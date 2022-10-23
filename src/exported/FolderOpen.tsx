import IconFolderOpenFill0Wght100Grad0Opsz48 from '../components/FolderOpenFill0Wght100Grad0Opsz48'
import IconFolderOpenFill0Wght200Grad0Opsz48 from '../components/FolderOpenFill0Wght200Grad0Opsz48'
import IconFolderOpenFill0Wght300Grad0Opsz48 from '../components/FolderOpenFill0Wght300Grad0Opsz48'
import IconFolderOpenFill0Wght400Grad0Opsz48 from '../components/FolderOpenFill0Wght400Grad0Opsz48'
import IconFolderOpenFill0Wght500Grad0Opsz48 from '../components/FolderOpenFill0Wght500Grad0Opsz48'
import IconFolderOpenFill0Wght600Grad0Opsz48 from '../components/FolderOpenFill0Wght600Grad0Opsz48'
import IconFolderOpenFill0Wght700Grad0Opsz48 from '../components/FolderOpenFill0Wght700Grad0Opsz48'
import IconFolderOpenFill1Wght100Grad0Opsz48 from '../components/FolderOpenFill1Wght100Grad0Opsz48'
import IconFolderOpenFill1Wght200Grad0Opsz48 from '../components/FolderOpenFill1Wght200Grad0Opsz48'
import IconFolderOpenFill1Wght300Grad0Opsz48 from '../components/FolderOpenFill1Wght300Grad0Opsz48'
import IconFolderOpenFill1Wght400Grad0Opsz48 from '../components/FolderOpenFill1Wght400Grad0Opsz48'
import IconFolderOpenFill1Wght500Grad0Opsz48 from '../components/FolderOpenFill1Wght500Grad0Opsz48'
import IconFolderOpenFill1Wght600Grad0Opsz48 from '../components/FolderOpenFill1Wght600Grad0Opsz48'
import IconFolderOpenFill1Wght700Grad0Opsz48 from '../components/FolderOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
