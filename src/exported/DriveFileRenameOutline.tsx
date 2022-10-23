import IconDriveFileRenameOutlineFill0Wght100Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght100Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght200Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght200Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght300Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght300Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght400Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght400Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght500Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght500Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght600Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght600Grad0Opsz48'
import IconDriveFileRenameOutlineFill0Wght700Grad0Opsz48 from '../components/DriveFileRenameOutlineFill0Wght700Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght100Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght100Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght200Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght200Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght300Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght300Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght400Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght400Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght500Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght500Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght600Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght600Grad0Opsz48'
import IconDriveFileRenameOutlineFill1Wght700Grad0Opsz48 from '../components/DriveFileRenameOutlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDriveFileRenameOutline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDriveFileRenameOutlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDriveFileRenameOutlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDriveFileRenameOutlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDriveFileRenameOutlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDriveFileRenameOutlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDriveFileRenameOutlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDriveFileRenameOutlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDriveFileRenameOutlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDriveFileRenameOutlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDriveFileRenameOutlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDriveFileRenameOutlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDriveFileRenameOutlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDriveFileRenameOutlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDriveFileRenameOutlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
