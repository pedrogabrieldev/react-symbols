import IconDriveFileMoveFill0Wght100Grad0Opsz48 from '../components/DriveFileMoveFill0Wght100Grad0Opsz48'
import IconDriveFileMoveFill0Wght200Grad0Opsz48 from '../components/DriveFileMoveFill0Wght200Grad0Opsz48'
import IconDriveFileMoveFill0Wght300Grad0Opsz48 from '../components/DriveFileMoveFill0Wght300Grad0Opsz48'
import IconDriveFileMoveFill0Wght400Grad0Opsz48 from '../components/DriveFileMoveFill0Wght400Grad0Opsz48'
import IconDriveFileMoveFill0Wght500Grad0Opsz48 from '../components/DriveFileMoveFill0Wght500Grad0Opsz48'
import IconDriveFileMoveFill0Wght600Grad0Opsz48 from '../components/DriveFileMoveFill0Wght600Grad0Opsz48'
import IconDriveFileMoveFill0Wght700Grad0Opsz48 from '../components/DriveFileMoveFill0Wght700Grad0Opsz48'
import IconDriveFileMoveFill1Wght100Grad0Opsz48 from '../components/DriveFileMoveFill1Wght100Grad0Opsz48'
import IconDriveFileMoveFill1Wght200Grad0Opsz48 from '../components/DriveFileMoveFill1Wght200Grad0Opsz48'
import IconDriveFileMoveFill1Wght300Grad0Opsz48 from '../components/DriveFileMoveFill1Wght300Grad0Opsz48'
import IconDriveFileMoveFill1Wght400Grad0Opsz48 from '../components/DriveFileMoveFill1Wght400Grad0Opsz48'
import IconDriveFileMoveFill1Wght500Grad0Opsz48 from '../components/DriveFileMoveFill1Wght500Grad0Opsz48'
import IconDriveFileMoveFill1Wght600Grad0Opsz48 from '../components/DriveFileMoveFill1Wght600Grad0Opsz48'
import IconDriveFileMoveFill1Wght700Grad0Opsz48 from '../components/DriveFileMoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDriveFileMove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDriveFileMoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDriveFileMoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDriveFileMoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDriveFileMoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDriveFileMoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDriveFileMoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDriveFileMoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDriveFileMoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDriveFileMoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDriveFileMoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDriveFileMoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDriveFileMoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDriveFileMoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDriveFileMoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
