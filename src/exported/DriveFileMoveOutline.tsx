import IconDriveFileMoveOutlineFill0Wght100Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght100Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght200Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght200Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght300Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght300Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght400Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght400Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght500Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght500Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght600Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght600Grad0Opsz48'
import IconDriveFileMoveOutlineFill0Wght700Grad0Opsz48 from '../components/DriveFileMoveOutlineFill0Wght700Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght100Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght100Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght200Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght200Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght300Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght300Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght400Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght400Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght500Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght500Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght600Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght600Grad0Opsz48'
import IconDriveFileMoveOutlineFill1Wght700Grad0Opsz48 from '../components/DriveFileMoveOutlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDriveFileMoveOutline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDriveFileMoveOutlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDriveFileMoveOutlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDriveFileMoveOutlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDriveFileMoveOutlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDriveFileMoveOutlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDriveFileMoveOutlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDriveFileMoveOutlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDriveFileMoveOutlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDriveFileMoveOutlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDriveFileMoveOutlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDriveFileMoveOutlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDriveFileMoveOutlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDriveFileMoveOutlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDriveFileMoveOutlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
