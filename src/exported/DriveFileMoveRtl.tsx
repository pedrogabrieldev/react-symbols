import IconDriveFileMoveRtlFill0Wght100Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght100Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght200Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght200Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght300Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght300Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght400Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght400Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght500Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght500Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght600Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght600Grad0Opsz48'
import IconDriveFileMoveRtlFill0Wght700Grad0Opsz48 from '../components/DriveFileMoveRtlFill0Wght700Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght100Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght100Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght200Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght200Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght300Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght300Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght400Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght400Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght500Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght500Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght600Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght600Grad0Opsz48'
import IconDriveFileMoveRtlFill1Wght700Grad0Opsz48 from '../components/DriveFileMoveRtlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDriveFileMoveRtl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDriveFileMoveRtlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDriveFileMoveRtlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDriveFileMoveRtlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDriveFileMoveRtlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDriveFileMoveRtlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDriveFileMoveRtlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDriveFileMoveRtlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDriveFileMoveRtlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDriveFileMoveRtlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDriveFileMoveRtlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDriveFileMoveRtlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDriveFileMoveRtlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDriveFileMoveRtlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDriveFileMoveRtlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
