import IconFolderOffFill0Wght100Grad0Opsz48 from '../components/FolderOffFill0Wght100Grad0Opsz48'
import IconFolderOffFill0Wght200Grad0Opsz48 from '../components/FolderOffFill0Wght200Grad0Opsz48'
import IconFolderOffFill0Wght300Grad0Opsz48 from '../components/FolderOffFill0Wght300Grad0Opsz48'
import IconFolderOffFill0Wght400Grad0Opsz48 from '../components/FolderOffFill0Wght400Grad0Opsz48'
import IconFolderOffFill0Wght500Grad0Opsz48 from '../components/FolderOffFill0Wght500Grad0Opsz48'
import IconFolderOffFill0Wght600Grad0Opsz48 from '../components/FolderOffFill0Wght600Grad0Opsz48'
import IconFolderOffFill0Wght700Grad0Opsz48 from '../components/FolderOffFill0Wght700Grad0Opsz48'
import IconFolderOffFill1Wght100Grad0Opsz48 from '../components/FolderOffFill1Wght100Grad0Opsz48'
import IconFolderOffFill1Wght200Grad0Opsz48 from '../components/FolderOffFill1Wght200Grad0Opsz48'
import IconFolderOffFill1Wght300Grad0Opsz48 from '../components/FolderOffFill1Wght300Grad0Opsz48'
import IconFolderOffFill1Wght400Grad0Opsz48 from '../components/FolderOffFill1Wght400Grad0Opsz48'
import IconFolderOffFill1Wght500Grad0Opsz48 from '../components/FolderOffFill1Wght500Grad0Opsz48'
import IconFolderOffFill1Wght600Grad0Opsz48 from '../components/FolderOffFill1Wght600Grad0Opsz48'
import IconFolderOffFill1Wght700Grad0Opsz48 from '../components/FolderOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
