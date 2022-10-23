import IconBackupFill0Wght100Grad0Opsz48 from '../components/BackupFill0Wght100Grad0Opsz48'
import IconBackupFill0Wght200Grad0Opsz48 from '../components/BackupFill0Wght200Grad0Opsz48'
import IconBackupFill0Wght300Grad0Opsz48 from '../components/BackupFill0Wght300Grad0Opsz48'
import IconBackupFill0Wght400Grad0Opsz48 from '../components/BackupFill0Wght400Grad0Opsz48'
import IconBackupFill0Wght500Grad0Opsz48 from '../components/BackupFill0Wght500Grad0Opsz48'
import IconBackupFill0Wght600Grad0Opsz48 from '../components/BackupFill0Wght600Grad0Opsz48'
import IconBackupFill0Wght700Grad0Opsz48 from '../components/BackupFill0Wght700Grad0Opsz48'
import IconBackupFill1Wght100Grad0Opsz48 from '../components/BackupFill1Wght100Grad0Opsz48'
import IconBackupFill1Wght200Grad0Opsz48 from '../components/BackupFill1Wght200Grad0Opsz48'
import IconBackupFill1Wght300Grad0Opsz48 from '../components/BackupFill1Wght300Grad0Opsz48'
import IconBackupFill1Wght400Grad0Opsz48 from '../components/BackupFill1Wght400Grad0Opsz48'
import IconBackupFill1Wght500Grad0Opsz48 from '../components/BackupFill1Wght500Grad0Opsz48'
import IconBackupFill1Wght600Grad0Opsz48 from '../components/BackupFill1Wght600Grad0Opsz48'
import IconBackupFill1Wght700Grad0Opsz48 from '../components/BackupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
