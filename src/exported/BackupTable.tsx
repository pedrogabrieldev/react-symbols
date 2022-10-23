import IconBackupTableFill0Wght100Grad0Opsz48 from '../components/BackupTableFill0Wght100Grad0Opsz48'
import IconBackupTableFill0Wght200Grad0Opsz48 from '../components/BackupTableFill0Wght200Grad0Opsz48'
import IconBackupTableFill0Wght300Grad0Opsz48 from '../components/BackupTableFill0Wght300Grad0Opsz48'
import IconBackupTableFill0Wght400Grad0Opsz48 from '../components/BackupTableFill0Wght400Grad0Opsz48'
import IconBackupTableFill0Wght500Grad0Opsz48 from '../components/BackupTableFill0Wght500Grad0Opsz48'
import IconBackupTableFill0Wght600Grad0Opsz48 from '../components/BackupTableFill0Wght600Grad0Opsz48'
import IconBackupTableFill0Wght700Grad0Opsz48 from '../components/BackupTableFill0Wght700Grad0Opsz48'
import IconBackupTableFill1Wght100Grad0Opsz48 from '../components/BackupTableFill1Wght100Grad0Opsz48'
import IconBackupTableFill1Wght200Grad0Opsz48 from '../components/BackupTableFill1Wght200Grad0Opsz48'
import IconBackupTableFill1Wght300Grad0Opsz48 from '../components/BackupTableFill1Wght300Grad0Opsz48'
import IconBackupTableFill1Wght400Grad0Opsz48 from '../components/BackupTableFill1Wght400Grad0Opsz48'
import IconBackupTableFill1Wght500Grad0Opsz48 from '../components/BackupTableFill1Wght500Grad0Opsz48'
import IconBackupTableFill1Wght600Grad0Opsz48 from '../components/BackupTableFill1Wght600Grad0Opsz48'
import IconBackupTableFill1Wght700Grad0Opsz48 from '../components/BackupTableFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackupTable = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackupTableFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackupTableFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackupTableFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackupTableFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackupTableFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackupTableFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackupTableFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackupTableFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackupTableFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackupTableFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackupTableFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackupTableFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackupTableFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackupTableFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
